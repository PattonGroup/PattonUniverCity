import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PattonUniverCity from './pages/home/home';
import Developers from './pages/developers/main';
import Blockchain from './pages/blockchain/main';

export default function App() {
  const [mobile, setMobile] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

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

  useEffect(() => {
    setWindowDimensions([width, height]);
  }, [width, height]);

  return (
    <Router>
      <Route exact path="/" component={PattonUniverCity} />
      <Route path="/login" component={Developers} />
      <Route exact path={`/developers`} component={Developers} />
      <Route exact path={`/blockchain`} component={Blockchain} />
    </Router>
  );
}
