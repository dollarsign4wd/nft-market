import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DashboardPage from './pages/DashboardPage';
import SubmitCollectionPage from './pages/SubmitCollectionPage';
import HomePage from './pages/HomePage';
import Register from './pages/registerPage';

function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/dashboard' element={<DashboardPage/>}></Route>
  <Route path='/submit-collection' element={<SubmitCollectionPage/>}></Route>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/register' element={<Register/>}></Route>

  





  </Routes>
  </BrowserRouter>
  
}

export default App;
