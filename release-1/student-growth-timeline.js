/* IT Coach student growth timeline */
function ITCoachStudentGrowthTimeline(studentId){
 const events=JSON.parse(localStorage.getItem("itcoachProgressHistory")||"[]").filter(x=>!studentId||x.studentId===studentId);
 return events.sort((a,b)=>String(a.at||"").localeCompare(String(b.at||"")));
}
function ITCoachRenderStudentGrowthTimeline(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const events=ITCoachStudentGrowthTimeline(studentId);
 e.innerHTML='<div class="card"><h3>Growth Timeline</h3>'+ (events.length?events.slice(-20).reverse().map(x=>'<div style="padding:8px;border-bottom:1px solid #eee"><b>'+String(x.type||"Learning event")+'</b> — Topic '+(x.topicNo||"—")+(x.score!==undefined?' — '+x.score+'%':'')+'<small style="display:block">'+(x.at||"")+'</small></div>').join(''):'<p>No progress events recorded yet.</p>')+'</div>';
}
