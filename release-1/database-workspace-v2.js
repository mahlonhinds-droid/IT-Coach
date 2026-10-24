/* IT Coach Database Workspace 2.0 — browser-only learning prototype */
function ITCoachDBAddRelationship(parentTable,parentField,childTable,childField){
 const d=ITCoachDB.load();d.relationships=d.relationships||[];
 if(!d.relationships.some(r=>r.parentTable===parentTable&&r.childTable===childTable&&r.parentField===parentField&&r.childField===childField))d.relationships.push({parentTable,parentField,childTable,childField});
 ITCoachDB.save(d);return d;
}
function ITCoachDBSetCalculatedField(table,name,expression){
 const d=ITCoachDB.load();if(!d.tables[table])return d;
 d.calculated=d.calculated||{};d.calculated[table]=d.calculated[table]||{};d.calculated[table][name]=expression;ITCoachDB.save(d);return d;
}
function ITCoachDBJoin(parentTable,childTable,parentField,childField){
 const d=ITCoachDB.load(),p=d.tables[parentTable],c=d.tables[childTable];if(!p||!c)return[];
 return p.rows.flatMap(pr=>c.rows.filter(cr=>String(pr[parentField])===String(cr[childField])).map(cr=>({...pr,...cr})));
}
function ITCoachDBBuildQuery({table,field,op,value,secondField,secondOp,secondValue,logic="AND"}){
 let rows=ITCoachDB.query(table,field,op,value);
 if(secondField){const d=ITCoachDB.load(),t=d.tables[table];rows=t.rows.filter(r=>{const a=String(r[field]),b=String(r[secondField]),v=String(value),v2=String(secondValue);const x=op==="="?a===v:op===">"?Number(a)>Number(v):op==="<"?Number(a)<Number(v):op==="<>":a!==v;const y=secondOp==="="?b===v2:secondOp===">"?Number(b)>Number(v2):secondOp==="<"?Number(b)<Number(v2):b!==v2;return logic==="OR"?x||y:x&&y})}
 return rows;
}
function ITCoachDBCreateForm(name,table,fields){const d=ITCoachDB.load();d.forms=d.forms||{};d.forms[name]={table,fields};ITCoachDB.save(d);return d.forms[name]}
function ITCoachDBCreateReport(name,table,groupBy,sortBy,summaryField){
 const d=ITCoachDB.load();d.reports=d.reports||{};d.reports[name]={table,groupBy,sortBy,summaryField};ITCoachDB.save(d);return d.reports[name];
}
function ITCoachRenderDBV2(containerId){
 const e=document.getElementById(containerId),d=ITCoachDB.load();if(!e)return;
 e.innerHTML='<div class="card"><h2>Database Workspace 2.0</h2><p><b>Relationships:</b> '+(d.relationships||[]).length+' | <b>Forms:</b> '+Object.keys(d.forms||{}).length+' | <b>Reports:</b> '+Object.keys(d.reports||{}).length+'</p><h3>Relationship Builder</h3><button onclick="ITCoachDBAddRelationship(\'STUDENT\',\'StudentID\',\'LOAN\',\'StudentID\');ITCoachRenderDBV2(\''+containerId+'\')">Link STUDENT.StudentID → LOAN.StudentID</button><h3>Join Preview</h3><pre>'+JSON.stringify(ITCoachDBJoin("STUDENT","LOAN","StudentID","StudentID"),null,2)+'</pre></div>';
}
