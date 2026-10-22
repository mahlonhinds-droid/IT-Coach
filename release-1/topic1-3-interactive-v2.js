/* Topics 1–3 Interactive Activities v2
   Browser-only: drag/drop-style controls, instant feedback and evidence capture. */
const ITCoachInteractive13V2={
1:[
{id:"t1-v2-hardware",title:"Hardware Match Lab",instruction:"Match each task with the most suitable hardware category.",pairs:[["Enter text","Input"],["Show results","Output"],["Keep files","Storage"]]},
{id:"t1-v2-process",title:"Information Processing Flow",instruction:"Arrange the processing stages in order.",items:["Input","Processing","Output","Storage"]},
{id:"t1-v2-troubleshoot",title:"Troubleshooting Decision Lab",instruction:"Choose the most logical first response when a computer is performing poorly.",choices:["Immediately replace the computer","Gather information about the problem","Delete all files"],correct:"Gather information about the problem"}
],
2:[
{id:"t2-v2-network",title:"School Network Design Lab",instruction:"Choose the network approach that best fits a school area where nearby computers need to share resources.",choices:["LAN","Personal area network only","Standalone computers"],correct:"LAN"},
{id:"t2-v2-media",title:"Transmission Media Lab",instruction:"Choose an appropriate medium for the stated connection.",choices:["Wired medium","Wireless medium","No transmission medium"],correct:"Wired medium"},
{id:"t2-v2-web",title:"Web Service Decision Lab",instruction:"Select the option most directly associated with accessing information and services through the Internet.",choices:["Web service","Local-only file","Offline calculator"],correct:"Web service"}
],
3:[
{id:"t3-v2-security",title:"Security Incident Lab",instruction:"A user receives a suspicious request for credentials. What is the safest response?",choices:["Provide the credentials","Avoid/report the suspicious request","Forward it to classmates"],correct:"Avoid/report the suspicious request"},
{id:"t3-v2-countermeasure",title:"Countermeasure Lab",instruction:"Choose the most appropriate protection for preventing unauthorised access.",choices:["Access control","Publicly sharing passwords","Disabling all backups"],correct:"Access control"},
{id:"t3-v2-ethics",title:"Digital Ethics Lab",instruction:"Choose the most responsible response when technology use may negatively affect another person.",choices:["Consider the impact and act responsibly","Ignore the impact","Share the material widely"],correct:"Consider the impact and act responsibly"}
]};
function ITCoachRenderInteractive13V2(topicNo,containerId){
 const e=document.getElementById(containerId),items=ITCoachInteractive13V2[topicNo]||[];if(!e)return;
 e.innerHTML='<div class="card"><h2>Interactive Skills Lab — Topic '+topicNo+'</h2>'+items.map((a,i)=>'<section style="border:1px solid #ddd;border-radius:10px;padding:14px;margin:12px 0"><h3>'+a.title+'</h3><p>'+a.instruction+'</p><div id="v2_'+topicNo+'_'+i+'"></div><button onclick="ITCoachLaunchInteractive13V2('+topicNo+','+i+',\'v2_'+topicNo+'_'+i+'\')">Start</button></section>').join('')+'</div>';
}
function ITCoachLaunchInteractive13V2(topicNo,index,targetId){
 const a=ITCoachInteractive13V2[topicNo]?.[index],e=document.getElementById(targetId);if(!a||!e)return;
 if(a.choices)e.innerHTML='<select id="'+targetId+'_answer"><option value="">Choose an answer</option>'+a.choices.map(x=>'<option>'+x+'</option>').join('')+'</select> <button onclick="ITCoachCheckInteractive13V2('+topicNo+','+index+',\''+targetId+'\')">Check</button>';
 else if(a.items)e.innerHTML='<p>Drag-and-drop upgrade foundation: select the sequence below.</p><select id="'+targetId+'_answer">'+a.items.map((x,i)=>'<option value="'+i+'">'+x+'</option>').join('')+'</select><p>For the prototype, use the written evidence box to explain the complete order.</p><textarea id="'+targetId+'_evidence" rows="3" style="width:100%" placeholder="Explain the sequence and why it is logical."></textarea><button onclick="ITCoachSaveInteractive13Evidence('+topicNo+','+index+',\''+targetId+'\')">Save Evidence</button>';
 else e.innerHTML='<p>Match the items by entering your reasoning.</p><textarea id="'+targetId+'_evidence" rows="4" style="width:100%" placeholder="Explain each match and why it is suitable."></textarea><button onclick="ITCoachSaveInteractive13Evidence('+topicNo+','+index+',\''+targetId+'\')">Save Evidence</button>';
}
function ITCoachCheckInteractive13V2(topicNo,index,targetId){
 const a=ITCoachInteractive13V2[topicNo]?.[index],v=document.getElementById(targetId+'_answer')?.value,e=document.getElementById(targetId);
 const correct=v===a.correct;
 e.insertAdjacentHTML('beforeend','<p><b>'+(correct?'Correct! Now explain your reasoning.':'Not quite. Review the scenario and try again.')+'</b></p><textarea id="'+targetId+'_evidence" rows="3" style="width:100%" placeholder="Explain your reasoning..."></textarea><button onclick="ITCoachSaveInteractive13Evidence('+topicNo+','+index+',\''+targetId+'\')">Save Evidence</button>');
}
function ITCoachSaveInteractive13Evidence(topicNo,index,targetId){
 const a=ITCoachInteractive13V2[topicNo]?.[index],ev=document.getElementById(targetId+'_evidence')?.value||'',key="itcoachInteractive13V2Evidence",all=JSON.parse(localStorage.getItem(key)||"[]");
 all.push({topicNo,activityId:a.id,evidence:ev,at:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(all));
 const e=document.getElementById(targetId);e.insertAdjacentHTML('beforeend','<p><b>Evidence saved to this browser.</b></p>');
}
