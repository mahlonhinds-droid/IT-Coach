/* Topics 1–3 mastery portfolio 1.0 */
function ITCoachTopic13Portfolio(studentId,topicNo){
 const a=ITCoachTopic13Latest(studentId).filter(x=>x.topicNo===topicNo);
 return{studentId,topicNo,attempts:a.length,first:a.length?Math.min(...a.map(x=>x.score)):null,latest:a.length?a[a.length-1].score:null,growth:a.length>1?a[a.length-1].score-a[0].score:null,history:a};
}
function ITCoachRenderTopic13Portfolio(studentId,topicNo,containerId){
 const e=document.getElementById(containerId),p=ITCoachTopic13Portfolio(studentId,topicNo);if(!e)return;
 e.innerHTML='<div class="card"><h3>Mastery Portfolio — Topic '+topicNo+'</h3><p>Attempts: '+p.attempts+'</p><p>First: '+(p.first??"—")+'% &nbsp; Latest: '+(p.latest??"—")+'% &nbsp; Growth: '+(p.growth===null?"—":(p.growth>=0?"+":"")+p.growth+" points")+'</p></div>';
}
