/* Universal adapters for existing Topic 4–8 practical rubric evidence */
const ITCoachPracticalSkillAliases={
 4:{word:"word-processing",advanced:"advanced-word-processing",presentation:"presentation",web:"web-page"},
 5:{formula:"formula-functions",absolute:"formula-functions",sorting:"data-management",find:"data-management",chart:"charts",worksheet:"charts"},
 6:{design:"database-design",query:"queries",form:"forms-subform",subform:"forms-subform",report:"reports"},
 7:{problem:"problem-solving",data:"data-types-operators",algorithm:"algorithms",flowchart:"algorithms",trace:"trace-tables",testing:"trace-tables"},
 8:{language:"programming-languages",input:"input-output-assignment",assignment:"input-output-assignment",selection:"selection-loops",loop:"selection-loops",debugging:"testing-debugging",documentation:"testing-debugging"}};
function ITCoachMapPracticalCriterion(topicNo,criterion){
 const key=String(criterion||"").toLowerCase().replace(/[^a-z0-9]+/g,"-");
 const map=ITCoachPracticalSkillAliases[topicNo]||{};
 for(const k of Object.keys(map))if(key.includes(k))return map[k];
 return null;
}
function ITCoachRecordPracticalCriterion(studentId,topicNo,criterion,score,lessonId,source){
 const skill=ITCoachMapPracticalCriterion(topicNo,criterion);
 if(!skill)return null;
 return ITCoachRecordUniversalEvidence({studentId,topicNo,lessonId,skill,score,type:"practical",source:source||"practical-rubric",evidence:criterion});
}
function ITCoachPracticalCriterionSummary(studentId,topicNo){
 return ITCoachUniversalEvidence(studentId,topicNo).filter(x=>x.type==="practical").map(x=>({skill:x.skill,score:x.score,evidence:x.evidence,at:x.at}));
}
