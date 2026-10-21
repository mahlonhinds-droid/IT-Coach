/* IT Coach closed-loop remediation engine — prototype */
function ITCoachRemediationPlan(topicNo,skillName){
 const lessons=window.ITCoachLessonCatalog||{};
 const t=String(topicNo), topicLessons=lessons[t]||[];
 const lesson=topicLessons.find(x=>String(x.skill||x.title||"").toLowerCase().includes(String(skillName||"").toLowerCase()))||topicLessons[0]||null;
 const practice=(window.ITCoachTaggedQuestionsForTopic?ITCoachTaggedQuestionsForTopic(t):[]).filter(q=>!skillName||q.skill===skillName);
 return {topic:t,skill:skillName||null,lesson,practiceCount:practice.length,action:lesson?"Complete targeted lesson, then practice and reassess.":"Teacher review required: matching lesson is not yet mapped."};
}
function ITCoachCreateRemediation(topicNo,skillName){
 const plans=JSON.parse(localStorage.getItem("itcoachRemediation")||"[]");
 const p=ITCoachRemediationPlan(topicNo,skillName);
 plans.push({id:"r"+Date.now(),createdAt:new Date().toISOString(),status:"Assigned",...p});
 localStorage.setItem("itcoachRemediation",JSON.stringify(plans));return p;
}
function ITCoachRemediationHistory(){return JSON.parse(localStorage.getItem("itcoachRemediation")||"[]");}
