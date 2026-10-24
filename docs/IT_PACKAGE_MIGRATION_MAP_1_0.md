# IT Coach IT Package Migration Map 1.0

## Purpose
Audit the current IT foundation before adding Mathematics. This is a migration plan, not a content rewrite.

## Classification

### KEEP — platform infrastructure
- active student context
- localStorage persistence
- browser runtime shell
- universal evidence storage
- mastery decision thresholds
- intervention tracking
- reassessment mechanics
- teacher/student identity handling
- QA/self-test infrastructure

### GENERALIZE — shared learning platform
1. Universal evidence — subjectId, courseId, curriculumId, topicId and skillId.
2. Mastery engine — subject-aware with IT backward compatibility.
3. Next-best-action — subject-aware command-centre data.
4. Student command centre — active course topic registry instead of fixed 1–8 assumptions.
5. Assessment engine — subject-configurable question structures and scoring.
6. Learning-object routing — route by learning-object type and subject package.
7. Teacher analytics — subject/course filters.
8. Intervention — subject/course context on every intervention.
9. Reassessment — subject/course context on reassessment evidence.

### MOVE TO SUBJECT PACKAGE — IT-specific content
- content-runtime.js
- content-runtime-4-8.js
- content-runtime-1-3.js
- IT topic catalog and lesson maps
- IT-specific skill lists
- CSEC IT assessment bank
- IT practical workspaces
- Pascal-specific activities
- spreadsheet/database/word-processing/web-page activities
- CSEC IT exam-prep rules
- CSEC IT paper configuration

### REPLACE LATER — prototype assumptions
- runtime hard-coded topics array
- hard-coded CSEC Information Technology labels
- fixed eight-topic dashboard
- fixed assessment bank in runtime.html
- fixed knowledge-check wording
- fixed tutor topic
- hard-coded Topic 4–8 practical logic
- fixed CSEC exam wording
- fallback student ID 1 once authentication exists

## Current high-risk hard-coding
release-1/runtime.html currently combines platform UI, IT curriculum navigation, IT lesson labels, assessment content, scoring, remediation routing and teacher UI integration.

Target split:
- platform runtime
- subject package
- course configuration
- content data
- activity adapters

## IT Package target
- subject.json
- courses/csec-it.json
- topics.json
- skills.json
- lessons/
- questions/
- activities/
- practicals/
- assessment-config.json
- exam-prep-config.json

## Mathematics readiness
Before Mathematics content is added, the core must support numeric answers, symbolic expressions, multi-step solutions, calculation evidence, partial-credit rules, worked solutions, problem-solving objectives, diagrams/graphs and prerequisite skills.

## Business readiness
The core must later support case studies, scenarios, structured responses, calculations, financial/accounting evidence, document tasks and workplace simulations.

## Migration rule
Do not rewrite all IT content in one commit. Sequence:
1. Registry — completed
2. Universal evidence — completed
3. Subject-aware mastery — completed
4. Document hard-coded boundaries — this map
5. Add subject-aware context to interventions/reassessment
6. Extract IT course configuration
7. Refactor runtime navigation
8. Run existing IT QA
9. Add Mathematics package
10. Run cross-subject QA

All work remains on itcoach-1-0-foundation. Protected main is unchanged.
