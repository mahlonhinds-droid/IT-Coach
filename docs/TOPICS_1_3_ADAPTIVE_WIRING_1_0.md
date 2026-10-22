# Topics 1–3 Adaptive Wiring 1.0

Interactive activity completion can now be recorded as adaptive evidence.

## Runtime contract
1. Activity completes.
2. Score, topic, activity and skill are recorded.
3. Progress history receives an adaptive-interaction event when available.
4. Activity is mapped to source lesson IDs.
5. The adaptive recommendation identifies the weakest recorded skill.
6. The student receives a next-step recommendation.

## Example
Low performance → targeted revision + foundational activity.
Developing performance → new scenario for the weak skill.
Strong performance → more challenging application.

These are prototype progression rules and remain configurable.

## Browser-only
Evidence is stored in localStorage. No server or cross-device synchronization is introduced.
