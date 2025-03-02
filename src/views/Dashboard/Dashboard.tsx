import React from 'react';
import logo from '../../assets/logo.svg';
import { logoutUser } from '../../store/auth/authThunks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-y-5 text-white p-5">
      <img
        src={logo}
        alt="Easy Generator Logo"
        className="w-36 mb-5"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="750"
      />
      <h1
        className="text-2xl md:text-5xl text-center"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="750"
      >
        Welcome to the application, {user?.name || user?.email}!
      </h1>
      <p
        className="text-sm text-neutral-400 max-w-xs text-center"
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-duration="750"
      >
        Thank you for visiting. Please click the button below to logout.
      </p>
      <button
        type="button"
        className="button-primary"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="750"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
