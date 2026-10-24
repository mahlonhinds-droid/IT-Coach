/* Subject-aware teacher intervention alerts 1.2 */
const ITCoachInterventionAlertPolicy={failedAttempts:3,alertType:"teacher-intervention",blocking:false,threshold:70};
function ITCoachEvidenceTime(x){return new Date(x.timestamp||x.at||0).getTime();}
function ITCoachInterventionContext(subjectId,courseId,curriculumId){
 return {subjectId:subjectId||"IT",courseId:courseId||(subjectId==="IT"||!subjectId?"CSEC_IT":null),curriculumId:curriculumId||null};
}
function ITCoachSkillFailureHistory(studentId,topicNo,skill,subjectId,courseId){
 const c=ITCoachInterventionContext(subjectId,courseId),ev=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>(x.subjectId||"IT")===c.subjectId&&(!c.courseId||!x.courseId||x.courseId===c.courseId)&&x.skill===skill&&Number(x.score)<ITCoachInterventionAlertPolicy.threshold);
 return ev.sort((a,b)=>ITCoachEvidenceTime(a)-ITCoachEvidenceTime(b));
}
function ITCoachTeacherInterventionAlert(studentId,topicNo,skill,subjectId,courseId,curriculumId){
 const c=ITCoachInterventionContext(subjectId,courseId,curriculumId),failures=ITCoachSkillFailureHistory(studentId,topicNo,skill,c.subjectId,c.courseId);
 const alert=failures.length>=ITCoachInterventionAlertPolicy.failedAttempts;
 return{alert,failedAttempts:failures.length,blocking:false,studentId,subjectId:c.subjectId,courseId:c.courseId,curriculumId:c.curriculumId,topicNo,skill,type:alert?"teacher-intervention":null,message:alert?"Student has reached three or more below-threshold attempts on this skill. Teacher intervention is recommended.":null};
}
function ITCoachProgressionStatus(studentId,topicNo,subjectId,courseId){
 const c=ITCoachInterventionContext(subjectId,courseId);
 return{canProgress:true,reason:"A persistent skill weakness does not block progress to other topics. Teacher intervention is tracked separately.",subjectId:c.subjectId,courseId:c.courseId,topicNo};
}
function ITCoachClassInterventionAlerts(studentIds,subjectId,courseId){
 const out=[];(studentIds||[]).forEach(studentId=>{
  const ev=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]").filter(x=>String(x.studentId)===String(studentId)&&(x.subjectId||"IT")===(subjectId||"IT")&&(!courseId||!x.courseId||x.courseId===courseId));
  const keys=[...new Map(ev.map(x=>String(x.topicNo)+"|"+x.skill,{topicNo:Number(x.topicNo),skill:x.skill})).values()];
  keys.forEach(k=>{const a=ITCoachTeacherInterventionAlert(studentId,k.topicNo,k.skill,subjectId,courseId);if(a.alert)out.push(a);});
 });return out;
}