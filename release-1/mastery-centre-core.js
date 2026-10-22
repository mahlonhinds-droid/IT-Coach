/* IT Coach reusable Mastery Centre Core 1.0
   Browser-only, topic-agnostic orchestration layer. */
function ITCoachMasteryCentreSnapshot(topicNo,studentId,skills,latestResolver,growthResolver,revisionResolver){
 const latest=latestResolver?latestResolver(topicNo,studentId):null;
 const growth=growthResolver?growthResolver(topicNo,studentId):null;
 const weak=(skills||[]).filter(k=>latest && Number(latest.scores?.[k])<80);
 return {topicNo,studentId,latest,growth,weakSkills:weak,revision:revisionResolver?revisionResolver(topicNo,studentId):null};
}
function ITCoachMasteryStatus(score){return score==null?"Not assessed":score>=80?"Mastered":score>=70?"Developing":"Intervention"}
function ITCoachRecommendedNextStep(snapshot){
 if(!snapshot.latest)return"Start the practical or assessment.";
 if(snapshot.weakSkills?.length)return"Complete targeted revision for: "+snapshot.weakSkills.join(", ")+".";
 return"Complete a consolidation or extension activity.";
}
function ITCoachRenderGenericMasteryCentre(containerId,config){
 const e=document.getElementById(containerId);if(!e)return;
 const s=config.snapshot||{};
 const latest=s.latest,score=latest?.overall;
 e.innerHTML='<div class="card"><h2>'+(config.title||"Mastery Centre")+'</h2><p><b>Student:</b> '+(s.studentId||"—")+'</p><p><b>Overall:</b> '+(score==null?"Not assessed":score+"%")+' &nbsp; <b>Status:</b> '+ITCoachMasteryStatus(score)+' &nbsp; <b>Growth:</b> '+(s.growth?.growth==null?"—":(s.growth.growth>=0?"+":"")+s.growth.growth+"%")+'</p><h3>Skill Mastery</h3>'+((config.skills||[]).map(k=>'<p>'+k.label+': <b>'+((latest?.scores?.[k.id]??"—"))+(latest?.scores?.[k.id]!=null?"%":"")+'</b></p>').join(''))+'<h3>Recommended Next Step</h3><p>'+ITCoachRecommendedNextStep(s)+'</p></div>';
}
