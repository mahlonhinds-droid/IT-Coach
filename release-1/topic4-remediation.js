/* Topic 4 practical remediation — browser-only prototype */
function ITCoachTopic4Remediation(id){
 const r=ITCoachScoreTopic4Practical(id);
 const weak=r.rows.filter(x=>!x.pass).map(x=>x.key);
 const lessons={heading:"4.1",content:"4.1",formatting:"4.1",table:"4.1",columns:"4.1",review:"4.1",primary:"4.2",fields:"4.2",preview:"4.2",workflow:"4.2",label:"4.2",control:"4.2",layout:"4.2",protection:"4.2",purpose:"4.3",hyperlink:"4.3",design:"4.3",links:"4.3",accuracy:"4.3",usability:"4.3",audience:"4.3",slides:"4.4",titles:"4.4",readability:"4.4",consistency:"4.4",submission:"4.1"};
 return {labId:id,score:r.score,weak,targets:weak.map(k=>({skill:k,lesson:lessons[k]||"4.1"}))};
}
function ITCoachRenderTopic4Remediation(id,containerId){
 const e=document.getElementById(containerId),r=ITCoachTopic4Remediation(id);if(!e)return;
 if(!r.weak.length){e.innerHTML="<div class='card'><h3>Ready for the next challenge</h3><p>No unmet prototype requirements were detected.</p></div>";return}
 e.innerHTML="<div class='card'><h3>Targeted Revision</h3><p>Your practical score was <b>"+r.score+"%</b>. Review these specific areas:</p>"+r.targets.map(x=>"<p>• <b>"+x.skill+"</b> — Topic 4."+String(x.lesson).split(".")[1]+"</p>").join("")+"<p>Revise the listed skill, improve your artifact, then resubmit the challenge.</p><button onclick=\"ITCoachTopic4LaunchReassessment('"+id+"')\">Start Practical Reassessment</button></div>";
}
function ITCoachTopic4LaunchReassessment(id){
 localStorage.setItem("itcoachTopic4Reassessment",JSON.stringify({labId:id,startedAt:new Date().toISOString()}));
 const e=document.getElementById("topic4Reassessment");if(e)e.innerHTML="<div class='card'><h3>Practical Reassessment</h3><p>Revise the identified requirements, update your workspace artifact and submit new evidence. Your new evidence will be compared with the previous practical result.</p><button onclick=\"ITCoachTopic4Rescore('"+id+"')\">Rescore My Work</button></div>";
}
function ITCoachTopic4Rescore(id){
 const current=ITCoachScoreTopic4Practical(id);
 const prior=JSON.parse(localStorage.getItem("itcoachTopic4PracticalScore")||"null");
 const growth=prior?current.score-prior.score:null;
 localStorage.setItem("itcoachTopic4PracticalScore",JSON.stringify(current));
 const e=document.getElementById("topic4Reassessment");if(e)e.innerHTML="<div class='card'><h3>Reassessment Result</h3><p>New score: <b>"+current.score+"%</b></p>"+(growth===null?"":"<p>Change from previous result: <b>"+(growth>=0?"+":"")+growth+" percentage points</b></p>")+"<p>"+(current.score>=80?"You have met the prototype mastery threshold.":"Continue targeted revision on the unmet requirements.")+"</p></div>";
}
