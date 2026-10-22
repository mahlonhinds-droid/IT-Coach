# Three-Failure Teacher Intervention 1.0

## Policy
If a student records three or more below-threshold attempts on the same skill, IT Coach creates a teacher intervention alert.

## Critical design decision
The alert is **non-blocking**.

The student:
- receives targeted support;
- sees that teacher help is recommended;
- may continue to the next lesson/topic;
- is not locked out of the curriculum.

The teacher:
- receives the intervention signal;
- can review the student's evidence and history;
- can decide the appropriate intervention;
- can later require reassessment or additional support.

## Why non-blocking progression matters
A persistent difficulty in one skill should not unnecessarily prevent the student from learning other topics. The platform should support differentiated progression while keeping the unresolved skill visible to the teacher.

## Threshold
The current prototype defines a below-threshold attempt as a score below 70. This is configurable prototype policy, not an official CXC rule.

## Future teacher workflow
Alert → Review evidence → Contact/support student → Assign intervention → Monitor → Reassess → Close alert.
