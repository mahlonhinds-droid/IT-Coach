/* Topic 4 teacher intervention planner — browser-only prototype */
function ITCoachTopic4BuildInterventionGroups(){
 const data=ITCoachTopic4ClassSnapshot(),groups={};
 data.forEach(s=>{s.rows.filter(x=>x.score!==null&&x.score<80).forEach(x=>{if(!groups[x.id])groups[x.id]=[];groups[x.id].push({student:s.student,score:x.score})})});
 return Object.entries(groups).map(([lab,students])=>({lab,students,priority:students.length>=5?"High":students.length>=3?"Medium":"Low"}));
}
function ITCoachRenderTopic4InterventionPlanner(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const groups=ITCoachTopic4BuildInterventionGroups();
 e.innerHTML='<div class="card"><h3>Topic 4 Intervention Planner</h3>'+(groups.length?groups.map(g=>'<section style="margin:10px 0;padding:8px;border:1px solid #aaa"><b>'+ITCoachTopic4Teacher.labels[g.lab]+'</b> — '+g.priority+' priority<p>'+g.students.map(s=>s.student+' ('+s.score+'%)').join(', ')+'</p><button onclick="ITCoachTopic4SaveIntervention(\''+g.lab+'\')">Create Intervention Group</button></section>').join(''):'<p>No intervention groups currently identified.</p>')+'</div>';
}
function ITCoachTopic4SaveIntervention(lab){
 const groups=JSON.parse(localStorage.getItem("itcoachTopic4InterventionGroups")||"[]");
 const students=ITCoachTopic4BuildInterventionGroups().find(x=>x.lab===lab);
 if(!students)return;
 groups.push({lab,students:students.students,createdAt:new Date().toISOString(),status:"planned"});
 localStorage.setItem("itcoachTopic4InterventionGroups",JSON.stringify(groups));
 const e=document.getElementById("topic4InterventionStatus");if(e)e.textContent="Intervention group created for "+ITCoachTopic4Teacher.labels[lab]+".";
}
