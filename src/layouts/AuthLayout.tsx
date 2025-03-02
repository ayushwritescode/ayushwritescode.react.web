import React from 'react';
import secured from "../assets/secured.svg";
import logo from "../assets/logo.svg";
import { useLocation } from 'react-router-dom';


interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="auth-header">
    <h2 className="auth-title">{title}</h2>
    <p className="auth-subtitle">{subtitle}</p>
  </div>
);

const AuthBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="auth-body">{children}</div>
);

const AuthFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="auth-footer">{children}</div>
);

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {

  const locationName = useLocation().pathname;
  return (


    <div className="auth-layout">
      {/* Left Column */}

      <div className="auth-left">
        <a href="https://www.easygenerator.com/" className="hidden md:block mb-auto cursor-pointer z-10" target="_blank">
          <img
            src={logo}
            alt="Easy Generator Logo"
          />
        </a>

        <h1 className="auth-left-heading">Easy Generator</h1>
        <p className="auth-left-subtitle">AI-powered
          e-learning creation tool for enterprises</p>
        <ul className="auth-highlights">
          <li>Transform your documents into engaging e-learning or create company-tailored courses from scratch in minutes. Made for subject-matter experts and L&D alike.</li>
          <li>From question generation to text simplification, creating e-learning courses just got easier and more effective than ever with the power of EasyAI. Create faster. Improve quality. Boost learning.</li>
          <li>Localizing your e-learning has never been easier. In Easygenerator, you can automatically translate your courses to and from 75 languages with the click of a button. </li>
        </ul>
        <div className="hidden md:flex flex-row items-center justify-end self-center mt-auto gap-x-3 p-4 md:p-2">
          <img
            src={secured}
            alt="European Union"
            className="pointer-events-none w-8"
          />
          <span className="text-xs text-neutral-500">
            Easygenerator stores your data in the European Union
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className="auth-right" data-aos={locationName === "/login" ? "flip-right" : "flip-left"} data-aos-duration="1000" data-aos-easing="ease-out">
        <div className="auth-card">
          {children}
        </div>
      </div>
    </div>

  );
};

export { AuthLayout, AuthHeader, AuthBody, AuthFooter };