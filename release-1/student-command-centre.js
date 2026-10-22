/* IT Coach Student Command Centre 1.0 */
function ITCoachBuildStudentCommandCentre(studentId){
 const topics=Object.keys(ITCoachTopic48Skills).map(t=>ITCoachUniversalTopicMastery(studentId,Number(t)));
 const assessed=topics.filter(x=>x.average!==null);
 const priority=assessed.sort((a,b)=>a.average-b.average)[0]||null;
 const stats=ITCoachLearnerStats(studentId);
 const intervention=ITCoachTeacherInterventions().filter(x=>x.studentId===studentId&&x.status==="open");
 return{studentId,mode:ITCoachGetLearnerMode(studentId),priority,topics,stats,openInterventions:intervention};
}
function ITCoachCommandCentreNextAction(studentId){
 const c=ITCoachBuildStudentCommandCentre(studentId);
 if(c.openInterventions.length)return{action:"review-support",message:"You have a support item to review.",command:c};
 if(c.priority)return{action:"continue-topic",topicNo:c.priority.topicNo,message:"Continue with your highest-priority learning area.",command:c};
 return{action:"start-diagnostic",message:"Start your first diagnostic activity.",command:c};
}
function ITCoachRenderStudentCommandCentre(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const c=ITCoachBuildStudentCommandCentre(studentId),n=ITCoachCommandCentreNextAction(studentId);
 e.innerHTML='<div class="card"><h1>My IT Coach</h1><p><b>Mode:</b> '+c.mode+'</p><div class="card"><h2>Continue Learning</h2><p>'+n.message+'</p><button onclick="ITCoachLaunchIntervention(\''+studentId+'\','+(n.topicNo||1)+')">Continue</button></div><div class="card"><h2>My Progress</h2><p>Sessions: '+c.stats.sessions+' | Minutes: '+c.stats.minutes+' | Topics active: '+c.stats.topics+'</p></div><div class="card"><h2>Topics</h2>'+c.topics.map(x=>'<p><b>Topic '+x.topicNo+'</b>: '+x.status+' — '+(x.average===null?"Not assessed":x.average+"%")+'</p>').join('')+'</div></div>';
}

function ITCoachRenderNextBestAction(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;const n=ITCoachStudentNextBestAction(studentId);
 e.innerHTML='<div class="card"><h2>'+n.title+'</h2><p>'+n.message+'</p>'+(n.topicNo?'<button onclick="ITCoachLaunchIntervention(\\''+studentId+'\\','+n.topicNo+')">Start Now</button>':'')+'</div>';
}

function ITCoachRenderGoalProgress(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;const g=ITCoachGetStudentGoal(studentId),a=ITCoachStudentAchievements(studentId);
 e.innerHTML='<div class="card"><h2>My Goal</h2><p>'+(g?g.goal:"Set a learning goal to guide your journey.")+'</p><p>Topics started: '+a.topicsStarted+'/8</p><p>Topics mastered: '+a.topicsMastered+'</p><p>Skills with evidence: '+a.skillsWithEvidence+'</p></div>';
}
