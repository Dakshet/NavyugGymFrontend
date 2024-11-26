import './App.css';
import Waiting from './Pages/Waiting';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom"
import AdminLogin from './Pages/AdminLogin';
import AdminPannel from './Pages/AdminPannel';
import Navbar from './Components/Navbar';
import GymState from './context/Gym/GymState';
import DeadlinePannel from './Pages/DeadlinePannel';
import AdminHome from './Pages/AdminHome';
import SearchResult from './Pages/SearchResult';
import SubscriptionEnd from './Pages/SubscriptionEnd';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import MembersData from './Pages/MembersData';

function App() {
  return (
    <GymState>
      <div>
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/user/home' element={<Waiting />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/admin/home' element={<AdminHome />} />
            <Route path='/admin/add/panel' element={<AdminPannel />} />
            <Route path='/admin/membership/data' element={<MembersData />} />
            <Route path='/admin/membership/panel' element={<DeadlinePannel />} />
            <Route path='/admin/search/result' element={<SearchResult />} />
            <Route path='/admin/membership/end' element={<SubscriptionEnd />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </GymState>
  );
}

export default App;
