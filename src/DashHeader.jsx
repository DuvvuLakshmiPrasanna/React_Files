import React, { useState } from 'react';
import './DashHeader.css';

const DashHeader = () => {

  const navLinks = [
    { name: 'FSD', href: '#fsd' },
    { name: 'Flutter', href: '#flutter' },
    { name: 'Data Specialist', href: '#data' },
    { name: 'AWS', href: '#aws' },
    { name: 'Service Now', href: '#servicenow' },
    { name: 'VLSI', href: '#vlsi' }
  ];

  const sidebarItems = [
    'Ignite Coder',
    'Bamboo Coder',
    'Drive Ready',
    'SkillUp Coder',
    'Become Coder',
    'Moon Coder',
    'Owl Coder'
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#fsd');

  const handleLogout = () => {
    alert('Logout functionality would be implemented here');
  };


  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="company-logo">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lEusnAYfbK9H-vgW8fsBOQCpiSbNgBCpjA&s" 
              alt="Drive Ready Logo" 
              className="logo-image"
            />
            <span className="company-name">Drive Ready</span>
          </div>
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`nav-link ${activeHref === link.href ? 'active' : ''}`}
              onClick={() => {
                setActiveHref(link.href);
                setMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button 
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Quick Access</h3>
        </div>
        
        <div className="sidebar-content">
          {sidebarItems.map((item, index) => (
            <div 
              key={index} 
              className="sidebar-item"
              onClick={() => {
                alert(`${item} clicked!`);
              }}
            >
              <span className="sidebar-icon">
                {item === 'Ignite Coder' && '🔥'}
                {item === 'Bamboo Coder' && '🎋'}
                {item === 'Drive Ready' && '🚗'}
                {item === 'SkillUp Coder' && '📈'}
                {item === 'Become Coder' && '💻'}
                {item === 'Moon Coder' && '🌙'}
                {item === 'Owl Coder' && '🦉'}
              </span>
              <span className="sidebar-text">{item}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default DashHeader;
