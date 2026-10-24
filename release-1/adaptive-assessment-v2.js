/* IT Coach curriculum-linked adaptive assessment */
function ITCoachAdaptiveAssessment(topicNo,lessonId,skillName,count){
 let pool=lessonId?ITCoachQuestionsForLesson(topicNo,lessonId):skillName?ITCoachQuestionsForSkill(topicNo,skillName):ITCoachCurriculumQuestions.filter(q=>q.topic===String(topicNo));
 pool=[...pool].sort(()=>Math.random()-0.5);
 return pool.slice(0,Math.max(1,Math.min(count||5,pool.length)));
}
function ITCoachScoreTaggedAssessment(questions,answers){
 const map={"1.1":"hardware","1.2":"hardware","1.3":"hardware","1.4":"hardware","1.5":"information-processing","1.6":"troubleshooting","1.7":"number-systems","2.1":"network","2.2":"transmission-media","2.3":"network","2.4":"web","3.1":"security","3.2":"countermeasure","3.3":"ict-impact","3.4":"ict-impact","3.5":"ethics","4.1":"word-processing","4.2":"advanced-word-processing","4.3":"presentation","4.4":"web-page","5.1":"spreadsheet-purpose","5.2":"formula-functions","5.3":"data-management","5.4":"charts","6.1":"database-design","6.2":"database-design","6.3":"queries","7.1":"problem-solving","7.2":"data-types-operators","7.3":"algorithms","7.4":"trace-tables","8.1":"programming-languages","8.2":"input-output-assignment","8.3":"selection-loops","8.4":"testing-debugging"};
 const skill={};let correct=0,details=[];
 questions.forEach((q,i)=>{const ok=Number(answers[i])===q.answer;if(ok)correct++;const s=map[q.lesson]||q.skill;skill[s]=skill[s]||{correct:0,total:0};skill[s].total++;if(ok)skill[s].correct++;details.push({id:q.lesson+"-"+i,correct:ok,skill:s,lesson:q.lesson});});
 const skillScores=Object.fromEntries(Object.entries(skill).map(([k,v])=>[k,Math.round(v.correct/v.total*100)]));
 return {score:questions.length?Math.round(correct/questions.length*100):0,correct,total:questions.length,skillScores,details};
}
