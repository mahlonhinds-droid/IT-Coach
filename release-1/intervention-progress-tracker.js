/* Subject-aware intervention progress tracking 1.2 */
function ITCoachRecordIntervention(studentId,topicNo,skill,mode,action,subjectId,courseId,curriculumId){
 const c=ITCoachInterventionContext(subjectId,courseId,curriculumId),key="itcoachInterventionHistory",rows=JSON.parse(localStorage.getItem(key)||"[]");
 const row={id:"iv-"+Date.now(),studentId,subjectId:c.subjectId,courseId:c.courseId,curriculumId:c.curriculumId,topicNo,skill,mode,action,timestamp:new Date().toISOString()};
 rows.push(row);localStorage.setItem(key,JSON.stringify(rows));return row;
}
function ITCoachInterventionHistory(studentId,topicNo,subjectId,courseId){
 const c=ITCoachInterventionContext(subjectId,courseId);
 return JSON.parse(localStorage.getItem("itcoachInterventionHistory")||"[]").filter(x=>x.studentId===studentId&&(x.subjectId||"IT")===c.subjectId&&(!c.courseId||!x.courseId||x.courseId===c.courseId)&&Number(x.topicNo)===Number(topicNo));
}
function ITCoachInterventionOutcome(studentId,topicNo,skill,subjectId,courseId){
 const c=ITCoachInterventionContext(subjectId,courseId),ev=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>(x.subjectId||"IT")===c.subjectId&&(!c.courseId||!x.courseId||x.courseId===c.courseId)&&x.skill===skill);
 if(!ev.length)return null;
 const sorted=[...ev].sort((a,b)=>ITCoachEvidenceTime(a)-ITCoachEvidenceTime(b));
 return{subjectId:c.subjectId,courseId:c.courseId,first:sorted[0].score,latest:sorted[sorted.length-1].score,growth:sorted[sorted.length-1].score-sorted[0].score,evidenceCount:sorted.length};
}