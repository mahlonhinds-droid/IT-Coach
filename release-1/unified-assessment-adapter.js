/* Unified assessment/practical adapter 1.0
   Connects topic adapters to existing engines without replacing topic-specific logic. */
function ITCoachTopicLearningMode(topicNo){
 if(topicNo===4||topicNo===5||topicNo===6||topicNo===7||topicNo===8)return"mixed-practical";
 return"knowledge-assessment";
}
function ITCoachTopicNextAction(topicNo,studentId){
 const a=ITCoachTopicAdapter(topicNo);if(!a)return null;
 return{topicNo,studentId,mode:ITCoachTopicLearningMode(topicNo),skills:ITCoachTopicSkillDefinitions(topicNo),assessment:"Use the existing tagged/adaptive assessment engine for this topic.",practical:(topicNo>=4?"Use the topic-specific practical workspace/activity where available.":"Use knowledge practice and scenario activities."),remediation:"Use the topic-specific remediation/reassessment pathway when available."};
}
