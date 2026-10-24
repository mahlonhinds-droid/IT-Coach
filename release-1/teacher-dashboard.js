/* IT Coach Teacher Dashboard — browser-only prototype */
function ITCoachTeacherData(){
 const raw=localStorage.itcoachRuntime;
 const s=raw?JSON.parse(raw):{};
 const scores=s.scores||{};
 return {scores,done:s.done||{}};
}
function ITCoachTeacherSummary(){
 const d=ITCoachTeacherData(), topics=[];
 for(let n=1;n<=8;n++){
  const score=d.scores[String(n)];
  topics.push({topic:String(n),score:score===undefined?null:score,status:score===undefined?'Not assessed':score<70?'Remediate':score<80?'Practice / Review':'Consolidate'});
 }
 return topics;
}
function ITCoachRenderTeacherDashboard(){
 const rows=ITCoachTeacherSummary();
 const assessed=rows.filter(x=>x.score!==null);
 const avg=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.score,0)/assessed.length):0;
 app.innerHTML='<div class="card"><div class="small">Teacher View • Browser-only prototype</div><h1>Teacher Dashboard</h1><p>Assessment evidence is stored in this browser for prototype testing.</p><div class="grid"><div class="card"><h3>Topics assessed</h3><div class="score">'+assessed.length+'/8</div></div><div class="card"><h3>Average assessed mastery</h3><div class="score">'+avg+'%</div></div></div><h2>Topic Performance</h2>'+rows.map(x=>'<div class="card"><b>Topic '+x.topic+'</b><p>Score: '+(x.score===null?'—':x.score+'%')+'</p><p>Status: <span class="pill">'+x.status+'</span></p><button onclick="teacherRecommendation(\''+x.topic+'\')">'+(x.score===null?'Assign assessment':'View intervention')+'</button></div>').join('')+'<button class="secondary" onclick="dashboard()">Student Dashboard</button></div>';
}
function teacherRecommendation(topicNo){
 const x=ITCoachTeacherSummary().find(v=>v.topic===String(topicNo));
 const msg=x.score===null?'Assign a topic assessment to establish diagnostic evidence.':x.score<70?'Assign targeted remediation and reassessment.':x.score<80?'Assign practice/review before reassessment.':'Consolidate the skill and monitor future performance.';
 app.innerHTML='<div class="card"><div class="small">Teacher Intervention</div><h1>Topic '+topicNo+'</h1><p>'+msg+'</p><p class="small">Prototype recommendation only; teacher judgement remains primary.</p><button onclick="ITCoachRenderTeacherDashboard()">Back to Teacher Dashboard</button></div>';
}
