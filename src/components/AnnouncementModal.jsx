import React, { useState, useEffect } from 'react';
import './AnnouncementModal.css';

const STORAGE_KEY = 'lfc_announcement_v1_dismissed';

const AnnouncementModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="announcement-overlay" onClick={handleClose}>
      <div className="announcement-modal" onClick={(e) => e.stopPropagation()}>
        <div className="announcement-header">
          <div className="announcement-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h2 className="announcement-title">Important Notice</h2>
          <button className="announcement-close" onClick={handleClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="announcement-body">
          <p className="announcement-text">
            To facilitate the reconstruction of <strong>Gek Poh Shopping Center</strong>, our clinic has relocated to a{' '}
            <strong>Pink Container</strong> along the main road of{' '}
            <strong>Jurong West Avenue 5</strong>.
          </p>
        </div>

        <div className="announcement-footer">
          <label className="announcement-checkbox-label">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="announcement-checkbox"
            />
            <span className="announcement-checkbox-custom" />
            <span>Do not show this again</span>
          </label>
          <button className="announcement-btn" onClick={handleClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
