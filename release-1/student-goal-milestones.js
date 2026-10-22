/* Student milestone engine 1.0 */
function ITCoachGoalMilestones(studentId){
 const a=ITCoachStudentAchievements(studentId);
 return[
  {id:"first-topic",label:"Start your first topic",done:a.topicsStarted>=1},
  {id:"three-topics",label:"Build evidence in three topics",done:a.topicsStarted>=3},
  {id:"first-mastery",label:"Master your first topic",done:a.topicsMastered>=1},
  {id:"all-topics",label:"Build evidence across all eight topics",done:a.topicsStarted>=8}
 ];
}
function ITCoachRenderGoalMilestones(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 e.innerHTML='<div class="card"><h3>Milestones</h3>'+ITCoachGoalMilestones(studentId).map(x=>'<p>'+(x.done?"✓":"○")+' '+x.label+'</p>').join('')+'</div>';
}
