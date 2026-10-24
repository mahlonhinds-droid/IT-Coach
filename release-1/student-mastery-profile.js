/* IT Coach Student Mastery Profile 1.0 — browser-only */
function ITCoachCollectSkillProfile(studentId){
 const out=[];
 for(let t=1;t<=8;t++){
  const evidence=ITCoachTopicSkillEvidence(studentId,t);
  const status=ITCoachUnifiedTopicStatus(studentId,t);
  out.push({topicNo:t,name:ITCoachUnifiedTopics[t],status:status.status,score:status.score,skills:evidence,next:ITCoachUnifiedSkillNextStep(studentId,t)});
 }
 return out;
}
function ITCoachStudentMasteryProfile(studentId){
 const topics=ITCoachCollectSkillProfile(studentId);
 const assessed=topics.filter(x=>x.score!==null);
 const avg=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.score,0)/assessed.length):null;
 const weak=topics.flatMap(x=>x.skills.map(s=>({...s,topicNo:x.topicNo,topicName:x.name}))).sort((a,b)=>a.score-b.score).slice(0,5);
 const mastered=topics.filter(x=>x.status==="Mastered").length;
 return{studentId,overallAverage:avg,assessedTopics:assessed.length,masteredTopics:mastered,topics,prioritySkills:weak};
}
function ITCoachRenderStudentMasteryProfile(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const p=ITCoachStudentMasteryProfile(studentId);
 e.innerHTML='<div class="card"><h2>Student Mastery Profile</h2><p><b>Overall assessed average:</b> '+(p.overallAverage===null?"Not yet assessed":p.overallAverage+"%")+'</p><p><b>Topics assessed:</b> '+p.assessedTopics+'/8 &nbsp; <b>Mastered:</b> '+p.masteredTopics+'</p><h3>Priority Skills</h3><ul>'+ (p.prioritySkills.length?p.prioritySkills.map(x=>'<li><b>Topic '+x.topicNo+' — '+x.topicName+':</b> '+x.skill+' ('+x.score+'%)</li>').join(''):'<li>No skill evidence yet.</li>')+'</ul><h3>Eight-Topic Overview</h3><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">'+p.topics.map(x=>'<div style="border:1px solid #ddd;border-radius:12px;padding:12px"><b>Topic '+x.topicNo+'</b><p>'+x.name+'</p><p>'+x.status+' '+(x.score===null?'':x.score+'%')+'</p><p>'+x.next.reason+'</p></div>').join('')+'</div></div>';
}
