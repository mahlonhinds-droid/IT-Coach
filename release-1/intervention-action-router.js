/* IT Coach intervention → existing learning action router 1.0 */
const ITCoachActionCatalog={
 "word-processing":["topic4-skills-lab","4.1"],"advanced-word-processing":["topic4-skills-lab","4.2"],presentation:["topic4-skills-lab","4.3"],"web-page":["topic4-skills-lab","4.4"],
 "spreadsheet-purpose":["spreadsheet-workspace","5.1"],"formula-functions":["spreadsheet-workspace","5.2"],"data-management":["spreadsheet-workspace","5.3"],charts:["spreadsheet-workspace","5.4"],
 "database-design":["database-workspace","6.1"],queries:["database-workspace","6.3"],"forms-subform":["database-workspace","6.3"],reports:["database-workspace","6.3"],
 "problem-solving":["topic1-3-course","7.1"],"data-types-operators":["topic1-3-course","7.2"],algorithms:["topic1-3-course","7.3"],"trace-tables":["topic1-3-course","7.4"],
 "programming-languages":["topic1-3-course","8.1"],"input-output-assignment":["topic1-3-course","8.2"],"selection-loops":["topic1-3-course","8.3"],"testing-debugging":["topic1-3-course","8.4"],
 "hardware":["topic1-3-course","1.2"],"information-processing":["topic1-3-course","1.5"],"troubleshooting":["topic1-3-course","1.6"],"number-systems":["topic1-3-course","1.7"],
 "networks":["topic1-3-course","2.1"],"transmission-media":["topic1-3-course","2.2"],"network-components":["topic1-3-course","2.2"],"web":["topic1-3-course","2.4"],"internet":["topic1-3-course","2.4"],
 "security":["topic1-3-course","3.1"],"countermeasure":["topic1-3-course","3.2"],"countermeasures":["topic1-3-course","3.2"],"ethics":["topic1-3-course","3.5"],"ict-impact":["topic1-3-course","3.4"]
};
function ITCoachResolveInterventionAction(studentId,topicNo){
 const x=ITCoachBuildIntervention(studentId,topicNo),target=x.skill?ITCoachActionCatalog[x.skill]:null;
 return Object.assign({},x,{target});
}
function ITCoachLaunchIntervention(studentId,topicNo){
 const x=ITCoachResolveInterventionAction(studentId,topicNo);
 if(!x.target)return x;
 const [container,lesson]=x.target;
 const el=document.getElementById(container);
 if(el)el.scrollIntoView({behavior:"smooth",block:"start"});
 localStorage.setItem("itcoachActiveIntervention",JSON.stringify({studentId,topicNo,skill:x.skill,mode:x.mode,lesson,target:x.target,timestamp:new Date().toISOString()}));
 ITCoachRecordIntervention(studentId,topicNo,x.skill,x.mode,x.mode);
 return x;
}
function ITCoachRenderInterventionAction(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const x=ITCoachResolveInterventionAction(studentId,topicNo);
 e.innerHTML='<div class="card"><h3>Start Recommended Action</h3><p><b>Skill:</b> '+(x.skill||"Diagnostic")+'</p><p><b>Mode:</b> '+x.mode+'</p><button onclick="ITCoachLaunchIntervention(\''+studentId+'\','+topicNo+')">Start '+x.mode.replace(/-/g," ")+'</button></div>';
}
