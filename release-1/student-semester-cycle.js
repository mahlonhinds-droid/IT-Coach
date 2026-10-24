/* IT Coach Learning Cycle 1.0 */
function ITCoachBuildPostExamNextCycle(studentId){
 const refs=ITCoachPostExamReflections(studentId),last=refs[refs.length-1];
 const r=ITCoachBuildStudentCommandCentre(studentId);
 return {studentId,reflection:last||null,nextGoal:last?.nextGoal||"Continue building mastery across the eight topics.",priority:last?.topicsToImprove||r.priority||null,actions:["Review post-exam reflection","Select the next learning goal","Reassess priority skills","Continue the personalized learning path"]};
}
function ITCoachRenderPostExamNextCycle(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;const x=ITCoachBuildPostExamNextCycle(studentId);
 e.innerHTML='<div class="card"><h2>What’s Next?</h2><p><b>Next goal:</b> '+x.nextGoal+'</p><p><b>Priority:</b> '+(x.priority||"None identified")+'</p>'+x.actions.map(a=>'<p>→ '+a+'</p>').join('')+'</div>';
}
