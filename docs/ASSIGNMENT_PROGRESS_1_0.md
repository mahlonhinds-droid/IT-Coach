# Assignment & Progress 1.0

## Student states
Assigned → In Progress → Completed

A completed assignment is associated with the topic assessment evidence stored in browser storage.

## Teacher functions
- Create a topic assignment
- Optional due date
- View assignment status
- Use topic score as completion evidence
- Recommend intervention from mastery rules

## Prototype limitation
The browser-only prototype cannot provide true multi-student synchronization. Production deployment requires authenticated class records and secure server-side persistence.

## Design goal
Keep the assignment contract independent from the storage implementation so the same interface can later use a cloud database.
