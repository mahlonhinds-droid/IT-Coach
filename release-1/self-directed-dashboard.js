/* Self-directed learner dashboard 1.0 */
function ITCoachRenderSelfDirectedDashboard(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const p=ITCoachSelfDirectedProgress(studentId);
 const rows=Object.keys(ITCoachTopic48Skills).map(t=>ITCoachUniversalTopicMastery(studentId,Number(t)));
 e.innerHTML='<div class="card"><h2>My Learning Journey</h2><p>Mode: <b>'+p.mode+'</b></p><p>Keep learning at your own pace. Your next activity is selected from your evidence.</p>'+rows.map(x=>'<div class="card"><b>Topic '+x.topicNo+'</b> — '+x.status+' — '+(x.average===null?"Not assessed":x.average+"%")+'</div>').join('')+'</div>';
}
