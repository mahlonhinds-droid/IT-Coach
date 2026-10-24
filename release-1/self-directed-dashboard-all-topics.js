/* Self-directed learner dashboard all-topic adapter 1.1 */
function ITCoachRenderSelfDirectedDashboardAll(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const p=ITCoachSelfDirectedProgress(studentId);
 const rows=[1,2,3,4,5,6,7,8].map(t=>ITCoachUniversalTopicMastery(studentId,t));
 e.innerHTML='<div class="card"><h2>My Learning Journey</h2><p>Mode: <b>'+p.mode+'</b></p><p>Keep learning at your own pace. Your next activity is selected from your evidence.</p>'+rows.map(x=>'<div class="card"><b>Topic '+x.topicNo+'</b> — '+x.status+' — '+(x.average===null?"Not assessed":x.average+"%")+'</div>').join('')+'</div>';
}
window.ITCoachRenderSelfDirectedDashboard=ITCoachRenderSelfDirectedDashboardAll;