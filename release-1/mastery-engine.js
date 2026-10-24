/* IT Coach mastery/diagnosis engine — prototype rules */
const ITCoachMasteryRules={remediate:70,practice:80};
function ITCoachDiagnose(scores){
 const values=scores.filter(Number.isFinite);
 const mastery=values.length?Math.round(values.reduce((a,b)=>a+b,0)/values.length):0;
 let action="Remediate";
 if(mastery>=ITCoachMasteryRules.practice) action="Consolidate";
 else if(mastery>=ITCoachMasteryRules.remediate) action="Practice/review";
 return {mastery,action};
}
function ITCoachNextStep(result){
 if(result.action==="Remediate")return "Return to the lesson, complete targeted practice, then reassess.";
 if(result.action==="Practice/review")return "Complete another practice set and review the weak objective.";
 return "Consolidate the skill and attempt a reassessment or extension activity.";
}
