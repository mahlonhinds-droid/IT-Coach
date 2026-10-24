/* Topic 6 database practical validation — prototype */
const ITCoachDBTasks={
"db-design":[["tables","At least two tables",25],["primary","Primary key demonstrated",20],["types","Multiple suitable data types",20],["records","Records entered",20],["submission","Evidence submitted",15]],
"db-query":[["condition","Query condition demonstrated",25],["operator","Comparison operator used",20],["result","Query result produced",25],["calculation","Calculated field/query described",15],["submission","Evidence submitted",15]],
"db-form-report":[["form","Form/data-entry design",25],["subform","Main form/sub-form described",20],["report","Report design",20],["grouping","Grouping/sorting described",20],["submission","Evidence submitted",15]]
};
function ITCoachValidateDatabaseTask(id,evidence){
 const d=ITCoachDB.load(),ev=String(evidence||"").toLowerCase(),r=[];
 (ITCoachDBTasks[id]||[]).forEach(([key,label,weight])=>{
  let pass=false;
  if(key==="tables")pass=Object.keys(d.tables).length>=2;
  if(key==="primary")pass=Object.values(d.tables).some(t=>t.fields.some(f=>f[2]));
  if(key==="types")pass=Object.values(d.tables).some(t=>new Set(t.fields.map(f=>f[1])).size>=2);
  if(key==="records")pass=Object.values(d.tables).some(t=>t.rows.length>0);
  if(key==="condition")pass=/where|condition|criteria|filter/i.test(ev);
  if(key==="operator")pass=/[<>=]/.test(ev)||/and|or/i.test(ev);
  if(key==="result")pass=document.getElementById("dbQueryResults")?.textContent?.includes("record")||/result/i.test(ev);
  if(key==="calculation")pass=/calculated|calculation|sum|average|total/i.test(ev);
  if(key==="form")pass=/form|data entry/i.test(ev);
  if(key==="subform")pass=/sub.?form/i.test(ev);
  if(key==="report")pass=/report/i.test(ev);
  if(key==="grouping")pass=/group|sort/i.test(ev);
  if(key==="submission")pass=ev.trim().length>0;
  r.push({key,label,weight,pass});
 });
 const score=r.reduce((n,x)=>n+(x.pass?x.weight:0),0);
 return{score,band:score>=80?"mastered":score>=70?"developing":"needs-revision",rows:r};
}
function ITCoachRenderDatabaseValidation(id,evidence,containerId){
 const e=document.getElementById(containerId),r=ITCoachValidateDatabaseTask(id,evidence);if(!e)return;
 e.innerHTML='<div class="card"><h3>Database Practical Evidence: '+r.score+'%</h3><p>Status: <b>'+r.band+'</b></p>'+r.rows.map(x=>'<p>'+(x.pass?"✓":"✗")+' '+x.label+' — '+x.weight+'%</p>').join('')+'</div>';
 localStorage.setItem("itcoachLastDatabasePractical",JSON.stringify({id,...r,at:new Date().toISOString()}));
}
