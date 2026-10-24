/* IT Coach Exam Readiness Centre 1.0 */
function ITCoachBuildExamReadiness(studentId){
 const c=ITCoachBuildStudentCommandCentre(studentId);
 const mastery=(c.topics||[]).map(x=>({topicNo:x.topicNo,score:x.average,status:x.status}));
 const assessed=mastery.filter(x=>x.score!==null);
 const avg=assessed.length?Math.round(assessed.reduce((s,x)=>s+x.score,0)/assessed.length):null;
 const mastered=assessed.filter(x=>x.score>=80).length;
 const gaps=mastery.filter(x=>x.score===null||x.score<70).map(x=>x.topicNo);
 return{studentId,readinessScore:avg,assessedTopics:assessed.length,masteredTopics:mastered,gapTopics:gaps,readinessBand:avg===null?"Not assessed":avg>=80?"Strong":avg>=70?"Developing":"Needs focused preparation",recommendedCrunchDays:avg===null||avg<70?30:avg<80?21:14};
}
function ITCoachRenderExamReadiness(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachBuildExamReadiness(studentId);
 e.innerHTML='<div class="card"><h2>Exam Readiness</h2><p><b>Readiness:</b> '+r.readinessBand+'</p><p><b>Evidence average:</b> '+(r.readinessScore===null?"Not assessed":r.readinessScore+"%")+'</p><p><b>Topics assessed:</b> '+r.assessedTopics+'/8</p><p><b>Topics mastered:</b> '+r.masteredTopics+'/8</p><p><b>Priority gaps:</b> '+(r.gapTopics.length?r.gapTopics.join(", "):"None identified")+'</p><p><b>Suggested crunch period:</b> '+r.recommendedCrunchDays+' days</p></div>';
}
