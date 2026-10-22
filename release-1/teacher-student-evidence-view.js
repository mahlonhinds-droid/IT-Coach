/* Teacher student evidence view 1.0 */
function ITCoachRenderStudentInterventionProfile(studentId,topicNo,skill,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachTeacherRecommendedAction(studentId,topicNo,skill),p=r.profile;
 e.innerHTML='<div class="card"><h3>Student Evidence Profile</h3><p><b>Student:</b> '+p.studentId+'</p><p><b>Topic:</b> '+p.topicNo+(p.skill?' — '+p.skill:'')+'</p><p><b>Latest evidence:</b> '+(p.latestScore===null?"None":p.latestScore+"%")+'</p><p><b>Growth:</b> '+(p.growth===null?"Not enough evidence":(p.growth>=0?"+":"")+p.growth+" points")+'</p><p><b>Below-threshold attempts:</b> '+p.failures.length+'</p><p><b>Open interventions:</b> '+p.interventions.filter(x=>x.status==="open").length+'</p><p><b>Recommended teacher action:</b> '+r.action.replace(/-/g," ")+'</p><details><summary>Evidence timeline</summary><ol>'+p.evidence.map(x=>'<li>'+new Date(x.timestamp).toLocaleString()+' — '+x.type+' — '+x.score+'%</li>').join('')+'</ol></details></div>';
}
