import './App.css';
import MainPage from './pages/root/MainPage';
import WelcomePage from './pages/root/WelcomePage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/welcome" element={<WelcomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
