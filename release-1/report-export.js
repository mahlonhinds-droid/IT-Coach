/* IT Coach printable/exportable reports — browser-only prototype */
function ITCoachStudentReportText(topicNo){
 const r=ITCoachStudentReport(topicNo);
 const lines=["IT COACH — STUDENT LEARNING REPORT","Topic "+r.topic,"","Latest score: "+(r.latest===null?"Not assessed":r.latest+"%"),"Growth: "+(r.growth===null?"—":(r.growth>=0?"+":"")+r.growth+" percentage points"),"Assessment attempts: "+r.attempts,""];
 lines.push("STRENGTHS");(r.strengths||[]).forEach(x=>lines.push("- "+x.name+": "+x.score+"%"));
 lines.push("","PRIORITY AREAS");(r.weaknesses||[]).forEach(x=>lines.push("- "+x.name+": "+x.score+"%"));
 lines.push("","RECOMMENDED NEXT STEP: "+(r.learningPath.steps[0]?r.learningPath.steps[0].title:"Consolidate current mastery"));
 lines.push("","Prototype diagnostic bands are learning indicators, not official CXC grades.");
 return lines.join("\n");
}
function ITCoachPrintStudentReport(topicNo){
 const text=ITCoachStudentReportText(topicNo);
 const w=window.open("","_blank","noopener,noreferrer");if(!w){alert("Please allow pop-ups to print the report.");return;}
 w.document.write("<!doctype html><html><head><title>IT Coach Student Report</title><style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;line-height:1.6}pre{white-space:pre-wrap;font-family:inherit}button{padding:10px 16px}</style></head><body><pre>"+text.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</pre><button onclick='window.print()'>Print / Save as PDF</button></body></html>");
 w.document.close();
}
function ITCoachClassReportText(classId){
 const r=ITCoachClassReport(classId);
 if(!r)return "No class report available.";
 const lines=["IT COACH — CLASS PROGRESS REPORT",r.name,"Students: "+r.total,""];
 for(let n=1;n<=8;n++){const t=r.summary.topics[n];lines.push("Topic "+n+" — Class average: "+(r.topicAverages[n]===null?"Not assessed":r.topicAverages[n]+"%"));lines.push("Remediation: "+t.remediate+" | Practice: "+t.practice+" | Consolidated: "+t.consolidate+" | Unassessed: "+t.unassessed,"");}
 lines.push("Prototype diagnostic bands are learning indicators, not official CXC grades.");
 return lines.join("\n");
}
function ITCoachPrintClassReport(classId){
 const text=ITCoachClassReportText(classId);
 const w=window.open("","_blank","noopener,noreferrer");if(!w){alert("Please allow pop-ups to print the report.");return;}
 w.document.write("<!doctype html><html><head><title>IT Coach Class Report</title><style>body{font-family:Arial,sans-serif;max-width:900px;margin:40px auto;line-height:1.6}pre{white-space:pre-wrap;font-family:inherit}button{padding:10px 16px}</style></head><body><pre>"+text.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</pre><button onclick='window.print()'>Print / Save as PDF</button></body></html>");
 w.document.close();
}
