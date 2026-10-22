# Topics 1–3 Adaptive Interaction 1.0

Interactive activity performance can now feed a browser-only adaptive recommendation layer.

## Flow
Interactive activity → result → progress history → activity average → recommended next step

## Prototype rules
- below 70: targeted revision + foundational activity
- 70–84: practice weakest skill with a new scenario
- 85+: more challenging application activity

These thresholds are configurable prototype rules and are not official CXC grading rules.

Activities are mapped to source lesson domains so the next revision path can be tied back to the relevant lesson.

## Current limitation
The existing v2 UI does not yet automatically submit every interaction to the result engine. This integration establishes the data contract and recommendation layer; deeper event wiring is the next implementation step.
