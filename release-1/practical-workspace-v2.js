/* IT Coach browser-only practical workspace — prototype */
const ITCoachWorkspace={
  key:"itcoachPracticalWorkspace",
  load(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch(e){return{}}},
  save(data){localStorage.setItem(this.key,JSON.stringify(data))},
  set(topic,lesson,payload){const d=this.load();d[String(topic)+"_"+lesson]={topic:String(topic),lesson,payload,updatedAt:new Date().toISOString(),status:"draft"};this.save(d);return d[String(topic)+"_"+lesson]},
  submit(topic,lesson){const d=this.load(),k=String(topic)+"_"+lesson;if(!d[k])return null;d[k].status="submitted";d[k].submittedAt=new Date().toISOString();this.save(d);return d[k]}
};
function ITCoachRenderWorkspace(topicNo,lessonId){
 const e=document.getElementById("practicalWorkspace");if(!e)return;
 const existing=ITCoachWorkspace.load()[String(topicNo)+"_"+lessonId];
 const a=(typeof ITCoachApplicationForTopic==="function"?ITCoachApplicationForTopic(topicNo):[]).find(x=>x.lesson===lessonId);
 if(!a){e.innerHTML="<div class='card'><p>No practical workspace is mapped to this lesson yet.</p></div>";return;}
 let fields=a.evidence.map((x,i)=>'<label style="display:block;margin:8px 0"><b>'+x+'</b><br><textarea id="workEvidence'+i+'" rows="2" placeholder="Describe or record your evidence"></textarea></label>').join('');
 e.innerHTML='<div class="card"><h2>'+a.title+'</h2><p>'+a.prompt+'</p>'+fields+'<button onclick="ITCoachSaveWorkspace('+JSON.stringify(topicNo)+','+JSON.stringify(lessonId)+','+JSON.stringify(a.evidence)+')">Save Draft</button> <button onclick="ITCoachSubmitWorkspace('+JSON.stringify(topicNo)+','+JSON.stringify(lessonId)+')">Submit for Review</button><p id="workspaceStatus"></p></div>';
 if(existing&&existing.payload) a.evidence.forEach((x,i)=>{const el=document.getElementById("workEvidence"+i);if(el)el.value=existing.payload[x]||""});
}
function ITCoachSaveWorkspace(topicNo,lessonId,evidence){
 const payload={};evidence.forEach((x,i)=>payload[x]=document.getElementById("workEvidence"+i)?.value||"");
 ITCoachWorkspace.set(topicNo,lessonId,payload);
 const s=document.getElementById("workspaceStatus");if(s)s.textContent="Draft saved in this browser.";
}
function ITCoachSubmitWorkspace(topicNo,lessonId){
 const r=ITCoachWorkspace.submit(topicNo,lessonId);
 const s=document.getElementById("workspaceStatus");if(s)s.textContent=r?"Submitted in this browser for teacher review.":"Create a draft before submitting.";\n if(r&&typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("practical_submitted",{subjectId:"IT",topicNo:Number(topicNo),lessonId:String(lessonId)});\n if(r&&typeof ITCoachPilotShowNextStep==="function")ITCoachPilotShowNextStep(Number(topicNo),String(lessonId),"practical");
}
