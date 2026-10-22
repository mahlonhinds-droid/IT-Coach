/* Self-directed support and safety net 1.0 */
function ITCoachSelfDirectedSupport(studentId,topicNo,skill){
 const mode=ITCoachGetLearnerMode(studentId),d=ITCoachBuildIntervention(studentId,topicNo);
 if(mode!==ITCoachLearnerModes.selfDirected)return{mode,available:false};
 if(d.mode==="assessment")return{mode,available:true,next:"diagnostic-assessment",message:"Start a diagnostic activity to identify your learning needs."};
 return{mode,available:true,next:d.mode,skill:d.skill,actions:d.actions,message:"You can continue learning independently. A teacher is not required."};
}
function ITCoachSelfDirectedProgress(studentId){
 const profile=ITCoachBuildUniversalProfile(studentId);
 return{mode:ITCoachGetLearnerMode(studentId),profile};
}
