/* IT Coach Multi-Subject Registry 1.0 — browser-only foundation */
const ITCoachSubjectRegistry={
  version:"1.0",
  subjects:{
    IT:{id:"IT",name:"Information Technology",familyId:"TECHNICAL",status:"active",
      courses:{CSEC_IT:{id:"CSEC_IT",name:"CSEC Information Technology",curriculumId:"CSEC",level:"secondary"}}},
    MATH:{id:"MATH",name:"Mathematics",familyId:"MATHEMATICS",status:"planned",
      courses:{CSEC_MATH:{id:"CSEC_MATH",name:"CSEC Mathematics",curriculumId:"CSEC",level:"secondary"}}},
    POB:{id:"POB",name:"Principles of Business",familyId:"BUSINESS",status:"planned",
      courses:{CSEC_POB:{id:"CSEC_POB",name:"CSEC Principles of Business",curriculumId:"CSEC",level:"secondary"}}},
    POA:{id:"POA",name:"Principles of Accounts",familyId:"BUSINESS",status:"planned",
      courses:{CSEC_POA:{id:"CSEC_POA",name:"CSEC Principles of Accounts",curriculumId:"CSEC",level:"secondary"}}},
    EDPM:{id:"EDPM",name:"Electronic Document Preparation and Management",familyId:"BUSINESS",status:"planned",
      courses:{CSEC_EDPM:{id:"CSEC_EDPM",name:"CSEC Electronic Document Preparation and Management",curriculumId:"CSEC",level:"secondary"}}},
    OA:{id:"OA",name:"Office Administration",familyId:"BUSINESS",status:"planned",
      courses:{CSEC_OA:{id:"CSEC_OA",name:"CSEC Office Administration",curriculumId:"CSEC",level:"secondary"}}}
  },
  families:{
    TECHNICAL:{id:"TECHNICAL",name:"Technical",subjectIds:["IT"]},
    MATHEMATICS:{id:"MATHEMATICS",name:"Mathematics",subjectIds:["MATH"]},
    BUSINESS:{id:"BUSINESS",name:"Business",subjectIds:["POB","POA","EDPM","OA"]}
  }
};
function ITCoachGetSubject(subjectId){return ITCoachSubjectRegistry.subjects[String(subjectId).toUpperCase()]||null;}
function ITCoachGetCourse(subjectId,courseId){
  const s=ITCoachGetSubject(subjectId); if(!s)return null;
  return Object.values(s.courses).find(c=>c.id===courseId)||null;
}
function ITCoachGetDefaultCourse(subjectId){
  const s=ITCoachGetSubject(subjectId); if(!s)return null;
  return Object.values(s.courses)[0]||null;
}
function ITCoachListActiveSubjects(){return Object.values(ITCoachSubjectRegistry.subjects).filter(s=>s.status==="active");}
function ITCoachListPlannedSubjects(){return Object.values(ITCoachSubjectRegistry.subjects).filter(s=>s.status==="planned");}
window.ITCoachSubjectRegistry=ITCoachSubjectRegistry;
window.ITCoachGetSubject=ITCoachGetSubject;
window.ITCoachGetCourse=ITCoachGetCourse;
window.ITCoachGetDefaultCourse=ITCoachGetDefaultCourse;
window.ITCoachListActiveSubjects=ITCoachListActiveSubjects;
window.ITCoachListPlannedSubjects=ITCoachListPlannedSubjects;