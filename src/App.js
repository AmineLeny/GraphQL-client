import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import Posts from './components/Posts';

const App = () => {
  const [animationClass, setAnimationClass] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setAnimationClass(true);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="/"
          element={
            <h1
              style={{
                fontSize: '3rem',
                color: '#333',
                textAlign: 'center',
                marginTop: '20px',
                animation: 'fadeZoom 2s ease-in-out infinite', // Animation applied here
              }}
            >
              Welcome to the Social Media App
            </h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
