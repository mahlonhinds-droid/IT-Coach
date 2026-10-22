# Skill-Level Adaptive Routing 1.0

IT Coach now has a prototype skill-level routing layer across Topics 1–8.

## Principle
Topic score is no longer the only routing signal.

The router looks for the weakest demonstrated skill from:
- interactive activity evidence
- adaptive assessment skill scores

It then selects:
- below 70 → revision
- 70–84 → practice
- 85+ → advanced application

## Example
A student can have 78% overall in a topic while having one much weaker skill. The system should prioritize that skill rather than sending the student through a generic topic sequence.

## Current limitation
The skill-to-lesson destinations are prototype mappings. Teacher-approved content metadata should ultimately provide the exact lesson, activity and reassessment destination for every skill.

No official CXC grade or marking rule is inferred by this system.
