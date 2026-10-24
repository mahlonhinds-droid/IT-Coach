/* IT Coach integration health checks 1.0 */
function ITCoachIntegrationHealth(){
 const required=[
  ["Universal Evidence","ITCoachRecordUniversalEvidence"],
  ["Universal Mastery","ITCoachUniversalTopicMastery"],
  ["Intervention","ITCoachBuildIntervention"],
  ["Self Directed","ITCoachGetLearnerMode"],
  ["Command Centre","ITCoachBuildStudentCommandCentre"],
  ["Planner","ITCoachBuildStudentPlanner"],
  ["Crunch Plan","ITCoachBuildFinalCrunchPlan"],
  ["Exam Readiness","ITCoachBuildExamReadiness"],
  ["Mock Blueprint","ITCoachBuildMockExamBlueprint"],
  ["Error Analysis","ITCoachBuildExamErrorAnalysis"],
  ["Final Readiness","ITCoachBuildFinalReadiness"]
 ];
 return required.map(x=>({module:x[0],available:typeof window[x[1]]==="function",functionName:x[1]}));
}
function ITCoachRenderIntegrationHealth(containerId){
 const e=document.getElementById(containerId);if(!e)return;const rows=ITCoachIntegrationHealth();
 e.innerHTML='<div class="card"><h2>Integration Health</h2>'+rows.map(x=>'<p>'+(x.available?"✓":"✕")+' '+x.module+'</p>').join('')+'</div>';
}
