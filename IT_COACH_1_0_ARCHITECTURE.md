# IT Coach 1.0 — Foundation Architecture

## Product
IT Coach is a shared browser learning platform supporting multiple curricula/books through one reusable learning engine.

## Initial courses
- K–12 Information Technology
- CSEC Information Technology

## Core learning cycle
Learn → Practice → Assess → Diagnose → Remediate → Reassess → Master

## Roles
### Student
- Course selection
- Dashboard
- Topics and lessons
- Interactive activities
- Knowledge checks
- Practice
- Assessments
- Results and mastery
- Revision recommendations
- AI Coach
- Practical activities

### Teacher
- Dashboard
- Classes
- Students
- Assignments
- Question bank
- Answer/marking resources
- Performance reports
- Weak-topic identification
- Remediation recommendations

### Admin (future)
- Curriculum/content management
- User management
- School management
- Reporting
- Product configuration

## Content model
Course → Topic → Lesson → Objective → Content block → Activity → Question → Assessment → Skill/mastery record

Questions should be tagged by course, topic, lesson, objective, skill, question type, difficulty, and assessment paper/type.

## Initial assessment types
- Multiple choice
- True/false
- Matching
- Fill-in
- Ordering
- Short answer
- Scenario
- Structured response
- Practical task
- Programming/code

## CSEC assessment architecture
Assessment weighting remains configurable because the available workbook drafts contain differing draft weightings. The finalized workbook supplied by the author will be the source of truth before production values are locked.

## Teacher-book integration
Teacher books will be incorporated as teacher-facing content:
- lesson guidance
- answer keys
- marking guidance
- common errors
- suggested activities
- assignments
- remediation guidance

## Technical direction
Phase 1: browser application, hosted web URL, browser-only/local storage for prototype testing, responsive mobile-first interface, GitHub version control.

Phase 2: authentication, cloud database, teacher/class synchronization, school administration, analytics, secure AI integration, payments/subscriptions.

## Development rule
The existing working main branch is preserved. New IT Coach 1.0 development is isolated on the foundation branch until tested and approved.

## First implementation
Use CSEC Topic 1 as the reference implementation for:
Lesson → Activity → Knowledge Check → Practice → Assessment → Mastery → Remediation.

Once stable, reuse the engine for the remaining CSEC topics and K–12 content.
