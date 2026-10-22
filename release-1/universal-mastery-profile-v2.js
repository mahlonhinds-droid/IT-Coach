/* Universal Mastery Profile v2 */
function ITCoachBuildUniversalProfile(studentId){
 const topics=[];for(let t=1;t<=8;t++)topics.push(ITCoachUniversalMastery(studentId,t));
 const assessed=topics.filter(x=>x.average!==null),avg=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.average,0)/assessed.length):null;
 const skills=topics.flatMap(x=>x.skills.map(s=>({...s,topicNo:x.topicNo}))).sort((a,b)=>a.score-b.score);
 return{studentId,overallAverage:avg,topics,prioritySkills:skills.slice(0,5)};
}
function ITCoachRenderUniversalMasteryProfile(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;const p=ITCoachBuildUniversalProfile(studentId);
 e.innerHTML='<div class="card"><h2>Universal Mastery Profile</h2><p><b>Overall evidence average:</b> '+(p.overallAverage===null?"Not assessed":p.overallAverage+"%")+'</p><h3>Priority Skills</h3><ul>'+ (p.prioritySkills.length?p.prioritySkills.map(x=>'<li>Topic '+x.topicNo+' — '+x.skill+': '+x.score+'%</li>').join(''):'<li>No universal evidence yet.</li>')+'</ul><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">'+p.topics.map(x=>'<div style="border:1px solid #ddd;border-radius:12px;padding:12px"><b>Topic '+x.topicNo+'</b><p>'+x.status+'</p><p>'+ (x.average===null?"No evidence":x.average+"% · "+x.evidenceCount+" evidence item(s)")+'</p></div>').join('')+'</div></div>';
}
