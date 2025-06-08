# Interactive Learning Canvas Server

This is the server-side component of the Interactive Learning Canvas project. It is built using Node.js and provides real-time collaboration features for the whiteboard application.

## Features

- **Real-Time Collaboration**: Utilizes Socket.IO to enable multiple users to draw and interact on the whiteboard simultaneously.
- **Conflict-Free Syncing**: Integrates Yjs to manage the state of the whiteboard and handle concurrent edits without conflicts.
- **API Endpoints**: Provides necessary endpoints for client interactions and data management.

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
   cd interactive-learning-canvas/server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server, run the following command:
```
npm start
```

The server will be running on `http://localhost:5000` (or the port specified in your configuration).

### API Documentation

Refer to the code comments in the `src/index.ts`, `src/socket.ts`, and `src/yjsServer.ts` files for details on the available API endpoints and their usage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.