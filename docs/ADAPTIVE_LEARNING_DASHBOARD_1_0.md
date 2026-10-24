# Adaptive Learning Dashboard 1.0

The student experience now has a unified eight-topic dashboard foundation.

## Dashboard
Topics:
1. Fundamentals of IT
2. Networks and Communication
3. Social and Economic Impact of IT
4. Word Processing, Presentations and Web Pages
5. Spreadsheets
6. Databases
7. Problem Solving and Program Design
8. Programming in Pascal

Each topic can display:
- status
- available score evidence
- recommended next step

Prototype status bands:
- 80+ Mastered
- 70–79 Developing
- below 70 Needs Attention
- no evidence Not Assessed

## Browser-only
The dashboard reads existing localStorage evidence and does not introduce a backend.

## Important implementation note
The dashboard is a unified foundation. Topic-specific launch routing still needs to be expanded so each card opens the exact lesson/activity/practical/reassessment control for that topic.
