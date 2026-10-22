/* IT Coach evidence-aware mastery decision 1.0 */
function ITCoachEvidenceAwareDecision(studentId,topicNo){
 const m=ITCoachUniversalTopicMastery(studentId,topicNo),skills=m.skills.filter(x=>x.score!==null);
 if(!skills.length)return{status:"Not Assessed",action:"assessment",priority:null};
 const priority=[...skills].sort((a,b)=>a.score-b.score)[0];
 const practical=ITCoachUniversalEvidence(studentId,topicNo).some(x=>x.type==="practical");
 const knowledge=ITCoachUniversalEvidence(studentId,topicNo).some(x=>x.type==="knowledge");
 let action=priority.score<70?"revision":priority.score<85?"practice":"application";
 let confidence=practical&&knowledge?"multi-evidence":"single-evidence";
 return{status:m.status,average:m.average,priority,action,confidence,hasPracticalEvidence:practical,hasKnowledgeEvidence:knowledge};
}
function ITCoachRenderMasteryDecision(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;const d=ITCoachEvidenceAwareDecision(studentId,topicNo);
 e.innerHTML='<div class="card"><h3>Mastery Decision</h3><p><b>Status:</b> '+d.status+'</p><p><b>Priority:</b> '+(d.priority?d.priority.skill+" ("+d.priority.score+"%)":"Collect evidence")+'</p><p><b>Next action:</b> '+d.action+'</p><p><b>Evidence confidence:</b> '+d.confidence+'</p></div>';
}
