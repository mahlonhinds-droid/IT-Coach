# Assessment Engine 1.0

## Purpose
Turn the single-item prototype into a reusable multi-question assessment engine.

## Runtime
1. Select topic.
2. Build a randomized assessment from the approved question bank.
3. Present multiple questions.
4. Score automatically where an answer key exists.
5. Calculate overall score.
6. Calculate skill-level evidence.
7. Diagnose the weakest skill.
8. Recommend targeted revision.
9. Build reassessment with excluded prior question IDs when alternatives exist.
10. Update browser-only mastery history.

## Prototype rule
The current 70/80 thresholds are IT Coach diagnostic rules only. They are not official CXC grading thresholds.

## Source integrity
Question wording, answer keys, explanations and marking criteria must be approved against the final workbook/teacher materials before production use. The current bank is an engine demonstration and must not be represented as an official CXC question bank.

## Reassessment
The engine supports excluding previously attempted question IDs. This allows a later reassessment to use different items when the approved bank contains alternatives.

## Skill diagnosis
The engine returns per-skill correct/total evidence. The lowest-performing skill can become the remediation target.

## Next integration
Connect this engine to the student runtime UI, assessment history, mastery records and teacher reporting.
