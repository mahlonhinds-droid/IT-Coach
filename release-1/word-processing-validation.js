/* Word-processing task validation — prototype */
const ITCoachWordTasks={
 notice:{required:["heading","body"],checks:[{label:"Document contains a heading",test:html=>/<h1|<h2|<h3/i.test(html)},{label:"Document contains substantive text",test:html=>String(html).replace(/<[^>]+>/g," ").trim().length>=40}]},
 formatted:{required:["formatting"],checks:[{label:"Document contains bold formatting",test:html=>/<strong|<b/i.test(html)},{label:"Document contains a list",test:html=>/<ul|<ol/i.test(html)}]}
};
function ITCoachValidateWordTask(taskId){
 const task=ITCoachWordTasks[taskId],html=ITCoachWord.get();if(!task)return{score:0};
 const checks=task.checks.map(c=>({label:c.label,pass:!!c.test(html)}));
 return{score:checks.length?Math.round(checks.filter(x=>x.pass).length/checks.length*100):0,checks};
}
function ITCoachRenderWordValidation(taskId){
 const r=ITCoachValidateWordTask(taskId),e=document.getElementById("wordStatus");if(!e)return;
 e.innerHTML='<b>Task check: '+r.score+'%</b>'+r.checks.map(c=>'<p>'+(c.pass?"✓":"✗")+' '+c.label+'</p>').join('');
}
