import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Forum from './Routes/Forum';
import Post from './Routes/Post';
//import Comment from './Routes/Comment';
import Resources from './Routes/Resources';
import Login from './components/user/Login';
import Register from './components/user/Register';
//import Profile from './components/user/Profile';

// Setting up the default routes that the React side will use
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="forums/" element={<Forum />} />
          <Route path="posts/" element={<Post />} />
          <Route path="resources/" element={<Resources />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
