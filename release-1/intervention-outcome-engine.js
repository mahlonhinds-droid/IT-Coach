/* Intervention outcome engine 1.0 */
function ITCoachEvaluateInterventionOutcome(studentId,topicNo,skill,subjectId,courseId){
 const o=ITCoachInterventionOutcome(studentId,topicNo,skill,subjectId,courseId);
 if(!o)return{status:"Awaiting evidence",subjectId:subjectId||"IT",courseId:courseId||"CSEC_IT"};
 return{status:o.growth>=10?,subjectId:o.subjectId,courseId:o.courseId,"Improved":o.growth>0?"Improving":o.growth===0?"No Change":"Declined",first:o.first,latest:o.latest,growth:o.growth,evidenceCount:o.evidenceCount};
}
function ITCoachNextAfterIntervention(studentId,topicNo,skill,subjectId,courseId){
 const o=ITCoachEvaluateInterventionOutcome(studentId,topicNo,skill,subjectId,courseId);
 if(o.status==="Awaiting evidence")return{action:"collect-evidence"};
 if(o.growth<10)return{action:"reassess",reason:"Evidence has not yet shown sufficient improvement."};
 return{action:"advance",reason:"Evidence shows meaningful improvement."};
}
