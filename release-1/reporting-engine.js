/* IT Coach Student / Class Reporting Engine — browser-only prototype */
function ITCoachStudentReport(topicNo){
 const growth=ITCoachGrowth(topicNo);
 const skills=typeof ITCoachSkillSnapshot==="function"?ITCoachSkillSnapshot(String(topicNo)):[];
 const weak=skills.filter(x=>x.score!==null&&x.score<80).sort((a,b)=>a.score-b.score);
 const strong=skills.filter(x=>x.score!==null&&x.score>=80).sort((a,b)=>b.score-a.score);
 const path=ITCoachBuildLearningPath(topicNo);
 return {topic:String(topicNo),latest:growth.latest,growth:growth.growth,attempts:growth.attempts,strengths:strong.slice(0,3),weaknesses:weak.slice(0,3),learningPath:path};
}
function ITCoachClassReport(classId){
 const c=ITCoachClasses().find(x=>x.id===classId);if(!c)return null;
 const summary=ITCoachClassSummary(classId),students=c.students.map(s=>({id:s.id,name:s.name,assignments:(s.assignments||[]).length,scores:s.scores||{}}));
 const topicAverages={};
 for(let n=1;n<=8;n++){const vals=c.students.map(s=>s.scores&&s.scores[String(n)]).filter(v=>typeof v==="number");topicAverages[n]=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):null;}
 return {classId,name:c.name,total:c.students.length,summary,topicAverages,students};
}
function ITCoachRenderReports(classId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachClassReport(classId);if(!r){e.innerHTML='<div class="card">No class report available.</div>';return;}
 e.innerHTML='<div class="card"><h2>Class Progress Report</h2><p><b>'+r.name+'</b> • '+r.total+' students</p>'+Object.keys(r.topicAverages).map(n=>'<div class="card"><b>Topic '+n+'</b><p>Class average: '+(r.topicAverages[n]===null?"Not assessed":r.topicAverages[n]+"%")+'</p><p>🔴 '+r.summary.topics[n].remediate+' remediation • 🟡 '+r.summary.topics[n].practice+' practice • 🟢 '+r.summary.topics[n].consolidate+' consolidated • ⚪ '+r.summary.topics[n].unassessed+' unassessed</p></div>').join('')+'</div>';
}
