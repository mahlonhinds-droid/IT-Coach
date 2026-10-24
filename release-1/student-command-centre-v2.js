/* Student Command Centre cards 1.0 */
function ITCoachStudentStatusCards(studentId){
 const c=ITCoachBuildStudentCommandCentre(studentId);
 return{
  continue:ITCoachCommandCentreNextAction(studentId),
  strongest:c.topics.filter(x=>x.average!==null).sort((a,b)=>b.average-a.average)[0]||null,
  priority:c.priority,
  interventions:(c.openInterventions||[]).length,
  completion:c.topics.length?Math.round(c.topics.filter(x=>x.average!==null).length/c.topics.length*100):0
 };
}
