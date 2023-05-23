import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
