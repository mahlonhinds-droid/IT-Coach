/* Topics 1–3 live adaptive panel */
function ITCoachRenderInteractive13AdaptiveV2(studentId,topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const r=ITCoachInteractive13Recommendation(studentId,topicNo);
 const lesson=r.lessonIds?.length?r.lessonIds.join(", "):"—";
 e.innerHTML='<div class="card"><h3>Adaptive Coach</h3><p><b>Weakest skill:</b> '+(r.weakSkill||"Not enough evidence yet")+'</p><p><b>Lesson focus:</b> '+lesson+'</p><p><b>Recommended next step:</b> '+r.action+'</p></div>';
}
