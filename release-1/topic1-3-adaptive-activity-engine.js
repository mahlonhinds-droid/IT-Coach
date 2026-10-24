/* Topics 1–3 adaptive activity engine 1.0 */
function ITCoachRecordInteractive13Result(studentId,topicNo,activityId,score,skill){
 const key="itcoachInteractive13Results",all=JSON.parse(localStorage.getItem(key)||"[]");
 const rec={studentId,topicNo,activityId,skill,score:Number(score),at:new Date().toISOString()};
 all.push(rec);localStorage.setItem(key,JSON.stringify(all));
 if(typeof ITCoachRecordProgress==="function")ITCoachRecordProgress({studentId,topicNo,activityId,type:"interactive",score:rec.score,skill});
 return rec;
}
function ITCoachInteractive13SkillTrend(studentId,topicNo,skill){
 const all=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId&&x.topicNo===topicNo&&(!skill||x.skill===skill));
 if(!all.length)return null;
 return{attempts:all.length,first:all[0].score,latest:all[all.length-1].score,growth:all[all.length-1].score-all[0].score};
}
function ITCoachInteractive13NextAction(studentId,topicNo){
 const all=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId&&x.topicNo===topicNo);
 if(!all.length)return"Start an interactive activity.";
 const avg=Math.round(all.reduce((n,x)=>n+x.score,0)/all.length);
 if(avg<70)return"Complete targeted revision, then repeat a foundational activity.";
 if(avg<85)return"Practice the weakest skill with a new scenario.";
 return"Attempt a more challenging application activity.";
}
