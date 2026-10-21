# IT Coach Closed-Loop Remediation 1.0

## Flow
1. Assessment produces tagged skill evidence.
2. Weak skill is identified.
3. Student receives a targeted remediation task.
4. Matching lesson/practice is selected when mapped.
5. Student completes remediation.
6. Student reassesses.
7. New evidence updates the mastery record.

## Browser-only pilot
Remediation assignments are stored in localStorage for the prototype.

## Mapping rule
The engine must only claim a lesson match where a verified mapping exists. If no verified mapping exists, it tells the teacher that review is required.

## Production requirement
Final lesson-objective mappings, approved question bank, answer keys and marking guidance must be reviewed before automated remediation is used with high-stakes assessments.
