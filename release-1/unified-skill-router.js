/* IT Coach unified skill-level routing 1.0 */
function ITCoachTopicSkillEvidence(studentId,topicNo){
 const out={};
 const adaptive=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId&&x.topicNo===topicNo);
 adaptive.forEach(x=>{if(!out[x.skill])out[x.skill]=[];out[x.skill].push(Number(x.score));});
 const tagged=JSON.parse(localStorage.getItem("itcoachLastAdaptive")||"null");
 if(tagged&&Number(tagged.topicNo)===topicNo&&tagged.skillScores){
  Object.entries(tagged.skillScores).forEach(([skill,v])=>{if(!out[skill])out[skill]=[];out[skill].push(Number(v));});
 }
 return Object.entries(out).map(([skill,scores])=>({skill,score:Math.round(scores.reduce((a,b)=>a+b,0)/scores.length),attempts:scores.length})).sort((a,b)=>a.score-b.score);
}
const ITCoachSkillRoutes={
1:{revision:"1.2",practice:"1.5",advanced:"1.7"},
2:{revision:"2.1",practice:"2.2",advanced:"2.4"},
3:{revision:"3.1",practice:"3.2",advanced:"3.5"},
4:{revision:"4.1",practice:"4.2",advanced:"4.4"},
5:{revision:"5.1",practice:"5.2",advanced:"5.4"},
6:{revision:"6.1",practice:"6.3",advanced:"6.3"},
7:{revision:"7.1",practice:"7.3",advanced:"7.4"},
8:{revision:"8.1",practice:"8.3",advanced:"8.4"}};
function ITCoachUnifiedSkillNextStep(studentId,topicNo){
 const skills=ITCoachTopicSkillEvidence(studentId,topicNo),weak=skills[0];
 if(!weak)return ITCoachUnifiedNextStep(studentId,topicNo);
 const mode=weak.score<70?"revision":weak.score<85?"practice":"advanced";
 return{topicNo,skill:weak.skill,score:weak.score,attempts:weak.attempts,mode,lessonId:ITCoachSkillRoutes[topicNo][mode],reason:"Next step is selected from the weakest demonstrated skill."};
}
