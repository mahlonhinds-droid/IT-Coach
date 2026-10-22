/* Class skill intervention summary 1.0 */
function ITCoachBuildClassSkillInterventionSummary(studentIds){
 const counts={};(studentIds||[]).forEach(studentId=>{
  Object.keys(ITCoachTopic48Skills).forEach(t=>ITCoachTopic48Skills[t].forEach(skill=>{
   const a=ITCoachTeacherInterventionAlert(studentId,Number(t),skill);
   if(a.alert){const k=t+"|"+skill;counts[k]=(counts[k]||0)+1;}
  }));
 });return Object.entries(counts).map(([key,count])=>{const [topicNo,skill]=key.split("|");return{topicNo:Number(topicNo),skill,count};}).sort((a,b)=>b.count-a.count);
}
