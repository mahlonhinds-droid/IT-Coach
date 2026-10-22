/* Student goals and achievement signals 1.0 */
function ITCoachSetStudentGoal(studentId,goal){
 const rows=JSON.parse(localStorage.getItem("itcoachStudentGoals")||"{}");rows[studentId]={goal,updatedAt:new Date().toISOString()};localStorage.setItem("itcoachStudentGoals",JSON.stringify(rows));return rows[studentId];
}
function ITCoachGetStudentGoal(studentId){
 return JSON.parse(localStorage.getItem("itcoachStudentGoals")||"{}")[studentId]||null;
}
function ITCoachStudentAchievements(studentId){
 const c=ITCoachBuildStudentCommandCentre(studentId),topics=c.topics;
 return{
  topicsStarted:topics.filter(x=>x.average!==null).length,
  topicsMastered:topics.filter(x=>x.status==="Mastered").length,
  skillsWithEvidence:topics.reduce((n,x)=>n+x.skills.filter(s=>s.score!==null).length,0),
  growthSignals:topics.filter(x=>x.average!==null&&x.average>=80).length
 };
}
