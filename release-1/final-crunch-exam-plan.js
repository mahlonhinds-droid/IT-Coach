/* IT Coach Final Crunch Exam Prep 1.0
   Configurable 14-30 day plan. Prototype guidance only; not official CXC scheduling. */
function ITCoachBuildFinalCrunchPlan(studentId,days){
 const total=Math.max(14,Math.min(30,Number(days)||30));
 const c=ITCoachBuildStudentCommandCentre(studentId);
 const topics=(c.topics||[]).slice().sort((a,b)=>(a.average===null?0:a.average)-(b.average===null?0:b.average));
 const weak=topics.filter(x=>x.average!==null).slice(0,3).map(x=>x.topicNo);
 const unassessed=topics.filter(x=>x.average===null).map(x=>x.topicNo);
 const phases=[
  {name:"Diagnose & Prioritize",ratio:.15,focus:"Diagnostic review, identify weak skills, build exam plan"},
  {name:"Targeted Revision",ratio:.35,focus:"Weak topics, misconceptions, guided practice"},
  {name:"Exam Practice",ratio:.30,focus:"Timed mixed questions, structured responses and practical tasks"},
  {name:"Final Simulation",ratio:.20,focus:"Full timed mock, error review and final confidence check"}
 ];
 let used=0;
 const plan=phases.map((p,i)=>{let n=i===phases.length-1?total-used:Math.max(1,Math.round(total*p.ratio));used+=n;return{phase:p.name,days:n,focus:p.focus};});
 return{studentId,days:total,priorityTopics:weak,unassessedTopics:unassessed,plan,weeklyPattern:[
  "Learn/revise → timed practice → mark → analyze errors",
  "Repeat weak skills before moving to new content",
  "Keep practical tasks in rotation for Topics 4–8",
  "Finish each day with a short retrieval review"
 ],dailyTemplate:{
  session1:"30-45 min targeted revision",
  session2:"30-45 min exam questions",
  session3:"20-30 min error correction/retrieval",
  practical:"20-40 min practical/programming task on selected days"
 }};
}
function ITCoachCrunchDayPlan(studentId,day,days){
 const p=ITCoachBuildFinalCrunchPlan(studentId,days),d=Number(day);
 const phase=p.plan.reduce((acc,x)=>{if(d>acc.total)acc.total+=x.days;return acc},{total:0});
 let cumulative=0,selected=p.plan[0];
 for(const x of p.plan){cumulative+=x.days;if(d<=cumulative){selected=x;break;}}
 const intensity=d>=Math.ceil(days*.8)?"high":"moderate";
 return{day:d,totalDays:p.days,phase:selected,intensity,priorityTopics:p.priorityTopics,unassessedTopics:p.unassessedTopics,template:p.dailyTemplate};
}
function ITCoachRenderFinalCrunchPlan(studentId,days,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const p=ITCoachBuildFinalCrunchPlan(studentId,days);
 e.innerHTML='<div class="card"><h2>Final Crunch Exam Prep — '+p.days+' Days</h2><p><b>Priority topics:</b> '+(p.priorityTopics.length?p.priorityTopics.join(", "):"Build diagnostic evidence first")+'</p>'+p.plan.map((x,i)=>'<div class="card"><h3>Phase '+(i+1)+': '+x.phase+' ('+x.days+' days)</h3><p>'+x.focus+'</p></div>').join('')+'<h3>Daily rhythm</h3>'+Object.values(p.dailyTemplate).map(x=>'<p>• '+x+'</p>').join('')+'</div>';
}
