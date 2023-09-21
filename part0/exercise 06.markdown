```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: User enters new note
    server -->> browser: {content: "a", date: "2023-09-21"}

    Note right of browser: UI updated with new note
```
