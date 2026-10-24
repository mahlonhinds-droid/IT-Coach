/* IT Coach Spreadsheet Workspace — browser-only prototype */
const ITCoachSpreadsheet={
 key:"itcoachSpreadsheetWorkspace",
 load(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch(e){return{}}},
 save(d){localStorage.setItem(this.key,JSON.stringify(d))},
 init(rows=6,cols=6){
  const d=this.load(); if(!d.cells)d.cells={};
  for(let r=1;r<=rows;r++)for(let c=0;c<cols;c++){const k=String.fromCharCode(65+c)+r;if(d.cells[k]===undefined)d.cells[k]="";}
  d.rows=rows;d.cols=cols;this.save(d);return d;
 },
 set(cell,value){const d=this.load();d.cells[cell]=value;this.save(d)},
 value(cell){return this.load().cells?.[cell]??""}
};
function ITCoachSpreadsheetCellValue(cell){
 const v=ITCoachSpreadsheet.value(cell);
 if(typeof v==="string"&&v.startsWith("="))return ITCoachSpreadsheetFormula(v);
 return isNaN(Number(v))||v===""?v:Number(v);
}
function ITCoachSpreadsheetFormula(formula){
 let f=formula.replace(/^=/,"").toUpperCase();
 const range=f.match(/^(SUM|AVERAGE)\(([A-Z]+\d+):([A-Z]+\d+)\)$/);
 if(range){
  const start=range[2],end=range[3],c1=start.charCodeAt(0),c2=end.charCodeAt(0),r1=+start.slice(1),r2=+end.slice(1),vals=[];
  for(let c=c1;c<=c2;c++)for(let r=r1;r<=r2;r++){const v=Number(ITCoachSpreadsheet.value(String.fromCharCode(c)+r));if(!isNaN(v))vals.push(v)}
  if(range[1]==="SUM")return vals.reduce((a,b)=>a+b,0);
  return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:0;
 }
 const simple=f.match(/^([A-Z]+\d+)\s*([+\-*\/])\s*([A-Z]+\d+)$/);
 if(simple){const a=Number(ITCoachSpreadsheetCellValue(simple[1])),b=Number(ITCoachSpreadsheetCellValue(simple[3]));if(simple[2]==="+")return a+b;if(simple[2]==="-")return a-b;if(simple[2]==="*")return a*b;if(simple[2]==="/")return b?a/b:"DIV/0";}
 return "#UNSUPPORTED";
}
function ITCoachRenderSpreadsheetWorkspace(){
 const e=document.getElementById("spreadsheetWorkspace");if(!e)return;
 ITCoachSpreadsheet.init();
 let html='<div class="card"><h2>Spreadsheet Workspace</h2><p>Enter values or simple formulas. Supported prototype functions: SUM, AVERAGE and basic + − × ÷ cell formulas.</p><table><tbody>';
 for(let r=1;r<=6;r++){html+='<tr>';for(let c=0;c<6;c++){const cell=String.fromCharCode(65+c)+r;html+='<td><label>'+cell+'</label><input id="cell_'+cell+'" value="'+String(ITCoachSpreadsheet.value(cell)).replace(/"/g,'&quot;')+'" onchange="ITCoachSpreadsheetEdit(\''+cell+'\',this.value)"><small>'+String(ITCoachSpreadsheetCellValue(cell))+'</small></td>'}html+='</tr>'}
 html+='</tbody></table><button onclick="ITCoachSpreadsheetCheck()">Check calculations</button><button onclick="ITCoachSpreadsheetSave()">Save Draft</button><div id="spreadsheetFeedback"></div></div>';
 e.innerHTML=html;
}
function ITCoachSpreadsheetEdit(cell,value){ITCoachSpreadsheet.set(cell,value);ITCoachRenderSpreadsheetWorkspace()}
function ITCoachSpreadsheetSave(){const e=document.getElementById("spreadsheetFeedback");if(e)e.innerHTML="<p>Spreadsheet draft saved in this browser.</p>"}
function ITCoachSpreadsheetCheck(){
 let issues=[];
 for(const cell of Object.keys(ITCoachSpreadsheet.load().cells)){const v=ITCoachSpreadsheet.value(cell);if(typeof v==="string"&&v.startsWith("=")&&ITCoachSpreadsheetCellValue(cell)==="#UNSUPPORTED")issues.push(cell)}
 const e=document.getElementById("spreadsheetFeedback");if(e)e.innerHTML=issues.length?'<p>Review formula cells: '+issues.join(", ")+'</p>':'<p>Prototype check complete. Formula syntax is supported for the current workspace features.</p>';
}

function ITCoachSpreadsheetSort(column){
 const d=ITCoachSpreadsheet.load(); const rows=[];
 for(let r=1;r<=d.rows;r++) rows.push({r,v:d.cells[column+r]??""});
 rows.sort((a,b)=>String(a.v).localeCompare(String(b.v),undefined,{numeric:true}));
 const ordered={}; rows.forEach((x,i)=>{const nr=i+1;for(let c=0;c<d.cols;c++){const col=String.fromCharCode(65+c);ordered[col+nr]=d.cells[col+x.r]??"";}});
 d.cells=ordered;ITCoachSpreadsheet.save(d);ITCoachRenderSpreadsheetWorkspace();
}
function ITCoachSpreadsheetChartData(column){
 const d=ITCoachSpreadsheet.load(),out=[];for(let r=1;r<=d.rows;r++){const v=Number(d.cells[column+r]);if(!isNaN(v))out.push({row:r,value:v});}return out;
}
