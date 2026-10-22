/* Map Topics 1–3 interactive activities to source lesson domains */
const ITCoachActivityMap13={
"t1-v2-hardware":["1.2","1.3"],
"t1-v2-process":["1.5"],
"t1-v2-troubleshoot":["1.6"],
"t2-v2-network":["2.1","2.2"],
"t2-v2-media":["2.2"],
"t2-v2-web":["2.4"],
"t3-v2-security":["3.1"],
"t3-v2-countermeasure":["3.2"],
"t3-v2-ethics":["3.5"]
};
function ITCoachActivityLessons13(activityId){return ITCoachActivityMap13[activityId]||[]}
