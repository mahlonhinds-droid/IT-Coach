/* Teacher-authored spreadsheet task validation — prototype */
const ITCoachSpreadsheetTasks={
 totals:{checks:[{cell:"B5",type:"equals",value:150,label:"Total should equal 150"}]},
 average:{checks:[{cell:"B6",type:"equals",value:50,label:"Average should equal 50"}]}
};
function ITCoachValidateSpreadsheetTask(taskId){
 const task=ITCoachSpreadsheetTasks[taskId];if(!task)return{score:0,checks:[],message:"Task not found"};
 const checks=task.checks.map(c=>{const actual=ITCoachSpreadsheetCellValue(c.cell);const pass=String(actual)===String(c.value);return {...c,actual,pass}});
 const score=checks.length?Math.round(checks.filter(x=>x.pass).length/checks.length*100):0;
 return{score,checks};
}
function ITCoachRenderSpreadsheetTaskResult(taskId){
 const r=ITCoachValidateSpreadsheetTask(taskId),e=document.getElementById("spreadsheetFeedback");if(!e)return;
 e.innerHTML='<h3>Task check: '+r.score+'%</h3>'+r.checks.map(c=>'<p>'+ (c.pass?"✓":"✗")+' '+c.label+' — '+c.actual+'</p>').join('');
}
