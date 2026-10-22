/* IT Coach active student context 1.0 */
const ITCoachStudentContextKey="itcoachActiveStudentId";
function ITCoachGetActiveStudentId(){
 const raw=localStorage.getItem(ITCoachStudentContextKey);
 return raw===null||raw===""?"1":String(raw);
}
function ITCoachSetActiveStudentId(studentId){
 if(studentId===undefined||studentId===null||studentId==="")return ITCoachGetActiveStudentId();
 const id=String(studentId);
 localStorage.setItem(ITCoachStudentContextKey,id);
 return id;
}
window.ITCoachGetActiveStudentId=ITCoachGetActiveStudentId;
window.ITCoachSetActiveStudentId=ITCoachSetActiveStudentId;