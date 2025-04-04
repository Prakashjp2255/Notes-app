import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Navigate, Route,Routes} from 'react-router-dom';
import 'normalize.css';
import './index.css';
import './Components/Login/login.css';
import './Components/Header/header.css';
import './Components/Profileinfo/profile.css';
import './Components/Notecard/notecard.css';
import App from './App';
import Login from './Components/Login/Login.jsx' ;
import Signup from './Components/Signup/Signup.jsx';
import Home from './Components/Home/Home.jsx';
import AddEditNotes from './Components/Notecard/AddEditNotes.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <React.StrictMode>
    <App/>
  <Routes>
        <Route path="/" element= {<Navigate to= "/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Home />} />
        <Route path="/editnotes" element={<AddEditNotes />} />
      </Routes>

  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

