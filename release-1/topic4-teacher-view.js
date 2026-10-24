/* IT Coach Topic 4 Teacher View — browser-only prototype */
const ITCoachTopic4Teacher={
 labs:["t4-secretary","t4-newsletter","t4-mailmerge","t4-form","t4-website","t4-webtest","t4-presentation"],
 labels:{ "t4-secretary":"School Secretary","t4-newsletter":"Newsletter","t4-mailmerge":"Mail Merge","t4-form":"Electronic Form","t4-website":"School Club Website","t4-webtest":"Website Testing","t4-presentation":"Prize-Giving Presentation" },
 getHistory(){return JSON.parse(localStorage.getItem("itcoachTopic4MasteryHistory")||"[]")},
 studentIds(){const h=this.getHistory();return [...new Set(h.map(x=>x.studentId||"Current Student"))]}
};
function ITCoachTopic4ClassSnapshot(){
 const h=ITCoachTopic4Teacher.getHistory(),students=ITCoachTopic4Teacher.studentIds();
 return students.map(student=>{
  const rows=ITCoachTopic4Teacher.labs.map(id=>{const a=h.filter(x=>(x.studentId||"Current Student")===student&&x.labId===id).slice(-1)[0];return{id,score:a?a.score:null,band:a?a.band:"unassessed"}});
  const assessed=rows.filter(x=>x.score!==null);const avg=assessed.length?Math.round(assessed.reduce((n,x)=>n+x.score,0)/assessed.length):null;
  return{student,rows,average:avg,status:avg===null?"Unassessed":avg>=80?"Mastered":avg>=70?"Developing":"Intervention"};
 });
}
function ITCoachRenderTopic4TeacherView(containerId){
 const e=document.getElementById(containerId);if(!e)return;const data=ITCoachTopic4ClassSnapshot();
 e.innerHTML='<div class="card"><h2>Topic 4 Teacher View</h2><p>Practical skills overview from browser-local student evidence.</p><div style="overflow:auto"><table border="1" cellpadding="6" style="border-collapse:collapse;width:100%"><tr><th>Student</th>'+ITCoachTopic4Teacher.labs.map(id=>'<th>'+ITCoachTopic4Teacher.labels[id]+'</th>').join('')+'<th>Overall</th><th>Status</th></tr>'+data.map(s=>'<tr><td>'+s.student+'</td>'+s.rows.map(x=>'<td>'+(x.score===null?"—":x.score+"%")+'</td>').join('')+'<td>'+(s.average===null?"—":s.average+"%")+'</td><td>'+s.status+'</td></tr>').join('')+'</table></div></div>';
}
function ITCoachTopic4InterventionSkills(){
 const h=ITCoachTopic4Teacher.getHistory(),counts={};h.forEach(x=>(x.weak||[]).forEach(k=>counts[k]=(counts[k]||0)+1));
 return Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([skill,count])=>({skill,count}));
}
function ITCoachRenderTopic4Interventions(containerId){
 const e=document.getElementById(containerId);if(!e)return;const rows=ITCoachTopic4InterventionSkills();
 e.innerHTML='<div class="card"><h3>Topic 4 Intervention Priorities</h3>'+(rows.length?rows.map(x=>'<p><b>'+x.skill+'</b> — '+x.count+' recorded gap(s)</p>').join(''):'<p>No recorded intervention gaps yet.</p>')+'</div>';
}
