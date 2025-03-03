import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThreeDot } from 'react-loading-indicators';
import { useAppSelector } from './store/hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  const { loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
