/* Unified 8-topic student journey 1.0 */
function ITCoachBuildTopicJourney(topicNo,studentId){
 const a=ITCoachTopicAdapter(topicNo);
 if(!a)return null;
 const skills=ITCoachTopicSkillDefinitions(topicNo);
 return {
  topicNo,studentId,name:a.name,skills,
  stages:["Learn","Practice","Assess","Diagnose","Targeted Revision","Reassess","Mastery","Portfolio"],
  actions:skills.map(s=>({skill:s.id,label:s.label,next:"Assess and record mastery for this skill"}))
 };
}
function ITCoachRenderUnifiedTopicJourney(containerId,topicNo,studentId){
 const e=document.getElementById(containerId),j=ITCoachBuildTopicJourney(topicNo,studentId);
 if(!e||!j)return;
 e.innerHTML='<div class="card"><h2>Topic '+topicNo+' — '+j.name+'</h2><p><b>Student:</b> '+studentId+'</p><h3>Learning Journey</h3><div style="display:flex;flex-wrap:wrap;gap:6px">'+j.stages.map((x,i)=>'<span style="padding:7px;border:1px solid #bbb;border-radius:6px">'+(i+1)+'. '+x+'</span>').join('')+'</div><h3>Mapped Skills</h3>'+j.skills.map(s=>'<p><b>'+s.label+'</b> — '+s.next+'</p>').join('')+'</div>';
}
function ITCoachRenderEightTopicJourney(containerId,studentId){
 const e=document.getElementById(containerId);if(!e)return;
 e.innerHTML='<div class="card"><h2>IT Coach — Student 8-Topic Journey</h2><p><b>Student:</b> '+studentId+'</p>'+Object.keys(ITCoachTopicAdapters).map(n=>'<p><b>Topic '+n+':</b> '+ITCoachTopicAdapters[n].name+' <button onclick="ITCoachRenderUnifiedTopicJourney(\''+containerId+'\','+n+',\''+studentId+'\')">Open</button></p>').join('')+'</div>';
}
