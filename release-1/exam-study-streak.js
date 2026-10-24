/* IT Coach exam study consistency 1.0 */
function ITCoachExamStudyConsistency(studentId){
 const sessions=JSON.parse(localStorage.getItem("itcoachLearningSessions")||"[]").filter(x=>x.studentId===studentId).sort((a,b)=>String(a.at||"").localeCompare(String(b.at||"")));
 const days=new Set(sessions.map(x=>String(x.at||"").slice(0,10)).filter(Boolean));
 return{studyDays:days.size,recentSessions:sessions.slice(-7).length,consistent:days.size>=5};
}
