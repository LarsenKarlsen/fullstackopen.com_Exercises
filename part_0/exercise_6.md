sequenceDiagram
participant browser
participant server

Note over browser: Load page
Note over browser: Fill the form and press Save button
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server->>browser: StatusCode 201
deactivate server
Note right of browser: server response {"message":"note created"}