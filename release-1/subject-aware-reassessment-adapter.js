/* Subject-aware reassessment adapter 1.0 */
function ITCoachStartSubjectReassessment(topicNo,lessonId,skillName,subjectId,courseId,curriculumId){
 const previous=JSON.parse(localStorage.getItem("itcoachLastAdaptive")||"null");
 const sid=subjectId||"IT",cid=courseId||(sid==="IT"?"CSEC_IT":null);
 ITCoachReassessment={questions:ITCoachBuildReassessment(topicNo,lessonId,skillName,previous?previous.questions:[]),answers:[],index:0,topic:String(topicNo),previous,studentId:ITCoachGetActiveStudentId(),subjectId:sid,courseId:cid,curriculumId:curriculumId||null,lessonId:lessonId||null,skillName:skillName||null};
 ITCoachRenderReassessment();
}
function ITCoachRecordSubjectReassessmentEvidence(result){
 const a=ITCoachReassessment;
 if(typeof ITCoachRecordUniversalEvidence!=="function")return;
 const totals={};
 (result.details||[]).forEach(d=>{const s=d.skill||"General";totals[s]=totals[s]||{correct:0,total:0};totals[s].total++;if(d.correct)totals[s].correct++;});
 Object.entries(totals).forEach(([skill,v])=>ITCoachRecordUniversalEvidence({studentId:a.studentId||1,subjectId:a.subjectId||"IT",courseId:a.courseId||"CSEC_IT",curriculumId:a.curriculumId||null,topicNo:a.topicNo||a.topic,lessonId:a.lessonId||null,skill,type:"reassessment",evidenceType:"reassessment",score:Math.round(v.correct/v.total*100),source:"adaptive-reassessment",evidence:"Tagged reassessment result",at:new Date().toISOString()}));
}
