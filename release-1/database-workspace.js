/* IT Coach Database Workspace 1.0 — browser-only prototype */
const ITCoachDB={
 key:"itcoachDatabaseWorkspace",
 default(){return {tables:{STUDENT:{fields:[["StudentID","Text",true],["Name","Text",false],["Form","Text",false],["Age","Number",false]],rows:[]},LOAN:{fields:[["LoanID","Text",true],["StudentID","Text",false],["DateOut","Date",false],["Returned","Logical",false]],rows:[]}},selected:"STUDENT"}},
 load(){return JSON.parse(localStorage.getItem(this.key)||"null")||this.default()},
 save(d){localStorage.setItem(this.key,JSON.stringify(d));return d},
 createTable(name){const d=this.load();if(!d.tables[name])d.tables[name]={fields:[["ID","Text",true]],rows:[]};return this.save(d)},
 addField(table,name,type,key){const d=this.load();if(d.tables[table]&&!d.tables[table].fields.some(f=>f[0]===name))d.tables[table].fields.push([name,type,!!key]);return this.save(d)},
 addRecord(table,row){const d=this.load();if(!d.tables[table])return d;d.tables[table].rows.push(row);return this.save(d)},
 query(table,field,op,value){const d=this.load(),t=d.tables[table];if(!t)return[];return t.rows.filter(r=>{const a=r[field];if(op==="=")return String(a)===String(value);if(op===">")return Number(a)>Number(value);if(op==="<")return Number(a)<Number(value);if(op==="<>")return String(a)!==String(value);return false})},
 summary(){const d=this.load();return Object.entries(d.tables).map(([name,t])=>({name,fields:t.fields.length,records:t.rows.length}))}
};
function ITCoachRenderDatabaseWorkspace(containerId){
 const e=document.getElementById(containerId);if(!e)return;const d=ITCoachDB.load();
 e.innerHTML='<div class="card"><h2>Database Workspace</h2><p>Create tables, define fields, add records and test simple queries. Work is saved in this browser.</p><p><b>Tables:</b> '+Object.keys(d.tables).join(", ")+'</p><button onclick="ITCoachDBCreateDemo()">Load Demo Library Database</button><div id="dbTableView"></div><div id="dbQueryView"></div></div>';
 ITCoachRenderDBTable("STUDENT");ITCoachRenderDBQuery();
}
function ITCoachDBCreateDemo(){const d=ITCoachDB.default();d.tables.STUDENT.rows=[{StudentID:"S01",Name:"Ann",Form:"4A",Age:16},{StudentID:"S02",Name:"Ben",Form:"4B",Age:15},{StudentID:"S03",Name:"Cal",Form:"4A",Age:15},{StudentID:"S04",Name:"Dee",Form:"4A",Age:17}];ITCoachDB.save(d);ITCoachRenderDatabaseWorkspace("databaseWorkspace")}
function ITCoachRenderDBTable(name){
 const e=document.getElementById("dbTableView"),d=ITCoachDB.load(),t=d.tables[name];if(!e||!t)return;
 e.innerHTML='<h3>'+name+' Table</h3><table border="1" cellpadding="5" style="border-collapse:collapse"><tr>'+t.fields.map(f=>'<th>'+f[0]+'</th>').join('')+'</tr>'+t.rows.map(r=>'<tr>'+t.fields.map(f=>'<td>'+(r[f[0]]??"")+'</td>').join('')+'</tr>').join('')+'</table>';
}
function ITCoachRenderDBQuery(){
 const e=document.getElementById("dbQueryView");if(!e)return;
 e.innerHTML='<h3>Query Practice</h3><select id="dbField"><option>Age</option><option>Form</option><option>Name</option></select><select id="dbOp"><option>></option><option>=</option><option><</option><option><></option></select><input id="dbValue" placeholder="Value"><button onclick="ITCoachRunDBQuery()">Run Query</button><div id="dbQueryResults"></div>';
}
function ITCoachRunDBQuery(){const f=document.getElementById("dbField").value,o=document.getElementById("dbOp").value,v=document.getElementById("dbValue").value,r=ITCoachDB.query("STUDENT",f,o,v),e=document.getElementById("dbQueryResults");e.innerHTML="<p><b>"+r.length+" record(s)</b></p>"+r.map(x=>"<p>"+x.Name+" — "+x.Form+" — age "+x.Age+"</p>").join("")}
