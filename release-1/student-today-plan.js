/* Student Today Plan 1.1 */
function ITCoachBuildTodayPlan(studentId){
 const sources=ITCoachStudentLearningSources(studentId)||{teacherAssigned:[],selfDirected:{}},items=[];
 (sources.teacherAssigned||[]).forEach(a=>items.push({source:"teacher",priority:1,title:a.title,topicNo:a.topicNo||null,assignmentId:a.id}));
 if(sources.selfDirected?.next)items.push({source:"self-directed",priority:2,title:sources.selfDirected.next.title,topicNo:sources.selfDirected.next.topicNo||null});
 return items.sort((a,b)=>a.priority-b.priority);
}
function ITCoachRenderTodayPlan(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const items=ITCoachBuildTodayPlan(studentId);
 e.innerHTML='<div class="card"><h2>Today’s Learning Plan</h2>'+(!items.length?'<p>Choose a topic to begin learning.</p>':items.map((x,i)=>'<div class="card"><b>'+(i+1)+'. '+x.title+'</b><p>Source: '+x.source+'</p></div>').join(''))+'</div>';
}
