import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src="/logo_indufaros.png" alt="INDUFAROS Logo" className="h-12 w-auto animate-fade-in" />
          <div className="border-l border-border pl-3">
            <h1 className="text-xl font-bold text-foreground">Microsoft 365</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Ecosistema Empresarial</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
