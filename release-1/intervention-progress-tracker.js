/* Intervention progress tracking 1.1 */
function ITCoachRecordIntervention(studentId,topicNo,skill,mode,action){
 const key="itcoachInterventionHistory",rows=JSON.parse(localStorage.getItem(key)||"[]");
 rows.push({id:"iv-"+Date.now(),studentId,topicNo,skill,mode,action,timestamp:new Date().toISOString()});
 localStorage.setItem(key,JSON.stringify(rows));return rows[rows.length-1];
}
function ITCoachInterventionHistory(studentId,topicNo){
 return JSON.parse(localStorage.getItem("itcoachInterventionHistory")||"[]").filter(x=>x.studentId===studentId&&Number(x.topicNo)===Number(topicNo));
}
function ITCoachInterventionOutcome(studentId,topicNo,skill){
 const ev=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>x.skill===skill);
 if(!ev.length)return null;
 const sorted=[...ev].sort((a,b)=>new Date(a.timestamp||a.at||0)-new Date(b.timestamp||b.at||0));
 return{first:sorted[0].score,latest:sorted[sorted.length-1].score,growth:sorted[sorted.length-1].score-sorted[0].score,evidenceCount:sorted.length};
}
