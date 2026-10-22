/* IT Coach Mock Simulation Tracker 1.0 */
function ITCoachRecordExamSimulation(studentId,score,kind){
 const rows=JSON.parse(localStorage.getItem("itcoachExamSimulations")||"[]");
 rows.push({id:"sim-"+Date.now(),studentId,score:Number(score),kind:kind||"mock",at:new Date().toISOString()});
 localStorage.setItem("itcoachExamSimulations",JSON.stringify(rows));
 return rows[rows.length-1];
}
function ITCoachExamSimulations(studentId){
 return JSON.parse(localStorage.getItem("itcoachExamSimulations")||"[]").filter(x=>x.studentId===studentId);
}
function ITCoachExamSimulationTrend(studentId){
 const rows=ITCoachExamSimulations(studentId);
 return rows.map((x,i)=>({attempt:i+1,score:x.score,kind:x.kind,at:x.at}));
}
