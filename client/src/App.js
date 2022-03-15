import './App.css';
import { ToastContainer } from "react-toastify";
import { ProductList } from '../src/components/Pages/ProductList';
import Edit from './components/Pages/Edit';
import {Routes, Route} from 'react-router-dom'
// import { Button } from 'semantic-ui-react'
// import {toggleFalse} from "./JS/action/edit"
import { useDispatch } from 'react-redux';
import Contact from './components/Pages/Contact';
import AppNavbar from "./components/Route/AppNavbar";
import { useEffect } from "react";
import { getAuthUser } from "./JS/action/authActions";
import Home from "./components/Pages/Home";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/privateRoute.js/PrivateRoute";
import Login from "./components/Login"
import Search from './components/Pages/Search';
import Footer from './components/Pages/Footer';


function App() {
  const dispatch = useDispatch();
  const getUser = ()=>{
    dispatch(getAuthUser())
  }
  useEffect(()=>{
    getUser()
   // eslint-disable-next-line
  },[])
  
  return (
  <div>
    <AppNavbar />
   
      
    <div className="App" > 
    
  <Routes>
    
  <Route path="/" element={<Home />}/>
     <Route path="/login" element={<Login />}/>
    <Route path='/products' element={<ProductList/>}/>
    <Route path="/add" element={<Edit/>}/>
    <Route exact path="/edit/:id" element={<Edit/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/search" element={<Search/>}/>
    <Route path="/dashboard" element={
       <PrivateRoute>
         <Dashboard />
     
       </PrivateRoute>
     } />

  </Routes>

  <ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
    
    </div>
    <Footer/> 
    </div>
  );
 
}

export default App;
