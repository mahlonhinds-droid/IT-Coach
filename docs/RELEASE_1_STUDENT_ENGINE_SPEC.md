# IT Coach 1.0 — Release 1 Student Engine Specification

## Purpose
Turn the source-mapped CSEC eight-topic curriculum into one reusable browser learning engine.

## Student journey
Dashboard → Course → Topic → Lesson → Learn → Activity → Knowledge Check → Practice → Assessment → Score → Mastery → Targeted Revision → Reassessment.

## Topic model
Each topic uses the same runtime structure:
- Topic metadata
- Ordered lessons
- Learning objectives
- Source-approved content blocks
- Interactive activities
- Knowledge checks
- Practice questions
- Topic assessment
- Mastery record
- Remediation recommendation

## Mastery rules
- Lesson completion is tracked separately from assessment performance.
- Assessment score is stored with date/time.
- Under 70%: Remediate.
- 70–79%: Practice and review.
- 80% or higher: Consolidate and reassess later.
- These thresholds are prototype rules, not official CXC grading rules.

## Source control
The supplied student workbook is the source for student-facing curriculum content. Teacher answer keys and marking guidance remain teacher-facing until the teacher editions are supplied and reviewed.

## Practical learning
Topics 5–8 are designed to support later practical modules:
- Spreadsheet workspace
- Database workspace
- Algorithm/flowchart workspace
- Pascal workspace

The first Release 1 implementation is Topic 1. Topics 2–8 use the same IDs and runtime contract so they can be populated without rebuilding the application engine.

## Browser-only requirement
Release 1 stores prototype progress in the browser. No server, cloud database, student account system or external AI service is required.
