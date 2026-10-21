/* IT Coach adaptive difficulty progression — prototype */
const ITCoachDifficultyRules={
 foundation:{min:0,max:69,next:"foundation",review:true},
 developing:{min:70,max:84,next:"developing",review:false},
 application:{min:85,max:100,next:"application",review:false}
};
function ITCoachDifficultyFromScore(score){
 if(score>=85)return"application";
 if(score>=70)return"developing";
 return"foundation";
}
function ITCoachNextDifficulty(score){
 const level=ITCoachDifficultyFromScore(score);
 return ITCoachDifficultyRules[level].next;
}
function ITCoachSelectByDifficulty(topicNo,skillName,difficulty,count){
 let pool=ITCoachCurriculumQuestions.filter(q=>q.topic===String(topicNo)&&(!skillName||q.skill===skillName));
 let exact=pool.filter(q=>(q.difficulty||"foundation")===difficulty);
 if(exact.length<count) exact=exact.concat(pool.filter(q=>(q.difficulty||"foundation")!==difficulty));
 return exact.sort(()=>Math.random()-0.5).slice(0,count);
}
function ITCoachProgressionDecision(score){
 const level=ITCoachDifficultyFromScore(score);
 return {level,action:level==="foundation"?"Remediate and repeat foundation practice":level==="developing"?"Advance to developing/application practice":"Consolidate with application practice"};
}
