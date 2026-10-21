/* IT Coach evidence-grounded AI Coach — deterministic prototype */
function ITCoachCoachContext(topicNo){
 const analytics=ITCoachAnalyticsSnapshot();
 const t=analytics.topics.find(x=>String(x.topic)===String(topicNo))||null;
 const skill=ITCoachSkillRecommendation(topicNo);
 const path=ITCoachBuildLearningPath(topicNo);
 return {topic:t,prioritySkill:skill,learningPath:path};
}
function ITCoachCoachResponse(topicNo,userText){
 const c=ITCoachCoachContext(topicNo),q=String(userText||"").toLowerCase();
 if(!c.topic)return{title:"Let's start with a topic",message:"Choose one of the eight CSEC IT topics so I can guide your learning path.",next:"Select a topic."};
 if(q.includes("why")||q.includes("explain")||q.includes("understand")){
  if(c.prioritySkill)return{title:"Let's work on your priority skill",message:"Your current priority is "+c.prioritySkill.id+" — "+c.prioritySkill.name+". I can explain the concept step by step, then give you practice.",next:"Review → guided activity → targeted practice."};
  return{title:"Let's learn this step by step",message:"We'll use the lesson content first, then check your understanding with practice.",next:"Review the lesson and complete the knowledge check."};
 }
 if(q.includes("test")||q.includes("quiz")||q.includes("practice"))return{title:"Practice mode",message:"I'll prioritize questions connected to your recorded skill evidence where tagged items are available.",next:"Start targeted practice."};
 return{title:"Your IT Coach",message:c.prioritySkill?"Your current focus is "+c.prioritySkill.id+" — "+c.prioritySkill.name+".":"Choose a topic to begin.",next:c.learningPath.steps[0].title};
}
function ITCoachRenderCoach(topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 e.innerHTML='<div class="card"><h2>AI IT Coach</h2><p>Evidence-grounded prototype coach.</p><input id="coachInput" placeholder="Ask: explain this, give me practice, test me..." style="width:100%;padding:10px"><button onclick="askCoach('+topicNo+')">Ask Coach</button><div id="coachReply" class="card"><p>Ask a question to begin.</p></div></div>';
}
function askCoach(topicNo){const input=document.getElementById("coachInput"),reply=document.getElementById("coachReply"),r=ITCoachCoachResponse(topicNo,input.value);reply.innerHTML='<b>'+r.title+'</b><p>'+r.message+'</p><p><b>Next:</b> '+r.next+'</p>';}
