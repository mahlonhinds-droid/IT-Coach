/* IT Coach Integration Self-Test 1.1
   Browser-run smoke test. Uses an isolated temporary student and restores localStorage.
*/
function ITCoachRunIntegrationSelfTest(studentId){
 const required=[
  "ITCoachRecordUniversalEvidence","ITCoachUniversalEvidence","ITCoachUniversalTopicMastery",
  "ITCoachBuildStudentCommandCentre","ITCoachBuildStudentPlanner","ITCoachBuildTodayPlan",
  "ITCoachStudentNextBestAction","ITCoachBuildExamReadiness","ITCoachBuildFinalCrunchPlan",
  "ITCoachBuildFinalReadiness","ITCoachTeacherInterventionAlert","ITCoachProgressionStatus"
 ];
 const checks=required.map(name=>({name,ok:typeof window[name]==="function"}));
 const tempId="__itcoach_qa_"+Date.now();
 const saved={};
 const keysToRestore=[
  "itcoachUniversalEvidence","itcoachTeacherInterventions","itcoachLearnerModes",
  "itcoachLearners","itcoachActiveStudentId","itcoachRuntime"
 ];
 keysToRestore.forEach(k=>saved[k]=localStorage.getItem(k));
 let topics=[],topicErrors=[],functional=[];
 try{
  ITCoachRecordUniversalEvidence({studentId:tempId,topicNo:1,lessonId:"1.2",skill:"hardware",type:"knowledge",score:72,source:"browser-self-test",evidence:"qa"});
  ITCoachRecordUniversalEvidence({studentId:tempId,topicNo:1,lessonId:"1.2",skill:"hardware",type:"reassessment",score:88,source:"browser-self-test",evidence:"qa-re"});
  const ev=ITCoachUniversalEvidence(tempId,1);
  functional.push({name:"Evidence write/read",ok:ev.length===2});
  const mastery=ITCoachUniversalTopicMastery(tempId,1);
  functional.push({name:"Topic 1 mastery",ok:mastery&&mastery.average!==null});
  const alert=ITCoachTeacherInterventionAlert(tempId,1,"hardware");
  functional.push({name:"Teacher intervention evaluation",ok:!!alert});
 }catch(e){functional.push({name:"Core evidence/mastery smoke",ok:false,error:String(e?.message||e)});}
 try{
  for(const topicNo of [1,2,3,4,5,6,7,8]){
   const m=ITCoachUniversalTopicMastery(tempId,topicNo);
   topics.push({topicNo,average:m?.average??null,status:m?.status??"unknown"});
  }
 }catch(e){topicErrors.push(String(e?.message||e));}
 try{
  const command=ITCoachBuildStudentCommandCentre(tempId);
  functional.push({name:"8-topic command centre",ok:!!command&&Array.isArray(command.topics)&&command.topics.length===8});
  const planner=ITCoachBuildStudentPlanner(tempId);
  functional.push({name:"Student planner",ok=!!planner});
  const today=ITCoachBuildTodayPlan(tempId);
  functional.push({name:"Today plan",ok=!!today});
  const next=ITCoachStudentNextBestAction(tempId);
  functional.push({name:"Next-best-action",ok=!!next});
 }catch(e){functional.push({name:"Student journey smoke",ok:false,error:String(e?.message||e)});}
 try{
  const crunch=ITCoachBuildFinalCrunchPlan(tempId,14);
  const readiness=ITCoachBuildExamReadiness(tempId);
  const finalReadiness=ITCoachBuildFinalReadiness(tempId);
  functional.push({name:"Exam preparation engines",ok=!!crunch&&!!readiness&&!!finalReadiness});
 }catch(e){functional.push({name:"Exam preparation smoke",ok:false,error:String(e?.message||e)});}
 try{
  const original=ITCoachGetLearnerMode(tempId);
  ITCoachSetLearnerMode(tempId,"self-directed");
  functional.push({name:"Self-directed mode",ok:ITCoachGetLearnerMode(tempId)==="self-directed"});
  ITCoachSetLearnerMode(tempId,original);
 }catch(e){functional.push({name:"Self-directed mode",ok:false,error:String(e?.message||e)});}
 const commandCheck=(()=>{try{return !!ITCoachBuildStudentCommandCentre(tempId)&&ITCoachBuildStudentCommandCentre(tempId).topics?.length===8;}catch(e){return false;}})();
 const results={
  passed:checks.every(x=>x.ok)&&topicErrors.length===0&&topics.length===8&&functional.every(x=>x.ok)&&commandCheck,
  functions:checks,
  functional,
  topics,
  topicErrors,
  note:"Browser smoke test. Temporary QA data is restored after the test; run this in the actual browser before production release."
 };
 keysToRestore.forEach(k=>{if(saved[k]===null)localStorage.removeItem(k);else localStorage.setItem(k,saved[k]);});
 return results;
}
function ITCoachRenderIntegrationSelfTest(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachRunIntegrationSelfTest(studentId);
 e.innerHTML='<div class="card"><h2>Integration Self-Test</h2><p><b>Status:</b> '+(r.passed?"PASS":"CHECK REQUIRED")+'</p><p><b>8-topic mastery calls:</b> '+r.topics.length+'/8</p><p><b>Functional checks:</b> '+r.functional.filter(x=>x.ok).length+'/'+r.functional.length+'</p><p><b>Runtime note:</b> '+r.note+'</p>'+r.functions.map(x=>'<p>'+(x.ok?"✓":"✗")+' '+x.name+'</p>').join('')+r.functional.map(x=>'<p>'+(x.ok?"✓":"✗")+' '+x.name+(x.error?" — "+x.error:"")+'</p>').join('')+(r.topicErrors.length?'<p><b>Errors:</b> '+r.topicErrors.join(' | ')+'</p>':'')+'</div>';
}
