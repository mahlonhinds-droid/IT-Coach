/* Skill-level next-step UI */
function ITCoachRenderSkillNextStep(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachUnifiedSkillNextStep(studentId,topicNo);
 if(!r){e.innerHTML='<div class="card"><p>Complete an assessment or interactive activity to generate skill-level guidance.</p></div>';return;}
 e.innerHTML='<div class="card"><h3>Skill-Level Recommendation</h3><p><b>Weakest demonstrated skill:</b> '+r.skill+'</p><p><b>Evidence:</b> '+r.score+'% across '+r.attempts+' attempt(s)</p><p><b>Path:</b> '+r.mode+'</p><p><b>Lesson:</b> '+r.lessonId+'</p><p>'+r.reason+'</p><button onclick="ITCoachLaunchUnifiedLesson('+r.topicNo+',\''+r.lessonId+'\',\''+containerId+'\')">Open Skill Revision</button></div>';
}
