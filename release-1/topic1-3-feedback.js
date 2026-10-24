/* Immediate explanatory feedback for Topics 1–3 */
const ITCoachFeedback13={
"t1-v2-troubleshoot":"A logical troubleshooting process begins by gathering information about the problem before selecting and testing a likely cause.",
"t2-v2-network":"A LAN is designed to connect computers in a local area so they can communicate and share resources.",
"t2-v2-media":"The appropriate transmission medium depends on the scenario; the student should justify why the selected medium fits.",
"t2-v2-web":"Web services support access to information and services through Internet technologies.",
"t3-v2-security":"Suspicious credential requests should be treated as a security risk; the safest response is to avoid the request and follow appropriate reporting/security procedures.",
"t3-v2-countermeasure":"Access control is intended to restrict access to systems or information to authorised users.",
"t3-v2-ethics":"Responsible ICT use requires consideration of how technology actions affect other people and the wider situation."
};
function ITCoachShowTopic13Feedback(activityId,containerId){
 const e=document.getElementById(containerId),msg=ITCoachFeedback13[activityId];if(e&&msg)e.insertAdjacentHTML("beforeend",'<div style="padding:10px;border-left:4px solid #888;margin-top:8px"><b>Why?</b><p>'+msg+'</p></div>');
}
