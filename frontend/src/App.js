import React, { useState, useEffect, useLayoutEffect } from 'react';
import { auth, googlelogin, githublogin, logout } from './services/firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import PattonUniverCity from './pages/home/home';
import Axios from 'axios';

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authenticated] = useState(true);
  const [checkUser, setCheckUser] = useState(false);
  const [currentUser, setCurrentUser] = useState({ cart: [] });
  const [setUser] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const states = {
    loading,
    isLoggedin,
    setIsLoggedin,
    currentUser,
    setCurrentUser,
    windowDimensions,
    checkUser,
    setCheckUser,
    mobile,
    setMobile,
  };

  // Resize by device
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  // Listen for Mobile Devices
  useEffect(() => {
    if (!mobile) {
      if (parseInt(windowDimensions[0]) <= 1400) {
        setMobile(true);
      }
    } else if (mobile) {
      if (parseInt(windowDimensions[0]) > 1400) {
        setMobile(false);
      }
    }
  }, [windowDimensions, mobile]);

  //Check if user is logged in
  useEffect(() => {
    if (!checkUser) {
      setLoading(true);
      Axios.get('/user/checkuser')
        .then((res) => {
          console.log(res);
          if (res.data.msg === 'You are logged in') {
            setIsLoggedin(true);
            setCurrentUser(res.data.user);
            console.log('Start');
            console.log(currentUser);
            console.log('Stop');
            function firebaseAuth() {
              auth.onAuthStateChanged((user) =>
                user ? setUser(user) : setUser(null)
              );
            }
            firebaseAuth();
          } else {
            setIsLoggedin(false);
          }
          setLoading(false);
          setCheckUser(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [checkUser, currentUser, setUser]);

  useEffect(() => {
    setWindowDimensions([width, height]);
  }, [width, height]);

  return (
    // loading ? <h1> Loading...</h1> :
    //(
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <PattonUniverCity
            {...props}
            authenticated={authenticated}
            logout={logout}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={(props) => (
          <Login
            props={props}
            {...states}
            currentUser={currentUser}
            githublogin={githublogin}
            googlelogin={googlelogin}
            authenticated={authenticated}
          />
        )}
      />
      <Route
        exact
        path="/signup"
        render={(props) => <Signup {...props} authenticated={authenticated} />}
      />
    </Router>
  );
}
