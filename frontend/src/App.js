
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DashboardPage from './pages/DashboardPage';
import SubmitCollectionPage from './pages/SubmitCollectionPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'



function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/dashboard" element={<DashboardPage/>}></Route>
  <Route path="/submit-collection" element={<SubmitCollectionPage/>}></Route>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/register" element={<RegisterPage/>}></Route>
  <Route path="/login" element={<LoginPage/>}></Route>
 
 


  





  </Routes>
  </BrowserRouter>
  
}

export default App;
