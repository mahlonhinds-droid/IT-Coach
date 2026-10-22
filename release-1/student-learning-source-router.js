/* Unified teacher/self-directed learning source router 1.0 */
function ITCoachStudentLearningSources(studentId){
 const assignments=ITCoachStudentAssignments(studentId);
 const next=ITCoachStudentNextBestAction(studentId);
 return{
  teacherAssigned:assignments,
  selfDirected:{available:true,next},
  combined:[...assignments.map(x=>({source:"teacher",id:x.id,title:x.title,topicNo:x.topicNo})),
            ...(next.topicNo?[{source:"self-directed",id:"next-best",title:next.title,topicNo:next.topicNo}]:[])]
 };
}
