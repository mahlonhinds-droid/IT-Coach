/* Teacher intervention workflow 1.0 */
function ITCoachCreateTeacherIntervention(studentId,topicNo,skill,note){
 const alerts=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]");
 const existing=alerts.find(x=>String(x.studentId)===String(studentId)&&Number(x.topicNo)===Number(topicNo)&&x.skill===skill&&x.status==="open");
 if(existing)return existing;
 const a={id:"ti-"+Date.now(),studentId,topicNo,skill,status:"open",note:note||"",createdAt:new Date().toISOString(),actions:[]};
 alerts.push(a);localStorage.setItem("itcoachTeacherInterventions",JSON.stringify(alerts));return a;
}
function ITCoachTeacherInterventions(status){
 return JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]").filter(x=>!status||x.status===status);
}
function ITCoachAddTeacherInterventionAction(id,action,note){
 const rows=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]"),x=rows.find(a=>a.id===id);
 if(!x)return null;x.actions.push({action,note:note||"",at:new Date().toISOString()});localStorage.setItem("itcoachTeacherInterventions",JSON.stringify(rows));return x;
}
function ITCoachResolveTeacherIntervention(id,note){
 const rows=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]"),x=rows.find(a=>a.id===id);
 if(!x)return null;x.status="resolved";x.resolvedAt=new Date().toISOString();x.resolutionNote=note||"";localStorage.setItem("itcoachTeacherInterventions",JSON.stringify(rows));return x;
}
function ITCoachSyncTeacherAlerts(studentIds){
 const out=[];(studentIds||[]).forEach(studentId=>{
  const ev=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]").filter(x=>String(x.studentId)===String(studentId));
  const keys=[...new Map(ev.map(x=>[String(x.topicNo)+"|"+x.skill,{topicNo:Number(x.topicNo),skill:x.skill}])).values()];
  keys.forEach(k=>{
   const a=ITCoachTeacherInterventionAlert(studentId,k.topicNo,k.skill);
   if(!a.alert)return;
   const rows=ITCoachTeacherInterventions();
   const prior=rows.filter(x=>String(x.studentId)===String(studentId)&&Number(x.topicNo)===Number(k.topicNo)&&x.skill===k.skill&&x.status==="resolved").sort((x,y)=>new Date(y.resolvedAt||0)-new Date(x.resolvedAt||0))[0];
   const evidence=ITCoachUniversalEvidence(studentId,k.topicNo).filter(x=>x.skill===k.skill&&Number(x.score)<70).sort((x,y)=>new Date(y.timestamp||y.at||0)-new Date(x.timestamp||x.at||0));
   const latestFailure=evidence[0], resolvedAt=prior?new Date(prior.resolvedAt||0).getTime():0, latestAt=latestFailure?new Date(latestFailure.timestamp||latestFailure.at||0).getTime():0;
   if(prior&&latestAt<=resolvedAt)return;
   out.push(ITCoachCreateTeacherIntervention(studentId,k.topicNo,k.skill,a.message));
  });
 });return out;
}
