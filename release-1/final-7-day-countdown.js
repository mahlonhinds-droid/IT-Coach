/* IT Coach Final 7-Day Countdown 1.0 */
function ITCoachBuildFinal7DayPlan(studentId,daysRemaining){
 const d=Math.max(1,Math.min(7,Number(daysRemaining)||7));
 const phases={
  7:{focus:"Targeted revision",work:"Weakest skills + short timed questions",load:"high"},
  6:{focus:"Mixed practice",work:"Mixed-topic questions + practical rotation",load:"high"},
  5:{focus:"Structured response",work:"Timed Paper 02-style work + error correction",load:"high"},
  4:{focus:"Mock simulation",work:"Timed mock examination",load:"high"},
  3:{focus:"Mock analysis",work:"Review errors + targeted remediation",load:"moderate"},
  2:{focus:"Confidence review",work:"High-yield retrieval + light practice",load:"moderate"},
  1:{focus:"Final review",work:"Short recall, key reminders and preparation; no heavy new learning",load:"light"}
 };
 return{studentId,daysRemaining:d,day:phases[d]};
}
function ITCoachRenderFinal7DayPlan(studentId,daysRemaining,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const p=ITCoachBuildFinal7DayPlan(studentId,daysRemaining);
 e.innerHTML='<div class="card"><h2>Final '+p.daysRemaining+'-Day Countdown</h2><h3>'+p.day.focus+'</h3><p>'+p.day.work+'</p><p>Study load: '+p.day.load+'</p></div>';
}
