/* Teacher intervention dashboard 1.0 */
function ITCoachRenderTeacherInterventions(containerId,status){
 const e=document.getElementById(containerId);if(!e)return;
 const rows=ITCoachTeacherInterventions(status);
 e.innerHTML='<div class="card"><h3>Teacher Intervention Centre</h3><p><b>'+rows.length+'</b> '+(status||"tracked")+' intervention(s)</p>'+rows.map(x=>'<div class="card"><b>'+x.skill+'</b> — Topic '+x.topicNo+'<br>Status: '+x.status+'<br>Student: '+x.studentId+'<br>Actions: '+x.actions.length+'</div>').join('')+'</div>';
}

function ITCoachBuildStudentInterventionProfile(studentId,topicNo,skill){
 const evidence=ITCoachUniversalEvidence(studentId,topicNo).filter(x=>!skill||x.skill===skill).sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp));
 const failures=evidence.filter(x=>Number(x.score)<70);
 const intervention=ITCoachTeacherInterventions().filter(x=>x.studentId===studentId&&Number(x.topicNo)===Number(topicNo)&&(!skill||x.skill===skill));
 const first=evidence[0]?.score??null,last=evidence[evidence.length-1]?.score??null;
 return {studentId,topicNo,skill:skill||null,evidence,failures,interventions:intervention,growth:first===null||last===null?null:last-first,latestScore:last};
}
function ITCoachTeacherRecommendedAction(studentId,topicNo,skill){
 const p=ITCoachBuildStudentInterventionProfile(studentId,topicNo,skill),open=p.interventions.find(x=>x.status==="open");
 if(open)return {action:"continue-teacher-support",reason:"An intervention is already open.",profile:p};
 if(p.failures.length>=3)return {action:"open-teacher-intervention",reason:"Three or more below-threshold attempts.",profile:p};
 if(p.growth!==null&&p.growth>=10)return {action:"advance-and-monitor",reason:"Evidence shows meaningful growth.",profile:p};
 return {action:"continue-adaptive-support",reason:"Continue the current learning loop.",profile:p};
}
