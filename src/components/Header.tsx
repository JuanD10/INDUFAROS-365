import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="18" height="18" fill="#F25022"/>
            <rect x="26" y="4" width="18" height="18" fill="#7FBA00"/>
            <rect x="4" y="26" width="18" height="18" fill="#00A4EF"/>
            <rect x="26" y="26" width="18" height="18" fill="#FFB900"/>
          </svg>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Microsoft 365</h1>
            <p className="text-sm text-muted-foreground">Ecosistema Empresarial</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
