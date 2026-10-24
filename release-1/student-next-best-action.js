/* Student next-best-action engine 1.0 */
function ITCoachStudentNextBestAction(studentId){
 const c=ITCoachBuildStudentCommandCentre(studentId),n=ITCoachCommandCentreNextAction(studentId);
 if((c.openInterventions||[]).length)return{type:"support",title:"Review support",message:"A learning support item needs your attention.",topicNo:c.openInterventions[0].topicNo};
 if(c.priority)return{type:"learning",title:"Continue learning",message:"Your priority area is Topic "+c.priority.topicNo+".",topicNo:c.priority.topicNo,skill:c.priority.priority?.skill||null};
 const next=(c.topics||[]).find(x=>x.average===null);
 return next?{type:"diagnostic",title:"Start a new topic",message:"Begin a diagnostic for Topic "+next.topicNo+".",topicNo:next.topicNo}: {type:"review",title:"Review your mastery",message:"You have evidence across all eight topics."};
}
