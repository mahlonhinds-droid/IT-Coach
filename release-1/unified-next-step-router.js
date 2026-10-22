/* IT Coach unified personalized next-step router 1.0 */
function ITCoachUnifiedNextStep(studentId,topicNo){
 const s=ITCoachUnifiedTopicStatus(studentId,topicNo);
 const routes={
 1:{revision:"1.2",practice:"1.5",advanced:"1.7"},
 2:{revision:"2.1",practice:"2.2",advanced:"2.4"},
 3:{revision:"3.2",practice:"3.4",advanced:"3.5"},
 4:{revision:"4.1",practice:"4.2",advanced:"4.4"},
 5:{revision:"5.1",practice:"5.2",advanced:"5.4"},
 6:{revision:"6.1",practice:"6.3",advanced:"6.3"},
 7:{revision:"7.1",practice:"7.3",advanced:"7.4"},
 8:{revision:"8.1",practice:"8.3",advanced:"8.4"}
 }[topicNo];
 if(!routes)return null;
 const mode=s.score===null?"revision":s.score<70?"revision":s.score<80?"practice":"advanced";
 return{topicNo,status:s.status,mode,lessonId:routes[mode],reason:mode==="revision"?"Build the foundation before reassessment.":mode==="practice"?"Strengthen the developing skill through practice.":"Apply the topic at a higher level.",score:s.score};
}
function ITCoachOpenUnifiedNextStep(studentId,topicNo,containerId){
 const e=document.getElementById(containerId),r=ITCoachUnifiedNextStep(studentId,topicNo);if(!e||!r)return;
 e.innerHTML='<div class="card"><h3>Personalised Next Step</h3><p><b>Topic:</b> '+ITCoachUnifiedTopics[r.topicNo]+'</p><p><b>Path:</b> '+r.mode+'</p><p><b>Lesson:</b> '+r.lessonId+'</p><p>'+r.reason+'</p><button onclick="ITCoachLaunchUnifiedLesson('+r.topicNo+',\''+r.lessonId+'\',\''+containerId+'\')">Open Recommended Lesson</button></div>';
}
function ITCoachLaunchUnifiedLesson(topicNo,lessonId,containerId){
 const e=document.getElementById(containerId);if(!e)return;
 if(topicNo<=3&&typeof ITCoachStartTopic13Loop==="function"){ITCoachStartTopic13Loop(topicNo,lessonId,containerId);return;}
 e.innerHTML='<div class="card"><h3>Recommended Topic '+topicNo+' Lesson '+lessonId+'</h3><p>Continue into the topic lesson/practical pathway available in the current prototype.</p></div>';
}
