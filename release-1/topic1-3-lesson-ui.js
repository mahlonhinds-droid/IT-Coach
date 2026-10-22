/* Topics 1–3 lesson navigator */
function ITCoachRenderTopic13Course(topicNo,containerId){
 const e=document.getElementById(containerId),a=ITCoachTopicAdapter(topicNo),lessons=ITCoachTopic13Lessons[topicNo]||{};if(!e||!a)return;
 e.innerHTML='<div class="card"><h2>Topic '+topicNo+' — '+a.name+'</h2><p>Learn the concept, test your understanding, then apply it.</p>'+Object.keys(lessons).map(id=>'<div style="border:1px solid #ddd;padding:10px;margin:8px 0"><b>'+id+' — '+lessons[id].title+'</b><p>'+lessons[id].focus+'</p><button onclick="ITCoachRenderTopic13Lesson('+topicNo+',\''+id+'\',\''+containerId+'\')">Open Lesson</button></div>').join('')+'</div>';
}
