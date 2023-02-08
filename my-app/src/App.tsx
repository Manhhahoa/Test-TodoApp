import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './page/home/Home';
import PrivateRoute from './page/privateRouter/PrivateRoute';
import SignIn from './page/signin/SignIn';
import SignUp from './page/signup/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='*' element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
