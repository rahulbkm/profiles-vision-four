import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="waffle-menu" aria-label="Apps menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="3" cy="3" r="2" />
            <circle cx="10" cy="3" r="2" />
            <circle cx="17" cy="3" r="2" />
            <circle cx="3" cy="10" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="17" cy="10" r="2" />
            <circle cx="3" cy="17" r="2" />
            <circle cx="10" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </button>
        <div className="header-title">Dynamics 365</div>
        <a href="#" className="header-subtitle">Copilot Service admin center</a>
      </div>
      <div className="header-center">
        <div className="search-box">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.5 6.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-1.27 4.27a6 6 0 1 1 1.06-1.06l3.5 3.5-1.06 1.06-3.5-3.5z" />
          </svg>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 0 1 6 6v3.58l1.71 1.71A1 1 0 0 1 17 15H3a1 1 0 0 1-.71-1.71L4 11.58V8a6 6 0 0 1 6-6zm2 14a2 2 0 1 1-4 0h4z" />
          </svg>
        </button>
        <button className="icon-button" aria-label="Add">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button className="icon-button" aria-label="Settings">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
          </svg>
        </button>
        <button className="icon-button" aria-label="Help">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-10a2 2 0 0 0-2 2h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9v2h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" />
          </svg>
        </button>
        <button className="icon-button" aria-label="Feedback">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="8" />
            <path d="M7 9h6M10 13V7" stroke="white" strokeWidth="2" />
          </svg>
        </button>
        <button className="avatar-button">
          <span className="avatar">AU</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
