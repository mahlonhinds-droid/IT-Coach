/* Teacher intervention dashboard 1.0 */
function ITCoachRenderTeacherInterventions(containerId,status){
 const e=document.getElementById(containerId);if(!e)return;
 const rows=ITCoachTeacherInterventions(status);
 e.innerHTML='<div class="card"><h3>Teacher Intervention Centre</h3><p><b>'+rows.length+'</b> '+(status||"tracked")+' intervention(s)</p>'+rows.map(x=>'<div class="card"><b>'+x.skill+'</b> — Topic '+x.topicNo+'<br>Status: '+x.status+'<br>Student: '+x.studentId+'<br>Actions: '+x.actions.length+'</div>').join('')+'</div>';
}
