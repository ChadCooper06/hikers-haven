import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route } from "react-router-dom";
import Forum from './routes/forum';
import Topic from './routes/topic';
import Post from './routes/post';
import Comment from './routes/comment';
import 'bootstrap/dist/css/bootstrap.min.css';


// Setting up the default routes that the React side will use
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='forums' element={<Forum />} />
          <Route path='topics' element={<Topic />} />
          <Route path='posts' element={<Post />} />
          <Route path='comments' element={<Comment />} />
        </Route>
      </Routes>
  </React.StrictMode>
);
