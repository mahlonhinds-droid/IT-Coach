/* IT Coach Presentation Workspace 1.0 — browser-only Topic 4.3 prototype */
const ITCoachPresentation={
 key:"itcoachPresentationWorkspace",
 load(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch(e){return{slides:[]}}},
 save(d){localStorage.setItem(this.key,JSON.stringify(d))}
};
function ITCoachPresentationInit(){
 const d=ITCoachPresentation.load();if(!Array.isArray(d.slides)||!d.slides.length)d.slides=[{title:"Title Slide",body:"Start your presentation here."}];ITCoachPresentation.save(d);ITCoachRenderPresentation();
}
function ITCoachPresentationAdd(){
 const d=ITCoachPresentation.load();d.slides.push({title:"New Slide",body:"Add your content here."});ITCoachPresentation.save(d);ITCoachRenderPresentation();
}
function ITCoachPresentationDelete(i){
 const d=ITCoachPresentation.load();if(d.slides.length<=1)return;d.slides.splice(i,1);ITCoachPresentation.save(d);ITCoachRenderPresentation();
}
function ITCoachPresentationEdit(i,key,value){
 const d=ITCoachPresentation.load();d.slides[i][key]=value;d.updatedAt=new Date().toISOString();ITCoachPresentation.save(d);
}
function ITCoachPresentationMove(i,dir){
 const d=ITCoachPresentation.load(),j=i+dir;if(j<0||j>=d.slides.length)return;[d.slides[i],d.slides[j]]=[d.slides[j],d.slides[i]];ITCoachPresentation.save(d);ITCoachRenderPresentation();
}
function ITCoachPresentationPreview(){
 const d=ITCoachPresentation.load();const w=window.open("","_blank");if(!w)return;
 w.document.write("<title>IT Coach Presentation Preview</title><style>body{font-family:Arial;margin:0}.slide{min-height:85vh;padding:8%;box-sizing:border-box;border-bottom:1px solid #ddd}.slide h1{font-size:42px}</style>");
 d.slides.forEach(s=>w.document.write("<section class='slide'><h1>"+s.title.replace(/</g,"&lt;")+"</h1><div>"+s.body+"</div></section>"));w.document.close();
}
function ITCoachPresentationSubmit(){
 const d=ITCoachPresentation.load();d.status="submitted";d.submittedAt=new Date().toISOString();ITCoachPresentation.save(d);const e=document.getElementById("presentationStatus");if(e)e.textContent="Presentation submitted in this browser for teacher review.";
}
function ITCoachRenderPresentation(){
 const e=document.getElementById("presentationWorkspace");if(!e)return;const d=ITCoachPresentation.load();
 e.innerHTML='<div class="card"><h2>Presentation Workspace</h2><p>Create, organise and preview slides.</p>'+d.slides.map((s,i)=>'<div style="border:1px solid #aaa;padding:10px;margin:8px 0"><input style="width:90%;font-size:18px" value="'+String(s.title).replace(/"/g,"&quot;")+'" onchange="ITCoachPresentationEdit('+i+',\'title\',this.value)"><textarea rows="4" style="width:90%;margin-top:6px" onchange="ITCoachPresentationEdit('+i+',\'body\',this.value)">'+String(s.body).replace(/</g,"&lt;")+'</textarea><br><button onclick="ITCoachPresentationMove('+i+',-1)">↑</button><button onclick="ITCoachPresentationMove('+i+',1)">↓</button><button onclick="ITCoachPresentationDelete('+i+')">Delete</button></div>').join('')+'<button onclick="ITCoachPresentationAdd()">Add Slide</button> <button onclick="ITCoachPresentationPreview()">Preview</button> <button onclick="ITCoachPresentationSubmit()">Submit</button><p id="presentationStatus"></p></div>';
}
