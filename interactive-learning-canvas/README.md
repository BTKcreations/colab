# Interactive Learning Canvas

## Overview
The Interactive Learning Canvas is a web-based real-time collaborative whiteboard platform designed for educational purposes. It allows users to draw, create diagrams, and share media in a collaborative environment. The platform includes various academic tools, assignment features, and real-time collaboration capabilities.

## Features
- **Real-Time Collaboration**: Multiple users can work on the whiteboard simultaneously with real-time updates.
- **Drawing Tools**: Users can draw freehand, add shapes, and insert text.
- **Math Tools**: LaTeX input for rendering mathematical equations using KaTeX.
- **Chemistry Tools**: Integration of Ketcher for drawing chemical structures.
- **Diagram Templates**: Prebuilt templates for flowcharts, UML, and circuit symbols.
- **Assignment Mode**: Freeze the canvas for assignment submissions with grading rubrics.
- **Media Sharing**: Record audio/video notes and stream media using WebRTC.
- **Version History**: Replay changes made on the canvas to track progress.

## Tech Stack
- **Frontend**: React, Fabric.js or Excalidraw, KaTeX, Ketcher
- **Backend**: Node.js, Express, Socket.IO, Yjs
- **Database**: Firebase or PostgreSQL (for storing assignment results)
- **Deployment**: Vercel (frontend), Render/Heroku/Fly.io (backend)

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application
1. Start the server:
   ```
   cd server
   npm start
   ```
2. In a new terminal, start the client:
   ```
   cd client
   npm start
   ```

### Usage
- Open your browser and navigate to `http://localhost:3000` to access the interactive learning canvas.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.