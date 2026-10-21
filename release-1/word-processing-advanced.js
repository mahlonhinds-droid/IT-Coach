/* IT Coach Word Processing Workspace 1.1 — Topic 4.2 prototype */
const ITCoachWordAdvanced={
 key:"itcoachWordAdvanced",
 load(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch(e){return{}}},
 save(d){localStorage.setItem(this.key,JSON.stringify(d))}
};
function ITCoachWordInsertTable(rows=3,cols=3){
 const e=document.getElementById("wordEditor");if(!e)return;
 let h="<table border='1' style='border-collapse:collapse;width:100%'><tbody>";
 for(let r=0;r<rows;r++){h+="<tr>";for(let c=0;c<cols;c++)h+="<td style='padding:6px' contenteditable='true'>Cell</td>";h+="</tr>";}
 h+="</tbody></table><p></p>";
 e.focus();document.execCommand("insertHTML",false,h);ITCoachWordSetDirty();
}
function ITCoachWordInsertMailMerge(){
 const e=document.getElementById("wordEditor");if(!e)return;
 const template="<p>Dear {{FirstName}},</p><p>We are pleased to provide information to {{Organisation}}.</p><p>Regards,<br>IT Coach</p>";
 e.focus();document.execCommand("insertHTML",false,template);ITCoachWordSetDirty();
}
function ITCoachWordPreviewMerge(){
 const sample={FirstName:"Student",Organisation:"Sample School"};
 let html=ITCoachWord.get();
 Object.entries(sample).forEach(([k,v])=>html=html.replaceAll("{{"+k+"}}",v));
 const w=window.open("","_blank");if(w){w.document.write("<title>Mail Merge Preview</title>"+html);w.document.close();}
}
function ITCoachWordLayout(){
 const e=document.getElementById("wordEditor");if(!e)return;
 e.style.maxWidth="760px";e.style.margin="0 auto";e.style.lineHeight="1.5";
 ITCoachWordSetDirty();
}
