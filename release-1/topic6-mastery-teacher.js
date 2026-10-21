/* Topic 6 practical mastery + teacher view — browser-only prototype */
const ITCoachTopic6Skills=["design","queries","formsSubform","reports"];
const ITCoachTopic6Labels={design:"Database Design",queries:"Queries",formsSubform:"Forms / Sub-form",reports:"Reports"};
function ITCoachTopic6ScoreSet(studentId,scores){
 const avg=Math.round(ITCoachTopic6Skills.reduce((n,k)=>n+(Number(scores[k])||0),0)/ITCoachTopic6Skills.length);
 const rec={studentId,scores:{...scores},overall:avg,status:avg>=80?"Mastered":avg>=70?"Developing":"Intervention",at:new Date().toISOString()};
 const all=JSON.parse(localStorage.getItem("itcoachTopic6Mastery")||"[]");all.push(rec);localStorage.setItem("itcoachTopic6Mastery",JSON.stringify(all));return rec;
}
function ITCoachTopic6Latest(){
 const all=JSON.parse(localStorage.getItem("itcoachTopic6Mastery")||"[]"),m={};
 all.forEach(x=>m[x.studentId]=x);return Object.values(m);
}
function ITCoachTopic6InterventionPriorities(){
 const rows=ITCoachTopic6Latest(),out={};
 rows.forEach(x=>ITCoachTopic6Skills.forEach(k=>{if((x.scores[k]||0)<80)out[k]=(out[k]||0)+1}));
 return Object.entries(out).sort((a,b)=>b[1]-a[1]).map(([skill,count])=>({skill,count,priority:count>=5?"High":count>=3?"Medium":"Low"}));
}
function ITCoachRenderTopic6TeacherView(containerId){
 const e=document.getElementById(containerId);if(!e)return;const rows=ITCoachTopic6Latest(),p=ITCoachTopic6InterventionPriorities();
 e.innerHTML='<div class="card"><h2>Topic 6 Teacher View — Database Practical Mastery</h2><table border="1" cellpadding="6" style="border-collapse:collapse;width:100%"><tr><th>Student</th>'+ITCoachTopic6Skills.map(k=>'<th>'+ITCoachTopic6Labels[k]+'</th>').join('')+'<th>Overall</th><th>Status</th></tr>'+rows.map(x=>'<tr><td>'+x.studentId+'</td>'+ITCoachTopic6Skills.map(k=>'<td>'+x.scores[k]+'%</td>').join('')+'<td>'+x.overall+'%</td><td>'+x.status+'</td></tr>').join('')+'</table><h3>Intervention Priorities</h3>'+(p.length?p.map(x=>'<p><b>'+ITCoachTopic6Labels[x.skill]+'</b> — '+x.count+' student gap(s) — '+x.priority+' priority</p>').join(''):'<p>No recorded gaps.</p>')+'</div>';
}
function ITCoachRenderTopic6DemoTeacher(containerId){
 ITCoachTopic6ScoreSet("Student A",{design:85,queries:72,formsSubform:90,reports:65});
 ITCoachTopic6ScoreSet("Student B",{design:92,queries:88,formsSubform:76,reports:84});
 ITCoachTopic6ScoreSet("Student C",{design:68,queries:74,formsSubform:63,reports:71});
 ITCoachRenderTopic6TeacherView(containerId);
}
