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
  const app=setApp('<section class="card"><div class="pill">LEARN</div><h2>'+title+'</h2><p>'+(rich?rich.focus:"Review the lesson concepts and complete the activity.")+'</p><h3>Key learning</h3>'+points.map(p=>'<p>• '+p+'</p>').join('')+'<h3>Practice</h3><p>'+activity+'</p><div class="grid"><button onclick="ITCoachPilotLaunchPractice('+n+')">🎯 Practice</button><button onclick="ITCoachPilotLaunchAssessment('+n+',\''+id+'\')">📝 Assess</button></div><button class="secondary" onclick="ITCoachPilotOpenLesson('+n+')">← Lessons</button></section>');
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
  const fn={4:"ITCoachRenderTopic4SkillsLab",5:"ITCoachRenderSpreadsheetWorkspace",6:"ITCoachRenderDatabaseWorkspace",7:"ITCoachRenderTopic13Labs",8:"ITCoachRenderPascalWorkspace"}[n];
  if(fn&&typeof window[fn]==="function"){try{window[fn](n,"pilotPractical");return;}catch(err){}}
  target.innerHTML='<p>This practical pathway is available in the prototype architecture. Use Assessment to check your knowledge and return for targeted practice.</p><button onclick="ITCoachPilotLaunchAssessment('+n+')">Assess this topic</button>';
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
 window.ITCoachPilotOpenLesson=openLesson;window.ITCoachPilotOpenLessonItem=openLessonItem;window.ITCoachPilotLaunchPractice=practice;window.ITCoachPilotOpenPractical=practical;window.ITCoachPilotLaunchAssessment=assess;window.ITCoachPilotLaunchReassessment=reassess;
 window.ITCoachPilotOpenTopic=function(n){
  if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("topic_opened",{subjectId:"IT",topicNo:Number(n)});
  setApp('<section class="card"><div class="pill">TOPIC '+n+'</div><h2>'+topicTitle(n)+'</h2><p>Learn → Practice → Assess → Improve. Your progress is stored in this browser.</p><div class="grid"><button onclick="ITCoachPilotOpenLesson('+n+')">📚 Learn</button><button onclick="ITCoachPilotLaunchPractice('+n+')">🎯 Practice</button><button onclick="ITCoachPilotLaunchAssessment('+n+')">📝 Assess</button><button onclick="ITCoachPilotOpenPractical('+n+')">🛠 Apply</button></div><div id="pilotFeedback"></div><button class="secondary" onclick="ITCoachPilotOpenIT()">← Topics</button></section>');
  if(typeof ITCoachPilotRenderFeedback==="function")ITCoachPilotRenderFeedback(document.getElementById("pilotFeedback"),{subjectId:"IT",topicNo:Number(n)});
 };
})();
