/* IT Coach Universal Evidence & Mastery Model 1.0 — browser-only */
const ITCoachEvidenceTypes={knowledge:"Knowledge Assessment",interactive:"Interactive Activity",practical:"Practical Evidence",reassessment:"Reassessment"};
function ITCoachRecordUniversalEvidence(input){
 const rec={id:"ev_"+Date.now()+"_"+Math.random().toString(36).slice(2,7),studentId:input.studentId,topicNo:Number(input.topicNo),lessonId:input.lessonId||null,skill:input.skill||"General",type:input.type||"interactive",score:Number(input.score),source:input.source||"prototype",evidence:input.evidence||"",at:new Date().toISOString()};
 const all=JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]");all.push(rec);localStorage.setItem("itcoachUniversalEvidence",JSON.stringify(all));return rec;
}
function ITCoachUniversalEvidence(studentId,topicNo){
 return JSON.parse(localStorage.getItem("itcoachUniversalEvidence")||"[]").filter(x=>String(x.studentId)===String(studentId)&&Number(x.topicNo)===Number(topicNo));
}
function ITCoachUniversalSkillSummary(studentId,topicNo){
 const all=ITCoachUniversalEvidence(studentId,topicNo),map={};
 all.forEach(x=>{if(!map[x.skill])map[x.skill]=[];map[x.skill].push(x.score)});
 return Object.entries(map).map(([skill,s])=>({skill,score:Math.round(s.reduce((a,b)=>a+b,0)/s.length),attempts:s.length})).sort((a,b)=>a.score-b.score);
}
function ITCoachUniversalMastery(studentId,topicNo){
 const all=ITCoachUniversalEvidence(studentId,topicNo),avg=all.length?Math.round(all.reduce((a,x)=>a+x.score,0)/all.length):null;
 return{topicNo,average:avg,evidenceCount:all.length,status:avg===null?"Not Assessed":avg>=80?"Mastered":avg>=70?"Developing":"Needs Attention",skills:ITCoachUniversalSkillSummary(studentId,topicNo)};
}
