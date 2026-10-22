/* IT Coach Integration Self-Test 1.0
   Browser-run smoke test. It does not modify learner evidence.
*/
function ITCoachRunIntegrationSelfTest(studentId){
 const required=[
  "ITCoachRecordUniversalEvidence","ITCoachUniversalTopicMastery","ITCoachBuildStudentCommandCentre",
  "ITCoachBuildStudentPlanner","ITCoachBuildTodayPlan","ITCoachStudentNextBestAction",
  "ITCoachBuildExamReadiness","ITCoachBuildFinalCrunchPlan","ITCoachBuildFinalReadiness",
  "ITCoachTeacherInterventionAlert","ITCoachProgressionStatus"
 ];
 const checks=required.map(name=>({name,ok:typeof window[name]==="function"}));
 let topics=[];
 let topicErrors=[];
 try{
  for(const topicNo of [1,2,3,4,5,6,7,8]){
   const m=ITCoachUniversalTopicMastery(studentId,topicNo);
   topics.push({topicNo,average:m?.average??null,status:m?.status??"unknown"});
  }
 }catch(e){topicErrors.push(String(e?.message||e));}
 const command=typeof ITCoachBuildStudentCommandCentre==="function"?ITCoachBuildStudentCommandCentre(studentId):null;
 const results={
  passed:checks.every(x=>x.ok)&&topicErrors.length===0&&!!command&&Array.isArray(command.topics)&&command.topics.length===8,
  functions:checks,
  topics,
  topicErrors,
  commandCentre:command?{topicCount:command.topics?.length||0,hasPriority:!!command.priority,openInterventions:Array.isArray(command.openInterventions)?command.openInterventions.length:null}:null,
  note:"Smoke test only. Browser execution is required before production release."
 };
 return results;
}
function ITCoachRenderIntegrationSelfTest(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachRunIntegrationSelfTest(studentId);
 e.innerHTML='<div class="card"><h2>Integration Self-Test</h2><p><b>Status:</b> '+(r.passed?"PASS":"CHECK REQUIRED")+'</p><p><b>8-topic mastery calls:</b> '+r.topics.length+'/8</p><p><b>Runtime note:</b> '+r.note+'</p>'+r.functions.map(x=>'<p>'+ (x.ok?"✓":"✗") +' '+x.name+'</p>').join('')+(r.topicErrors.length?'<p><b>Errors:</b> '+r.topicErrors.join(' | ')+'</p>':'')+'</div>';
}
