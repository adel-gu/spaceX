// React
import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Components
import NavBar from './components/Header/NavBar';
import Dragons from './components/Dragons/Dragons';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
