/* IT Coach Topic 4 Skills Lab — source-mapped practice scenarios */
const ITCoachTopic4Labs=[
{id:"t4-secretary",title:"School Secretary Challenge",lesson:"4.1",brief:"Create a professional school notice. Include a clear heading, readable paragraphs, a suitable table, and consistent formatting.",skills:["editing","formatting","tables","layout"],checks:["heading","paragraphs","table"]},
{id:"t4-newsletter",title:"Newsletter Challenge",lesson:"4.1",brief:"Prepare a one-page newsletter using columns and page features. Review the document before submission.",skills:["columns","headers/footers","review"],checks:["columns","review"]},
{id:"t4-mailmerge",title:"Mail Merge Challenge",lesson:"4.2",brief:"Prepare a primary letter and demonstrate a data-file/merge-field workflow. Preview the merged result before submission.",skills:["mail merge","merge fields","preview"],checks:["primary document","merge fields","preview"]},
{id:"t4-form",title:"Electronic Form Challenge",lesson:"4.2",brief:"Design a simple electronic form using appropriate controls such as a text box, checkbox, date picker or drop-down.",skills:["forms","content controls","layout"],checks:["label","control","layout"]},
{id:"t4-website",title:"School Club Website Challenge",lesson:"4.3",brief:"Plan and build a small school-club webpage with a clear purpose, audience, heading, content and navigation/hyperlink.",skills:["planning","content","hyperlinks"],checks:["purpose","audience","hyperlink"]},
{id:"t4-webtest",title:"Website Testing Challenge",lesson:"4.3",brief:"Review a webpage against a test checklist. Check links, accuracy, currency, ease of use and attractiveness.",skills:["testing","evaluation"],checks:["links","accuracy","usability"]},
{id:"t4-presentation",title:"Prize-Giving Presentation",lesson:"4.4",brief:"Create a five-slide presentation for a school prize-giving event. Keep the design readable and consistent.",skills:["layouts","design","graphics","delivery"],checks:["5 slides","titles","readability"]},
{id:"t4-exam",title:"Integrated Topic 4 Practical",lesson:"4.1-4.4",brief:"Complete a timed practical sequence: prepare a document, demonstrate a mail-merge workflow, plan a webpage and outline a presentation.",skills:["integration","practical application"],checks:["document","mail merge","web","presentation"]}
];
function ITCoachTopic4Lab(id){return ITCoachTopic4Labs.find(x=>x.id===id)||null}
function ITCoachRenderTopic4Labs(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 e.innerHTML='<div class="card"><h2>Topic 4 Skills Lab</h2><p>Choose a practical challenge. These are author-created practice activities mapped to the Complete Draft topics; they are not official CXC assessment tasks.</p>'+ITCoachTopic4Labs.map(x=>'<article style="border:1px solid #aaa;padding:10px;margin:8px 0"><h3>'+x.title+'</h3><p><b>Lesson:</b> '+x.lesson+'</p><p>'+x.brief+'</p><p><b>Skills:</b> '+x.skills.join(", ")+'</p><button onclick="ITCoachStartTopic4Lab(\''+x.id+'\')">Start Challenge</button></article>').join('')+'</div>';
}
function ITCoachStartTopic4Lab(id){
 const x=ITCoachTopic4Lab(id);if(!x)return;
 localStorage.setItem("itcoachTopic4ActiveLab",JSON.stringify({...x,startedAt:new Date().toISOString()}));
 const e=document.getElementById("topic4LabActive");if(e)e.innerHTML='<div class="card"><h3>'+x.title+'</h3><p>'+x.brief+'</p><p><b>Evidence to demonstrate:</b> '+x.checks.join(", ")+'</p><textarea id="topic4LabEvidence" rows="5" style="width:100%" placeholder="Describe or record the work you completed and what evidence you produced."></textarea><button onclick="ITCoachSubmitTopic4Lab()">Save Lab Evidence</button><p id="topic4LabStatus"></p></div>';
}
function ITCoachSubmitTopic4Lab(){const x=ITCoachTopic4Lab(JSON.parse(localStorage.getItem("itcoachTopic4ActiveLab")||"{}").id);if(!x)return;const d={...x,evidence:document.getElementById("topic4LabEvidence")?.value||"",submittedAt:new Date().toISOString()};localStorage.setItem("itcoachTopic4LabSubmission",JSON.stringify(d));const e=document.getElementById("topic4LabStatus");if(e)e.textContent="Challenge evidence saved in this browser for teacher review."}
