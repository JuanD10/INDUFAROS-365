import React from 'react';
import { Link } from 'react-router-dom';
import { iconMap } from './icons/M365Icons';

interface AppCardProps {
  id: string;
  name: string;
  delay?: number;
}

const AppCard: React.FC<AppCardProps> = ({ id, name, delay = 0 }) => {
  const IconComponent = iconMap[id];

  return (
    <Link 
      to={`/app/${id}`}
      className="app-card opacity-0 animate-fade-in min-w-[100px] w-[120px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {IconComponent && <IconComponent className="app-icon" />}
      <span className="app-name">{name}</span>
    </Link>
  );
};

export default AppCard;
