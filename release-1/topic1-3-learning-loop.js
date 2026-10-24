/* Topics 1–3 Learn → Check → Apply loop */
function ITCoachStartTopic13Loop(topicNo,lessonId,containerId){
 const e=document.getElementById(containerId),l=ITCoachTopic13Lesson(topicNo,lessonId);if(!e||!l)return;
 e.innerHTML='<div class="card"><h2>'+l.title+'</h2><p>'+l.focus+'</p><hr><h3>1. Learn</h3><p>Review the lesson focus and source-aligned topic content.</p><h3>2. Knowledge Check</h3><p>'+l.check+'</p><button onclick="ITCoachShowTopic13Apply('+topicNo+',\''+lessonId+'\',\''+containerId+'\')">Continue to Application</button></div>';
}
function ITCoachShowTopic13Apply(topicNo,lessonId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const labs=ITCoachGetTopic13Labs(topicNo).filter(x=>x.skills.some(s=>Object.values(ITCoachTopic13Lessons[topicNo]||{}).some(l=>l.title&&s.toLowerCase().includes(l.title.split(" ")[0].toLowerCase()))));
 const lab=labs[0]||ITCoachGetTopic13Labs(topicNo)[0];
 e.innerHTML='<div class="card"><h2>3. Apply</h2><p>Take the next available Skills Lab challenge to apply the concept.</p><h3>'+lab.title+'</h3><p>'+lab.task+'</p><button onclick="ITCoachRenderTopic13Labs('+topicNo+',\''+containerId+'\')">Open Skills Lab</button></div>';
}
