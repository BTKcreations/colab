
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Whiteboard from './components/Whiteboard';
import MathEditor from './components/MathEditor';
import ChemistryEditor from './components/ChemistryEditor';
import AssignmentMode from './components/AssignmentMode';
import MediaRecorder from './components/MediaRecorder';
import VersionHistory from './components/VersionHistory';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Whiteboard />} />
        <Route path="/math" element={<MathEditor />} />
        <Route path="/chemistry" element={<ChemistryEditor />} />
        <Route path="/assignment" element={<AssignmentMode />} />
        <Route path="/media" element={<MediaRecorder />} />
        <Route path="/history" element={<VersionHistory versions={[]} />} />
      </Routes>
    </Router>
  );
};

export default App;