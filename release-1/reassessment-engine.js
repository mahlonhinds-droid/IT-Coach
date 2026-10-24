/* IT Coach reassessment engine — alternate evidence */
function ITCoachBuildReassessment(topicNo,lessonId,skillName,priorQuestions){
 let pool=lessonId?ITCoachQuestionsForLesson(topicNo,lessonId):skillName?ITCoachQuestionsForSkill(topicNo,skillName):ITCoachCurriculumQuestions.filter(q=>q.topic===String(topicNo));
 const used=new Set((priorQuestions||[]).map(q=>q.prompt));
 let fresh=pool.filter(q=>!used.has(q.prompt)).sort((a,b)=>(a.difficulty==="developing"?-1:0)-(b.difficulty==="developing"?-1:0)||Math.random()-0.5);
 if(fresh.length<2) fresh=pool.filter(q=>q).sort(()=>Math.random()-0.5);
 return fresh.slice(0,Math.min(5,fresh.length));
}
function ITCoachReassessmentComparison(previous,current){
 return {previous:previous?.score??null,current:current?.score??null,growth:(previous&&current)?current.score-previous.score:null,improved:(previous&&current)?current.score>previous.score:false};
}
