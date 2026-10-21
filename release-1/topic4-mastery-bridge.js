/* IT Coach Topic 4 practical-to-mastery bridge — browser-only prototype */
function ITCoachTopic4MasteryBridge(id){
 const r=ITCoachScoreTopic4Practical(id);
 const history=JSON.parse(localStorage.getItem("itcoachTopic4MasteryHistory")||"[]");
 const prior=history.filter(x=>x.labId===id).slice(-1)[0]||null;
 const record={labId:id,score:r.score,band:r.band,at:new Date().toISOString(),weak:r.rows.filter(x=>!x.pass).map(x=>x.key)};
 history.push(record);localStorage.setItem("itcoachTopic4MasteryHistory",JSON.stringify(history));
 if(typeof ITCoachRecordProgress==="function")ITCoachRecordProgress({topic:4,lesson:JSON.parse(localStorage.getItem("itcoachTopic4ActiveLab")||"{}").lesson||"",activity:id,type:"practical-mastery",score:r.score,band:r.band});
 return {current:record,previous:prior,growth:prior?record.score-prior.score:null};
}
function ITCoachRenderTopic4MasteryBridge(id,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const x=ITCoachTopic4MasteryBridge(id);
 e.innerHTML='<div class="card"><h3>Topic 4 Mastery Update</h3><p><b>Practical score:</b> '+x.current.score+'%</p><p><b>Learning status:</b> '+x.current.band+'</p>'+(x.growth===null?"":"<p><b>Growth:</b> "+(x.growth>=0?"+":"")+x.growth+" points</p>")+'<p><b>Unmet evidence:</b> '+(x.current.weak.length?x.current.weak.join(", "):"None")+'</p></div>';
}
function ITCoachRenderTopic4Portfolio(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const h=JSON.parse(localStorage.getItem("itcoachTopic4MasteryHistory")||"[]");
 e.innerHTML='<div class="card"><h3>Topic 4 Practical Portfolio</h3><p>Recorded practical attempts: '+h.length+'</p>'+h.slice(-8).reverse().map(x=>'<p><b>'+x.labId+'</b> — '+x.score+'% — '+x.band+' — '+new Date(x.at).toLocaleDateString()+'</p>').join('')+'</div>';
}
