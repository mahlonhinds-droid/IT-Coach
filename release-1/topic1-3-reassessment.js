/* Topics 1–3 targeted reassessment 1.0 */
function ITCoachTopic13ReassessmentPlan(studentId,topicNo){
 const m=ITCoachTopic13Mastery(studentId,topicNo);
 return{topicNo,studentId,priorities:m.weak.map(x=>x.labId),sequence:m.weak.length?["Review targeted lesson","Repeat related Skills Lab","Submit new evidence","Teacher review","Reassess"]:["Complete a new application challenge"]};
}
function ITCoachRenderTopic13Reassessment(studentId,topicNo,containerId){
 const e=document.getElementById(containerId),p=ITCoachTopic13ReassessmentPlan(studentId,topicNo);if(!e)return;
 e.innerHTML='<div class="card"><h3>Targeted Reassessment Plan</h3><p>'+ (p.priorities.length?p.priorities.join(", "):"No current weak labs identified.")+'</p><p>'+p.sequence.join(" → ")+'</p></div>';
}
