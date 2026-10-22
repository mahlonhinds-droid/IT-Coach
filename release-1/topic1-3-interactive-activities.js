/* Topics 1–3 interactive activity engine 1.0 — browser-only */
const ITCoachInteractive13={
 1:[
  {id:"t1-hardware-match",title:"Hardware Match",type:"matching",prompt:"Match each school task to the most suitable hardware category.",pairs:[["Enter text","Input device"],["Display results","Output device"],["Store files","Storage"]]},
  {id:"t1-troubleshoot-order",title:"Troubleshooting Sequence",type:"ordering",prompt:"Put the troubleshooting approach in a logical order.",items:["Identify the problem","Gather information","Test a likely cause","Apply the solution","Verify the result"]},
  {id:"t1-processing-sort",title:"Information Processing",type:"sorting",prompt:"Sort the stages of information processing.",items:["Input","Processing","Output","Storage"]}
 ],
 2:[
  {id:"t2-network-build",title:"Build the School Network",type:"scenario",prompt:"Choose a suitable network approach for a school area, then justify your choices.",choices:["Wired LAN","Wireless LAN","Mobile network"],correct:"Wired LAN"},
  {id:"t2-media-match",title:"Transmission Media Match",type:"matching",prompt:"Match the situation to a suitable transmission approach.",pairs:[["Fixed high-speed connection","Wired medium"],["Mobile access","Wireless/mobile"],["Short-range wireless connection","Wireless"]]},
  {id:"t2-web-service",title:"Internet Service Decision",type:"scenario",prompt:"Select the most appropriate web/Internet service for the stated need.",choices:["Web service","Local storage","Standalone application"],correct:"Web service"}
 ],
 3:[
  {id:"t3-security-case",title:"Security Case File",type:"scenario",prompt:"A student receives a suspicious message requesting credentials. Identify the risk and choose the safest response.",choices:["Share credentials","Report/avoid the suspicious request","Forward it to friends"],correct:"Report/avoid the suspicious request"},
  {id:"t3-countermeasure-match",title:"Countermeasure Match",type:"matching",prompt:"Match the security problem with an appropriate countermeasure.",pairs:[["Unauthorised access","Access control"],["Malicious software","Security software"],["Data loss","Backup"]]},
  {id:"t3-ethics-decision",title:"Digital Ethics Decision",type:"scenario",prompt:"Choose the most responsible action when technology use could negatively affect another person.",choices:["Ignore the impact","Consider the impact and act responsibly","Share the material"],correct:"Consider the impact and act responsibly"}
 ]};
function ITCoachInteractive13(topicNo){return ITCoachInteractive13[topicNo]||[]}
function ITCoachRenderInteractive13(topicNo,containerId){
 const e=document.getElementById(containerId),items=ITCoachInteractive13[topicNo]||[];if(!e)return;
 e.innerHTML='<div class="card"><h2>Interactive Lab — Topic '+topicNo+'</h2>'+items.map((a,i)=>'<div style="border:1px solid #ddd;padding:12px;margin:10px 0"><h3>'+a.title+'</h3><p>'+a.prompt+'</p><div id="ia13_'+topicNo+'_'+i+'"></div><button onclick="ITCoachRunInteractive13('+topicNo+','+i+',\'ia13_'+topicNo+'_'+i+'\')">Start Activity</button></div>').join('')+'</div>';
}
function ITCoachRunInteractive13(topicNo,index,targetId){
 const a=ITCoachInteractive13[topicNo]?.[index],e=document.getElementById(targetId);if(!a||!e)return;
 if(a.type==="scenario"){e.innerHTML='<select id="'+targetId+'sel"><option value="">Choose...</option>'+a.choices.map(x=>'<option>'+x+'</option>').join('')+'</select><button onclick="ITCoachCheckInteractive13(\''+targetId+'\','+topicNo+','+index+')">Check</button>'}
 else if(a.type==="sorting"){e.innerHTML='<p>'+a.items.join(" → ")+'</p><input id="'+targetId+'ans" style="width:100%" placeholder="Enter order separated by commas"><button onclick="ITCoachCheckInteractive13(\''+targetId+'\','+topicNo+','+index+')">Check</button>'}
 else {e.innerHTML='<p>Use the listed items as your starting evidence.</p><textarea id="'+targetId+'ans" rows="3" style="width:100%" placeholder="Explain your matching/reasoning"></textarea><button onclick="ITCoachCheckInteractive13(\''+targetId+'\','+topicNo+','+index+')">Submit Evidence</button>'}
}
function ITCoachCheckInteractive13(targetId,topicNo,index){
 const a=ITCoachInteractive13[topicNo]?.[index],e=document.getElementById(targetId);if(!a||!e)return;
 let ok=false;if(a.type==="scenario"){ok=document.getElementById(targetId+"sel")?.value===a.correct}
 const msg=a.type==="scenario"?(ok?"Correct — explain why this is appropriate.":"Review the scenario and try again."):"Evidence recorded — teacher review can evaluate the reasoning.";
 e.insertAdjacentHTML("beforeend",'<p><b>'+msg+'</b></p>');
}
