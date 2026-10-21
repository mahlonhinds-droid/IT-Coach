/* IT Coach curriculum-linked adaptive assessment */
function ITCoachAdaptiveAssessment(topicNo,lessonId,skillName,count){
 let pool=lessonId?ITCoachQuestionsForLesson(topicNo,lessonId):skillName?ITCoachQuestionsForSkill(topicNo,skillName):ITCoachCurriculumQuestions.filter(q=>q.topic===String(topicNo));
 pool=[...pool].sort(()=>Math.random()-0.5);
 return pool.slice(0,Math.max(1,Math.min(count||5,pool.length)));
}
function ITCoachScoreTaggedAssessment(questions,answers){
 const skill={};let correct=0;
 questions.forEach((q,i)=>{const ok=Number(answers[i])===q.answer;if(ok)correct++;skill[q.skill]=skill[q.skill]||{correct:0,total:0};skill[q.skill].total++;if(ok)skill[q.skill].correct++;});
 const skillScores=Object.fromEntries(Object.entries(skill).map(([k,v])=>[k,Math.round(v.correct/v.total*100)]));
 return {score:questions.length?Math.round(correct/questions.length*100):0,correct,total:questions.length,skillScores};
}
