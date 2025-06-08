import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Whiteboard from './components/Whiteboard';
import MathTools from './components/MathTools';
import ChemistryTools from './components/ChemistryTools';
import DiagramTemplates from './components/DiagramTemplates';
import AssignmentMode from './components/AssignmentMode';
import MediaSharing from './components/MediaSharing';
import VersionHistory from './components/VersionHistory';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Whiteboard />} />
        <Route path="/math" element={<MathTools />} />
        <Route path="/chemistry" element={<ChemistryTools />} />
        <Route path="/diagrams" element={<DiagramTemplates />} />
        <Route path="/assignment" element={<AssignmentMode />} />
        <Route path="/media" element={<MediaSharing />} />
        <Route path="/history" element={<VersionHistory />} />
      </Routes>
    </Router>
  );
};

export default App;