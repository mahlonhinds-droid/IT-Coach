/* Subject-aware teacher intervention workflow 1.1 */
function ITCoachCreateTeacherIntervention(studentId,topicNo,skill,note,subjectId,courseId,curriculumId){
 const c=ITCoachInterventionContext(subjectId,courseId,curriculumId),alerts=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]");
 const existing=alerts.find(x=>String(x.studentId)===String(studentId)&&(x.subjectId||"IT")===c.subjectId&&(!c.courseId||!x.courseId||x.courseId===c.courseId)&&Number(x.topicNo)===Number(topicNo)&&x.skill===skill&&x.status==="open");
 if(existing)return existing;
 const a={id:"ti-"+Date.now(),studentId,subjectId:c.subjectId,courseId:c.courseId,curriculumId:c.curriculumId,topicNo,skill,status:"open",note:note||"",createdAt:new Date().toISOString(),actions:[]};
 alerts.push(a);localStorage.setItem("itcoachTeacherInterventions",JSON.stringify(alerts));return a;
}
function ITCoachTeacherInterventions(status,subjectId,courseId){
 return JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]").filter(x=>(!status||x.status===status)&&(!subjectId||(x.subjectId||"IT")===subjectId)&&(!courseId||!x.courseId||x.courseId===courseId));
}
function ITCoachAddTeacherInterventionAction(id,action,note){
 const rows=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]"),x=rows.find(a=>a.id===id);
 if(!x)return null;x.actions.push({action,note:note||"",at:new Date().toISOString()});localStorage.setItem("itcoachTeacherInterventions",JSON.stringify(rows));return x;
}
function ITCoachResolveTeacherIntervention(id,note){
 const rows=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]"),x=rows.find(a=>a.id===id);
 if(!x)return null;x.status="resolved";x.resolvedAt=new Date().toISOString();x.resolutionNote=note||"";localStorage.setItem("itcoachTeacherInterventions",JSON.stringify(rows));return x;
}
function ITCoachSyncTeacherAlerts(studentIds,subjectId,courseId,curriculumId){
 const out=[];(studentIds||[]).forEach(studentId=>{
  const ev=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]").filter(x=>String(x.studentId)===String(studentId)&&(x.subjectId||"IT")===(subjectId||"IT")&&(!courseId||!x.courseId||x.courseId===courseId));
  const keys=[...new Map(ev.map(x=>[String(x.topicNo)+"|"+x.skill,{topicNo:Number(x.topicNo),skill:x.skill}])).values()];
  keys.forEach(k=>{
   const a=ITCoachTeacherInterventionAlert(studentId,k.topicNo,k.skill,subjectId,courseId,curriculumId);if(!a.alert)return;
   const rows=ITCoachTeacherInterventions(),prior=rows.filter(x=>String(x.studentId)===String(studentId)&&(x.subjectId||"IT")===a.subjectId&&(!a.courseId||!x.courseId||x.courseId===a.courseId)&&Number(x.topicNo)===Number(k.topicNo)&&x.skill===k.skill&&x.status==="resolved").sort((x,y)=>new Date(y.resolvedAt||0)-new Date(x.resolvedAt||0))[0];
   const evidence=ITCoachSkillFailureHistory(studentId,k.topicNo,k.skill,a.subjectId,a.courseId).sort((x,y)=>ITCoachEvidenceTime(y)-ITCoachEvidenceTime(x)),latestFailure=evidence[0],resolvedAt=prior?new Date(prior.resolvedAt||0).getTime():0,latestAt=latestFailure?ITCoachEvidenceTime(latestFailure):0;
   if(prior&&latestAt<=resolvedAt)return;
   out.push(ITCoachCreateTeacherIntervention(studentId,k.topicNo,k.skill,a.message,a.subjectId,a.courseId,a.curriculumId));
  });
 });return out;
}