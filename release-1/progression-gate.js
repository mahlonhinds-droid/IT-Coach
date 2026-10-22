/* Non-blocking topic progression 1.0 */
function ITCoachCanEnterTopic(studentId,topicNo){
 return{allowed:true,requiresTeacherAttention:false,message:"Student may continue learning this topic."};
}
function ITCoachCanEnterNextTopic(studentId,currentTopicNo){
 const next=Number(currentTopicNo)+1;
 return{allowed:next<=8,nextTopic:next,reason:"Topic progression remains available even when a skill requires teacher intervention."};
}
function ITCoachBuildStudentSupportStatus(studentId,topicNo,skill){
 const alert=ITCoachTeacherInterventionAlert(studentId,topicNo,skill);
 return{progressionAllowed:true,teacherAlert:alert.alert,failedAttempts:alert.failedAttempts,priority:alert.alert?"Teacher intervention":"Continue adaptive support"};
}
