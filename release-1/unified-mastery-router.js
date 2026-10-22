/* Unified Mastery Router 1.0 */
function ITCoachMasteryTopicConfig(topicNo){
 const a=ITCoachTopicAdapter(topicNo);if(!a)return null;
 return{topicNo,name:a.name,skills:ITCoachTopicSkillDefinitions(topicNo),nextStep:"Assess current skill mastery and follow the recommended learning path."};
}
function ITCoachRenderUnifiedTopicMap(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 e.innerHTML='<div class="card"><h2>IT Coach — 8 Topic Mastery Map</h2>'+Object.keys(ITCoachTopicAdapters).map(n=>{const a=ITCoachTopicAdapters[n];return '<div style="margin:10px 0;padding:8px;border:1px solid #ddd"><b>Topic '+n+': '+a.name+'</b><br><small>'+a.skills.length+' mapped skills</small><br><button onclick="ITCoachRenderTopicAdapterSummary('+n+',\''+containerId+'\')">Open Mastery Map</button></div>'}).join('')+'</div>';
}
