/* IT Coach tagged assessment bank — prototype, source-review required */
const ITCoachTaggedQuestions=[
{topic:"1",lesson:"1.2",skill:"Hardware, memory and storage",type:"mcq",prompt:"Which component is primarily used for temporary working storage while programs are running?",options:["RAM","ROM","Optical disc"],answer:0},
{topic:"1",lesson:"1.3",skill:"Input and output devices",type:"mcq",prompt:"Which is an input device?",options:["Keyboard","Monitor","Printer"],answer:0},
{topic:"2",lesson:"2.1",skill:"Network types and wireless technologies",type:"mcq",prompt:"Which network normally covers a local area such as a school building?",options:["LAN","WAN","MAN"],answer:0},
{topic:"2",lesson:"2.2",skill:"Network components and transmission media",type:"mcq",prompt:"Which device connects a computer to a network?",options:["NIC","Monitor","Projector"],answer:0},
{topic:"3",lesson:"3.2",skill:"Countermeasures and personal security",type:"mcq",prompt:"Which is a security countermeasure?",options:["Encryption","Sharing passwords","Ignoring backups"],answer:0},
{topic:"3",lesson:"3.1",skill:"Security, misuse and affected groups",type:"mcq",prompt:"Which term describes a weakness that may be exploited?",options:["Vulnerability","Countermeasure","Backup"],answer:0},
{topic:"4",lesson:"4.1",skill:"Word processing",type:"mcq",prompt:"Which activity is associated with word processing?",options:["Formatting a document","Routing a network","Searching an array"],answer:0},
{topic:"4",lesson:"4.3",skill:"Presentation software",type:"mcq",prompt:"Which software feature helps present information visually to an audience?",options:["Slides","Database queries","Trace tables"],answer:0},
{topic:"5",lesson:"5.2",skill:"Formulae, functions and absolute references",type:"mcq",prompt:"Which spreadsheet function can add values in a range?",options:["SUM","PRINT","QUERY"],answer:0},
{topic:"5",lesson:"5.3",skill:"Layout, sorting and finding data",type:"mcq",prompt:"Which feature can arrange records according to a selected field?",options:["Sorting","Encryption","Compilation"],answer:0},
{topic:"6",lesson:"6.1",skill:"Database concepts and terminology",type:"mcq",prompt:"A collection of related records is commonly stored in a:",options:["Table","Slide","Flowchart"],answer:0},
{topic:"6",lesson:"6.3",skill:"Forms, queries and reports",type:"mcq",prompt:"Which database object is used to retrieve records that meet criteria?",options:["Query","Form","Report"],answer:0},
{topic:"7",lesson:"7.3",skill:"Algorithms, pseudocode and flowcharts",type:"mcq",prompt:"Which representation uses standard symbols to show an algorithm?",options:["Flowchart","Spreadsheet","Database"],answer:0},
{topic:"7",lesson:"7.4",skill:"Trace tables and testing",type:"mcq",prompt:"What is the main purpose of a trace table?",options:["Follow variable values step by step","Format a document","Connect a network"],answer:0},
{topic:"8",lesson:"8.2",skill:"Pascal basics",type:"mcq",prompt:"Which operator is used for assignment in Pascal?",options:[":=","==","=>"],answer:0},
{topic:"8",lesson:"8.3",skill:"Selection, loops, arrays and searching",type:"mcq",prompt:"Which construct can repeat a set of instructions?",options:["Loop","Comment","Constant"],answer:0}
];
function ITCoachTaggedQuestionsForTopic(topic){return ITCoachTaggedQuestions.filter(q=>q.topic===String(topic));}
function ITCoachSkillResults(questions,answers){
 const totals={},correct={};
 questions.forEach((q,i)=>{const k=q.skill;totals[k]=(totals[k]||0)+1;if(Number(answers[i])===q.answer)correct[k]=(correct[k]||0)+1;});
 const out={};Object.keys(totals).forEach(k=>{out[k]=Math.round((correct[k]||0)/totals[k]*100);});return out;
}
