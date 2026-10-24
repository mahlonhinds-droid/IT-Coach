# Reusable Mastery Centre Architecture 1.0

The Topic 6 Mastery Centre has now been separated into a reusable, topic-agnostic core.

## Core responsibilities
- Resolve latest mastery evidence.
- Resolve growth history.
- Identify skills below the configurable mastery threshold.
- Recommend the next learning action.
- Render a consistent student-facing mastery summary.

## Topic adapters
Each topic supplies:
- topic number
- student identifier
- skill definitions
- latest-score resolver
- growth resolver
- remediation resolver
- practical/assessment launcher

## Intended coverage
The same centre can support Topics 1–8 without forcing every subject area to use identical activities.

Examples:
- Topic 4: document, presentation and web skills.
- Topic 5: spreadsheet skills.
- Topic 6: database skills.
- Topic 7: problem-solving and algorithm skills.
- Topic 8: programming skills.

## Design principle
The platform standardises the learning loop, not the subject activity.

Learn → Practise → Assess → Diagnose → Revise → Reassess → Master.
