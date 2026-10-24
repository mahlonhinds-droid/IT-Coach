/* Lightweight chart view for spreadsheet workspace */
function ITCoachRenderSpreadsheetChart(column){
 const e=document.getElementById("spreadsheetChart");if(!e)return;
 const data=ITCoachSpreadsheetChartData(column);
 if(!data.length){e.innerHTML="<p>No numeric data available for this chart.</p>";return;}
 const max=Math.max(...data.map(x=>x.value),1);
 e.innerHTML='<div class="card"><h3>Column '+column+' chart</h3>'+data.map(x=>'<div style="margin:5px 0">Row '+x.row+' <span style="display:inline-block;width:'+Math.max(4,Math.round(x.value/max*240))+'px;border:1px solid currentColor">&nbsp;</span> '+x.value+'</div>').join('')+'</div>';
}
