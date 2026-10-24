/* IT Coach Topic Adapter Registry 1.0 — Topics 1–8 */
const ITCoachTopicAdapters={
 1:{name:"Fundamentals of IT",skills:["Information technology and computer systems","Hardware, memory and storage","Input and output devices","Software and user interfaces","Information processing","Performance and troubleshooting","Number systems and codes"]},
 2:{name:"Networks and Communication",skills:["Network types and wireless technologies","Network components and transmission media","Mobile communication technologies","Web technologies and the Internet"]},
 3:{name:"Social and Economic Impact of IT",skills:["Security and misuse","Countermeasures and personal security","Job skills and careers","ICT impact across society","Health, safety and ethics"]},
 4:{name:"Word Processing, Presentations and Web Pages",skills:["Word processing","Advanced word processing","Presentation software","Web page design and development"]},
 5:{name:"Spreadsheets",skills:["Spreadsheet terminology","Formulae and functions","Sorting and finding data","Charts and multiple worksheets"]},
 6:{name:"Databases",skills:["Database design","Queries","Forms and sub-form","Reports"]},
 7:{name:"Problem Solving and Program Design",skills:["Problem-solving process","Data types, variables, constants and operators","Algorithms, pseudocode and flowcharts","Trace tables"]},
 8:{name:"Programming in Pascal",skills:["Programming languages and implementation","Variables, constants, input/output and assignment","Conditional branching and loops","Testing, debugging and documentation"]}
};
function ITCoachTopicAdapter(topicNo){
 return ITCoachTopicAdapters[topicNo]||null;
}
function ITCoachTopicSkillDefinitions(topicNo){
 const a=ITCoachTopicAdapter(topicNo);return a?(a.skills||[]).map((label,i)=>({id:"t"+topicNo+"s"+(i+1),label})):[]; 
}
function ITCoachRenderTopicAdapterSummary(topicNo,containerId){
 const e=document.getElementById(containerId),a=ITCoachTopicAdapter(topicNo);if(!e||!a)return;
 e.innerHTML='<div class="card"><h3>Mastery Map — Topic '+topicNo+': '+a.name+'</h3>'+a.skills.map((x,i)=>'<p><b>'+ (i+1)+'.</b> '+x+'</p>').join('')+'</div>';
}
