/* IT Coach learner modes 1.0 */
const ITCoachLearnerModes={selfDirected:"self-directed",teacherAssigned:"teacher-assigned"};
function ITCoachGetLearnerMode(studentId){
 const rows=JSON.parse(localStorage.getItem("itcoachLearnerModes")||"{}");
 return rows[studentId]||ITCoachLearnerModes.selfDirected;
}
function ITCoachSetLearnerMode(studentId,mode){
 if(!Object.values(ITCoachLearnerModes).includes(mode))return null;
 const rows=JSON.parse(localStorage.getItem("itcoachLearnerModes")||"{}");rows[studentId]=mode;
 localStorage.setItem("itcoachLearnerModes",JSON.stringify(rows));return mode;
}
function ITCoachIsSelfDirected(studentId){return ITCoachGetLearnerMode(studentId)===ITCoachLearnerModes.selfDirected;}
function ITCoachGetSupportRoute(studentId,topicNo,skill){
 const mode=ITCoachGetLearnerMode(studentId);
 if(mode===ITCoachLearnerModes.teacherAssigned)return{mode,route:"teacher-intervention",message:"Teacher support is available."};
 const outcome=ITCoachEvidenceAwareDecision(studentId,topicNo);
 return{mode,route:outcome.priority&&outcome.priority.score<70?"guided-self-revision":"adaptive-self-study",message:outcome.priority&&outcome.priority.score<70?"Follow the guided revision path and retry when ready.":"Continue your personalized learning path."};
}
