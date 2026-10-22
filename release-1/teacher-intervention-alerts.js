/* Teacher intervention alerts + progression safeguard 1.0 */
const ITCoachInterventionAlertPolicy={failedAttempts:3,alertType:"teacher-intervention",blocking:false};
function ITCoachSkillFailureHistory(studentId,topicNo,skill){
 const ev=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>x.skill===skill);
 return ev.filter(x=>Number(x.score)<70).sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp));
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
   Object.keys(ITCoachTopic48Skills).forEach(topicNo=>{
     ITCoachTopic48Skills[topicNo].forEach(skill=>{
       const a=ITCoachTeacherInterventionAlert(studentId,Number(topicNo),skill);if(a.alert)out.push(a);
     });
   });
 });return out;
}
