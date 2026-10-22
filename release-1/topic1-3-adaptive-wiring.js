/* Topics 1–3 adaptive event wiring 1.0 */
function ITCoachCompleteInteractive13(studentId,topicNo,activityId,score,skill){
  const rec=ITCoachRecordInteractive13Result(studentId,topicNo,activityId,score,skill);
  const lessons=ITCoachActivityLessons13(activityId);
  const next=ITCoachInteractive13NextAction(studentId,topicNo);
  if(typeof ITCoachRecordProgress==="function")ITCoachRecordProgress({studentId,topicNo,type:"adaptive-interaction-complete",activityId,score,skill,lessons,next});
  localStorage.setItem("itcoachLastInteractive13",{...rec,lessons,next,updatedAt:new Date().toISOString()} instanceof Object?JSON.stringify({...rec,lessons,next}):"");
  return{...rec,lessons,next};
}
function ITCoachInteractive13Recommendation(studentId,topicNo){
  const results=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId&&x.topicNo===topicNo);
  if(!results.length)return{status:"new",message:"Start a Topic "+topicNo+" interactive activity."};
  const skillScores={};
  results.forEach(x=>{skillScores[x.skill]=(skillScores[x.skill]||[]).concat(x.score)});
  const weak=Object.entries(skillScores).map(([skill,s])=>({skill,average:Math.round(s.reduce((a,b)=>a+b,0)/s.length)})).sort((a,b)=>a.average-b.average)[0];
  const action=ITCoachInteractive13NextAction(studentId,topicNo);
  return{status:"active",weakSkill:weak?.skill||null,weakScore:weak?.average??null,lessonIds:weak?ITCoachActivityLessons13(results.find(x=>x.skill===weak.skill)?.activityId):[],action};
}
