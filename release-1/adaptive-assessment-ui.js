/* Student-facing adaptive assessment UI */
let ITCoachActiveAdaptive={questions:[],answers:[],index:0,topic:"1"};
function ITCoachStartAdaptive(topicNo,lessonId){
 ITCoachActiveAdaptive={questions:ITCoachAdaptiveAssessment(topicNo,lessonId,null,5),answers:[],index:0,topic:String(topicNo)};
 return ITCoachRenderAdaptive();
}
function ITCoachRenderAdaptive(){
 const e=document.getElementById("adaptiveAssessment");if(!e)return;
 const a=ITCoachActiveAdaptive,q=a.questions[a.index];
 if(!q){e.innerHTML="<div class='card'><h2>Assessment complete</h2></div>";return;}
 e.innerHTML='<div class="card"><h2>Targeted Assessment — Topic '+a.topic+'</h2><p>Question '+(a.index+1)+' of '+a.questions.length+'</p><h3>'+q.prompt+'</h3>'+q.options.map((o,i)=>'<button onclick="ITCoachAnswerAdaptive('+i+')">'+o+'</button>').join('')+'</div>';
}
function ITCoachAnswerAdaptive(choice){
 const a=ITCoachActiveAdaptive;a.answers[a.index]=choice;a.index++;
 if(a.index<a.questions.length)return ITCoachRenderAdaptive();
 const result=ITCoachScoreTaggedAssessment(a.questions,a.answers);
 localStorage.setItem("itcoachLastAdaptive",JSON.stringify({topic:a.topic,result,questions:a.questions,answers:a.answers,date:new Date().toISOString()}));
 const best=Object.entries(result.skillScores).sort((x,y)=>x[1]-y[1])[0];
 const action=result.score<70?"Remediate":result.score<80?"Practice / Review":"Consolidate";
 const e=document.getElementById("adaptiveAssessment");
 e.innerHTML='<div class="card"><h2>Assessment Result</h2><p class="score">'+result.score+'%</p><p>'+result.correct+' of '+result.total+' correct</p><h3>Skill breakdown</h3>'+Object.entries(result.skillScores).map(x=>'<p><b>'+x[0]+'</b>: '+x[1]+'%</p>').join('')+'<h3>Recommended next step</h3><p><b>'+action+'</b>'+(best?'. Priority skill: <b>'+best[0]+'</b> ('+best[1]+'%)':"")+'</p><button onclick="ITCoachStartAdaptive(''+a.topic+'')">Reassess</button></div>';
}
