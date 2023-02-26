sequenceDiagram
participant browser
participant server

Note right of browser: Page are loaded, form are filled with data, Save button clicked
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
server->>browser: Status Code: 302 Redirect to /exampleapp/notes
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server->>browser: HTML file
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: CSS file
browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.js
server->>browser: JS file
Note over browser: Browser execute received JS file
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: JSON file
Note over browser: Browser finished execution of JS file