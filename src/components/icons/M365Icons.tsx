import React from 'react';

interface IconProps {
  className?: string;
}

export const TeamsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 16H28V8H36C38.2091 8 40 9.79086 40 12V16Z" fill="#5059C9"/>
    <path d="M28 16H8C8 13.7909 9.79086 12 12 12H28V16Z" fill="#7B83EB"/>
    <path d="M28 16V36C28 38.2091 26.2091 40 24 40H12C9.79086 40 8 38.2091 8 36V16H28Z" fill="#7B83EB"/>
    <circle cx="36" cy="10" r="4" fill="#5059C9"/>
    <circle cx="18" cy="22" r="4" fill="white"/>
    <path d="M14 30H22V34H14V30Z" fill="white"/>
    <path d="M40 20V32C40 34.2091 38.2091 36 36 36H28V16H36C38.2091 16 40 17.7909 40 20Z" fill="#5059C9"/>
  </svg>
);

export const VivaEngageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="4" fill="#106EBE"/>
    <text x="24" y="32" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Y</text>
  </svg>
);

export const OutlookIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 12V36C44 38.2091 42.2091 40 40 40H20V8H40C42.2091 8 44 9.79086 44 12Z" fill="#0A64A4"/>
    <path d="M4 14C4 10.6863 6.68629 8 10 8H24V40H10C6.68629 40 4 37.3137 4 34V14Z" fill="#0078D4"/>
    <ellipse cx="14" cy="24" rx="6" ry="8" fill="white"/>
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="32" rx="2" fill="#0078D4"/>
    <rect x="6" y="10" width="36" height="8" fill="#0A64A4"/>
    <rect x="14" y="6" width="4" height="8" rx="1" fill="#1490DF"/>
    <rect x="30" y="6" width="4" height="8" rx="1" fill="#1490DF"/>
    <rect x="12" y="24" width="6" height="6" fill="white"/>
    <rect x="21" y="24" width="6" height="6" fill="white"/>
    <rect x="30" y="24" width="6" height="6" fill="white"/>
    <rect x="12" y="32" width="6" height="6" fill="white"/>
    <rect x="21" y="32" width="6" height="6" fill="white"/>
  </svg>
);

export const LoopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44" stroke="#0078D4" strokeWidth="4" strokeLinecap="round"/>
    <path d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4" stroke="#41A5EE" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="8" fill="#9B4DCA"/>
  </svg>
);

export const SharePointIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" fill="#036C70"/>
    <circle cx="32" cy="24" r="10" fill="#1A9BA1"/>
    <circle cx="26" cy="34" r="8" fill="#37C6D0"/>
    <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S</text>
  </svg>
);

export const OneDriveIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18C20 14.6863 22.6863 12 26 12C28.7614 12 31.0736 13.8348 31.7656 16.3359C32.4921 15.4961 33.5564 14.9688 34.75 14.9688C36.8211 14.9688 38.5 16.6477 38.5 18.7188C38.5 18.9219 38.4844 19.1211 38.4551 19.3164C41.0879 19.7852 43 22.1094 43 24.875C43 28.0508 40.4844 30.625 37.375 30.625H14.125C10.4609 30.625 7.5 27.6641 7.5 24C7.5 20.7891 9.79688 18.125 12.8281 17.5625C13.2773 14.2539 16.1445 11.6875 19.625 11.6875C20.6367 11.6875 21.5938 11.9297 22.4414 12.3594" fill="#0364B8"/>
    <path d="M20 18C20 14.6863 22.6863 12 26 12C28.7614 12 31.0736 13.8348 31.7656 16.3359C34.9609 16.5234 37.5 19.1641 37.5 22.4063C37.5 25.8086 34.7461 28.5625 31.3438 28.5625H14.6563C11.5313 28.5625 9 26.0313 9 22.9063C9 20.0391 11.1406 17.6836 13.9063 17.3281C14.3516 14.3984 16.8945 12.125 20 12.125" fill="#0078D4"/>
    <path d="M29.5 22C29.5 18.6863 32.1863 16 35.5 16C38.5376 16 41.0469 18.2695 41.4375 21.1875C43.4844 21.6094 45 23.4531 45 25.625C45 28.1094 42.9844 30.125 40.5 30.125H22.75C19.8516 30.125 17.5 27.7734 17.5 24.875C17.5 22.2422 19.4531 20.0625 22 19.6406" fill="#1490DF"/>
  </svg>
);

export const OneNoteIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8H32V40H8V8Z" fill="#7719AA"/>
    <path d="M32 8H40V40H32V8Z" fill="#9332BF"/>
    <path d="M12 16H18L22 28L18 28V32H12V16Z" fill="white"/>
    <text x="15" y="28" fill="white" fontSize="14" fontWeight="bold">N</text>
  </svg>
);

export const StreamIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L42 24L6 36V12Z" fill="#BC1948"/>
    <path d="M18 18L42 24L18 30V18Z" fill="#E33D6F"/>
  </svg>
);

export const PowerAutomateIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16L24 8L40 16V32L24 40L8 32V16Z" fill="#0066FF"/>
    <path d="M24 8L40 16V32L24 24V8Z" fill="#00A4EF"/>
    <path d="M16 20L24 16L32 20L24 24L16 20Z" fill="white"/>
    <path d="M24 24V36L16 32V20L24 24Z" fill="#0066FF"/>
  </svg>
);

export const PowerAppsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16L24 8L40 16V32L24 40L8 32V16Z" fill="#742774"/>
    <path d="M24 8L40 16V32L24 24V8Z" fill="#AE4AE8"/>
    <circle cx="24" cy="24" r="6" fill="white"/>
  </svg>
);

export const FormsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="32" height="36" rx="2" fill="#077568"/>
    <rect x="14" y="14" width="20" height="4" fill="white"/>
    <rect x="14" y="22" width="20" height="4" fill="white"/>
    <rect x="14" y="30" width="12" height="4" fill="white"/>
  </svg>
);

export const CopilotIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="copilotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6264A7"/>
        <stop offset="33%" stopColor="#A06EAA"/>
        <stop offset="66%" stopColor="#E0A85A"/>
        <stop offset="100%" stopColor="#56A5EC"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#copilotGrad)"/>
    <path d="M16 20C16 18 18 16 20 16H28C30 16 32 18 32 20V28C32 30 30 32 28 32H20C18 32 16 30 16 28V20Z" fill="white" fillOpacity="0.9"/>
    <path d="M20 22H28M20 26H26" stroke="url(#copilotGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TodoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="4" fill="#3B82F6"/>
    <path d="M16 24L22 30L34 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlannerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="10" height="28" rx="2" fill="#31752F"/>
    <rect x="19" y="10" width="10" height="20" rx="2" fill="#3F8F3C"/>
    <rect x="32" y="10" width="10" height="12" rx="2" fill="#5DB75D"/>
  </svg>
);

export const OfficeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4L4 10V38L28 44V4Z" fill="#D35230"/>
    <path d="M28 4L44 8V40L28 44V4Z" fill="#FF6C40"/>
    <path d="M16 18L22 16V32L16 30V18Z" fill="white"/>
  </svg>
);

export const PowerBIIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="24" width="8" height="16" rx="1" fill="#F2C811"/>
    <rect x="20" y="16" width="8" height="24" rx="1" fill="#F2C811"/>
    <rect x="32" y="8" width="8" height="32" rx="1" fill="#F2C811"/>
  </svg>
);

export const IntuneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="6" width="24" height="36" rx="2" fill="#0078D4"/>
    <rect x="14" y="10" width="20" height="24" fill="white"/>
    <circle cx="24" cy="38" r="2" fill="white"/>
    <path d="M20 18L24 22L32 14" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AzureADIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" fill="#0078D4"/>
    <path d="M24 14L36 20V32L24 38L12 32V20L24 14Z" fill="white"/>
    <circle cx="24" cy="22" r="4" fill="#0078D4"/>
    <path d="M16 32C16 28 20 26 24 26C28 26 32 28 32 32" stroke="#0078D4" strokeWidth="2"/>
  </svg>
);

export const iconMap: Record<string, React.FC<IconProps>> = {
  'teams': TeamsIcon,
  'viva-engage': VivaEngageIcon,
  'outlook': OutlookIcon,
  'calendario': CalendarIcon,
  'loop': LoopIcon,
  'sharepoint': SharePointIcon,
  'onedrive': OneDriveIcon,
  'onenote': OneNoteIcon,
  'stream': StreamIcon,
  'power-automate': PowerAutomateIcon,
  'power-apps': PowerAppsIcon,
  'forms': FormsIcon,
  'copilot': CopilotIcon,
  'todo': TodoIcon,
  'planner': PlannerIcon,
  'ofimatica': OfficeIcon,
  'power-bi': PowerBIIcon,
  'intune': IntuneIcon,
  'azure-ad': AzureADIcon,
};
