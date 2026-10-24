/* Curriculum content resolver */
function ITCoachResolveLessonContent(topic,lesson){
 return (typeof ITCoachContentForLesson13==="function"&&ITCoachContentForLesson13(topic,lesson))
   ||(typeof ITCoachContentForLesson48==="function"&&ITCoachContentForLesson48(topic,lesson))
   ||null;
}
function ITCoachLessonContentSummary(topic,lesson){
 const c=ITCoachResolveLessonContent(topic,lesson);
 if(!c)return null;
 return {title:c.title,objectives:c.objectives||[],blocks:c.blocks||[],activity:c.activity||""};
}
