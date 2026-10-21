/* IT Coach Database Builder UI 1.0 — browser-only prototype */
function ITCoachDBRenderQueryBuilder(containerId){
 const e=document.getElementById(containerId),d=ITCoachDB.load();if(!e)return;
 const names=Object.keys(d.tables),t=d.tables.STUDENT||d.tables[names[0]],fields=(t?.fields||[]).map(f=>f[0]);
 e.innerHTML='<div class="card"><h3>Visual Query Builder</h3><p>Select a field, operator and value. Add an optional second condition.</p><label>Field <select id="q1f">'+fields.map(f=>'<option>'+f+'</option>').join('')+'</select></label> <select id="q1o"><option>=</option><option>></option><option><</option><option><></option></select> <input id="q1v" placeholder="Value"><br><br><label>Logic <select id="qLogic"><option>AND</option><option>OR</option></select></label> <select id="q2f">'+fields.map(f=>'<option>'+f+'</option>').join('')+'</select> <select id="q2o"><option>=</option><option>></option><option><</option><option><></option></select> <input id="q2v" placeholder="Optional"><br><br><button onclick="ITCoachDBVisualQuery()">Run Query</button><div id="visualQueryResults"></div></div>';
}
function ITCoachDBVisualQuery(){
 const a={table:"STUDENT",field:document.getElementById("q1f").value,op:document.getElementById("q1o").value,value:document.getElementById("q1v").value,secondField:document.getElementById("q2f").value,secondOp:document.getElementById("q2o").value,secondValue:document.getElementById("q2v").value,logic:document.getElementById("qLogic").value};
 const r=ITCoachDBBuildQuery(a),e=document.getElementById("visualQueryResults");e.innerHTML='<h4>Query Results ('+r.length+')</h4><pre>'+JSON.stringify(r,null,2)+'</pre>';
}
function ITCoachDBRenderFormBuilder(containerId){
 const e=document.getElementById(containerId),d=ITCoachDB.load(),fields=(d.tables.STUDENT?.fields||[]).map(f=>f[0]);if(!e)return;
 e.innerHTML='<div class="card"><h3>Visual Form Builder</h3><p>Choose fields for a student data-entry form.</p>'+fields.map(f=>'<label style="display:block"><input type="checkbox" class="dbFormField" value="'+f+'" checked> '+f+'</label>').join('')+'<button onclick="ITCoachDBSaveVisualForm()">Save Form</button><div id="dbFormStatus"></div></div>';
}
function ITCoachDBSaveVisualForm(){
 const fields=[...document.querySelectorAll(".dbFormField:checked")].map(x=>x.value);ITCoachDBCreateForm("Student Data Entry","STUDENT",fields);document.getElementById("dbFormStatus").textContent="Form saved with "+fields.length+" fields.";
}
function ITCoachDBRenderReportBuilder(containerId){
 const e=document.getElementById(containerId),d=ITCoachDB.load(),fields=(d.tables.STUDENT?.fields||[]).map(f=>f[0]);if(!e)return;
 e.innerHTML='<div class="card"><h3>Visual Report Builder</h3><label>Group by <select id="reportGroup">'+fields.map(f=>'<option>'+f+'</option>').join('')+'</select></label> <label>Sort by <select id="reportSort">'+fields.map(f=>'<option>'+f+'</option>').join('')+'</select></label> <button onclick="ITCoachDBSaveVisualReport()">Create Report</button><div id="dbReportStatus"></div></div>';
}
function ITCoachDBSaveVisualReport(){const g=document.getElementById("reportGroup").value,s=document.getElementById("reportSort").value;ITCoachDBCreateReport("Student Summary","STUDENT",g,s,"Age");document.getElementById("dbReportStatus").textContent="Report definition saved: grouped by "+g+" and sorted by "+s+"."}
