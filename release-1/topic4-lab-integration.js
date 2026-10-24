/* IT Coach Topic 4 Skills Lab integration 1.0 */
const ITCoachTopic4WorkspaceMap={
"t4-secretary":{workspace:"word",action:"ITCoachRenderWordWorkspace",lesson:"4.1"},
"t4-newsletter":{workspace:"word",action:"ITCoachRenderWordWorkspace",lesson:"4.1"},
"t4-mailmerge":{workspace:"word",action:"ITCoachRenderWordWorkspace",lesson:"4.2"},
"t4-form":{workspace:"word",action:"ITCoachRenderWordWorkspace",lesson:"4.2"},
"t4-website":{workspace:"web",action:"ITCoachRenderWebWorkspace",lesson:"4.3"},
"t4-webtest":{workspace:"web",action:"ITCoachRenderWebWorkspace",lesson:"4.3"},
"t4-presentation":{workspace:"presentation",action:"ITCoachPresentationInit",lesson:"4.4"},
"t4-exam":{workspace:"integrated",lesson:"4.1-4.4"}
};
function ITCoachStartIntegratedTopic4Lab(id){
 const lab=ITCoachTopic4Lab(id),map=ITCoachTopic4WorkspaceMap[id];if(!lab||!map)return;
 localStorage.setItem("itcoachTopic4ActiveLab",JSON.stringify({...lab,...map,startedAt:new Date().toISOString()}));
 const host=document.getElementById("topic4IntegratedWorkspace");
 if(host)host.innerHTML='<div class="card"><h3>'+lab.title+'</h3><p>'+lab.brief+'</p><p><b>Evidence:</b> '+lab.checks.join(", ")+'</p><div id="topic4LaunchTarget"></div></div>';
 if(map.workspace==="word")ITCoachRenderWordWorkspace();
 if(map.workspace==="web")ITCoachRenderWebWorkspace();
 if(map.workspace==="presentation")ITCoachPresentationInit();
 ITCoachRenderTopic4Progress();
}
function ITCoachTopic4CompleteLab(id,evidence){
 const active=JSON.parse(localStorage.getItem("itcoachTopic4ActiveLab")||"{}");
 const submission={labId:id,title:active.title||id,lesson:active.lesson||"",evidence:evidence||"",submittedAt:new Date().toISOString(),status:"submitted"};
 const all=JSON.parse(localStorage.getItem("itcoachTopic4LabHistory")||"[]");all.push(submission);localStorage.setItem("itcoachTopic4LabHistory",JSON.stringify(all));
 if(typeof ITCoachRecordProgress==="function")ITCoachRecordProgress({topic:4,lesson:submission.lesson,activity:id,type:"skills-lab",status:"submitted"});
 ITCoachRenderTopic4Progress();
}
function ITCoachRenderTopic4Progress(){
 const e=document.getElementById("topic4Progress");if(!e)return;
 const a=JSON.parse(localStorage.getItem("itcoachTopic4LabHistory")||"[]");
 e.innerHTML="<b>Topic 4 Skills Lab progress:</b> "+a.length+" challenge submission(s).";
}
