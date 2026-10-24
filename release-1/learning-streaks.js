/* Browser-only learner motivation metrics 1.0 */
function ITCoachRecordLearningSession(studentId,topicNo,minutes){
 const key="itcoachLearningSessions",rows=JSON.parse(localStorage.getItem(key)||"[]");
 rows.push({studentId,topicNo,minutes:Number(minutes)||0,at:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(rows));
 return rows[rows.length-1];
}
function ITCoachLearnerStats(studentId){
 const rows=JSON.parse(localStorage.getItem("itcoachLearningSessions")||"[]").filter(x=>x.studentId===studentId);
 return{sessions:rows.length,minutes:rows.reduce((a,x)=>a+x.minutes,0),topics:[...new Set(rows.map(x=>x.topicNo))].length};
}
