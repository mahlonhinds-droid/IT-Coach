/* IT Coach Teacher Intervention Centre — browser-only prototype */
function ITCoachInterventionSnapshot(){
 const s=ITCoachAnalyticsSnapshot();
 const assignments=typeof ITCoachAssignments==="function"?ITCoachAssignments():[];
 const weak=s.weak.slice();
 const counts={remediate:0,practice:0,consolidate:0,unassessed:0};
 s.topics.forEach(t=>{if(t.score===null)counts.unassessed++;else if(t.score<70)counts.remediate++;else if(t.score<80)counts.practice++;else counts.consolidate++;});
 const common=weak.length?weak[0]:null;
 return {counts,weak,common,assignments};
}
function ITCoachCreateTeacherIntervention(topicNo,skill){
 const title=skill?"Targeted remediation — "+skill:"Targeted Topic "+topicNo+" remediation";
 if(typeof ITCoachCreateAssignment==="function"){
  return ITCoachCreateAssignment(String(topicNo),title,"");
 }
 return null;
}
function ITCoachRenderTeacherIntervention(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const s=ITCoachInterventionSnapshot(),c=s.counts,w=s.common;
 e.innerHTML='<div class="card"><h2>Teacher Intervention Centre</h2><p><b>Remediation:</b> '+c.remediate+' &nbsp; <b>Practice:</b> '+c.practice+' &nbsp; <b>Consolidated:</b> '+c.consolidate+' &nbsp; <b>Not assessed:</b> '+c.unassessed+'</p>'+(w?'<div class="card"><b>Priority topic</b><p>Topic '+w.topic+' — '+w.score+'%</p><button onclick="ITCoachCreateTeacherIntervention('+w.topic+')">Assign Targeted Topic Remediation</button></div>':'<p>No assessed weakness is currently recorded.</p>')+'</div>';
}
