/* IT Coach Topic 4–8 Universal Evidence adapters 1.0 */
const ITCoachTopic48Skills={
4:["word-processing","advanced-word-processing","presentation","web-page"],
5:["spreadsheet-purpose","formula-functions","data-management","charts"],
6:["database-design","queries","forms-subform","reports"],
7:["problem-solving","data-types-operators","algorithms","trace-tables"],
8:["programming-languages","input-output-assignment","selection-loops","testing-debugging"]
};
function ITCoachRecordTopic48Evidence(studentId,topicNo,skill,score,lessonId,source,evidence){
 if(!ITCoachTopic48Skills[topicNo]||!ITCoachTopic48Skills[topicNo].includes(skill))return null;
 return ITCoachRecordUniversalEvidence({studentId,topicNo,skill,score,lessonId,type:"practical",source:source||"topic48-workspace",evidence});
}
function ITCoachTopic48SkillFromLesson(topicNo,lessonId){
 const map={4:{"4.1":"word-processing","4.2":"advanced-word-processing","4.3":"presentation","4.4":"web-page"},5:{"5.1":"spreadsheet-purpose","5.2":"formula-functions","5.3":"data-management","5.4":"charts"},6:{"6.1":"database-design","6.2":"database-design","6.3":"queries"},7:{"7.1":"problem-solving","7.2":"data-types-operators","7.3":"algorithms","7.4":"trace-tables"},8:{"8.1":"programming-languages","8.2":"input-output-assignment","8.3":"selection-loops","8.4":"testing-debugging"}};
 return map[topicNo]?.[lessonId]||null;
}
function ITCoachRecordTopic48LessonEvidence(studentId,topicNo,lessonId,score,source,evidence){
 const skill=ITCoachTopic48SkillFromLesson(topicNo,lessonId);if(!skill)return null;
 return ITCoachRecordTopic48Evidence(studentId,topicNo,skill,score,lessonId,source,evidence);
}
