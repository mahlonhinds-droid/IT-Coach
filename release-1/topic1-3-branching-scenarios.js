/* Topics 1–3 branching scenario engine */
const ITCoachBranching13={
 3:{title:"The Suspicious Message",steps:[
  {text:"A student receives a message asking for a password.",choices:[["Share it","risk"],["Ignore/report it","safe"],["Forward it","risk"]]},
  {text:"The student has avoided the request. What next?",choices:[["Follow school/security reporting procedures","safe"],["Post the message publicly","risk"],["Ask friends to try the link","risk"]]},
  {text:"What principle is being demonstrated?",choices:[["Responsible security practice","safe"],["Unsafe sharing","risk"],["Unauthorised access","risk"]]}
 ]},
 2:{title:"School Network Planning",steps:[
  {text:"A school wants nearby computers to communicate and share resources.",choices:[["Consider a LAN","safe"],["Use only standalone computers","risk"],["Use a personal-area network only","risk"]]},
  {text:"The designer now chooses transmission media.",choices:[["Select based on the connection requirements","safe"],["Choose randomly","risk"],["Ignore the medium","risk"]]}
 ]},
 1:{title:"Troubleshooting the Lab Computer",steps:[
  {text:"A computer is unusually slow.",choices:[["Gather information about the symptoms","safe"],["Immediately erase all files","risk"],["Replace it without investigation","risk"]]},
  {text:"After identifying a likely cause, what should happen?",choices:[["Test the likely cause and verify the result","safe"],["Stop without checking","risk"],["Make unrelated changes","risk"]]}
 ]}};
function ITCoachStartBranching13(topicNo,containerId){
 const e=document.getElementById(containerId),s=ITCoachBranching13[topicNo];if(!e||!s)return;
 e.innerHTML='<div class="card"><h2>'+s.title+'</h2><div id="'+containerId+'_step"></div></div>';
 ITCoachBranchingStep13(topicNo,containerId,0);
}
function ITCoachBranchingStep13(topicNo,containerId,index){
 const e=document.getElementById(containerId+"_step"),s=ITCoachBranching13[topicNo];if(!e||!s)return;
 if(index>=s.steps.length){e.innerHTML='<h3>Scenario complete</h3><p>Explain the decisions you made and why they were appropriate.</p><textarea rows="4" style="width:100%" placeholder="Your reasoning..."></textarea>';return}
 const st=s.steps[index];
 e.innerHTML='<p><b>Step '+(index+1)+' of '+s.steps.length+'</b></p><p>'+st.text+'</p>'+st.choices.map((c,i)=>'<button style="display:block;margin:7px 0;width:100%" onclick="ITCoachBranchChoice13('+topicNo+',\''+containerId+'\','+index+','+i+')">'+c[0]+'</button>').join('');
}
function ITCoachBranchChoice13(topicNo,containerId,index,choiceIndex){
 const st=ITCoachBranching13[topicNo].steps[index],choice=st.choices[choiceIndex],e=document.getElementById(containerId+"_step");
 e.insertAdjacentHTML("beforeend",'<p><b>'+(choice[1]==="safe"?"Good decision.":"Think carefully about the risk.")+'</b></p><button onclick="ITCoachBranchingStep13('+topicNo+',\''+containerId+'\','+(index+1)+')">Continue</button>');
}
