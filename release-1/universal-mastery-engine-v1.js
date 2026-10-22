/* IT Coach Universal Mastery Engine 1.0 */
function ITCoachUniversalSkillMastery(studentId,topicNo,skill){
 const e=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>x.skill===skill);
 if(!e.length)return{skill,score:null,status:"Not Assessed",evidenceCount:0};
 const score=Math.round(e.reduce((a,x)=>a+x.score,0)/e.length);
 return{skill,score,status:score>=80?"Mastered":score>=70?"Developing":"Needs Attention",evidenceCount:e.length,evidenceTypes:[...new Set(e.map(x=>x.type))]};
}
function ITCoachUniversalTopicMastery(studentId,topicNo){
 const skills=ITCoachTopic48Skills[topicNo]||[];
 const rows=skills.map(s=>ITCoachUniversalSkillMastery(studentId,topicNo,s));
 const assessed=rows.filter(x=>x.score!==null),avg=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.score,0)/assessed.length):null;
 return{topicNo,average:avg,status:avg===null?"Not Assessed":avg>=80?"Mastered":avg>=70?"Developing":"Needs Attention",skills:rows,priority:assessed.sort((a,b)=>a.score-b.score)[0]||null};
}
function ITCoachUniversalNextAction(studentId,topicNo){
 const m=ITCoachUniversalTopicMastery(studentId,topicNo),p=m.priority;
 if(!p)return{mode:"assess",message:"Collect evidence for this topic."};
 if(p.score<70)return{mode:"revision",skill:p.skill,message:"Targeted revision for the weakest skill."};
 if(p.score<85)return{mode:"practice",skill:p.skill,message:"Practice the weakest developing skill."};
 return{mode:"application",skill:p.skill,message:"Extend the skill with a higher-level application."};
}
