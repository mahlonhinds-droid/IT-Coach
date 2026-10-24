/* IT Coach Classroom / Cohort Management — browser-only prototype */
function ITCoachClasses(){return JSON.parse(localStorage.getItem("itcoachClasses")||"[]");}
function ITCoachSaveClasses(a){localStorage.setItem("itcoachClasses",JSON.stringify(a));return a;}
function ITCoachCreateClass(name,teacher){
 const a=ITCoachClasses(),id="class"+Date.now();
 a.push({id,name:name||"Form 4A",teacher:teacher||"Teacher",students:[]});
 ITCoachSaveClasses(a);return a[a.length-1];
}
function ITCoachAddStudent(classId,name){
 const a=ITCoachClasses(),c=a.find(x=>x.id===classId);if(!c)return null;
 c.students.push({id:"stu"+Date.now()+Math.random().toString(16).slice(2),name:name||"Student",scores:{},skills:{}});
 ITCoachSaveClasses(a);return c;
}
function ITCoachClassSummary(classId){
 const c=ITCoachClasses().find(x=>x.id===classId);if(!c)return null;
 const summary={classId,name:c.name,total:c.students.length,topics:{}};
 for(let n=1;n<=8;n++)summary.topics[n]={remediate:0,practice:0,consolidate:0,unassessed:0};
 c.students.forEach(s=>{for(let n=1;n<=8;n++){const v=s.scores[String(n)];if(v==null)summary.topics[n].unassessed++;else if(v<70)summary.topics[n].remediate++;else if(v<80)summary.topics[n].practice++;else summary.topics[n].consolidate++;}});
 return summary;
}
function ITCoachAssignToStudents(classId,studentIds,topicNo,title){
 const a=ITCoachClasses(),c=a.find(x=>x.id===classId);if(!c)return null;
 c.students.forEach(s=>{if(studentIds.includes(s.id)){s.assignments=s.assignments||[];s.assignments.push({topic:String(topicNo),title:title||"Targeted Topic "+topicNo,status:"Assigned",createdAt:new Date().toISOString()});}});
 ITCoachSaveClasses(a);return c;
}
