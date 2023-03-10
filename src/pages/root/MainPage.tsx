import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import HomePage from '../sub/HomePage';

const MainPage = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default MainPage;
