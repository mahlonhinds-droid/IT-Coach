/* IT Coach practice engine — browser-only */
const ITCoachPracticeBank=[
 {id:"T1-P1",topic:"1",skill:"hardware",prompt:"Which sequence best represents the learning cycle after Learn?",options:["Practice → Assess","Stop → Finish","Skip → Submit"],answer:0,explanation:"The prototype cycle continues from Learn to Practice, then Assess."},
 {id:"T2-P1",topic:"2",skill:"network",prompt:"Which network type is designed for a limited local area?",options:["LAN","WAN","MAN"],answer:0,explanation:"LAN represents a local area network."},
 {id:"T3-P1",topic:"3",skill:"security",prompt:"Which is a security countermeasure?",options:["Encryption","Ignoring updates","Sharing passwords"],answer:0,explanation:"Encryption is a security countermeasure identified in the workbook content."},
 {id:"T4-P1",topic:"4",skill:"word-processing",prompt:"Which task belongs to word processing?",options:["Formatting a document","Routing network traffic","Tracing Pascal variables"],answer:0,explanation:"Creating, formatting and editing documents are word-processing activities."},
 {id:"T5-P1",topic:"5",skill:"spreadsheet-purpose",prompt:"Which function is commonly used to total a range?",options:["SUM","ROUTE","QUERY"],answer:0,explanation:"SUM is the spreadsheet function used in the prototype formula activity."},
 {id:"T6-P1",topic:"6",skill:"database-design",prompt:"Which database object can be used to retrieve records using conditions?",options:["Query","Slide","Router"],answer:0,explanation:"Queries are used to retrieve records according to criteria."},
 {id:"T7-P1",topic:"7",skill:"algorithms",prompt:"What is a trace table used for?",options:["Testing an algorithm step by step","Formatting slides","Connecting a modem"],answer:0,explanation:"Trace tables record changing values while an algorithm is executed."},
 {id:"T8-P1",topic:"8",skill:"programming-languages",prompt:"Which Pascal construct is used to assign a value to a variable?",options:[":=","==","=>"],answer:0,explanation:"Pascal uses := for assignment."}
];
function ITCoachGetPractice(topic){
 const pool=ITCoachPracticeBank.filter(q=>!topic||q.topic===String(topic));
 return pool.sort(()=>Math.random()-.5);
}
function ITCoachScorePractice(q,choice){
 const correct=Number(choice)===q.answer;
 return {correct,score:correct?100:0,feedback:correct?"Correct.":q.explanation};
}

function ITCoachRecordPracticeResult(studentId,q,result){
 if(typeof ITCoachRecordUniversalEvidence==="function")return ITCoachRecordUniversalEvidence({studentId,topicNo:q.topic,skill:q.skill,type:"knowledge",score:result.score,source:"practice-engine",evidence:q.id});
 return null;
}
function ITCoachPracticeSession(topic,studentId){const q=ITCoachGetPractice(topic)[0]||null;return q?{studentId,topic:String(topic),question:q}:null;}
