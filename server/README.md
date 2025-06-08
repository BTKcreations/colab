# CollabBoard Server Documentation

## Overview
The CollabBoard server is built using Node.js and provides real-time collaboration features for the interactive learning canvas. It utilizes Socket.IO for real-time communication and Yjs for conflict-free syncing of the whiteboard state.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the server directory:
   ```
   cd collabboard-app/server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server
To start the server, run:
```
npm start
```
The server will be available at `http://localhost:3000`.

## File Structure
- `src/index.ts`: Entry point for the Node.js server, setting up the Express app and Socket.IO.
- `src/socket.ts`: Manages Socket.IO events for real-time communication.
- `src/yjsServer.ts`: Sets up the Yjs server for syncing the whiteboard state.
- `src/assignment.ts`: Handles assignment logic, including submission and grading.
- `src/types/index.ts`: Exports TypeScript interfaces and types used throughout the server application.

## API Endpoints
- **WebSocket Connection**: Establishes a real-time connection for collaboration.
- **Assignment Submission**: Handles submission of assignments and grading.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.