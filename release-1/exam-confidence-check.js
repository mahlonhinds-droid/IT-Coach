/* IT Coach final confidence check 1.0 */
function ITCoachExamConfidenceCheck(studentId){
 const r=ITCoachBuildExamReadiness(studentId),errors=ITCoachBuildExamErrorAnalysis(studentId);
 const critical=errors.filter(x=>x.average<60).length;
 return{readiness:r.readinessBand,score:r.readinessScore,criticalGaps:critical,ready:!!(r.readinessScore!==null&&r.readinessScore>=80&&critical===0),recommendation:critical?"Complete targeted remediation before final simulation":r.readinessScore>=80?"Proceed to final simulation":"Continue targeted revision"};
}
