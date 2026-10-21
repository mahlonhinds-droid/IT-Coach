/* Topic 6 live forms and reports — browser-only prototype */
function ITCoachDBRenderLiveForm(containerId,formName){
 const e=document.getElementById(containerId),d=ITCoachDB.load(),f=(d.forms||{})[formName];if(!e||!f)return;
 e.innerHTML='<div class="card"><h3>'+formName+'</h3><p>Data-entry form for '+f.table+'</p>'+f.fields.map(x=>'<label style="display:block;margin:6px 0">'+x+' <input id="live_'+x+'" type="text"></label>').join('')+'<button onclick="ITCoachDBSubmitLiveForm(\''+containerId+'\',\''+formName+'\')">Add Record</button><div id="'+containerId+'_status"></div></div>';
}
function ITCoachDBSubmitLiveForm(containerId,formName){
 const d=ITCoachDB.load(),f=(d.forms||{})[formName];if(!f)return;const row={};f.fields.forEach(x=>row[x]=document.getElementById("live_"+x)?.value||"");ITCoachDB.addRecord(f.table,row);document.getElementById(containerId+"_status").textContent="Record added.";ITCoachDBRenderLiveForm(containerId,formName);
}
function ITCoachDBRenderLiveReport(containerId,reportName){
 const e=document.getElementById(containerId),d=ITCoachDB.load(),r=(d.reports||{})[reportName];if(!e||!r)return;const rows=d.tables[r.table]?.rows||[],groups={};
 rows.forEach(x=>(groups[x[r.groupBy]]??=[]).push(x));
 e.innerHTML='<div class="card"><h3>'+reportName+'</h3>'+Object.entries(groups).map(([g,items])=>'<section><h4>'+g+' ('+items.length+')</h4>'+items.sort((a,b)=>String(a[r.sortBy]).localeCompare(String(b[r.sortBy]))).map(x=>'<p>'+Object.entries(x).map(([k,v])=>k+': '+v).join(' | ')+'</p>').join('')+'</section>').join('')+'</div>';
}
function ITCoachDBRenderLiveObjects(containerId){
 const e=document.getElementById(containerId),d=ITCoachDB.load();if(!e)return;
 const forms=Object.keys(d.forms||{}),reports=Object.keys(d.reports||{});
 e.innerHTML='<div class="card"><h2>Live Forms & Reports</h2><p>'+forms.map(x=>'<button onclick="ITCoachDBRenderLiveForm(\''+containerId+'\',\''+x+'\')">Open '+x+'</button>').join(' ')+'</p><p>'+reports.map(x=>'<button onclick="ITCoachDBRenderLiveReport(\''+containerId+'\',\''+x+'\')">Open '+x+'</button>').join(' ')+'</p></div>';
}
