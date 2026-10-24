/* IT Coach Web Page Design Workspace 1.0 — browser-only Topic 4.4 prototype */
const ITCoachWeb={
 key:"itcoachWebWorkspace",
 load(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch(e){return{}}},save(d){localStorage.setItem(this.key,JSON.stringify(d))}
};
function ITCoachWebDefaults(){const d=ITCoachWeb.load();return Object.assign({title:"My Web Page",heading:"Welcome",body:"Create your web page content here.",bg:"#ffffff",text:"#222222",align:"left"},d)}
function ITCoachRenderWebWorkspace(){
 const e=document.getElementById("webWorkspace");if(!e)return;const d=ITCoachWebDefaults();
 e.innerHTML='<div class="card"><h2>Web Page Design Workspace</h2><p>Edit the page content and preview the rendered result.</p><label>Page title <input id="webTitle" value="'+d.title.replace(/"/g,"&quot;")+'"></label><br><label>Heading <input id="webHeading" value="'+d.heading.replace(/"/g,"&quot;")+'"></label><br><label>Body <textarea id="webBody" rows="5">'+d.body.replace(/</g,"&lt;")+'</textarea></label><br><label>Background <input id="webBg" type="color" value="'+d.bg+'"></label> <label>Text <input id="webText" type="color" value="'+d.text+'"></label> <label>Alignment <select id="webAlign"><option>left</option><option>center</option><option>right</option></select></label><p><button onclick="ITCoachWebSave()">Save Draft</button> <button onclick="ITCoachWebPreview()">Preview</button> <button onclick="ITCoachWebSubmit()">Submit</button></p><p id="webStatus"></p><div id="webPreview" style="border:1px solid #aaa;min-height:180px;padding:20px"></div></div>';
 document.getElementById("webAlign").value=d.align;ITCoachWebUpdatePreview();
}
function ITCoachWebRead(){return{title:document.getElementById("webTitle").value,heading:document.getElementById("webHeading").value,body:document.getElementById("webBody").value,bg:document.getElementById("webBg").value,text:document.getElementById("webText").value,align:document.getElementById("webAlign").value}}
function ITCoachWebSave(){const d=ITCoachWebRead();ITCoachWeb.save(d);ITCoachWebUpdatePreview();const s=document.getElementById("webStatus");if(s)s.textContent="Web page draft saved in this browser."}
function ITCoachWebUpdatePreview(){const d=ITCoachWebRead();const p=document.getElementById("webPreview");if(p)p.innerHTML='<h1>'+d.heading.replace(/</g,"&lt;")+'</h1><p>'+d.body.replace(/</g,"&lt;").replace(/\n/g,"<br>")+'</p>';if(p){p.style.background=d.bg;p.style.color=d.text;p.style.textAlign=d.align}}
function ITCoachWebPreview(){ITCoachWebSave();const d=ITCoachWebRead(),w=window.open("","_blank");if(w){w.document.write("<title>"+d.title+"</title><main style='padding:10%;font-family:Arial;background:"+d.bg+";color:"+d.text+";text-align:"+d.align+"'><h1>"+d.heading+"</h1><p>"+d.body.replace(/\n/g,"<br>")+"</p></main>");w.document.close()}}
function ITCoachWebSubmit(){ITCoachWebSave();const d=ITCoachWeb.load();d.status="submitted";d.submittedAt=new Date().toISOString();ITCoachWeb.save(d);const s=document.getElementById("webStatus");if(s)s.textContent="Web page submitted in this browser for teacher review."}
