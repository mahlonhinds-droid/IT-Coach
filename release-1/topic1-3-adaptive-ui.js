/* Topics 1–3 adaptive recommendation panel */
function ITCoachRenderInteractive13Adaptive(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const all=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId&&x.topicNo===topicNo);
 const avg=all.length?Math.round(all.reduce((n,x)=>n+x.score,0)/all.length):null;
 const next=ITCoachInteractive13NextAction(studentId,topicNo);
 e.innerHTML='<div class="card"><h3>Adaptive Coach</h3><p><b>Interactive activity average:</b> '+(avg===null?"Not yet assessed":avg+"%")+'</p><p><b>Recommended next step:</b> '+next+'</p><p><b>Evidence:</b> '+all.length+' interactive result(s) recorded in this browser.</p></div>';
}
