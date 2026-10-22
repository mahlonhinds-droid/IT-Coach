/* Teacher intervention workflow 1.0 */
function ITCoachCreateTeacherIntervention(studentId,topicNo,skill,note){
 const alerts=JSON.parse(localStorage.getItem("itcoachTeacherInterventions")||"[]");
 const existing=alerts.find(x=>x.studentId===studentId&&Number(x.topicNo)===Number(topicNo)&&x.skill===skill&&x.status==="open");
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
  Object.keys(ITCoachTopic48Skills).forEach(t=>ITCoachTopic48Skills[t].forEach(skill=>{
   const a=ITCoachTeacherInterventionAlert(studentId,Number(t),skill);
   if(a.alert)out.push(ITCoachCreateTeacherIntervention(studentId,Number(t),skill,a.message));
  }));
 });return out;
}
