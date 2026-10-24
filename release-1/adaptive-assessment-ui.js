/* Student-facing adaptive assessment UI 1.1 — pilot learning loop */
let ITCoachActiveAdaptive={questions:[],answers:[],index:0,topic:"1",lessonId:null,studentId:null};
function ITCoachStartAdaptive(topicNo,lessonId){
 const studentId=typeof ITCoachGetActiveStudentId==="function"?ITCoachGetActiveStudentId():"1";
 ITCoachActiveAdaptive={questions:ITCoachAdaptiveAssessment(topicNo,lessonId,null,5),answers:[],index:0,topic:String(topicNo),lessonId:lessonId||null,studentId};
 return ITCoachRenderAdaptive();
}
function ITCoachRenderAdaptive(){
 const e=document.getElementById("adaptiveAssessment");if(!e)return;
 const a=ITCoachActiveAdaptive,q=a.questions[a.index];
 if(!q){e.innerHTML="<div class='card'><h2>No assessment questions available</h2><p>Try the topic practice activity or return to Topics.</p></div>";return;}
 e.innerHTML='<div class="card"><div class="pill">ASSESS</div><h2>Targeted Assessment — Topic '+a.topic+'</h2><p>Question '+(a.index+1)+' of '+a.questions.length+'</p><h3>'+q.prompt+'</h3>'+q.options.map((o,i)=>'<button onclick="ITCoachAnswerAdaptive('+i+')">'+o+'</button>').join('')+'</div>';
}
function ITCoachAnswerAdaptive(choice){
 const a=ITCoachActiveAdaptive;a.answers[a.index]=choice;a.index++;
 if(a.index<a.questions.length)return ITCoachRenderAdaptive();
 const result=ITCoachScoreTaggedAssessment(a.questions,a.answers);
 localStorage.setItem("itcoachLastAdaptive",JSON.stringify({topic:a.topic,lessonId:a.lessonId,result,skillScores:result.skillScores,questions:a.questions,answers:a.answers,studentId:a.studentId,date:new Date().toISOString()}));
 if(typeof ITCoachBridgeAdaptiveAssessment==="function")ITCoachBridgeAdaptiveAssessment(a.studentId);
 const priority=Object.entries(result.skillScores||{}).sort((x,y)=>x[1]-y[1])[0];
 const topicMastery=typeof ITCoachUniversalTopicMastery==="function"?ITCoachUniversalTopicMastery(a.studentId,Number(a.topic),"IT"):null;
 const next=typeof ITCoachUniversalNextAction==="function"?ITCoachUniversalNextAction(a.studentId,Number(a.topic),"IT"):null;
 const action=next&&next.action?next.action:(result.score<70?"Targeted revision":result.score<85?"Practice the weakest skill":"Apply the skill in a practical task");
 const e=document.getElementById("adaptiveAssessment");
 e.innerHTML='<div class="card"><div class="pill">RESULT</div><h2>Assessment Complete</h2><p class="score">'+result.score+'%</p><p>'+result.correct+' of '+result.total+' correct</p><h3>Skill breakdown</h3>'+Object.entries(result.skillScores||{}).map(x=>'<p><b>'+x[0]+'</b>: '+x[1]+'%</p>').join('')+(priority?'<p><b>Priority skill:</b> '+priority[0]+'</p>':'')+(topicMastery?'<p><b>Topic mastery:</b> '+topicMastery.status+'</p>':'')+'<h3>Next best action</h3><p>'+action+'</p>'+(result.score<85?'<button onclick="ITCoachPilotLaunchReassessment('+a.topic+')">🔁 Reassess</button>':'')+'<button class="secondary" onclick="ITCoachPilotOpenTopic('+a.topic+')">← Topic</button></div>';
 if(typeof ITCoachPilotRecordEvent==="function")ITCoachPilotRecordEvent("assessment_completed",{subjectId:"IT",topicNo:Number(a.topic),score:result.score});
}
