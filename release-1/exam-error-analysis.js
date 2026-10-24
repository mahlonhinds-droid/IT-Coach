/* IT Coach Exam Error Analysis 1.0 */
function ITCoachBuildExamErrorAnalysis(studentId){
 const ev=ITCoachUniversalEvidence(studentId);
 const errors=ev.filter(x=>Number(x.score)<70);
 const byTopic={};
 errors.forEach(x=>{const k=x.topicNo||"unknown";byTopic[k]??={topicNo:k,count:0,total:0};byTopic[k].count++;byTopic[k].total+=Number(x.score)||0;});
 return Object.values(byTopic).map(x=>({...x,average:Math.round(x.total/x.count),action:x.average<60?"relearn + guided practice":"targeted practice + reassessment"})).sort((a,b)=>a.average-b.average);
}
function ITCoachRenderExamErrorAnalysis(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const rows=ITCoachBuildExamErrorAnalysis(studentId);
 e.innerHTML='<div class="card"><h2>Mock Exam Error Analysis</h2>'+(!rows.length?'<p>No low-scoring evidence has been recorded yet.</p>':rows.map(x=>'<div class="card"><b>Topic '+x.topicNo+'</b><p>Low-score evidence: '+x.count+' | Average: '+x.average+'%</p><p>Next action: '+x.action+'</p></div>').join(''))+'</div>';
}
