/* Student-facing and teacher-facing alert panel */
function ITCoachRenderTeacherAlert(studentId,topicNo,skill,containerId){
 const e=document.getElementById(containerId);if(!e)return;const a=ITCoachTeacherInterventionAlert(studentId,topicNo,skill);
 e.innerHTML=a.alert?'<div class="card" role="alert"><h3>Teacher Support Recommended</h3><p>This skill has reached '+a.failedAttempts+' below-threshold attempts.</p><p>You can continue to the next topic while your teacher reviews this skill with you.</p></div>':'';
}
