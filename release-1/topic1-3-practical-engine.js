/* Topics 1–3 practical evidence + mastery adapter */
function ITCoachTopic13ScoreLab(labId,studentId,criteriaScores){
 const rubric=ITCoachTopic13Rubrics[labId]||[],total=rubric.reduce((n,x)=>n+x[1],0),earned=Object.values(criteriaScores||{}).reduce((n,x)=>n+(Number(x)||0),0),score=Math.round(total?earned/total*100:0);
 const key="itcoachTopic13Mastery",all=JSON.parse(localStorage.getItem(key)||"[]"),rec={labId,studentId,criteriaScores,score,status:ITCoachTopic13ScoreBand(score),at:new Date().toISOString()};
 all.push(rec);localStorage.setItem(key,JSON.stringify(all));return rec;
}
function ITCoachTopic13Latest(studentId){
 const all=JSON.parse(localStorage.getItem("itcoachTopic13Mastery")||"[]"),m={};
 all.filter(x=>x.studentId===studentId).forEach(x=>m[x.labId]=x);return Object.values(m);
}
function ITCoachTopic13WeakLabs(studentId){return ITCoachTopic13Latest(studentId).filter(x=>x.score<80).sort((a,b)=>a.score-b.score)}
