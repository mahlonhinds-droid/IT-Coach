/* Bridge Topic 4–8 practical evidence into universal mastery */
function ITCoachRecordPracticalUniversal(studentId,topicNo,skill,score,lessonId,source,evidence){
 return ITCoachRecordUniversalEvidence({studentId,topicNo,skill,score,type:"practical",lessonId,source:source||"practical-workspace",evidence:evidence||""});
}
function ITCoachBridgeTopic13Mastery(studentId,topicNo){
 const rows=JSON.parse(localStorage.getItem("itcoachTopic13Mastery")||"[]").filter(x=>x.studentId===studentId&&Number(x.topicNo)===Number(topicNo));
 let added=0;rows.forEach(x=>{if(x.score!==undefined){const all=ITCoachUniversalEvidence(studentId,topicNo);const dup=all.some(e=>e.type==="practical"&&e.source==="topic13-mastery"&&e.evidence===x.labId&&e.score===Number(x.score));if(!dup){ITCoachRecordPracticalUniversal(studentId,topicNo,x.labId,x.score,x.lessonId,"topic13-mastery",x.labId);added++;}}});return added;
}
function ITCoachUniversalEvidenceTypeSummary(studentId,topicNo){
 const all=ITCoachUniversalEvidence(studentId,topicNo),out={};all.forEach(x=>out[x.type]=(out[x.type]||0)+1);return out;
}
