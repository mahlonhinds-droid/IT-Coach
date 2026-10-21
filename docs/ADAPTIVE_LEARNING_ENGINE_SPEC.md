# IT Coach Adaptive Learning Engine

## Purpose

Convert assessment results into a repeatable learning decision rather than ending at a score.

## Decision flow

Assessment result
-> identify weak objectives
-> identify weak lessons
-> select targeted practice
-> remediation
-> reassessment
-> update mastery
-> recommend next action

## Prototype diagnostic rules

These use the configurable prototype thresholds in data/mastery-rules.json:
- below 70%: Remediate
- 70%-79%: Practice/review
- 80%+: Consolidate/reassess

These are application rules only and are not official CXC grading thresholds.

## Evidence hierarchy

The engine should prioritize:
1. objective-level assessment evidence
2. lesson knowledge-check evidence
3. practice evidence
4. lesson completion

A completed lesson alone must not be treated as mastery.

## Target selection

When multiple weak areas exist, prioritize:
1. lowest mastery
2. most recent failed assessment
3. objective connected to the current assessment
4. prerequisite lesson where the content map identifies one

## Feedback

Feedback should tell the student:
- what was correct
- what needs improvement
- why the answer/activity was incorrect when an explanation is available
- what lesson/activity to revisit
- when to try reassessment

## Reassessment

Reassessment should use a different question/activity selection from the immediately preceding attempt when the question bank permits it.

## Teacher view

The same evidence can later be summarized by:
- class mastery
- topic mastery
- lesson mastery
- objective weakness
- students requiring intervention

No teacher-facing official grade interpretation should be added until the teacher materials and approved assessment policy are available.
