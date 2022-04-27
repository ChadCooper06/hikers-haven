import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Forum from './Routes/Forum';
import Topic from './Routes/Topic';
import Post from './Routes/Post';
import Comment from './Routes/Comment';
import Resources from './Routes/Resources';
import 'bootstrap/dist/css/bootstrap.min.css';


// Setting up the default routes that the React side will use
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='forums' element={<Forum />} />
        <Route path='topics' element={<Topic />} />
        <Route path='posts' element={<Post />} />
        <Route path='comments' element={<Comment />} />
        <Route path='resources' element={<Resources />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
