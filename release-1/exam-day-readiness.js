/* IT Coach Exam Day Readiness 1.0 */
function ITCoachBuildExamDayChecklist(studentId){
 const r=ITCoachBuildFinalReadiness(studentId);
 return{studentId,readiness:r,recommendations:[
  "Do a short recall review only; avoid heavy new learning.",
  "Review personal error notes and key formulas/definitions/processes.",
  "Prepare required materials and arrive with enough time.",
  "Use the first minutes to read instructions carefully and allocate time.",
  "If a question is difficult, move on and return later where permitted.",
  "Use a final check to review unanswered items and practical requirements."
 ]};
}
function ITCoachRenderExamDayChecklist(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const x=ITCoachBuildExamDayChecklist(studentId);
 e.innerHTML='<div class="card"><h2>Exam Day Checklist</h2>'+x.recommendations.map((v,i)=>'<p>☐ '+v+'</p>').join('')+'</div>';
}
