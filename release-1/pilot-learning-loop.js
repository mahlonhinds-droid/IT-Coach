/* IT Coach Student Learning Loop 1.0
 * Connects the pilot shell to existing lesson, practice, assessment,
 * mastery, reassessment and feedback modules. Browser-only.
 */
(function(){
 function topicTitle(n){const t=typeof ITCoachGetCourseTopic==="function"?ITCoachGetCourseTopic(n,"IT","CSEC_IT"):null;return t&&t.title?t.title:(ITCoachTopicAdapter(n)||{}).name||("Topic "+n)}
 function setApp(html){const app=document.getElementById("app");if(app)app.innerHTML=html;return app}
 function openLesson(n){
  const app=setApp('<section class="card"><div class="pill">LEARN</div><h2>Topic '+n+': '+topicTitle(n)+'</h2><div id="pilotLesson"></div><button class="secondary" onclick="ITCoachPilotOpenTopic('+n+')">← Topic</button></section>');
  if(!app)return;
  const lessons=[];for(let i=1;i<=4;i++){const id=n+"."+i;let c=n<=3?(typeof ITCoachGetLessonContent==="function"?ITCoachGetLessonContent(id):null):(typeof ITCoachGetLessonContent48==="function"?ITCoachGetLessonContent48(id):null);if(c)lessons.push({id,c});}
  const lessonEl=document.getElementById("pilotLesson");
  if(lessonEl)lessonEl.innerHTML="<p>Choose a lesson to study.</p>"+lessons.map(x=>"<button class='option' onclick=\"ITCoachPilotOpenLessonItem("+n+",&quot;"+x.id+"&quot;)\"><b>"+x.id+" — "+x.c.title+"</b><br><span class='small'>"+x.c.activity+"</span></button>").join("");
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("lesson_opened",{subjectId:"IT",topicNo:n});
 }
 function openLessonItem(n,id){
  const c=n<=3?(typeof ITCoachGetLessonContent==="function"?ITCoachGetLessonContent(id):null):(typeof ITCoachGetLessonContent48==="function"?ITCoachGetLessonContent48(id):null);
  const rich=n<=3&&typeof ITCoachTopic13Lesson==="function"?ITCoachTopic13Lesson(n,id):null;
  const title=(rich&&rich.title)||(c&&c.title)||id;
  const points=(c&&c.points)||[];const activity=(c&&c.activity)||"Complete the mapped practice activity.";
  const app=setApp('<section class="card"><div class="pill">LEARN</div><h2>'+title+'</h2><p>'+(rich?rich.focus:"Review the lesson concepts and complete the activity.")+'</p><h3>Key learning</h3>'+points.map(p=>'<p>• '+p+'</p>').join('')+'<h3>Practice</h3><p>'+activity+'</p><div class="grid"><button onclick="ITCoachPilotLaunchPractice('+n+')">🎯 Practice</button><button onclick="ITCoachPilotLaunchAssessment('+n+',\''+id+'\')">📝 Assess</button></div><button onclick="ITCoachPilotCompleteLesson('+n+',\''+id+'\')">✓ Mark lesson complete</button><div id="pilotNextStep"></div><button class="secondary" onclick="ITCoachPilotOpenLesson('+n+')">← Lessons</button></section>');
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("lesson_item_opened",{subjectId:"IT",topicNo:n,lessonId:id});
 }
 function practice(n){
  const app=setApp('<section class="card"><div class="pill">PRACTICE</div><h2>Topic '+n+' Skills Practice</h2><div id="pilotPractice"></div><button class="secondary" onclick="ITCoachPilotOpenTopic('+n+')">← Topic</button></section>');if(!app)return;
  const e=document.getElementById("pilotPractice");
  if(n<=3&&typeof ITCoachRenderTopic13Labs==="function"){ITCoachRenderTopic13Labs(n,"pilotPractice");return;}
  const labs={4:"Document, presentation and web-page skills lab",5:"Spreadsheet skills lab",6:"Database skills lab",7:"Algorithm and trace-table skills lab",8:"Pascal programming skills lab"};
  e.innerHTML='<h3>'+ (labs[n]||"Practical skills lab")+'</h3><p>Use the topic workspace to apply what you learned. Your progress remains in this browser.</p>'+(n>=4?'<button onclick="ITCoachPilotOpenPractical('+n+')">Open practical workspace</button>':'');
 }
 function practical(n){
  const e=setApp('<section class="card"><div class="pill">APPLY</div><h2>Topic '+n+' Practical Activity</h2><div id="pilotPractical"></div><button class="secondary" onclick="ITCoachPilotOpenTopic('+n+')">← Topic</button></section>');if(!e)return;
  const target=document.getElementById("pilotPractical");
  if(n===7){
   target.innerHTML='<h3>Algorithm & Trace-Table Workspace</h3><p>Choose an application task and save your work in this browser.</p><div class="grid"><button onclick="ITCoachPilotOpenWorkspace(7,\'7.3\')">🧩 Algorithm Design</button><button onclick="ITCoachPilotOpenWorkspace(7,\'7.4\')">📋 Trace Table & Testing</button></div><div id="practicalWorkspace"></div>';
   return;
  }
  const fn={4:"ITCoachRenderTopic4SkillsLab",5:"ITCoachRenderSpreadsheetWorkspace",6:"ITCoachRenderDatabaseWorkspace",8:"ITCoachRenderPascalWorkspace"}[n];
  if(fn&&typeof window[fn]==="function"){try{window[fn](n,"pilotPractical");return;}catch(err){}}
  target.innerHTML='<p>This practical pathway is available in the prototype architecture. Use Assessment to check your knowledge and return for targeted practice.</p><button onclick="ITCoachPilotLaunchAssessment('+n+')">Assess this topic</button>';
 }
 function openWorkspace(topicNo,lessonId){
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("practical_workspace_opened",{subjectId:"IT",topicNo:Number(topicNo),lessonId:String(lessonId)});
  const e=document.getElementById("practicalWorkspace");
  if(!e||typeof ITCoachRenderWorkspace!=="function"){
   if(e)e.innerHTML="<p>The browser workspace is not available in this runtime.</p>";
   return;
  }
  ITCoachRenderWorkspace(Number(topicNo),String(lessonId));
 }
 function assess(n,lessonId){
  const app=setApp('<section class="card"><div class="pill">ASSESS</div><div id="adaptiveAssessment"><p>Loading assessment…</p></div></section>');if(!app)return;
  if(typeof ITCoachStartAdaptive==="function")return ITCoachStartAdaptive(n,lessonId||null);
  document.getElementById("adaptiveAssessment").innerHTML="<p>Assessment engine is unavailable.</p>";
 }
 function reassess(n){
  const app=setApp('<section class="card"><div class="pill">REASSESS</div><div id="adaptiveAssessment"></div></section>');if(!app)return;
  if(typeof ITCoachStartReassessment==="function")return ITCoachStartReassessment(n);
  app.querySelector("#adaptiveAssessment").innerHTML="<p>Reassessment pathway is unavailable.</p>";
 }
 function launchSkill(n,skill){
  const topic=Number(n),s=String(skill||"").trim();
  const map={
   1:{hardware:"1.2","information-processing":"1.5",troubleshooting:"1.6","number-systems":"1.7"},
   2:{network:"2.1",networks:"2.1","transmission-media":"2.2","network-components":"2.2",web:"2.4",internet:"2.4"},
   3:{security:"3.1",countermeasure:"3.2",countermeasures:"3.2",ethics:"3.5","ict-impact":"3.4"},
   4:{"word-processing":"4.1","advanced-word-processing":"4.1",presentation:"4.2","web-page":"4.3"},
   5:{"spreadsheet-purpose":"5.1","formula-functions":"5.2","data-management":"5.3",charts:"5.4"},
   6:{"database-design":"6.1",queries:"6.3","forms-subform":"6.3",reports:"6.3"},
   7:{"problem-solving":"7.1","data-types-operators":"7.2",algorithms:"7.3","trace-tables":"7.4"},
   8:{"programming-languages":"8.1","input-output-assignment":"8.2","selection-loops":"8.3","testing-debugging":"8.4"}
  };
  const lesson=(map[topic]||{})[s];
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("skill_action_started",{subjectId:"IT",topicNo:topic,skill:s,action:lesson?"lesson":"practice"});
  if(lesson)return openLessonItem(topic,lesson);
  return practice(topic);
 }
 function completeLesson(n,id){
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("lesson_completed",{subjectId:"IT",topicNo:Number(n),lessonId:String(id)});
  const skill=typeof ITCoachTopic48SkillFromLesson==="function"&&Number(n)>=4?ITCoachTopic48SkillFromLesson(Number(n),String(id)):null;
  return nextStep(n,id,"lesson",skill);
 }
 function nextStep(n,lessonId,source,skill){
  const topic=Number(n),sid=typeof ITCoachGetActiveStudentId==="function"?ITCoachGetActiveStudentId():"1";let action=null;
  if(typeof ITCoachUniversalNextAction==="function"){
   try{action=ITCoachUniversalNextAction(null,topic,sid)}catch(e){action=null;}
  }
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("learning_step_completed",{subjectId:sid,topicNo:topic,lessonId:lessonId||null,source:source||"learning",skill:skill||null});
  const mode=action&&action.mode?action.mode:"assess",targetSkill=action&&action.skill?action.skill:null;
  let title="What should I do next?",message="Keep building your evidence for this topic.",button="Continue";
  if(mode==="assess"){title="Next: Check your understanding";message="Take a short diagnostic to see what you know.";button="Start diagnostic";}
  else if(mode==="revision"){title="Next: Review a priority skill";message="Your next step is targeted revision of "+(targetSkill||"this topic")+".";button="Review priority skill";}
  else if(mode==="practice"){title="Next: Practice this skill";message="You are developing "+(targetSkill||"this skill")+". Practice it before moving on.";button="Start practice";}
  else{title="Next: Apply your learning";message="You are ready to apply "+(targetSkill||"this skill")+" in a practical task.";button="Open practical";}
  const box=document.getElementById("pilotNextStep");if(!box)return action;
  box.innerHTML='<div class="card"><div class="pill">NEXT STEP</div><h3>'+title+'</h3><p>'+message+'</p><button onclick="ITCoachPilotStartNextStep('+topic+','+JSON.stringify(mode)+','+JSON.stringify(targetSkill||"")+')">'+button+'</button></div>';
  return action;
 }
 function startNextStep(n,mode,skill){
  const topic=Number(n),m=String(mode||"assess");
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("next_step_started",{subjectId:"IT",topicNo:topic,mode:m,skill:skill||null});
  if(m==="assess")return assess(topic);
  if(m==="revision"&&skill)return launchSkill(topic,skill);
  if(m==="practice")return practice(topic);
  if(m==="application")return practical(topic);
  return assess(topic);
 }
 function recommended(n,type){
  type=String(type||"learning").trim();
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("next_action_started",{subjectId:"IT",topicNo:Number(n),action:type});
  if(type==="diagnostic")return assess(n);
  if(type==="support"||type==="learning")return practice(n);
  if(type==="review")return openLesson(n);
  return practice(n);
 }
 window.ITCoachPilotOpenLesson=openLesson;window.ITCoachPilotOpenLessonItem=openLessonItem;window.ITCoachPilotLaunchPractice=practice;window.ITCoachPilotOpenPractical=practical;window.ITCoachPilotLaunchAssessment=assess;window.ITCoachPilotLaunchReassessment=reassess;window.ITCoachPilotLaunchRecommended=recommended;window.ITCoachPilotLaunchSkill=launchSkill;window.ITCoachPilotCompleteLesson=completeLesson;window.ITCoachPilotStartNextStep=startNextStep;window.ITCoachPilotShowNextStep=nextStep;window.ITCoachPilotOpenWorkspace=openWorkspace;
 window.ITCoachPilotOpenTopic=function(n){
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("topic_opened",{subjectId:"IT",topicNo:Number(n)});
  setApp('<section class="card"><div class="pill">TOPIC '+n+'</div><h2>'+topicTitle(n)+'</h2><p>Learn → Practice → Assess → Improve. Your progress is stored in this browser.</p><div class="grid"><button onclick="ITCoachPilotOpenLesson('+n+')">📚 Learn</button><button onclick="ITCoachPilotLaunchPractice('+n+')">🎯 Practice</button><button onclick="ITCoachPilotLaunchAssessment('+n+')">📝 Assess</button><button onclick="ITCoachPilotOpenPractical('+n+')">🛠 Apply</button></div><div id="pilotFeedback"></div><button class="secondary" onclick="ITCoachPilotOpenIT()">← Topics</button></section>');
  if(typeof ITCoachPilotRenderFeedback==="function")ITCoachPilotRenderFeedback(document.getElementById("pilotFeedback"),{subjectId:"IT",topicNo:Number(n)});
 };
})();
