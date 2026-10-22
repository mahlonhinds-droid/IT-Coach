/* IT Coach Topics 1-3 Universal Mastery Adapter 1.0 */
const ITCoachTopic13UniversalSkills={
  1:["hardware","information-processing","troubleshooting"],
  2:["network","transmission-media","web"],
  3:["security","countermeasure","ethics"]
};
function ITCoachUniversalSkillsForTopic(topicNo){
  return ITCoachTopic48Skills?.[Number(topicNo)]||ITCoachTopic13UniversalSkills[Number(topicNo)]||[];
}
function ITCoachEnsureTopic13Evidence(studentId){
  const rows=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]");
  let added=0;
  rows.filter(x=>x.studentId===studentId).forEach(x=>{
    const all=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]");
    const dup=all.some(e=>e.studentId===studentId&&e.topicNo===x.topicNo&&e.skill===x.skill&&e.type==="interactive"&&e.activityId===x.activityId&&Number(e.score)===Number(x.score));
    if(!dup&&x.skill){ITCoachRecordUniversalEvidence({studentId,topicNo:x.topicNo,skill:x.skill,score:x.score,type:"interactive",source:"topic1-3-interactive",evidence:x.activityId});added++;}
  });
  return added;
}
function ITCoachUniversalTopic13Mastery(studentId,topicNo){
  ITCoachEnsureTopic13Evidence(studentId);
  const skills=ITCoachUniversalSkillsForTopic(topicNo);
  const evidence=ITCoachUniversalEvidence(studentId,topicNo);
  const recorded=[...new Set(evidence.map(x=>x.skill))];
  const rows=[...new Set([...skills,...recorded])].map(skill=>ITCoachUniversalSkillMastery(studentId,topicNo,skill));
  const assessed=rows.filter(x=>x.score!==null);
  const average=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.score,0)/assessed.length):null;
  return {topicNo:Number(topicNo),average,status:average===null?"Not Assessed":average>=80?"Mastered":average>=70?"Developing":"Needs Attention",skills:rows,priority:assessed.sort((a,b)=>a.score-b.score)[0]||null};
}