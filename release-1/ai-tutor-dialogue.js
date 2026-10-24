/* IT Coach guided teaching dialogue — prototype */
const ITCoachDialogue={};
function ITCoachStartDialogue(topicNo,skillName){
 const key=String(topicNo)+":"+String(skillName||"");
 ITCoachDialogue[key]={step:0,history:[]};
 return ITCoachDialogue[key];
}
function ITCoachTutorTurn(topicNo,skillName,userAnswer){
 const key=String(topicNo)+":"+String(skillName||"");
 const d=ITCoachDialogue[key]||ITCoachStartDialogue(topicNo,skillName);
 const text=String(userAnswer||"").trim();
 d.history.push({student:text,step:d.step});
 const stages=[
  {title:"Explain",prompt:"Let's start with the core idea. In your own words, what do you already understand about "+skillName+"?"},
  {title:"Example",prompt:"Good. Now consider a simple example related to "+skillName+". What do you think would happen in that example?"},
  {title:"Guided Question",prompt:"Now solve this step by step. What is the first thing you would do when applying "+skillName+"?"},
  {title:"Feedback",prompt:"Review your answer against the lesson objectives, then identify one part you would change or improve."},
  {title:"Practice",prompt:"You're ready for targeted practice. Complete a question tagged to "+skillName+" and then reassess your understanding."}
 ];
 const current=stages[Math.min(d.step,stages.length-1)];
 d.step=Math.min(d.step+1,stages.length-1);
 return {stage:current.title,prompt:current.prompt,complete:d.step===stages.length-1};
}
function ITCoachRenderTutor(topicNo,skillName,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 ITCoachStartDialogue(topicNo,skillName);
 e.innerHTML='<div class="card"><h2>Guided AI Tutor</h2><p><b>Skill:</b> '+skillName+'</p><p id="tutorStage"><b>Explain</b></p><p id="tutorPrompt">Let’s start. What do you already understand about '+skillName+'?</p><textarea id="tutorAnswer" style="width:100%;min-height:90px" placeholder="Type your answer..."></textarea><button onclick="submitTutorTurn('+topicNo+',\''+String(skillName).replace(/'/g,"\\'")+'\')">Continue</button><div id="tutorFeedback"></div></div>';
}
function submitTutorTurn(topicNo,skillName){
 const input=document.getElementById("tutorAnswer"),r=ITCoachTutorTurn(topicNo,skillName,input.value);
 document.getElementById("tutorStage").innerHTML="<b>"+r.stage+"</b>";
 document.getElementById("tutorPrompt").textContent=r.prompt;
 document.getElementById("tutorFeedback").innerHTML='<p class="small">Your response has been recorded for this browser session. The prototype does not award marks for free-text responses.</p>';
 input.value="";
}
