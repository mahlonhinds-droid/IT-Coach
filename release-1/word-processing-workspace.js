/* IT Coach Word Processing Workspace 1.0 — browser-only prototype */
const ITCoachWord={
 key:"itcoachWordWorkspace",
 load(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch(e){return{}}},
 save(d){localStorage.setItem(this.key,JSON.stringify(d))},
 get(){const d=this.load();return d.document||""},
 set(html){const d=this.load();d.document=html;d.updatedAt=new Date().toISOString();this.save(d)},
 submit(){const d=this.load();d.status="submitted";d.submittedAt=new Date().toISOString();this.save(d);return d}
};
function ITCoachWordFormat(cmd,value){
 const sel=window.getSelection();if(!sel||!sel.rangeCount)return;
 document.execCommand(cmd,false,value||null);
 ITCoachWordSetDirty();
}
function ITCoachWordSetDirty(){
 const e=document.getElementById("wordEditor");if(e)ITCoachWord.set(e.innerHTML);
 const s=document.getElementById("wordStatus");if(s)s.textContent="Draft saved in this browser.";
}
function ITCoachRenderWordWorkspace(){
 const e=document.getElementById("wordWorkspace");if(!e)return;
 const d=ITCoachWord.get();
 e.innerHTML='<div class="card"><h2>Word Processing Workspace</h2><p>Create and format a document using the editor below.</p><div style="display:flex;gap:6px;flex-wrap:wrap"><button onclick="ITCoachWordFormat(\'bold\')"><b>B</b></button><button onclick="ITCoachWordFormat(\'italic\')"><i>I</i></button><button onclick="ITCoachWordFormat(\'underline\')"><u>U</u></button><button onclick="ITCoachWordFormat(\'formatBlock\',\'h1\')">Heading</button><button onclick="ITCoachWordFormat(\'insertUnorderedList\')">• List</button></div><div id="wordEditor" contenteditable="true" style="min-height:260px;border:1px solid #aaa;padding:12px;margin-top:10px">'+(d||"<p>Start your document here...</p>")+'</div><p><button onclick="ITCoachWordSetDirty()">Save Draft</button> <button onclick="ITCoachWordSubmit()">Submit for Review</button></p><p id="wordStatus"></p></div>';
}
function ITCoachWordSubmit(){ITCoachWordSetDirty();const d=ITCoachWord.submit();const s=document.getElementById("wordStatus");if(s)s.textContent="Document submitted in this browser for teacher review.";}
