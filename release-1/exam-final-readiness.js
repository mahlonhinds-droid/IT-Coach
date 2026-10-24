/* IT Coach final readiness decision 1.0 */
function ITCoachBuildFinalReadiness(studentId){
 const c=ITCoachExamConfidenceCheck(studentId),s=ITCoachExamSimulationTrend(studentId);
 const recent=s.slice(-3),avg=recent.length?Math.round(recent.reduce((a,x)=>a+x.score,0)/recent.length):null;
 const improving=recent.length>=2&&recent[recent.length-1].score>recent[0].score;
 return{confidence:c,simulationAverage:avg,simulationCount:s.length,improving,recommendation:c.ready&&(!recent.length||avg>=80)?"Ready for final review":avg!==null&&avg<70?"Return to targeted remediation": "Complete another timed simulation"};
}
