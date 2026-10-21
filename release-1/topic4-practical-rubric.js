/* Topic 4 practical evidence rubric — prototype, teacher-reviewable */
const ITCoachTopic4Rubrics={
"t4-secretary":[
["heading","Clear heading present",15],
["content","Substantive document content",20],
["formatting","Formatting demonstrated",20],
["table","Table demonstrated",25],
["submission","Evidence submitted",20]],
"t4-newsletter":[["content","Newsletter content present",20],["columns","Columns/page-layout evidence",25],["review","Review/checking evidence",25],["formatting","Consistent formatting",15],["submission","Evidence submitted",15]],
"t4-mailmerge":[["primary","Primary document demonstrated",25],["fields","Merge fields demonstrated",25],["preview","Merge preview/checking demonstrated",20],["workflow","Workflow described",15],["submission","Evidence submitted",15]],
"t4-form":[["label","Form labels/prompts",20],["control","Appropriate content control",30],["layout","Clear form layout",20],["protection","Protection/restriction described",15],["submission","Evidence submitted",15]],
"t4-website":[["purpose","Purpose/audience identified",15],["heading","Heading/content present",20],["hyperlink","Hyperlink/navigation evidence",25],["design","Basic design demonstrated",20],["submission","Evidence submitted",20]],
"t4-webtest":[["links","Links checked",25],["accuracy","Accuracy/current content checked",25],["usability","Usability evaluated",20],["audience","Test audience considered",15],["submission","Evidence submitted",15]],
"t4-presentation":[["slides","Required slides created",20],["titles","Slide titles present",15],["readability","Readable design",25],["consistency","Consistent design",20],["submission","Evidence submitted",20]]
};
function ITCoachTopic4Rubric(id){return ITCoachTopic4Rubrics[id]||[]}
function ITCoachTopic4EvidenceFromWork(id){
 const d=JSON.parse(localStorage.getItem("itcoachTopic4ActiveLab")||"{}");
 const word=ITCoachWord?.get?.()||"";
 const web=ITCoachWeb?.load?.()||{};
 const pres=ITCoachPresentation?.load?.()||{slides:[]};
 const ev=String(d.evidence||"").toLowerCase();
 const checks={};
 if(id==="t4-secretary"){checks.heading=/<h1|<h2|<h3/i.test(word);checks.content=word.replace(/<[^>]+>/g," ").trim().length>=80;checks.formatting=/<strong|<b|<em|<i|<u/i.test(word);checks.table=/<table/i.test(word);checks.submission=!!ev}
 if(id==="t4-newsletter"){checks.content=word.replace(/<[^>]+>/g," ").trim().length>=100;checks.columns=/column|columns/i.test(word)||/column|columns/i.test(ev);checks.review=/review|spell|grammar|track changes|comment/i.test(ev);checks.formatting=/<strong|<b|<em|<i|<u/i.test(word);checks.submission=!!ev}
 if(id==="t4-mailmerge"){checks.primary=word.trim().length>0;checks.fields=/{{[^}]+}}/.test(word);checks.preview=/preview/i.test(ev);checks.workflow=/primary|data file|merge field|merge/i.test(ev);checks.submission=!!ev}
 if(id==="t4-form"){checks.label=/label|prompt/i.test(ev)||word.trim().length>0;checks.control=/checkbox|check box|date picker|drop-down|dropdown|text box/i.test(ev);checks.layout=/layout|form/i.test(ev);checks.protection=/protect|restriction/i.test(ev);checks.submission=!!ev}
 if(id==="t4-website"){checks.purpose=/purpose|audience/i.test(ev);checks.heading=!!String(web.heading||"").trim();checks.hyperlink=/hyperlink|link|navigation/i.test(ev);checks.design=!!web.bg||!!web.text;checks.submission=!!ev}
 if(id==="t4-webtest"){checks.links=/link/i.test(ev);checks.accuracy=/accurate|accuracy|current|currency/i.test(ev);checks.usability=/usability|easy to use|ease of use/i.test(ev);checks.audience=/audience|test audience/i.test(ev);checks.submission=!!ev}
 if(id==="t4-presentation"){checks.slides=(pres.slides||[]).length>=5;checks.titles=(pres.slides||[]).every(s=>String(s.title||"").trim());checks.readability=/readable|font|contrast/i.test(ev);checks.consistency=/consistent|template|master|design/i.test(ev);checks.submission=!!ev}
 return checks;
}
function ITCoachScoreTopic4Practical(id){
 const rubric=ITCoachTopic4Rubric(id),checks=ITCoachTopic4EvidenceFromWork(id);
 const rows=rubric.map(([key,label,weight])=>({key,label,weight,pass:!!checks[key]}));
 const score=rows.reduce((n,r)=>n+(r.pass?r.weight:0),0);
 return {id,score,band:score>=80?"mastered":score>=70?"developing":"needs-revision",rows};
}
function ITCoachRenderTopic4PracticalScore(id,containerId){
 const e=document.getElementById(containerId),r=ITCoachScoreTopic4Practical(id);if(!e)return;
 e.innerHTML='<div class="card"><h3>Practical Evidence: '+r.score+'%</h3><p><b>Status:</b> '+r.band+'</p>'+r.rows.map(x=>'<p>'+(x.pass?"✓":"✗")+' '+x.label+' — '+x.weight+'%</p>').join('')+'<p>'+ (r.score<80?"Review the unmet requirements and resubmit after revision.":"Good work. You have demonstrated the prototype requirements.")+'</p></div>';
 localStorage.setItem("itcoachTopic4PracticalScore",JSON.stringify(r));
}
