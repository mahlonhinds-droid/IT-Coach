/* Teacher exam intervention actions 1.0 */
function ITCoachBuildTeacherExamActions(studentId){
 const r=ITCoachBuildExamReadiness(studentId),f=ITCoachBuildFinalReadiness(studentId);
 const actions=[];
 (r.gapTopics||[]).forEach(t=>actions.push({type:"targeted-revision",topicNo:t,title:"Target Topic "+t,priority:"high"}));
 if(f.simulationAverage!==null&&f.simulationAverage<70)actions.push({type:"mock-remediation",title:"Review latest mock errors",priority:"high"});
 if(r.readinessBand==="Developing")actions.push({type:"guided-practice",title:"Schedule focused practice",priority:"normal"});
 return actions;
}
function ITCoachRenderTeacherExamActions(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;const a=ITCoachBuildTeacherExamActions(studentId);
 e.innerHTML='<div class="card"><h2>Recommended Teacher Actions</h2>'+(!a.length?'<p>No additional action identified.</p>':a.map(x=>'<p><b>'+x.title+'</b> — '+x.priority+'</p>').join(''))+'</div>';
}
