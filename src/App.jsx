// React
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// redux provider
import { Provider } from 'react-redux';

// Store
import store from './Redux/configureStore';

// Components
import Header from './components/Header/Header';
import Dragons from './components/Dragons/Dragons';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Provider>
  );
}

export default App;
