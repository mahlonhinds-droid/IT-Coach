/* Teacher intervention alerts + progression safeguard 1.1 */
const ITCoachInterventionAlertPolicy={failedAttempts:3,alertType:"teacher-intervention",blocking:false,threshold:70};
function ITCoachEvidenceTime(x){return new Date(x.timestamp||x.at||0).getTime();}
function ITCoachSkillFailureHistory(studentId,topicNo,skill){
 const ev=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>x.skill===skill&&Number(x.score)<ITCoachInterventionAlertPolicy.threshold);
 return ev.sort((a,b)=>ITCoachEvidenceTime(a)-ITCoachEvidenceTime(b));
}
function ITCoachTeacherInterventionAlert(studentId,topicNo,skill){
 const failures=ITCoachSkillFailureHistory(studentId,topicNo,skill);
 const alert=failures.length>=ITCoachInterventionAlertPolicy.failedAttempts;
 return{alert,failedAttempts:failures.length,blocking:false,studentId,topicNo,skill,type:alert?"teacher-intervention":null,message:alert?"Student has reached three or more below-threshold attempts on this skill. Teacher intervention is recommended.":null};
}
function ITCoachProgressionStatus(studentId,topicNo){
 return{canProgress:true,reason:"A persistent skill weakness does not block progress to other topics. Teacher intervention is tracked separately."};
}
function ITCoachClassInterventionAlerts(studentIds){
 const out=[];(studentIds||[]).forEach(studentId=>{
  const ev=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]").filter(x=>String(x.studentId)===String(studentId));
  const keys=[...new Map(ev.map(x=>[String(x.topicNo)+"|"+x.skill,{topicNo:Number(x.topicNo),skill:x.skill}])).values()];
  keys.forEach(k=>{const a=ITCoachTeacherInterventionAlert(studentId,k.topicNo,k.skill);if(a.alert)out.push(a);});
 });return out;
}
