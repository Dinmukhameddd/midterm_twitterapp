import './App.css';
import AppHeader from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Newsbox } from './components/newsbox/Newsbox';
import { Footer } from './components/footer/Footer';
import { Content } from './components/content/Content';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

export const App = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/home')
  }, [])

  return (
    <div className="App">
          <AppHeader />
          <Navbar />

          <div id='wrapper'>
            <div id='content'>
              <Outlet />
            </div>

            <Newsbox />

            </div><Footer id="footer" />
          </div>
  );
}

export default App;
