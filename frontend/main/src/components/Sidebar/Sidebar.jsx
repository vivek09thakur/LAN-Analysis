import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 'devices', label: 'Devices', icon: '📱' },
    { id: 'bandwidth', label: 'Bandwidth', icon: '⚡' },
    { id: 'usage', label: 'Data Usage', icon: '📊' },
    { id: 'network', label: 'Network', icon: '🌐' },
    { id: 'wifi', label: 'WiFi', icon: '📡' },
    { id: 'ip', label: 'IP Address', icon: '🔗' },
    { id: 'dns', label: 'DNS', icon: '🔍' },
  ];

  const handleMenuClick = (id) => {
    const element = document.querySelector(`[data-section="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>

        <div className="sidebar-content">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="sidebar-item"
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <p>LAN Analysis Dashboard</p>
        </div>
      </nav>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
    </>
  );
}

export default Sidebar;
