/* IT Coach Student Command Centre all-topic coverage 1.1 */
function ITCoachBuildStudentCommandCentreAll(studentId){
 const topics=[1,2,3,4,5,6,7,8].map(topicNo=>ITCoachUniversalTopicMastery(studentId,topicNo));
 const assessed=topics.filter(x=>x.average!==null);
 const priority=assessed.slice().sort((a,b)=>a.average-b.average)[0]||null;
 const stats=ITCoachLearnerStats(studentId);
 const intervention=ITCoachTeacherInterventions().filter(x=>String(x.studentId)===String(studentId)&&x.status==="open");
 return{studentId,mode:ITCoachGetLearnerMode(studentId),priority,topics,stats,openInterventions:intervention};
}
window.ITCoachBuildStudentCommandCentre=ITCoachBuildStudentCommandCentreAll;
