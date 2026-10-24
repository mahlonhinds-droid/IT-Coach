# IT Coach AI Coach 1.0

## Prototype role
The current AI Coach is an evidence-grounded deterministic assistant. It uses the student's recorded topic/skill evidence and learning path to provide contextual guidance.

## Supported prototype interactions
- Explain a concept
- Practice / quiz request
- General learning guidance
- Next-step recommendation

## Grounding rule
Production AI responses must be grounded in approved IT Coach curriculum content and the student's permitted learning evidence. The AI must not invent workbook answers, official CXC marking rules, or unsupported curriculum claims.

## Safety and assessment integrity
The coach should support learning and explanation. It should not impersonate an official examiner or provide fabricated official grades/marking decisions.

## Future production architecture
Approved content retrieval → student context → response generation → citation/lesson reference → teacher controls → audit/logging.
