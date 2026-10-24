/* IT Coach unified 8-topic adaptive dashboard 1.0 — browser-only */
const ITCoachUnifiedTopics={
1:"Fundamentals of IT",2:"Networks and Communication",3:"Social and Economic Impact of IT",
4:"Word Processing, Presentations and Web Pages",5:"Spreadsheets",6:"Databases",
7:"Problem Solving and Program Design",8:"Programming in Pascal"
};
function ITCoachUnifiedTopicStatus(studentId,topicNo){
 const adaptive=JSON.parse(localStorage.getItem("itcoachInteractive13Results")||"[]").filter(x=>x.studentId===studentId&&x.topicNo===topicNo);
 const tagged=JSON.parse(localStorage.getItem("itcoachLastAdaptive")||"null");
 const topicScore=tagged&&Number(tagged.topicNo)===topicNo?Number(tagged.score):null;
 const practical=JSON.parse(localStorage.getItem("itcoachPracticalWorkspace")||"null");
 const score=adaptive.length?Math.round(adaptive.reduce((n,x)=>n+x.score,0)/adaptive.length):topicScore;
 const s=score===null?"Not Assessed":score>=80?"Mastered":score>=70?"Developing":"Needs Attention";
 return{topicNo,name:ITCoachUnifiedTopics[topicNo],score,status:s,next:score===null?"Start topic assessment":score<70?"Targeted revision":score<80?"Practice weakest skill":"Higher-level application"};
}
function ITCoachUnifiedDashboard(studentId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const rows=Array.from({length:8},(_,i)=>ITCoachUnifiedTopicStatus(studentId,i+1));
 e.innerHTML='<div class="card"><h2>Adaptive Learning Dashboard</h2><p>One view of progress across all eight IT Coach topics.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px">'+rows.map(r=>'<div style="border:1px solid #ddd;border-radius:12px;padding:14px"><h3>Topic '+r.topicNo+'</h3><p>'+r.name+'</p><p><b>'+r.status+'</b> '+(r.score===null?"":r.score+"%")+'</p><p>'+r.next+'</p><button onclick="ITCoachUnifiedTopicAction('+r.topicNo+',\''+containerId+'\')">Open Next Step</button></div>').join('')+'</div></div>';
}
function ITCoachUnifiedTopicAction(topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 e.insertAdjacentHTML("beforeend",'<div class="card" style="margin-top:12px"><h3>Topic '+topicNo+' — '+ITCoachUnifiedTopics[topicNo]+'</h3><p>Next step: use the topic lesson, assessment, practical activity or targeted revision pathway available in this browser prototype.</p></div>');
}
