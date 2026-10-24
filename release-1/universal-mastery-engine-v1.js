/* IT Coach Universal Mastery Engine 2.0 — subject-aware, backward compatible */
function ITCoachUniversalSkillMastery(studentId,topicNo,skill,subjectId){
 const e=ITCoachUniversalEvidence(studentId,topicNo,subjectId).filter(x=>(x.skillId||x.skill)===skill);
 if(!e.length)return{skill,score:null,status:"Not Assessed",evidenceCount:0};
 const score=Math.round(e.reduce((a,x)=>a+Number(x.score),0)/e.length);
 return{skill,score,status:score>=80?"Mastered":score>=70?"Developing":"Needs Attention",evidenceCount:e.length,evidenceTypes:[...new Set(e.map(x=>x.evidenceType||x.type))]};
}
function ITCoachUniversalTopicMastery(studentId,topicNo,subjectId){
 const sid=subjectId||"IT",skills=(typeof ITCoachTopic48Skills!=="undefined"&&sid==="IT"?ITCoachTopic48Skills[topicNo]||[]:[]);
 const rows=skills.map(s=>ITCoachUniversalSkillMastery(studentId,topicNo,s,sid));
 const assessed=rows.filter(x=>x.score!==null),avg=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.score,0)/assessed.length):null;
 return{subjectId:sid,topicId:String(topicNo),topicNo,average:avg,status:avg===null?"Not Assessed":avg>=80?"Mastered":avg>=70?"Developing":"Needs Attention",skills:rows,priority:assessed.sort((a,b)=>a.score-b.score)[0]||null};
}
function ITCoachUniversalNextAction(studentId,topicNo,subjectId){
 const m=ITCoachUniversalTopicMastery(studentId,topicNo,subjectId),p=m.priority;
 if(!p)return{mode:"assess",message:"Collect evidence for this topic."};
 if(p.score<70)return{mode:"revision",skill:p.skill,message:"Targeted revision for the weakest skill."};
 if(p.score<85)return{mode:"practice",skill:p.skill,message:"Practice the weakest developing skill."};
 return{mode:"application",skill:p.skill,message:"Extend the skill with a higher-level application."};
}
