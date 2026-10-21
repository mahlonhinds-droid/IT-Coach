# IT Coach Reassessment Engine 1.0

## Purpose
Reassessment should provide new evidence rather than simply repeat the original questions.

## Prototype behavior
The engine:
- records the previous assessment
- attempts to exclude previously used question prompts
- selects alternate tagged questions where available
- scores the new evidence
- compares the new result with the prior score
- reports percentage-point growth
- recommends remediation, continued practice, or consolidation

## Question-bank limitation
Some prototype lesson/skill banks currently contain only one question. When insufficient fresh questions exist, the engine falls back to available tagged questions. Production requires multiple approved questions per objective/skill to make reassessment genuinely independent.

## Interpretation
Score growth is a learning indicator, not an official CXC grade.
