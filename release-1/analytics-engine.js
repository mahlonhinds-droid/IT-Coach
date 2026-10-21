/* IT Coach analytics and mastery dashboard — browser-only prototype */
function ITCoachAnalyticsSnapshot(){
 const runtime=JSON.parse(localStorage.getItem("itcoachRuntime")||"{}");
 const scores=runtime.scores||{};
 const topics=[];
 for(let n=1;n<=8;n++){
  const score=scores[String(n)];
  topics.push({topic:n,score:score==null?null:Number(score),status:score==null?"Not assessed":score<70?"Remediate":score<80?"Practice / Review":"Consolidate"});
 }
 const assessed=topics.filter(x=>x.score!==null);
 const average=assessed.length?Math.round(assessed.reduce((a,x)=>a+x.score,0)/assessed.length):0;
 const weak=topics.filter(x=>x.score!==null&&x.score<80).sort((a,b)=>a.score-b.score);
 return {topics,average,assessed:assessed.length,weak};
}
function ITCoachAnalyticsRecommendation(){
 const s=ITCoachAnalyticsSnapshot();
 if(!s.assessed)return{headline:"Start with a diagnostic assessment",detail:"No topic assessment evidence is recorded yet.",action:"Assign or complete a topic assessment."};
 if(s.weak.length)return{headline:"Target the weakest skills first",detail:"Topic "+s.weak[0].topic+" currently has the lowest assessed mastery at "+s.weak[0].score+"%.",action:s.weak[0].score<70?"Remediate then reassess":"Practice/review then reassess"};
 return{headline:"Consolidate current mastery",detail:"All assessed topics are at 80% or higher.",action:"Consolidate and monitor"};
}
function ITCoachRenderAnalytics(containerId){
 const el=document.getElementById(containerId),s=ITCoachAnalyticsSnapshot(),r=ITCoachAnalyticsRecommendation();
 if(!el)return;
 el.innerHTML='<div class="card"><h2>Learning Analytics</h2><p><b>Assessed:</b> '+s.assessed+'/8 &nbsp; <b>Average:</b> '+s.average+'%</p><div class="card"><b>Recommended next action</b><p>'+r.headline+'</p><p>'+r.detail+'</p><b>'+r.action+'</b></div><h3>Mastery by Topic</h3>'+s.topics.map(x=>'<div class="card"><b>Topic '+x.topic+'</b><p>'+(x.score===null?"Not assessed":x.score+"%")+' — '+x.status+'</p><div style="height:10px;background:#e9eef5;border-radius:8px"><div style="height:10px;width:'+(x.score===null?0:x.score)+'%;background:#3478f6;border-radius:8px"></div></div></div>').join('')+'</div>';
}
