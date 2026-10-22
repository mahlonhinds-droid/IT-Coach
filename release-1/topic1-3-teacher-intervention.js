/* Topics 1–3 teacher intervention planner 1.0 */
function ITCoachTopic13Intervention(topicNo){
 const labs=ITCoachGetTopic13Labs(topicNo),all=JSON.parse(localStorage.getItem("itcoachTopic13Mastery")||"[]"),groups={};
 labs.forEach(l=>groups[l.id]=[]);
 all.filter(x=>x.topicNo===topicNo&&x.score<80).forEach(x=>{if(groups[x.labId])groups[x.labId].push(x)});
 return Object.keys(groups).map(id=>({labId:id,students:groups[id].length,priority:groups[id].length>=5?"High":groups[id].length>=3?"Medium":groups[id].length?"Low":"None"})).filter(x=>x.students);
}
function ITCoachRenderTopic13TeacherIntervention(topicNo,containerId){
 const e=document.getElementById(containerId),rows=ITCoachTopic13Intervention(topicNo);if(!e)return;
 e.innerHTML='<div class="card"><h2>Teacher Intervention — Topic '+topicNo+'</h2>'+rows.map(x=>'<p><b>'+x.labId+'</b> — '+x.students+' student(s) — <b>'+x.priority+'</b></p>').join('')+'</div>';
}
