/* IT Coach CSEC examination centre — configurable prototype */
const ITCoachExamConfig={
 paper01:{title:"Paper 01 — Multiple Choice",questions:10,timeMinutes:30,weight:null,mode:"mcq"},
 paper02:{title:"Paper 02 — Structured Response",questions:8,timeMinutes:60,weight:null,mode:"structured"},
 paper03:{title:"Paper 03 — SBA / Practical",questions:5,timeMinutes:90,weight:null,mode:"practical"}
};
const ITCoachExamBank={
paper01:[
["1","IT Fundamentals","Which sequence best represents the learning cycle?",["Learn → Practice → Assess","Assess → Delete → Stop","Skip → Submit → Finish"],0],
["2","Networks","Which network is designed for a limited local area?",["LAN","WAN","MAN"],0],
["3","Security","Which is a security countermeasure?",["Encryption","Sharing passwords","Ignoring updates"],0],
["4","Word Processing","Which task belongs to word processing?",["Formatting a document","Routing traffic","Tracing variables"],0],
["5","Spreadsheets","Which function can total a range?",["SUM","ROUTE","QUERY"],0],
["6","Databases","Which object retrieves records using criteria?",["Query","Slide","Router"],0],
["7","Algorithms","What is a trace table used for?",["Testing an algorithm step by step","Formatting slides","Connecting a modem"],0],
["8","Pascal","Which symbol is used for Pascal assignment?",[":=","==","=>"],0]
],
paper02:[
["1","IT Fundamentals","Explain the role of input, processing, output and storage in an information-processing system."],
["2","Networks","Compare two types of networks and give a suitable use case for each."],
["3","Security","Identify a security threat in a scenario and recommend a suitable countermeasure."],
["4","Word Processing","Describe how a document could be prepared for a specified audience."],
["5","Spreadsheets","Explain how formulae, functions or absolute references can support spreadsheet calculations."],
["6","Databases","Explain how a query, form and report can be used in a database application."],
["7","Algorithms","Develop an algorithm using pseudocode or a flowchart for a stated problem."],
["8","Pascal","Describe how a Pascal program could use input, processing and output."]
],
paper03:[
["5","Spreadsheets","Practical spreadsheet task"],
["6","Databases","Practical database task"],
["7","Algorithms","Practical algorithm / trace-table task"],
["8","Pascal","Practical Pascal programming task"],
["4","Web / presentation","Practical communication or web task"]
]};
function ITCoachBuildExam(paper){
 const bank=ITCoachExamBank[paper]||[];
 return bank.slice().sort(()=>Math.random()-.5).slice(0,ITCoachExamConfig[paper].questions);
}
function ITCoachExamWeights(){return {paper01:ITCoachExamConfig.paper01.weight,paper02:ITCoachExamConfig.paper02.weight,paper03:ITCoachExamConfig.paper03.weight};}
function ITCoachSaveExamResult(paper,result){
 const key="itcoachExamResults";const all=JSON.parse(localStorage.getItem(key)||"[]");
 all.push({paper,score:result.score,completedAt:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(all));
}
