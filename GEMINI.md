# Construcción Software - Project Overview

This project is a web application with a separated frontend and backend architecture using Node.js.

## Project Structure

- `frontend/`: Contains the frontend application logic and static files.
    - `index.js`: Main entry point for the frontend, using Express to serve static files (templates and stylesheets).
    - `public/`: Directory for static assets.
        - `templates/index.html`: The main landing page (Cyberpunk themed video game).
        - `stylesheet/style.css`: Custom CSS for fonts and neon effects.
    - `package.json`: Frontend dependencies (Express) and start script.
- `backend/`: Placeholder for the backend logic.
    - `package.json`: Backend configuration.

## Technologies

- **Frontend:** Node.js, Express.
- **Backend:** Node.js (intended).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Running the Frontend

To start the frontend server:

```bash
cd frontend
npm install
npm start
```

The frontend will be available at `http://localhost:5000`.

### Running the Backend

(TODO: No backend logic is currently implemented.)

## Development Conventions

- The frontend uses ES Modules.
- Static templates are served from `frontend/public/templates`.
- Stylesheets are served from `frontend/public/stylesheet`.
- Tailwind CSS is used via CDN for UI styling.
