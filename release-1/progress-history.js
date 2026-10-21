/* IT Coach progress history and growth tracking — browser-only prototype */
function ITCoachRecordProgress(event){
 const key="itcoachProgressHistory",all=JSON.parse(localStorage.getItem(key)||"[]");
 all.push({...event,recordedAt:new Date().toISOString()});
 localStorage.setItem(key,JSON.stringify(all));
}
function ITCoachProgressHistory(){
 return JSON.parse(localStorage.getItem("itcoachProgressHistory")||"[]");
}
function ITCoachGrowth(topicNo){
 const rows=ITCoachProgressHistory().filter(x=>String(x.topic)===String(topicNo)&&typeof x.score==="number");
 if(!rows.length)return{topic:String(topicNo),attempts:0,first:null,latest:null,growth:null,history:[]};
 const first=rows[0].score,latest=rows[rows.length-1].score;
 return{topic:String(topicNo),attempts:rows.length,first,latest,growth:latest-first,history:rows};
}
function ITCoachGrowthSummary(){
 const out=[];for(let n=1;n<=8;n++)out.push(ITCoachGrowth(n));return out;
}
function ITCoachRenderGrowth(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const rows=ITCoachGrowthSummary();
 e.innerHTML='<div class="card"><h2>Progress & Growth</h2><p class="small">Growth is based on recorded assessment scores in this browser.</p>'+rows.map(x=>'<div class="card"><b>Topic '+x.topic+'</b><p>Attempts: '+x.attempts+' | First: '+(x.first===null?"—":x.first+"%")+' | Latest: '+(x.latest===null?"—":x.latest+"%")+' | Growth: '+(x.growth===null?"—":(x.growth>=0?"+":"")+x.growth+" points")+'</p></div>').join('')+'</div>';
}
