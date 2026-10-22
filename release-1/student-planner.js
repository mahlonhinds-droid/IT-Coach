/* IT Coach Student Planner 1.1 */
function ITCoachBuildStudentPlanner(studentId){
 const items=[];
 (ITCoachStudentAssignments(studentId)||[]).forEach(a=>items.push({id:a.id,type:"assignment",title:a.title,date:a.dueDate||null,topicNo:a.topicNo||null,priority:"normal"}));
 const c=ITCoachBuildStudentCommandCentre(studentId);
 if(c&&c.priority)items.push({id:"priority-"+c.priority.topicNo,type:"learning",title:"Priority learning: Topic "+c.priority.topicNo,date:null,topicNo:c.priority.topicNo,priority:"high"});
 const notes=ITCoachBuildStudentNotifications(studentId);
 (notes||[]).filter(n=>n.type==="support").forEach((n,i)=>items.push({id:"support-"+i,type:"support",title:"Review learning support",date:null,topicNo:n.topicNo,priority:"high"}));
 return items;
}
function ITCoachPlannerDayKey(date){return date?String(date).slice(0,10):"no-date";}
function ITCoachRenderStudentPlanner(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const items=ITCoachBuildStudentPlanner(studentId);
 const groups={};items.forEach(x=>(groups[ITCoachPlannerDayKey(x.date)]??=[]).push(x));
 e.innerHTML='<div class="card"><h2>My Planner</h2>'+Object.keys(groups).map(k=>'<div class="card"><h3>'+(k==="no-date"?"Flexible learning":k)+'</h3>'+groups[k].map(x=>'<p><b>'+x.title+'</b> — '+x.type+'</p>').join('')+'</div>').join('')+'</div>';
}
