/* Web-page design task validation — prototype */
const ITCoachWebTasks={
 basic:{checks:[
  {label:"Page has a title",test:d=>String(d.title).trim().length>0},
  {label:"Page has a heading",test:d=>String(d.heading).trim().length>0},
  {label:"Page has substantive body content",test:d=>String(d.body).trim().length>=30},
  {label:"Page uses a selected alignment",test:d=>["left","center","right"].includes(d.align)}
 ]},
 design:{checks:[
  {label:"Page has a title",test:d=>!!String(d.title).trim()},
  {label:"Page has a heading",test:d=>!!String(d.heading).trim()},
  {label:"Page has body content",test:d=>String(d.body).trim().length>=30},
  {label:"Page has custom styling",test:d=>d.bg!=="#ffffff"||d.text!=="#222222"||d.align!=="left"}
 ]}
};
function ITCoachValidateWebTask(id){const t=ITCoachWebTasks[id],d=ITCoachWeb.load();if(!t)return{score:0,checks:[]};const checks=t.checks.map(c=>({label:c.label,pass:!!c.test(d)}));return{score:Math.round(checks.filter(x=>x.pass).length/checks.length*100),checks}}
function ITCoachRenderWebValidation(id){const r=ITCoachValidateWebTask(id),e=document.getElementById("webStatus");if(!e)return;e.innerHTML="<b>Task check: "+r.score+"%</b>"+r.checks.map(c=>"<p>"+(c.pass?"✓":"✗")+" "+c.label+"</p>").join("")}
