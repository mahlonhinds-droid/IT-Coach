function ITCoachLaunchTargetedRevision(topicNo,skill){
 const q=typeof ITCoachQuestionsForSkill==="function"?ITCoachQuestionsForSkill(topicNo,skill)[0]:null;
 const lesson=q?q.lesson:null;
 const content=typeof ITCoachResolveLessonContent==="function"?ITCoachResolveLessonContent(topicNo,lesson):null;
 const e=document.getElementById("adaptiveAssessment");
 if(!e)return;
 e.innerHTML='<div class="card"><h2>Targeted Revision</h2><p><b>Priority skill:</b> '+skill+'</p><p><b>Recommended lesson:</b> '+(content?content.title:"Teacher review required")+'</p><p>'+(content&&content.blocks&&content.blocks[0]?content.blocks[0]:"Use the assigned lesson and practice activity for this skill.")+'</p><button onclick="ITCoachStartAdaptive('+topicNo+','+(lesson?JSON.stringify(lesson):"null")+')">Practice this lesson</button></div>';
}
