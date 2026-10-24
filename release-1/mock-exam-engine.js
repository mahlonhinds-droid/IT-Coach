/* IT Coach Mock Exam Engine 1.0 */
function ITCoachBuildMockExamBlueprint(studentId,mode){
 const r=ITCoachBuildExamReadiness(studentId);
 const days=r.recommendedCrunchDays;
 const blueprint={
  full:{name:"Full Mock",sections:["Paper 01 style knowledge","Paper 02 style structured/practical","Practical/SBA evidence review"]},
  timed:{name:"Timed Practice",sections:["Mixed knowledge questions","Structured response","Timed practical task"]},
  targeted:{name:"Targeted Mock",sections:r.gapTopics.map(t=>"Topic "+t+" focused assessment")}
 };
 return{mode:mode||"targeted",durationDays:days,blueprint:blueprint[mode||"targeted"]||blueprint.targeted,priorityTopics:r.gapTopics};
}
