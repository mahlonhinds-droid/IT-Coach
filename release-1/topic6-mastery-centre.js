/* Topic 6 unified Mastery Centre — browser-only prototype */
function ITCoachTopic6MasterySnapshot(studentId){
 const latest=ITCoachTopic6Latest().find(x=>x.studentId===studentId),growth=ITCoachTopic6Growth(studentId),revision=ITCoachTopic6BuildRevision(studentId);
 return{latest,growth,revision};
}
function ITCoachRenderTopic6MasteryCentre(containerId,studentId){
 const e=document.getElementById(containerId);if(!e)return;
 const snap=ITCoachTopic6MasterySnapshot(studentId),l=snap.latest,g=snap.growth;
 const weak=l?ITCoachTopic6WeakSkills(l.scores):[];
 e.innerHTML='<div class="card"><h2>Topic 6 Mastery Centre</h2><p><b>Student:</b> '+studentId+'</p><div><b>Latest overall:</b> '+(l?l.overall+"%":"Not assessed")+' &nbsp; <b>Status:</b> '+(l?l.status:"Not assessed")+' &nbsp; <b>Growth:</b> '+(g?(g.growth>=0?"+":"")+g.growth+"%":"—")+'</div><h3>Skill Mastery</h3>'+(l?ITCoachTopic6Skills.map(k=>'<p>'+ITCoachTopic6Labels[k]+': <b>'+l.scores[k]+'%</b> '+(l.scores[k]>=80?"✓":"→ Revise")+'</p>').join(''):'<p>Complete a practical attempt to begin.</p>')+'<h3>Recommended Next Step</h3><p>'+(!l?"Start the Database Practical.":weak.length?"Targeted revision: "+weak.map(k=>ITCoachTopic6Labels[k]).join(", ")+".":"Complete a consolidation activity or extension task.")+'</p><p><button onclick="ITCoachRenderTopic6Portfolio(\''+studentId+'\',\''+containerId+'\')">View Portfolio</button> <button onclick="ITCoachRenderTopic6Remediation(\''+studentId+'\',\''+containerId+'\')">View Targeted Revision</button></p></div>';
}
