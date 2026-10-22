/* Topics 1–3 Mastery Centre 1.0 */
function ITCoachTopic13Mastery(studentId,topicNo){
 const labs=ITCoachGetTopic13Labs(topicNo),attempts=ITCoachTopic13Latest(studentId),by={};
 labs.forEach(l=>by[l.id]=attempts.find(a=>a.labId===l.id)||null);
 const assessed=Object.values(by).filter(Boolean),avg=assessed.length?Math.round(assessed.reduce((n,x)=>n+x.score,0)/assessed.length):null;
 const weak=assessed.filter(x=>x.score<80).sort((a,b)=>a.score-b.score);
 return{studentId,topicNo,topicName:ITCoachTopicAdapter(topicNo)?.name||"",labCount:labs.length,assessed:assessed.length,average:avg,weak, status:avg===null?"Not Assessed":avg>=80?"Mastered":avg>=70?"Developing":"Needs Revision",nextStep:avg===null?"Complete a Skills Lab":weak.length?"Complete targeted revision and reassessment":"Attempt a higher-level application activity"};
}
function ITCoachRenderTopic13Mastery(studentId,topicNo,containerId){
 const e=document.getElementById(containerId),m=ITCoachTopic13Mastery(studentId,topicNo);if(!e)return;
 e.innerHTML='<div class="card"><h2>Mastery Centre — Topic '+topicNo+'</h2><p><b>'+m.topicName+'</b></p><p><b>Status:</b> '+m.status+' &nbsp; <b>Average:</b> '+(m.average===null?"—":m.average+"%")+'</p><p><b>Progress:</b> '+m.assessed+' of '+m.labCount+' labs assessed</p><h3>Recommended Next Step</h3><p>'+m.nextStep+'</p><h3>Skill/Lab Priorities</h3>'+m.weak.map(x=>'<p>⚠ '+x.labId+' — '+x.score+'%</p>').join('')+'</div>';
}
