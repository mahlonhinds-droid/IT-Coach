/* Universal evidence breakdown */
function ITCoachRenderEvidenceBreakdown(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const all=ITCoachUniversalEvidence(studentId,topicNo),types=ITCoachUniversalEvidenceTypeSummary(studentId,topicNo);
 e.innerHTML='<div class="card"><h3>Evidence Breakdown</h3><p>Total evidence: <b>'+all.length+'</b></p><ul>'+Object.entries(types).map(([k,v])=>'<li>'+ (ITCoachEvidenceTypes[k]||k)+': '+v+'</li>').join('')+'</ul><p>Use evidence type as context; do not treat different assessment forms as automatically equivalent.</p></div>';
}
