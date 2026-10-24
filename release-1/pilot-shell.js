/* IT Coach Student Pilot Shell 1.0
 * Presentation layer for the 2026 student pilot.
 * Browser-only: no backend, no external services.
 */
(function(){
  var subjects=[
    {name:"Information Technology",status:"available",icon:"💻",id:"IT"},
    {name:"Mathematics",status:"soon",icon:"🔢"},
    {name:"Principles of Business",status:"soon",icon:"💼"},
    {name:"Principles of Accounts",status:"soon",icon:"🧾"},
    {name:"EDPM",status:"soon",icon:"📄"},
    {name:"Office Administration",status:"soon",icon:"🏢"}
  ];
  function render(el){
    if(typeof ITCoachPilotRecordEvent==="function") ITCoachPilotRecordEvent("pilot_opened",{screen:"subjects"});
    if(!el)return;
    var active=typeof ITCoachGetActiveStudentId==="function"?ITCoachGetActiveStudentId():"1";
    el.innerHTML=
      '<section class="card"><div class="pill">STUDENT PILOT • 2026</div>'+
      '<h1 style="margin-bottom:6px">Your Personal Learning & Assessment Coach</h1>'+
      '<p class="small">Learn. Practice. Assess. Improve.</p>'+
      '<p>Welcome, Student <strong>'+active+'</strong>. Choose what you want to work on today.</p></section>'+
      '<section class="grid">'+subjects.map(function(s){
        if(s.status==="available")
          return '<button class="card" style="text-align:left;color:#172033" onclick="ITCoachPilotOpenIT()"><div style="font-size:2rem">'+s.icon+'</div><h2>'+s.name+'</h2><p class="small">8 CSEC topics • lessons • practice • assessment</p><strong>Start learning →</strong></button>';
        return '<div class="card" style="opacity:.82"><div style="font-size:2rem">'+s.icon+'</div><h2>'+s.name+'</h2><div class="pill">COMING SOON</div><p class="small">More learning experiences are being built for the IT Coach platform.</p></div>';
      }).join("")+'</section>'+
      '<section class="card"><h2>My Progress</h2><p>See what you have mastered and the next best action IT Coach recommends.</p><button onclick="ITCoachPilotOpenProgress()">📈 View My Progress</button></section><section class="card"><h2>What IT Coach helps you do</h2><div class="grid">'+
      '<div><strong>📚 Learn</strong><p class="small">Work through structured lessons.</p></div>'+
      '<div><strong>🎯 Practice</strong><p class="small">Build confidence before assessment.</p></div>'+
      '<div><strong>📈 Assess</strong><p class="small">See what you know and what needs work.</p></div>'+
      '<div><strong>🧠 Improve</strong><p class="small">Get your next best learning action.</p></div>'+
      '</div></section>';
  }
  window.ITCoachPilotOpenProgress=function(){
    var app=document.getElementById("app");
    var sid=typeof ITCoachGetActiveStudentId==="function"?ITCoachGetActiveStudentId():"1";
    var topics=typeof ITCoachGetCourseTopics==="function"?ITCoachGetCourseTopics("IT","CSEC_IT"):[];
    var rows=topics.map(function(t){
      var m=typeof ITCoachUniversalTopicMastery==="function"?ITCoachUniversalTopicMastery(sid,t.topicNo,"IT"):{average:null,status:"Not Assessed",priority:null};
      var p=m.priority||null;
      return {topicNo:t.topicNo,title:t.title,average:m.average,status:m.status,priority:p};
    });
    var assessed=rows.filter(function(x){return x.average!==null;}).length;
    var mastered=rows.filter(function(x){return x.status==="Mastered";}).length;
    var next=typeof ITCoachStudentNextBestAction==="function"?ITCoachStudentNextBestAction(sid):{title:"Start learning",message:"Choose a topic to begin.",topicNo:null};
    if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("progress_viewed",{subjectId:"IT",assessedTopics:assessed,masteredTopics:mastered});
    if(!app)return;
    var nextAction=next.topicNo?(next.type==="support"?"Support":next.type==="diagnostic"?"Assess":next.type==="learning"?"Continue":"Review"):null;
    var nextHtml='<div class="card" style="margin-top:12px;border-left:4px solid currentColor"><div class="pill">WHAT SHOULD I DO NEXT?</div><h2>'+next.title+'</h2><p>'+next.message+'</p>'+
      (next.topicNo?'<p class="small">Recommended pathway: '+nextAction+'</p><button onclick="ITCoachPilotLaunchRecommended('+next.topicNo+',\' '+(next.type||"learning")+'\')">Start recommended action →</button>':'')+'</div>';
    var progressBar='<div class="card" style="margin-top:12px"><strong>Overall pilot progress</strong><div style="height:12px;background:#e7eaf0;border-radius:8px;margin:8px 0"><div style="height:12px;width:'+Math.round((assessed/8)*100)+'%;background:currentColor;border-radius:8px"></div></div><span class="small">'+assessed+'/8 topics assessed • '+mastered+'/8 mastered</span></div>';
    app.innerHTML='<section class="card"><div class="pill">MY PROGRESS</div><h1>My Learning Progress</h1><p>Student <strong>'+sid+'</strong> • Your progress stays in this browser.</p>'+progressBar+
      '<div class="grid">'+rows.map(function(x){
        var score=x.average===null?"—":x.average+"%";
        var skill=x.priority&&x.priority.skill?x.priority.skill:null;
        var reason=x.average===null?"Ready for a diagnostic":x.status==="Needs Attention"?"Practice recommended":x.status==="Developing"?"Keep practicing":"Extend your skills";
        return '<button class="option" style="text-align:left" onclick="ITCoachPilotOpenTopic('+x.topicNo+')"><strong>Topic '+x.topicNo+': '+x.title+'</strong><br><span class="small">'+x.status+' • '+score+'</span><div style="height:7px;background:#e7eaf0;border-radius:6px;margin-top:8px"><div style="height:7px;width:'+(x.average===null?0:x.average)+'%;background:currentColor;border-radius:6px"></div></div><p class="small" style="margin:7px 0 0"><strong>'+reason+'</strong>'+(skill?' • Focus: '+skill:'')+'</p></button>';
      }).join("")+'</div>'+nextHtml+
      '<section class="card" style="margin-top:12px"><h3>Your learning journey</h3><p class="small">Learn → Practice → Assess → Improve → Reassess → Master</p><p class="small">IT Coach uses your latest evidence to recommend what to do next.</p></section>'+
      '<button class="secondary" onclick="ITCoachRenderPilotShell(document.getElementById(\'app\'))">← Home</button></section>';
  };
  window.ITCoachRenderPilotShell=render;
  window.ITCoachPilotOpenIT=function(){
    if(typeof ITCoachPilotRecordEvent==="function") ITCoachPilotRecordEvent("subject_opened",{subjectId:"IT"});
    if(typeof ITCoachBuildStudentCommandCentreAll==="function"){
      var app=document.getElementById("app");
      if(app) app.innerHTML='<section class="card"><h2>Information Technology</h2><p class="small">Choose a topic to begin. Your progress is stored in this browser.</p><div id="pilotTopics"></div><button class="secondary" onclick="ITCoachRenderPilotShell(document.getElementById(\'app\'))">← Back to subjects</button></section>';
      if(typeof ITCoachGetRuntimeCourse==="function"){
        var topics=ITCoachGetCourseTopics("IT","CSEC_IT");
        var t=document.getElementById("pilotTopics");
        if(t)t.innerHTML=topics.map(function(x){return '<button class="option" onclick="ITCoachPilotOpenTopic('+x.topicNo+')"><strong>Topic '+x.topicNo+': '+x.title+'</strong><br><span class="small">'+x.lessonRange+'</span></button>';}).join("");
      }
    }
  };
  window.ITCoachPilotOpenTopic=function(topicNo){
    if(typeof ITCoachPilotRecordEvent==="function") ITCoachPilotRecordEvent("topic_opened",{subjectId:"IT",topicNo:Number(topicNo)});
    var title=typeof ITCoachGetCourseTopic==="function"&&ITCoachGetCourseTopic(topicNo,"IT","CSEC_IT");
    var app=document.getElementById("app");
    if(app)app.innerHTML='<section class="card"><div class="pill">TOPIC '+topicNo+'</div><h2>'+((title&&title.title)||("Topic "+topicNo))+'</h2><p>This topic is available in the IT Coach pilot. Select the learning activity below to continue.</p><div class="grid"><button onclick="ITCoachPilotLaunchLesson('+topicNo+')">📚 Lesson</button><button onclick="ITCoachPilotLaunchAssessment('+topicNo+')">🎯 Assessment</button></div><button class="secondary" onclick="ITCoachPilotOpenIT()">← Topics</button></section>';
  };
  window.ITCoachPilotLaunchLesson=function(n){
    if(typeof ITCoachOpenTopic==="function")return ITCoachOpenTopic(n);
    if(typeof ITCoachRenderTopic==="function")return ITCoachRenderTopic(n);
    alert("Lesson launcher is being connected to the IT Coach content engine.");
  };
  window.ITCoachPilotLaunchAssessment=function(n){
    if(typeof ITCoachStartAdaptiveAssessment==="function")return ITCoachStartAdaptiveAssessment(n);
    if(typeof ITCoachStartReassessment==="function")return ITCoachStartReassessment(n);
    alert("Assessment launcher is being connected to the IT Coach assessment engine.");
  };
})();
