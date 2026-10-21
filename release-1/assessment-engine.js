/* IT Coach multi-question assessment engine — browser-only prototype */
const ITCoachAssessmentBank=[
 {id:"T1-A1",topic:"1",skill:"IT fundamentals",q:"Which sequence best represents the learning cycle after Learn?",options:["Practice → Assess","Stop → Finish","Skip → Submit"],answer:0,explanation:"Practice follows Learn in the prototype learning cycle."},
 {id:"T1-A2",topic:"1",skill:"IT fundamentals",q:"Which stage follows assessment when a weakness is detected?",options:["Diagnosis","Logout","Deletion"],answer:0,explanation:"Assessment evidence is used to diagnose learning needs."},
 {id:"T2-A1",topic:"2",skill:"Networks",q:"Which network is designed for a limited local area?",options:["LAN","WAN","MAN"],answer:0,explanation:"LAN is the local-area network option."},
 {id:"T2-A2",topic:"2",skill:"Networks",q:"Which technology is identified as a wireless networking technology?",options:["Wi-Fi","Paper mail","Printer ink"],answer:0,explanation:"Wi-Fi is a wireless networking technology."},
 {id:"T3-A1",topic:"3",skill:"Security",q:"Which is a security countermeasure?",options:["Encryption","Sharing passwords","Ignoring updates"],answer:0,explanation:"Encryption is a security countermeasure."},
 {id:"T3-A2",topic:"3",skill:"Security",q:"Which threat can involve a deceptive email designed to obtain information?",options:["Phishing","Formatting","Sorting"],answer:0,explanation:"Phishing is a computer-security misuse example in the source content."},
 {id:"T4-A1",topic:"4",skill:"Word processing",q:"Which task belongs to word processing?",options:["Formatting a document","Routing network traffic","Tracing Pascal variables"],answer:0,explanation:"Creating, formatting and editing documents are word-processing activities."},
 {id:"T4-A2",topic:"4",skill:"Web pages",q:"Which activity belongs to web-page design?",options:["Planning page structure","Changing a router password","Tracing an algorithm"],answer:0,explanation:"Page structure is part of web-page design."},
 {id:"T5-A1",topic:"5",skill:"Spreadsheets",q:"Which function can total a range?",options:["SUM","ROUTE","QUERY"],answer:0,explanation:"SUM can total a range."},
 {id:"T5-A2",topic:"5",skill:"Spreadsheets",q:"Which feature can help display spreadsheet data visually?",options:["Chart","Router","Firewall"],answer:0,explanation:"Charts are used to represent spreadsheet data visually."},
 {id:"T6-A1",topic:"6",skill:"Databases",q:"Which database object retrieves records using conditions?",options:["Query","Slide","Router"],answer:0,explanation:"Queries can retrieve records according to criteria."},
 {id:"T6-A2",topic:"6",skill:"Databases",q:"What is a database record?",options:["A collection of related field values","A network cable","A presentation slide"],answer:0,explanation:"A record contains related values for an entity."},
 {id:"T7-A1",topic:"7",skill:"Algorithms",q:"What is a trace table used for?",options:["Testing an algorithm step by step","Formatting slides","Connecting a modem"],answer:0,explanation:"Trace tables follow changing values during algorithm execution."},
 {id:"T7-A2",topic:"7",skill:"Algorithms",q:"Which is an algorithm representation?",options:["Pseudocode","Password","Spreadsheet chart"],answer:0,explanation:"Pseudocode is used to represent an algorithm."},
 {id:"T8-A1",topic:"8",skill:"Pascal",q:"Which symbol is used for Pascal assignment?",options:[":=","==","=>"],answer:0,explanation:"Pascal uses := for assignment."},
 {id:"T8-A2",topic:"8",skill:"Pascal",q:"Which area belongs to program testing?",options:["Debugging","Slide design","Network cabling"],answer:0,explanation:"Debugging is part of testing and correcting programs."}
];
function ITCoachBuildAssessment(topic,count=5,excludeIds=[]){
 const pool=ITCoachAssessmentBank.filter(q=>q.topic===String(topic)&&!excludeIds.includes(q.id));
 return pool.sort(()=>Math.random()-.5).slice(0,count);
}
function ITCoachScoreAssessment(questions,answers){
 let correct=0;
 const skillScores={};
 const details=questions.map((q,i)=>{
  const ok=Number(answers[i])===q.answer;
  if(ok)correct++;
  if(!skillScores[q.skill])skillScores[q.skill]={correct:0,total:0};
  skillScores[q.skill].total++;
  if(ok)skillScores[q.skill].correct++;
  return {id:q.id,correct:ok,skill:q.skill,explanation:q.explanation};
 });
 const score=questions.length?Math.round(correct/questions.length*100):0;
 return {score,correct,total:questions.length,skillScores,details};
}
