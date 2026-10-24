/* IT Coach assignment engine — browser-only prototype */
const ITCoachAssignmentsKey="itcoachAssignments";
function ITCoachAssignments(){try{return JSON.parse(localStorage.getItem(ITCoachAssignmentsKey)||"[]")}catch(e){return[]}}
function ITCoachSaveAssignments(a){localStorage.setItem(ITCoachAssignmentsKey,JSON.stringify(a))}
function ITCoachCreateAssignment(topic,title,dueDate){
 const a=ITCoachAssignments();const item={id:"A"+Date.now(),topic:String(topic),title:title||("Topic "+topic+" assessment"),dueDate:dueDate||"",status:"Assigned",createdAt:new Date().toISOString()};
 a.push(item);ITCoachSaveAssignments(a);return item;
}
function ITCoachUpdateAssignment(id,status){
 const a=ITCoachAssignments().map(x=>x.id===id?Object.assign({},x,{status}):x);ITCoachSaveAssignments(a);return a;
}
function ITCoachAssignmentForTopic(topic){
 return ITCoachAssignments().filter(x=>x.topic===String(topic));
}
function ITCoachAssignmentStatus(topic){
 const a=ITCoachAssignmentForTopic(topic);if(!a.length)return"Not assigned";
 const score=(JSON.parse(localStorage.itcoachRuntime||"{}").scores||{})[String(topic)];
 if(score!==undefined)return"Completed";
 return a.some(x=>x.status==="In Progress")?"In Progress":"Assigned";
}
