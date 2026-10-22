/* IT Coach Personalized Intervention Engine 1.0 */
const ITCoachInterventionRules={
 revision:{maxScore:69,mode:"revision",reason:"Skill evidence is below the prototype mastery threshold.",actions:["review-lesson","guided-example","foundational-practice"]},
 practice:{maxScore:84,mode:"practice",reason:"Skill is developing and needs additional application.",actions:["targeted-practice","scenario-activity","feedback"]},
 application:{maxScore:100,mode:"application",reason:"Skill evidence is strong; extend performance.",actions:["advanced-application","integrated-task","reflection"]}
};
function ITCoachBuildIntervention(studentId,topicNo){
 const d=ITCoachEvidenceAwareDecision(studentId,topicNo);
 if(!d.priority)return{mode:"assessment",reason:"No demonstrated priority skill.",skill:null,actions:["diagnostic-assessment"]};
 const rule=d.priority.score<70?ITCoachInterventionRules.revision:d.priority.score<85?ITCoachInterventionRules.practice:ITCoachInterventionRules.application;
 return{topicNo,skill:d.priority.skill,score:d.priority.score,mode:rule.mode,reason:rule.reason,actions:rule.actions,evidenceConfidence:d.confidence};
}
function ITCoachRenderIntervention(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;const x=ITCoachBuildIntervention(studentId,topicNo);
 e.innerHTML='<div class="card"><h3>Recommended Learning Path</h3><p><b>Skill:</b> '+(x.skill||"Diagnostic")+'</p><p><b>Mode:</b> '+x.mode+'</p><p>'+x.reason+'</p><ol>'+x.actions.map(a=>'<li>'+a.replace(/-/g," ")+'</li>').join('')+'</ol></div>';
}
