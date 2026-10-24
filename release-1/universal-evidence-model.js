/* IT Coach Universal Evidence & Mastery Model 2.0 — browser-only, backward compatible */
const ITCoachEvidenceTypes={knowledge:"Knowledge Assessment",interactive:"Interactive Activity",practical:"Practical Evidence",reassessment:"Reassessment"};
function ITCoachNormalizeEvidence(input){
  const subjectId=input.subjectId||"IT";
  const courseId=input.courseId||(subjectId==="IT"?"CSEC_IT":null);
  return {
    subjectId:String(subjectId),
    courseId:courseId?String(courseId):null,
    curriculumId:input.curriculumId||(courseId==="CSEC_IT"?"CSEC":null),
    topicId:input.topicId!==undefined?String(input.topicId):String(input.topicNo),
    lessonId:input.lessonId||null,
    skillId:input.skillId||input.skill||"General"
  };
}
function ITCoachRecordUniversalEvidence(input){
  const n=ITCoachNormalizeEvidence(input);
  const rec={id:"ev_"+Date.now()+"_"+Math.random().toString(36).slice(2,7),studentId:String(input.studentId),subjectId:n.subjectId,courseId:n.courseId,curriculumId:n.curriculumId,topicId:n.topicId,topicNo:Number(input.topicNo!==undefined?input.topicNo:n.topicId),lessonId:n.lessonId,skillId:n.skillId,skill:n.skillId,type:input.type||input.evidenceType||"interactive",evidenceType:input.evidenceType||input.type||"interactive",score:Number(input.score),source:input.source||"prototype",evidence:input.evidence||"",at:new Date().toISOString()};
  const all=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]");all.push(rec);localStorage.setItem("itcoachUniversalEvidence",JSON.stringify(all));return rec;
}
function ITCoachUniversalEvidence(studentId,topicNo,subjectId){
  const sid=subjectId||"IT";
  return JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]").filter(x=>String(x.studentId)===String(studentId)&&String(x.subjectId||"IT")===String(sid)&&String(x.topicId||x.topicNo)===String(topicNo));
}
function ITCoachUniversalSkillSummary(studentId,topicNo,subjectId){
  const all=ITCoachUniversalEvidence(studentId,topicNo,subjectId),map={};
  all.forEach(x=>{const k=x.skillId||x.skill||"General";if(!map[k])map[k]=[];map[k].push(Number(x.score))});
  return Object.entries(map).map(([skill,s])=>({skill,score:Math.round(s.reduce((a,b)=>a+b,0)/s.length),attempts:s.length})).sort((a,b)=>a.score-b.score);
}
function ITCoachUniversalMastery(studentId,topicNo,subjectId){
  const sid=subjectId||"IT",all=ITCoachUniversalEvidence(studentId,topicNo,sid),avg=all.length?Math.round(all.reduce((a,x)=>a+Number(x.score),0)/all.length):null;
  return{subjectId:sid,topicId:String(topicNo),topicNo,average:avg,evidenceCount:all.length,status:avg===null?"Not Assessed":avg>=80?"Mastered":avg>=70?"Developing":"Needs Attention",skills:ITCoachUniversalSkillSummary(studentId,topicNo,sid)};
}