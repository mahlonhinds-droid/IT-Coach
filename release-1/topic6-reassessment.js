/* Topic 6 targeted remediation + reassessment — browser-only prototype */
const ITCoachTopic6RemediationMap={design:"6.1-6.2",queries:"6.3",formsSubform:"6.3",reports:"6.3"};
function ITCoachTopic6WeakSkills(scores){return ITCoachTopic6Skills.filter(k=>(Number(scores[k])||0)<80).sort((a,b)=>(scores[a]||0)-(scores[b]||0))}
function ITCoachTopic6BuildRevision(studentId){
 const all=JSON.parse(localStorage.getItem("itcoachTopic6Mastery")||"[]"),last=all.filter(x=>x.studentId===studentId).slice(-1)[0];if(!last)return null;
 return{studentId,weakSkills:ITCoachTopic6WeakSkills(last.scores),lessons:ITCoachTopic6WeakSkills(last.scores).map(k=>ITCoachTopic6RemediationMap[k]),createdAt:new Date().toISOString()};
}
function ITCoachTopic6RecordReassessment(studentId,scores){
 const prior=ITCoachTopic6Latest().find(x=>x.studentId===studentId),current=ITCoachTopic6ScoreSet(studentId,scores);
 return{studentId,previous:prior?.overall??null,current:current.overall,growth:prior?current.overall-prior.overall:null,status:current.status};
}
function ITCoachRenderTopic6Remediation(studentId,containerId){
 const e=document.getElementById(containerId),r=ITCoachTopic6BuildRevision(studentId);if(!e)return;
 e.innerHTML=r?'<div class="card"><h3>Targeted Topic 6 Revision</h3><p><b>Student:</b> '+studentId+'</p>'+r.weakSkills.map(k=>'<p><b>'+ITCoachTopic6Labels[k]+'</b> — revise lesson '+ITCoachTopic6RemediationMap[k]+'</p>').join('')+'<p>Complete the targeted practical activity, then reassess.</p></div>':'<p>No mastery record found.</p>';
}
