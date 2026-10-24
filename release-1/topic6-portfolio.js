/* Topic 6 achievement history + student portfolio — browser-only prototype */
function ITCoachTopic6History(studentId){
 const all=JSON.parse(localStorage.getItem("itcoachTopic6Mastery")||"[]");
 return all.filter(x=>x.studentId===studentId).sort((a,b)=>new Date(a.at)-new Date(b.at));
}
function ITCoachTopic6Growth(studentId){
 const h=ITCoachTopic6History(studentId);if(!h.length)return null;
 const first=h[0],last=h[h.length-1];
 return{attempts:h.length,first:first.overall,latest:last.overall,growth:last.overall-first.overall,latestStatus:last.status,skills:Object.fromEntries(ITCoachTopic6Skills.map(k=>[k,{first:first.scores[k]||0,latest:last.scores[k]||0,growth:(last.scores[k]||0)-(first.scores[k]||0)}]))};
}
function ITCoachRenderTopic6Portfolio(studentId,containerId){
 const e=document.getElementById(containerId),h=ITCoachTopic6History(studentId),g=ITCoachTopic6Growth(studentId);if(!e)return;
 if(!g){e.innerHTML='<div class="card"><h3>Topic 6 Portfolio</h3><p>No practical attempts recorded yet.</p></div>';return}
 e.innerHTML='<div class="card"><h2>Topic 6 Database Portfolio</h2><p><b>Attempts:</b> '+g.attempts+' &nbsp; <b>First:</b> '+g.first+'% &nbsp; <b>Latest:</b> '+g.latest+'% &nbsp; <b>Growth:</b> '+(g.growth>=0?'+':'')+g.growth+'%</p><h3>Skill Growth</h3><table border="1" cellpadding="6" style="border-collapse:collapse;width:100%"><tr><th>Skill</th><th>First</th><th>Latest</th><th>Growth</th></tr>'+ITCoachTopic6Skills.map(k=>'<tr><td>'+ITCoachTopic6Labels[k]+'</td><td>'+g.skills[k].first+'%</td><td>'+g.skills[k].latest+'%</td><td>'+(g.skills[k].growth>=0?'+':'')+g.skills[k].growth+'%</td></tr>').join('')+'</table><h3>Achievement History</h3>'+h.map((x,i)=>'<p><b>Attempt '+(i+1)+'</b> — '+x.overall+'% — '+x.status+' — '+new Date(x.at).toLocaleString()+'</p>').join('')+'</div>';
}
