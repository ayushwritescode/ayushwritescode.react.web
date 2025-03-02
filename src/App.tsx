import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThreeDot } from 'react-loading-indicators';
import { useAppDispatch, useAppSelector } from './store/hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initSession } from './store/auth/authThunks';

const App: React.FC = () => {
  const { loading } = useAppSelector((state) => state.auth);
    const appDispatch = useAppDispatch();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(()=>{
    appDispatch(initSession());
  },[])

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <ThreeDot color="#fff" size="medium" text="Logging in" textColor="#fff" />
        </div>
      )}

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
