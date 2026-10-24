/* Bridge existing prototype evidence into the universal evidence model */
function ITCoachBridgeInteractive13Evidence(studentId){
 const src=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId);
 const existing=ITCoachUniversalEvidence(studentId,0).map(x=>x.id);
 let added=0;
 src.forEach(x=>{const all=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]");const dup=all.some(e=>e.studentId===studentId&&e.topicNo===x.topicNo&&e.skill===x.skill&&e.type==="interactive"&&e.score===Number(x.score)&&e.activityId===x.activityId);if(!dup){ITCoachRecordUniversalEvidence({studentId,topicNo:x.topicNo,skill:x.skill,score:x.score,type:"interactive",source:"topic1-3-interactive",evidence:x.activityId});added++;}});
 return added;
}
function ITCoachBridgeAdaptiveAssessment(studentId){
 const x=JSON.parse(localStorage.getItem("itcoachLastAdaptive")||"null");if(!x||String(x.studentId||studentId)!==String(studentId)||!x.skillScores)return 0;
 let added=0;Object.entries(x.skillScores).forEach(([skill,score])=>{const all=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]");const dup=all.some(e=>e.studentId===studentId&&e.topicNo===Number(x.topicNo)&&e.skill===skill&&e.type==="knowledge"&&e.score===Number(score));if(!dup){ITCoachRecordUniversalEvidence({studentId,topicNo:x.topicNo,lessonId:x.lessonId,skill,score,type:"knowledge",source:"adaptive-assessment"});added++;}});
 return added;
}
