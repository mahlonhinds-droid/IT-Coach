/* IT Coach Post Exam Reflection 1.0 */
function ITCoachSavePostExamReflection(studentId,input){
 const rows=JSON.parse(localStorage.getItem("itcoachPostExamReflection")||"[]");
 const item={id:"reflection-"+Date.now(),studentId,confidence:input?.confidence||"",topicsToImprove:input?.topicsToImprove||"",whatWorked:input?.whatWorked||"",nextGoal:input?.nextGoal||"",at:new Date().toISOString()};
 rows.push(item);localStorage.setItem("itcoachPostExamReflection",JSON.stringify(rows));return item;
}
function ITCoachPostExamReflections(studentId){
 return JSON.parse(localStorage.getItem("itcoachPostExamReflection")||"[]").filter(x=>x.studentId===studentId);
}
