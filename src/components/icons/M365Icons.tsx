import React from 'react';

interface IconProps {
  className?: string;
}

// Teams - Purple with T and people
export const TeamsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.5 19h7c1.1 0 2 .9 2 2v8c0 3.3-2.7 6-6 6h-1c-.3 0-.5-.2-.5-.5V21c0-1.1-.9-2-2-2z" fill="#5059C9" />
    <circle cx="37" cy="12" r="4" fill="#5059C9" />
    <path d="M29 18H13c-1.7 0-3 1.3-3 3v10c0 4.4 3.6 8 8 8h4c4.4 0 8-3.6 8-8V19c0-.6-.4-1-1-1z" fill="#7B83EB" />
    <circle cx="21" cy="11" r="5" fill="#7B83EB" />
    <path d="M16 25h10M16 29h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Viva Engage - Blue with Y
export const VivaEngageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" fill="#1063BE" />
    <path d="M14 14l10 14v8M24 28l10-14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Outlook - Blue with O
export const OutlookIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 14v20c0 2.2-1.8 4-4 4H20V10h20c2.2 0 4 1.8 4 4z" fill="#0A64A4" />
    <path d="M44 14l-12 9-12-9" stroke="#28A8EA" strokeWidth="2" fill="none" />
    <path d="M4 14c0-2.2 1.8-4 4-4h12v28H8c-2.2 0-4-1.8-4-4V14z" fill="#0078D4" />
    <ellipse cx="14" cy="24" rx="6" ry="8" stroke="white" strokeWidth="2.5" fill="none" />
  </svg>
);

// Calendar - Outlook Calendar style
export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="36" rx="2" fill="white" stroke="#0078D4" strokeWidth="2" />
    <rect x="4" y="8" width="40" height="12" fill="#0078D4" />
    <rect x="12" y="4" width="4" height="10" rx="2" fill="#0078D4" />
    <rect x="32" y="4" width="4" height="10" rx="2" fill="#0078D4" />
    <text x="24" y="36" textAnchor="middle" fill="#0078D4" fontSize="16" fontWeight="bold">O</text>
    <rect x="36" y="10" width="6" height="6" fill="white" />
    <rect x="36" y="14" width="6" height="4" fill="#28A8EA" />
  </svg>
);

// Loop - Purple swirl infinity
export const LoopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 14c-6-6-14-4-16 2s-2 14 6 16c8 2 14-4 14-12" stroke="#9B4DCA" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M12 34c6 6 14 4 16-2s2-14-6-16c-8-2-14 4-14 12" stroke="#C77DFF" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

// SharePoint - Teal overlapping circles with S
export const SharePointIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" fill="#036C70" />
    <circle cx="32" cy="24" r="11" fill="#1A9BA1" />
    <circle cx="24" cy="36" r="8" fill="#37C6D0" />
    <text x="18" y="23" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S</text>
  </svg>
);

// OneDrive - Blue clouds
export const OneDriveIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 33H11c-4 0-7-3-7-7 0-3.5 2.5-6.5 6-7 .5-4 4-7 8-7 2 0 3.8.7 5.2 1.8" fill="#0364B8" />
    <path d="M16 33c-3.5 0-6.5-2.8-6.5-6.3 0-3 2.3-5.5 5.2-6 .4-3.5 3.4-6.2 7-6.2 2.8 0 5.2 1.6 6.3 4" fill="#0078D4" />
    <path d="M28 19c.3 0 .5 0 .8-.1 4 .2 7.2 3.5 7.2 7.6 0 .5 0 .9-.1 1.3h2.6c2.8 0 5-2.2 5-5s-2.2-5-5-5h-.5c-.7-4-4.2-7-8.5-7-2.5 0-4.7 1-6.3 2.7" fill="#1490DF" />
    <path d="M28 19.5c4 .2 7 3.4 7 7.3 0 .4 0 .7-.1 1h3.6c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H38c-.5-3.8-3.8-6.8-7.8-6.8-2 0-3.8.7-5.2 2" fill="#28A8EA" />
  </svg>
);

// OneNote - Purple with N
export const OneNoteIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="24" height="36" rx="2" fill="#7719AA" />
    <rect x="30" y="10" width="12" height="28" rx="2" fill="#9332BF" />
    <rect x="32" y="14" width="8" height="1.5" fill="white" opacity="0.6" />
    <rect x="32" y="18" width="8" height="1.5" fill="white" opacity="0.6" />
    <rect x="32" y="22" width="8" height="1.5" fill="white" opacity="0.6" />
    <rect x="32" y="26" width="8" height="1.5" fill="white" opacity="0.6" />
    <text x="18" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">N</text>
  </svg>
);

// Stream - Red/Pink play button
export const StreamIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10v28l36-14L6 10z" fill="#BC1948" />
    <path d="M16 16v16l20-8-20-8z" fill="#E8467C" />
  </svg>
);

// Power Automate - Blue flowing shape
export const PowerAutomateIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14l16-8 16 8v20l-16 8-16-8V14z" fill="#0066FF" />
    <path d="M24 6l16 8v20l-16 8V6z" fill="#00A4EF" />
    <path d="M16 20l8-4 8 4-8 4-8-4z" fill="white" />
    <path d="M16 20v8l8 4v-8l-8-4z" fill="#0052CC" />
    <path d="M32 20v8l-8 4v-8l8-4z" fill="white" fillOpacity="0.7" />
  </svg>
);

// Power Apps - Purple hexagon with dots
export const PowerAppsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14l16-8 16 8v20l-16 8-16-8V14z" fill="#742774" />
    <path d="M24 6l16 8v20l-16 8V6z" fill="#AE4AE8" />
    <circle cx="18" cy="20" r="4" fill="white" />
    <circle cx="30" cy="20" r="4" fill="white" fillOpacity="0.7" />
    <circle cx="24" cy="30" r="4" fill="white" fillOpacity="0.5" />
  </svg>
);

// Forms - Green with F badge
export const FormsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="2" fill="#077568" />
    <rect x="14" y="14" width="20" height="3" rx="1" fill="white" />
    <rect x="14" y="22" width="14" height="3" rx="1" fill="white" />
    <rect x="14" y="30" width="18" height="3" rx="1" fill="white" />
  </svg>
);

// Power Platform - Purple/Blue Diamond
export const PowerPlatformIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L40 14V34L24 44L8 34V14L24 4Z" fill="#742774" />
    <path d="M24 4L40 14V34L24 44V4Z" fill="#AE4AE8" />
    <path d="M24 12L34 18V30L24 36L14 30V18L24 12Z" fill="white" fillOpacity="0.3" />
    <path d="M24 16L30 20V28L24 32L18 28V20L24 16Z" fill="white" />
  </svg>
);

// Copilot - Colorful gradient ring
export const CopilotIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="copilotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5AC8FA" />
        <stop offset="25%" stopColor="#9B59D0" />
        <stop offset="50%" stopColor="#E67E22" />
        <stop offset="75%" stopColor="#27AE60" />
        <stop offset="100%" stopColor="#5AC8FA" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="16" stroke="url(#copilotGrad1)" strokeWidth="6" fill="none" />
    <circle cx="24" cy="24" r="6" fill="url(#copilotGrad1)" />
  </svg>
);

// To Do - Blue checkmark arc
export const TodoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 24c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M12 26l8 8 18-18" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Planner - Green bars
export const PlannerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="12" width="10" height="28" rx="2" fill="#185A30" />
    <rect x="19" y="6" width="10" height="34" rx="2" fill="#31752F" />
    <rect x="32" y="18" width="10" height="22" rx="2" fill="#54B054" />
  </svg>
);

// Office/Ofimática - Orange O
export const OfficeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 4L6 10v28l20 6V4z" fill="#D35230" />
    <path d="M26 4l16 4v32l-16 4V4z" fill="#FF6A38" />
    <ellipse cx="18" cy="24" rx="6" ry="10" stroke="white" strokeWidth="2.5" fill="none" />
  </svg>
);

// Power BI - Yellow with bars
export const PowerBIIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#F2C811" />
    <rect x="12" y="26" width="6" height="12" rx="1" fill="white" />
    <rect x="21" y="18" width="6" height="20" rx="1" fill="white" />
    <rect x="30" y="10" width="6" height="28" rx="1" fill="white" />
  </svg>
);

// Intune - Device management
export const IntuneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="32" rx="2" fill="#6B7280" stroke="#4B5563" strokeWidth="1" />
    <rect x="10" y="8" width="16" height="22" fill="white" />
    <circle cx="18" cy="33" r="2" fill="white" />
    <rect x="24" y="20" width="18" height="22" rx="2" fill="#0078D4" />
    <rect x="26" y="24" width="14" height="14" fill="white" />
    <path d="M30 31l3 3 5-6" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Azure AD - Network nodes
export const AzureADIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="#0078D4" strokeWidth="2" fill="none" />
    <circle cx="24" cy="8" r="4" fill="#0078D4" />
    <circle cx="10" cy="34" r="4" fill="#0078D4" />
    <circle cx="38" cy="34" r="4" fill="#0078D4" />
    <line x1="24" y1="12" x2="24" y2="18" stroke="#0078D4" strokeWidth="2" />
    <line x1="12" y1="31" x2="18" y2="26" stroke="#0078D4" strokeWidth="2" />
    <line x1="36" y1="31" x2="30" y2="26" stroke="#0078D4" strokeWidth="2" />
    <circle cx="24" cy="22" r="4" fill="#0078D4" />
    <path d="M16 36c0-4 4-6 8-6s8 2 8 6" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" fill="none" />
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
  'power-platform': PowerPlatformIcon,
  'copilot': CopilotIcon,
  'todo': TodoIcon,
  'planner': PlannerIcon,
  'ofimatica': OfficeIcon,
  'power-bi': PowerBIIcon,
  'intune': IntuneIcon,
  'azure-ad': AzureADIcon,
};
