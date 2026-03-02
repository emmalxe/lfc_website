import React, { useRef, useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [highlightStyle, setHighlightStyle] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinksRef = useRef([]);
  const containerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const navMenu = [
    {
      id: 'home',
      label: 'Home',
      dropdown: [
        { label: 'Important Notice', page: 'home', section: 'important-notice' }
      ]
    },
    {
      id: 'about',
      label: 'About Us',
      dropdown: [
        { label: 'Our Story', page: 'about', section: 'our-story' },
        { label: 'Our Expectations', page: 'about', section: 'expectations' }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      dropdown: [
        { label: 'Our Services', page: 'services', section: 'our-services' },
        { label: 'Vaccination Packages', page: 'services', section: 'vaccination-packages' },
        { label: 'Health Screening Packages', page: 'services', section: 'health-screening' }
      ]
    },
    {
      id: 'contact',
      label: 'Contact Us',
      dropdown: [
        { label: 'Contacts', page: 'contact', section: 'contacts' },
        { label: 'Location Updates', page: 'contact', section: 'location-updates' }
      ]
    }
  ];

  const handleNavClick = (page) => {
    setActiveTab(page);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownOpen = (itemId, index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    handleMouseEnter(index);
    setOpenDropdown(itemId);
  };

  const handleDropdownClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDropdownItemClick = (page, section) => {
    setActiveTab(page);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    scrollToSection(section);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.site-header')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const updateHighlightPosition = () => {
      const activeIndex = ['home', 'about', 'services', 'contact'].indexOf(activeTab);
      const activeElement = navLinksRef.current[activeIndex];
      if (activeElement && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        setHighlightStyle({
          left: elementRect.left - containerRect.left,
          width: elementRect.width,
        });
      }
    };
    updateHighlightPosition();
    window.addEventListener('resize', updateHighlightPosition);
    return () => window.removeEventListener('resize', updateHighlightPosition);
  }, [activeTab]);

  const handleMouseEnter = (index) => {
    const element = navLinksRef.current[index];
    const container = containerRef.current;
    if (element && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      setHighlightStyle({
        left: elementRect.left - containerRect.left,
        width: elementRect.width,
      });
    }
  };

  const handleMouseLeave = () => {
    const activeIndex = ['home', 'about', 'services', 'contact'].indexOf(activeTab);
    const activeElement = navLinksRef.current[activeIndex];
    const container = containerRef.current;
    if (activeElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeElement.getBoundingClientRect();
      setHighlightStyle({
        left: elementRect.left - containerRect.left,
        width: elementRect.width,
      });
    }
  };

  return (
    <header className="site-header">
      <nav className="main-nav">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/references/logo_name_v1.png" alt="Lee Family Clinic" className="logo-image" />
        </div>

        {/* Desktop Navigation Links */}
        <ul
          ref={containerRef}
          className="nav-links"
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`nav-highlight ${highlightStyle.left !== undefined ? 'visible' : ''}`}
            style={{
              left: `${highlightStyle.left || 0}px`,
              width: `${highlightStyle.width || 0}px`
            }}
          />
          {navMenu.map((item, index) => (
            <li
              key={item.id}
              className="nav-item-with-dropdown"
              onMouseEnter={() => handleDropdownOpen(item.id, index)}
              onMouseLeave={handleDropdownClose}
            >
              <a
                ref={el => navLinksRef.current[index] = el}
                href="#"
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
              {openDropdown === item.id && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={handleDropdownClose}
                >
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownItemClick(dropdownItem.page, dropdownItem.section);
                      }}
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navMenu.map((item) => (
            <div key={item.id} className="mobile-menu-group">
              <a
                href="#"
                className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
              <div className="mobile-dropdown">
                {item.dropdown.map((dropdownItem, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="mobile-dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownItemClick(dropdownItem.page, dropdownItem.section);
                    }}
                  >
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
