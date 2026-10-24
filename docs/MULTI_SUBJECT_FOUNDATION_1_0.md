# IT Coach Multi-Subject Foundation 1.0

## Purpose
Generalize the existing IT learning engine without changing the protected main branch.

## Hierarchy
Subject -> Course -> Topic -> Lesson -> Skill -> Evidence

## Initial portfolio
- IT — active reference package
- Mathematics — planned second package
- POB — planned
- POA — planned
- EDPM — planned
- OA — planned

## Shared learning objects
lesson, mcq, short-answer, calculation, problem-solving, data-interpretation, practical-task, document-task, case-study, reassessment, adaptive-practice

## Universal evidence contract
studentId, subjectId, courseId, curriculumId, topicId, lessonId, skillId, evidenceType, score, source, evidence, at

## Backward compatibility
Existing IT records that only contain topicNo/skill remain valid. The generalized reader treats them as subject IT and course CSEC_IT when no explicit subject/course is present.

## Development sequence
1. Registry
2. Universal evidence compatibility
3. Subject-aware mastery compatibility
4. IT package mapping
5. Mathematics package
6. Business framework
7. POB/POA/EDPM/OA

## Safety rule
No curriculum content is replaced during the architecture migration. This phase changes contracts and routing only.
