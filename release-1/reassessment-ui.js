/* Student reassessment flow 1.1 */
let ITCoachReassessment={questions:[],answers:[],index:0,topic:"1",previous:null};
function ITCoachStartReassessment(topicNo,lessonId,skillName){
 const previous=JSON.parse(localStorage.getItem("itcoachLastAdaptive")||"null");
 ITCoachReassessment={questions:ITCoachBuildReassessment(topicNo,lessonId,skillName,previous?previous.questions:[]),answers:[],index:0,topic:String(topicNo),previous,studentId:ITCoachGetActiveStudentId()};
 ITCoachRenderReassessment();
}
function ITCoachRenderReassessment(){
 const e=document.getElementById("adaptiveAssessment");if(!e)return;
 const a=ITCoachReassessment,q=a.questions[a.index];
 if(!q){e.innerHTML="<div class='card'><h2>No reassessment questions available</h2><p>Teacher review or additional approved question content is required.</p></div>";return;}
 e.innerHTML='<div class="card"><h2>Reassessment — Topic '+a.topic+'</h2><p>New evidence: question '+(a.index+1)+' of '+a.questions.length+'</p><h3>'+q.prompt+'</h3>'+q.options.map((o,i)=>'<button onclick="ITCoachAnswerReassessment('+i+')">'+o+'</button>').join('')+'</div>';
}
function ITCoachAnswerReassessment(choice){
 const a=ITCoachReassessment;a.answers[a.index]=choice;a.index++;
 if(a.index<a.questions.length)return ITCoachRenderReassessment();
 const current=ITCoachScoreTaggedAssessment(a.questions,a.answers);
 const comparison=ITCoachReassessmentComparison(a.previous? a.previous.result:null,current);
 localStorage.setItem("itcoachLastReassessment",JSON.stringify({topic:a.topic,result:current,comparison,questions:a.questions,date:new Date().toISOString()}));
 if(typeof ITCoachRecordUniversalEvidence==="function"){
  const skillTotals={};
  (current.details||[]).forEach(d=>{const s=d.skill||"General";skillTotals[s]=skillTotals[s]||{correct:0,total:0};skillTotals[s].total++;if(d.correct)skillTotals[s].correct++;});
  Object.entries(skillTotals).forEach(([skill,v])=>ITCoachRecordUniversalEvidence({studentId:(a.studentId||1),topicNo:a.topic,skill,type:"reassessment",score:Math.round(v.correct/v.total*100),source:"adaptive-reassessment",evidence:"Tagged reassessment result"}));
 }
 const action=current.score<70?"Continue targeted remediation":current.score<80?"Continue practice and reassess":"Consolidate mastery";
 const e=document.getElementById("adaptiveAssessment");
 e.innerHTML='<div class="card"><h2>Reassessment Result</h2><p class="score">'+current.score+'%</p><p>'+current.correct+' of '+current.total+' correct</p><p>Previous score: '+(comparison.previous===null?"—":comparison.previous+"%")+'</p><p>Change: '+(comparison.growth===null?"—":(comparison.growth>=0?"+":"")+comparison.growth+" percentage points")+'</p><h3>Next step</h3><p>'+action+'</p></div>';
}
