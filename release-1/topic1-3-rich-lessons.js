/* Topics 1–3 rich lesson layer 1.0
   Source-aligned lesson structure; explanatory wording is prototype copy. */
const ITCoachTopic13Lessons={
1:{
 "1.1":{title:"Information Technology & Computer Systems",focus:"Understand information technology and types of computer systems.",check:"Which type of computer system best fits the scenario, and why?"},
 "1.2":{title:"Hardware, Memory & Storage",focus:"Identify major hardware, memory and storage concepts and explain their roles.",check:"Which component or storage medium best fits the stated requirement?"},
 "1.3":{title:"Input & Output Devices",focus:"Select appropriate input and output devices for different tasks.",check:"Choose suitable input/output devices for the scenario and justify your choices."},
 "1.4":{title:"Software & User Interfaces",focus:"Distinguish software roles and consider how users interact with systems.",check:"Which software/interface feature best supports the user's task?"},
 "1.5":{title:"Information Processing",focus:"Follow the relationship between input, processing, output and stored information.",check:"Identify the processing stages in the example."},
 "1.6":{title:"Computer Performance & Troubleshooting",focus:"Recognise performance problems and apply a logical troubleshooting approach.",check:"What should be investigated first in the scenario?"},
 "1.7":{title:"Number Systems & Codes",focus:"Explore number systems and codes as an enrichment area.",check:"Complete the guided conversion/code activity."}
},
2:{
 "2.1":{title:"Network Types & Wireless Technologies",focus:"Compare network types and wireless technologies for different situations.",check:"Which network or wireless option best fits the scenario?"},
 "2.2":{title:"Network Components & Transmission Media",focus:"Identify network components and transmission media and explain their roles.",check:"Select the components/media needed for the proposed network."},
 "2.3":{title:"Mobile Communication Technologies",focus:"Explore mobile communication technologies and their uses.",check:"Which mobile technology best supports the stated need?"},
 "2.4":{title:"Web Technologies & the Internet",focus:"Understand web technologies and Internet services in context.",check:"Select the appropriate Internet/web service and explain why."}
},
3:{
 "3.1":{title:"Computer Security, Misuse & Who Is Affected",focus:"Identify security risks, misuse and the stakeholders affected.",check:"Identify the risk and explain who could be affected."},
 "3.2":{title:"Countermeasures & Personal Security Practices",focus:"Apply suitable countermeasures and personal security practices.",check:"Choose an appropriate countermeasure for each threat."},
 "3.3":{title:"Job Skills & Careers",focus:"Explore how ICT changes job skills and career opportunities.",check:"What skills are increasingly important in the scenario?"},
 "3.4":{title:"ICT Impact Across Society",focus:"Examine ICT impacts in education, medicine, business, law enforcement and recreation.",check:"Evaluate one positive and one challenging impact in the scenario."},
 "3.5":{title:"Health, Safety & Ethics",focus:"Consider health, safety and ethical issues connected with ICT use.",check:"What is the most responsible response to the scenario?"}
}};
function ITCoachTopic13Lesson(topicNo,lessonId){return ITCoachTopic13Lessons[topicNo]?.[lessonId]||null}
function ITCoachRenderTopic13Lesson(topicNo,lessonId,containerId){
 const e=document.getElementById(containerId),l=ITCoachTopic13Lesson(topicNo,lessonId);if(!e||!l)return;
 e.innerHTML='<div class="card"><h2>'+l.title+'</h2><p><b>Learning focus:</b> '+l.focus+'</p><div style="padding:12px;border:1px solid #ddd;margin:12px 0"><b>Think about it</b><p>'+l.check+'</p></div><p><b>Next:</b> complete the knowledge check, then apply the skill in the Skills Lab.</p></div>';
}
