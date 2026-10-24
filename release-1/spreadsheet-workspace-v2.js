/* IT Coach Spreadsheet Workspace 2.0 — browser-only enhancements */
function ITCoachSpreadsheetSetFormula(cell,formula){ITCoachSpreadsheet.set(cell,String(formula||"").startsWith("=")?formula:"="+formula);}
function ITCoachSpreadsheetNormalizeReference(ref){return String(ref).toUpperCase().replace(/\$/g,"");}
function ITCoachSpreadsheetAbsoluteReference(ref){return String(ref).startsWith("$")||String(ref).includes("$");}
function ITCoachSpreadsheetFind(term){
 const d=ITCoachSpreadsheet.load(),hits=[];
 Object.entries(d.cells||{}).forEach(([cell,value])=>{if(String(value).toLowerCase().includes(String(term).toLowerCase()))hits.push({cell,value});});
 return hits;
}
function ITCoachSpreadsheetWorksheet(name){
 const d=ITCoachSpreadsheet.load();d.sheets=d.sheets||{Sheet1:d.cells||{}};if(!d.sheets[name])d.sheets[name]={};d.activeSheet=name;d.cells=d.sheets[name];ITCoachSpreadsheet.save(d);return d.sheets[name];
}
function ITCoachSpreadsheetCreateWorksheet(name){
 const d=ITCoachSpreadsheet.load();d.sheets=d.sheets||{Sheet1:d.cells||{}};if(!d.sheets[name])d.sheets[name]={};ITCoachSpreadsheet.save(d);return d.sheets[name];
}
