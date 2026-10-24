/* Shared teacher/student assignment feed 1.0 */
function ITCoachStudentAssignments(studentId){
 const rows=JSON.parse(localStorage.getItem("itcoachAssignments")||"[]");
 return rows.filter(x=>Array.isArray(x.studentIds)?x.studentIds.includes(studentId):x.studentId===studentId);
}
function ITCoachStudentAssignmentStatus(studentId,assignmentId){
 const rows=JSON.parse(localStorage.getItem("itcoachAssignmentProgress")||"[]");
 return rows.filter(x=>x.studentId===studentId&&x.assignmentId===assignmentId).sort((a,b)=>String(b.at).localeCompare(String(a.at)))[0]||null;
}
function ITCoachRenderStudentAssignments(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const rows=ITCoachStudentAssignments(studentId);
 e.innerHTML='<div class="card"><h2>Teacher Assignments</h2>'+(!rows.length?'<p>No teacher assignments. You can continue learning independently.</p>':rows.map(a=>{const p=ITCoachStudentAssignmentStatus(studentId,a.id);return '<div class="card"><b>'+a.title+'</b><p>'+ (a.description||"")+'</p><p>Status: '+(p?.status||"Assigned")+'</p></div>';}).join('')+'</div>';
}
