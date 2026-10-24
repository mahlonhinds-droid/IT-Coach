/* Presentation task validation — prototype */
const ITCoachPresentationTasks={
 miniPresentation:{checks:[
  {label:"At least 3 slides",test:d=>d.slides.length>=3},
  {label:"Slides contain titles",test:d=>d.slides.every(s=>String(s.title).trim().length>0)},
  {label:"Slides contain content",test:d=>d.slides.filter(s=>String(s.body).trim().length>0).length>=3}
 ]},
 structured:{checks:[
  {label:"At least 4 slides",test:d=>d.slides.length>=4},
  {label:"Each slide has a title",test:d=>d.slides.every(s=>String(s.title).trim())}
 ]}
};
function ITCoachValidatePresentationTask(id){
 const task=ITCoachPresentationTasks[id],d=ITCoachPresentation.load();if(!task)return{score:0,checks:[]};
 const checks=task.checks.map(c=>({label:c.label,pass:!!c.test(d)}));return{score:Math.round(checks.filter(x=>x.pass).length/checks.length*100),checks};
}
function ITCoachRenderPresentationValidation(id){
 const r=ITCoachValidatePresentationTask(id),e=document.getElementById("presentationStatus");if(!e)return;
 e.innerHTML="<b>Task check: "+r.score+"%</b>"+r.checks.map(c=>"<p>"+(c.pass?"✓":"✗")+" "+c.label+"</p>").join("");
}
