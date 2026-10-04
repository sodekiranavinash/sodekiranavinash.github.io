import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  items: NavItem[];
  onNavigate: (href: string) => void;
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ items, onNavigate, className = '' }) => {
  return (
    <div className={`flex ${className}`}>
      {items.map((item) => (
        <button key={item.label} onClick={() => onNavigate(item.href)} className="nav-link">
          {item.label}
        </button>
      ))}
    </div>
  );
};