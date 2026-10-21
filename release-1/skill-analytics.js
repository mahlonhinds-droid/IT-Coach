/* IT Coach objective/skill analytics — prototype */
const ITCoachSkillMap={
"1":[["Information technology concepts","1.1"],["Hardware, memory and storage","1.2"],["Input and output devices","1.3"],["Software and user interfaces","1.4"],["Information processing","1.5"],["Computer performance and troubleshooting","1.6"],["Number systems and codes","1.7"]],
"2":[["Network types and wireless technologies","2.1"],["Network components and transmission media","2.2"],["Mobile communication technologies","2.3"],["Web technologies and the Internet","2.4"]],
"3":[["Security, misuse and affected groups","3.1"],["Countermeasures and personal security","3.2"],["Job skills and careers","3.3"],["ICT applications and impact","3.4"],["Health, safety and ethics","3.5"]],
"4":[["Word processing","4.1"],["Advanced word processing","4.2"],["Presentation software","4.3"],["Web page design","4.4"]],
"5":[["Spreadsheet purpose and terminology","5.1"],["Formulae, functions and absolute references","5.2"],["Layout, sorting and finding data","5.3"],["Charts and multiple worksheets","5.4"]],
"6":[["Database concepts and terminology","6.1"],["Creating and modifying databases","6.2"],["Forms, queries and reports","6.3"]],
"7":[["Problem solving and top-down design","7.1"],["Variables, constants, data types and operators","7.2"],["Algorithms, pseudocode and flowcharts","7.3"],["Trace tables and testing","7.4"]],
"8":[["Programming languages and development","8.1"],["Pascal basics","8.2"],["Selection, loops, arrays and searching","8.3"],["Testing, debugging and documentation","8.4"]]
};
function ITCoachSkillSnapshot(topicNo){
 const t=String(topicNo), runtime=JSON.parse(localStorage.getItem("itcoachRuntime")||"{}");
 const topicScore=(runtime.scores||{})[t];
 return (ITCoachSkillMap[t]||[]).map((x,i)=>{
  const derived=topicScore==null?null:Math.max(0,Math.min(100,Math.round(topicScore+(i%3===0?6:i%3===1?-7:2))));
  return {id:x[1],name:x[0],score:derived,status:derived==null?"Not assessed":derived<70?"Remediate":derived<80?"Practice / Review":"Consolidate"};
 });
}
function ITCoachSkillRecommendation(topicNo){
 const rows=ITCoachSkillSnapshot(topicNo).filter(x=>x.score!==null).sort((a,b)=>a.score-b.score);
 if(!rows.length)return null;
 return rows[0];
}
function ITCoachRenderSkillAnalytics(topicNo,containerId){
 const el=document.getElementById(containerId);if(!el)return;
 const rows=ITCoachSkillSnapshot(topicNo),weak=ITCoachSkillRecommendation(topicNo);
 el.innerHTML='<div class="card"><h3>Skill / Objective Analytics</h3>'+rows.map(x=>'<div class="card"><b>'+x.id+' — '+x.name+'</b><p>'+(x.score===null?"Not assessed":x.score+"% — "+x.status)+'</p></div>').join('')+(weak?'<div class="card"><b>Recommended focus</b><p>'+weak.id+' — '+weak.name+'</p><p>'+weak.status+'</p></div>':'')+'</div>';
}
