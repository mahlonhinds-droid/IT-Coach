# IT Coach Student Runtime Contract

## Purpose

Provide one reusable browser-only runtime for all CSEC topics rather than separate topic applications.

## Runtime sequence

1. Select course
2. Select topic
3. Select lesson
4. Show objectives
5. Present approved learning blocks
6. Run an interactive activity
7. Run knowledge check
8. Offer practice
9. Run assessment
10. Calculate prototype mastery
11. Diagnose the next action
12. Launch targeted remediation
13. Reassess

## Lesson data contract

Every lesson may contain:
- id
- title
- objectives[]
- contentBlocks[]
- activities[]
- knowledgeChecks[]
- practiceQuestions[]
- assessmentQuestions[]
- remediation[]

The runtime must tolerate missing optional blocks so partially populated lessons remain usable.

## Activity contract

Each activity declares:
- type
- prompt/instructions
- data/configuration
- validation rules
- feedback
- source status

Activity types planned for the CSEC course:
- classification
- matching
- ordering
- scenario analysis
- diagram identification
- document production
- spreadsheet workspace
- database workspace
- algorithm/flowchart workspace
- trace table
- Pascal coding/testing

## Assessment contract

Assessment items must carry stable IDs and, where supported by the source:
- topicId
- lessonId
- objectiveId
- type
- difficulty
- paper/type
- answer
- explanation
- remediation

## Mastery

Use the configurable prototype rules already defined in data/mastery-rules.json. These are app rules for diagnosis, not official CXC grades.

## Browser-only persistence

Until the product architecture changes, persist:
- student profile
- lesson completion
- activity results
- knowledge-check results
- practice results
- assessment results
- mastery
- remediation history

No server or cloud database is required for this phase.

## Source integrity

Student content must be traceable to the supplied workbook or explicitly labelled as an IT Coach-added interaction. Teacher answer keys and marking guidance remain separate until the teacher books are supplied and reviewed.
