/* IT Coach class-level targeted intervention groups — browser-only prototype */
function ITCoachEligibleStudents(classId,topicNo,band){
 const c=ITCoachClasses().find(x=>x.id===classId);if(!c)return[];
 return c.students.filter(s=>{const v=s.scores&&s.scores[String(topicNo)];if(band==="remediate")return v!=null&&v<70;if(band==="practice")return v!=null&&v>=70&&v<80;if(band==="unassessed")return v==null;return true;});
}
function ITCoachCreateInterventionGroup(classId,topicNo,band){
 const students=ITCoachEligibleStudents(classId,topicNo,band);
 return {id:"ig"+Date.now(),classId,topic:String(topicNo),band,studentIds:students.map(s=>s.id),createdAt:new Date().toISOString(),count:students.length};
}
function ITCoachAssignInterventionGroup(group,title){
 const a=ITCoachClasses(),c=a.find(x=>x.id===group.classId);if(!c)return null;
 c.students.forEach(s=>{if(group.studentIds.includes(s.id)){s.assignments=s.assignments||[];s.assignments.push({topic:group.topic,title:title||"Targeted intervention — Topic "+group.topic,status:"Assigned",groupId:group.id,createdAt:new Date().toISOString()});}});
 ITCoachSaveClasses(a);return c;
}
function ITCoachRenderInterventionGroups(classId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const topics=[];for(let n=1;n<=8;n++)topics.push(n);
 e.innerHTML='<div class="card"><h2>Targeted Class Interventions</h2>'+topics.map(n=>{const r=ITCoachEligibleStudents(classId,n,"remediate"),p=ITCoachEligibleStudents(classId,n,"practice");return '<div class="card"><b>Topic '+n+'</b><p>🔴 '+r.length+' remediation • 🟡 '+p.length+' practice</p>'+(r.length?'<button onclick="assignGroup('+n+',\'remediate\')">Assign remediation to '+r.length+'</button>':'')+(p.length?'<button onclick="assignGroup('+n+',\'practice\')">Assign practice to '+p.length+'</button>':'')+'</div>'}).join('')+'</div>';
}
function assignGroup(topicNo,band){const c=ITCoachClasses()[0],g=ITCoachCreateInterventionGroup(c.id,topicNo,band);ITCoachAssignInterventionGroup(g,(band==="remediate"?"Targeted remediation — ":"Targeted practice — ")+"Topic "+topicNo);alert("Assigned to "+g.count+" students.");ITCoachRenderInterventionGroups(c.id,"interventionGroups");}
