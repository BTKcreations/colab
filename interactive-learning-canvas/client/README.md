# Interactive Learning Canvas - Client Documentation

This project is a web-based real-time collaborative whiteboard platform designed for educational purposes. It allows users to draw, create diagrams, and share media in a collaborative environment.

## Features

- **Real-Time Collaboration**: Multiple users can draw and edit the whiteboard simultaneously.
- **Drawing Tools**: Users can draw freehand, add shapes, and insert text.
- **Math Tools**: LaTeX input editor for rendering mathematical equations.
- **Chemistry Tools**: Integrated chemical structure editor for drawing molecules.
- **Diagram Templates**: Prebuilt templates for flowcharts, UML, and circuit symbols.
- **Assignment Mode**: Freeze the canvas for assignment submissions with grading rubrics.
- **Media Sharing**: Record and share audio/video notes, and stream media using WebRTC.
- **Version History**: Replay changes made on the canvas to track edits.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd interactive-learning-canvas/client
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Project Structure

- **public/index.html**: Main HTML file serving the React application.
- **src/components/**: Contains all React components for the application.
- **src/hooks/**: Custom hooks for managing application state and Socket.IO connections.
- **src/utils/**: Utility functions for Yjs integration.
- **src/App.tsx**: Main application component.
- **src/index.tsx**: Entry point of the React application.
- **src/styles/**: Contains CSS styles for the application.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.