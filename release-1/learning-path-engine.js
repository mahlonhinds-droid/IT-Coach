/* IT Coach personalized learning path — prototype */
function ITCoachBuildLearningPath(topicNo){
 const t=String(topicNo), skills=ITCoachSkillSnapshot(t), weak=skills.filter(x=>x.score!==null&&x.score<80).sort((a,b)=>a.score-b.score);
 const target=weak[0]||skills.find(x=>x.score===null)||null;
 if(!target)return {topic:t,status:"Mastered",steps:[{type:"consolidate",title:"Consolidate current mastery"}]};
 const p=ITCoachRemediationPlan(t,target.name);
 return {topic:t,status:"Targeted",target,steps:[
  {type:"review",title:"Review "+target.id+" — "+target.name},
  {type:"activity",title:"Complete the guided learning activity"},
  {type:"practice",title:"Complete targeted practice"},
  {type:"assessment",title:"Take reassessment"},
  {type:"mastery",title:"Confirm mastery before moving on"}
 ],remediation:p};
}
function ITCoachSaveLearningPath(path){
 const all=JSON.parse(localStorage.getItem("itcoachLearningPaths")||"[]");
 all.push({...path,createdAt:new Date().toISOString()});
 localStorage.setItem("itcoachLearningPaths",JSON.stringify(all));return path;
}
function ITCoachRenderLearningPath(topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const p=ITCoachBuildLearningPath(topicNo);
 e.innerHTML='<div class="card"><h2>My Learning Path</h2><p><b>Status:</b> '+p.status+'</p>'+(p.target?'<p><b>Priority skill:</b> '+p.target.id+' — '+p.target.name+'</p>':'')+'<ol>'+p.steps.map(x=>'<li style="margin:12px 0">'+x.title+'</li>').join('')+'</ol><button onclick="saveCurrentLearningPath('+topicNo+')">Save Learning Path</button></div>';
}
function saveCurrentLearningPath(topicNo){ITCoachSaveLearningPath(ITCoachBuildLearningPath(topicNo));alert("Your personalized learning path has been saved in this browser.");}
