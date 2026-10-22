/* Student notification signals 1.1 */
function ITCoachBuildStudentNotifications(studentId){
 const notes=[],c=ITCoachBuildStudentCommandCentre(studentId);
 (c.openInterventions||[]).forEach(x=>notes.push({type:"support",priority:"high",message:"Your learning support plan needs attention.",topicNo:x.topicNo}));
 (ITCoachStudentAssignments(studentId)||[]).forEach(a=>{
  const p=ITCoachStudentAssignmentStatus(studentId,a.id);
  if(!p||p.status!=="completed")notes.push({type:"assignment",priority:"normal",message:"You have a teacher assignment: "+a.title,assignmentId:a.id});
 });
 return notes;
}
