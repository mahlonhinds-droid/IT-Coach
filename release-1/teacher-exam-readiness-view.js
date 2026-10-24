/* Teacher exam readiness view 1.0 */
function ITCoachBuildTeacherExamReadiness(studentIds){
 return (studentIds||[]).map(studentId=>{const r=ITCoachBuildExamReadiness(studentId),f=ITCoachBuildFinalReadiness(studentId);return{studentId,readiness:r.readinessBand,score:r.readinessScore,gaps:r.gapTopics,simulationAverage:f.simulationAverage,recommendation:f.recommendation};});
}
