/* Topics 1–3 visual simulation cards */
function ITCoachRenderTopic13Simulation(topicNo,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const data={
 1:{title:"Computer System Explorer",nodes:["Input","Processing","Output","Storage"],hint:"Tap each stage to think about its role."},
 2:{title:"Network Explorer",nodes:["Device","Network","Transmission","Internet/Web"],hint:"Trace how information can move between users and services."},
 3:{title:"Digital Safety Explorer",nodes:["Threat","Impact","Countermeasure","Responsible Action"],hint:"Follow the chain from risk to responsible response."}
 }[topicNo];
 if(!data)return;
 e.innerHTML='<div class="card"><h3>'+data.title+'</h3><p>'+data.hint+'</p><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">'+data.nodes.map((n,i)=>'<button onclick="alert(\''+n+'\')">'+(i+1)+'<br>'+n+'</button>').join('')+'</div></div>';
}
