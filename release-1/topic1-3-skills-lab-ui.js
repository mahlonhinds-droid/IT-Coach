/* Topics 1–3 Skills Lab UI */
function ITCoachRenderTopic13Labs(topicNo,containerId){
 const e=document.getElementById(containerId),labs=ITCoachGetTopic13Labs(topicNo);if(!e)return;
 e.innerHTML='<div class="card"><h2>Topic '+topicNo+' Skills Lab</h2><p>These are author-created prototype practice scenarios aligned to the current topic structure.</p>'+labs.map(l=>'<div style="border:1px solid #ddd;padding:10px;margin:8px 0"><h3>'+l.title+'</h3><p><b>Skills:</b> '+l.skills.join(", ")+'</p><p>'+l.task+'</p><textarea id="'+l.id+'Evidence" rows="3" style="width:100%" placeholder="Enter your evidence, reasoning or response..."></textarea><button onclick="ITCoachSubmitTopic13Lab(\''+l.id+'\','+topicNo+')">Submit</button></div>').join('')+'</div>';
}
function ITCoachSubmitTopic13Lab(labId,topicNo){
 const key="itcoachTopic13Evidence",all=JSON.parse(localStorage.getItem(key)||"[]");
 all.push({labId,topicNo,evidence:document.getElementById(labId+"Evidence")?.value||"",at:new Date().toISOString()});
 localStorage.setItem(key,JSON.stringify(all));
 alert("Evidence saved locally. Teacher review/scoring can be added next.");
}
