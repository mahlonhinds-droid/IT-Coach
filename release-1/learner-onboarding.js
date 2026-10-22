/* IT Coach learner onboarding 1.0 */
function ITCoachCreateLearner(studentId,name,mode){
 const learners=JSON.parse(localStorage.getItem("itcoachLearners")||"[]");
 const existing=learners.find(x=>x.studentId===studentId);
 if(existing)return existing;
 const learner={studentId,name:name||"Learner",mode:mode||"self-directed",createdAt:new Date().toISOString()};
 learners.push(learner);localStorage.setItem("itcoachLearners",JSON.stringify(learners));
 ITCoachSetLearnerMode(studentId,learner.mode);\n ITCoachSetActiveStudentId(studentId);return learner;
}
function ITCoachGetLearner(studentId){
 return JSON.parse(localStorage.getItem("itcoachLearners")||"[]").find(x=>x.studentId===studentId)||null;
}
function ITCoachStartLearnerJourney(studentId,topicNo){
 const evidence=ITCoachUniversalEvidence(studentId,topicNo);
 if(!evidence.length)return{stage:"diagnostic",message:"Start with a diagnostic activity."};
 return{stage:"personalized",next:ITCoachGetSupportRoute(studentId,topicNo).route};
}
