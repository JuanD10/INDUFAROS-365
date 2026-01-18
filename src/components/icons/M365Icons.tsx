import React from 'react';

interface IconProps {
  className?: string;
}

// Teams - Purple T with people icon
export const TeamsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.8 18.6h8.7c.8 0 1.5.7 1.5 1.5v9.3c0 3.1-2.5 5.6-5.6 5.6h-.9c-.2 0-.4-.2-.4-.4v-12c0-2.2-1.3-4-3.3-4z" fill="#5059C9"/>
    <circle cx="36" cy="13" r="3.5" fill="#5059C9"/>
    <path d="M28 17H12c-1.7 0-3 1.3-3 3v10c0 4.4 3.6 8 8 8h4c4.4 0 8-3.6 8-8V18c0-.6-.4-1-1-1z" fill="#7B83EB"/>
    <circle cx="20" cy="11" r="5" fill="#7B83EB"/>
    <rect x="16" y="23" width="8" height="2" rx="1" fill="white"/>
    <rect x="16" y="27" width="8" height="2" rx="1" fill="white"/>
  </svg>
);

// Viva Engage - Blue square with Y
export const VivaEngageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" fill="#106EBE"/>
    <path d="M14 14L24 26V34M24 26L34 14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Outlook - Blue O with envelope
export const OutlookIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 12v24c0 2.2-1.8 4-4 4H19V8h22c2.2 0 4 1.8 4 4z" fill="#0A64A4"/>
    <path d="M45 12l-13 10-13-10" stroke="#28A8EA" strokeWidth="2"/>
    <path d="M3 12c0-2.2 1.8-4 4-4h12v32H7c-2.2 0-4-1.8-4-4V12z" fill="#0078D4"/>
    <ellipse cx="13" cy="24" rx="6" ry="8" stroke="white" strokeWidth="3" fill="none"/>
  </svg>
);

// Calendar - Blue calendar with grid
export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="32" rx="2" fill="white" stroke="#0078D4" strokeWidth="2"/>
    <rect x="6" y="10" width="36" height="10" fill="#0078D4"/>
    <rect x="12" y="6" width="4" height="8" rx="1" fill="#0078D4"/>
    <rect x="32" y="6" width="4" height="8" rx="1" fill="#0078D4"/>
    <text x="24" y="34" textAnchor="middle" fill="#0078D4" fontSize="14" fontWeight="bold">O</text>
    <rect x="36" y="11" width="4" height="4" fill="white"/>
    <rect x="36" y="16" width="4" height="2" fill="#0A64A4"/>
  </svg>
);

// Loop - Purple swirl/infinity
export const LoopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 16c-5-8-16-8-20 0s-4 16 4 20c8 4 16-2 16-10" stroke="#9B4DCA" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M10 32c5 8 16 8 20 0s4-16-4-20c-8-4-16 2-16 10" stroke="#C77DFF" strokeWidth="5" strokeLinecap="round" fill="none"/>
  </svg>
);

// SharePoint - Teal circles with S
export const SharePointIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" fill="#036C70"/>
    <circle cx="32" cy="24" r="11" fill="#1A9BA1"/>
    <circle cx="24" cy="36" r="8" fill="#37C6D0"/>
    <text x="18" y="24" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">S</text>
  </svg>
);

// OneDrive - Blue clouds
export const OneDriveIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 34h-4.25C8.8 34 5 30.2 5 25.75c0-3.9 2.78-7.15 6.47-7.9.52-4.08 4.02-7.25 8.28-7.25 1.92 0 3.7.65 5.12 1.74" fill="#0364B8"/>
    <path d="M14.75 34c-3.45 0-6.25-2.8-6.25-6.25 0-3.13 2.3-5.72 5.3-6.17.42-3.45 3.35-6.13 6.95-6.13 2.8 0 5.22 1.63 6.37 3.99" fill="#0078D4"/>
    <path d="M26.25 18.5c.25-.03.5-.05.75-.05 4.56 0 8.25 3.69 8.25 8.25 0 .44-.04.87-.11 1.3h2.36c2.9 0 5.25 2.35 5.25 5.25S40.4 38.5 37.5 38.5H22.25c-3.45 0-6.25-2.8-6.25-6.25 0-3.33 2.6-6.05 5.88-6.23" fill="#1490DF"/>
    <path d="M27 18.45c3.87.23 6.97 3.37 7.15 7.26.02.35.03.7.01 1.04h3.34c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5H20.75c-3.04 0-5.5-2.46-5.5-5.5 0-2.93 2.29-5.32 5.18-5.49" fill="#28A8EA"/>
  </svg>
);

// OneNote - Purple N
export const OneNoteIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 8v32H8c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h20z" fill="#7719AA"/>
    <path d="M28 8h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H28V8z" fill="#9332BF"/>
    <rect x="32" y="12" width="8" height="2" fill="white" opacity="0.5"/>
    <rect x="32" y="18" width="8" height="2" fill="white" opacity="0.5"/>
    <rect x="32" y="24" width="8" height="2" fill="white" opacity="0.5"/>
    <rect x="6" y="8" width="22" height="32" fill="#7719AA"/>
    <text x="17" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">N</text>
  </svg>
);

// Stream - Red/Pink play arrow
export const StreamIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10v28l32-14L8 10z" fill="#BC1948"/>
    <path d="M20 16v16l16-8-16-8z" fill="#E33D6F"/>
  </svg>
);

// Power Automate - Blue flow arrows
export const PowerAutomateIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12l18-8 18 8v24l-18 8-6-2.67" fill="#0066FF"/>
    <path d="M24 4l18 8v24l-18 8V4z" fill="#00A4EF"/>
    <path d="M16 18l8-4 8 4-8 4-8-4z" fill="white"/>
    <path d="M16 18v8l8 4v-8l-8-4z" fill="#0052CC"/>
    <path d="M32 18v8l-8 4v-8l8-4z" fill="white" fillOpacity="0.6"/>
  </svg>
);

// Power Apps - Purple hexagon with circles
export const PowerAppsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12l18-8 18 8v24l-18 8-18-8V12z" fill="#742774"/>
    <path d="M24 4l18 8v24l-18 8V4z" fill="#AE4AE8"/>
    <circle cx="18" cy="20" r="5" fill="white"/>
    <circle cx="30" cy="20" r="5" fill="white" fillOpacity="0.7"/>
    <circle cx="24" cy="30" r="5" fill="white" fillOpacity="0.5"/>
  </svg>
);

// Forms - Green rectangle with F
export const FormsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="2" fill="#077568"/>
    <rect x="14" y="12" width="20" height="3" rx="1" fill="white"/>
    <rect x="14" y="20" width="14" height="3" rx="1" fill="white"/>
    <rect x="14" y="28" width="18" height="3" rx="1" fill="white"/>
    <text x="24" y="32" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" opacity="0">F</text>
  </svg>
);

// Copilot - Colorful gradient swirl
export const CopilotIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="copilotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#56A5EC"/>
        <stop offset="50%" stopColor="#9B59D0"/>
        <stop offset="100%" stopColor="#E67E22"/>
      </linearGradient>
      <linearGradient id="copilotGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#27AE60"/>
        <stop offset="50%" stopColor="#56A5EC"/>
        <stop offset="100%" stopColor="#9B59D0"/>
      </linearGradient>
    </defs>
    <path d="M24 8c-8.84 0-16 7.16-16 16s7.16 16 16 16c4.42 0 8.42-1.79 11.31-4.69" stroke="url(#copilotGrad1)" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M24 40c8.84 0 16-7.16 16-16S32.84 8 24 8c-4.42 0-8.42 1.79-11.31 4.69" stroke="url(#copilotGrad2)" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <circle cx="24" cy="24" r="6" fill="url(#copilotGrad1)"/>
  </svg>
);

// To Do - Blue checkmark
export const TodoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M12 28l8 8 16-18" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Planner - Green bars chart
export const PlannerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="12" width="10" height="28" rx="2" fill="#185A30"/>
    <rect x="19" y="8" width="10" height="32" rx="2" fill="#31752F"/>
    <rect x="32" y="18" width="10" height="22" rx="2" fill="#54B054"/>
  </svg>
);

// Ofimática (Office) - Orange/Red diamond
export const OfficeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 4L4 12v24l22 8V4z" fill="#D35230"/>
    <path d="M26 4l18 6v28l-18 6V4z" fill="#FF6C40"/>
    <ellipse cx="18" cy="24" rx="6" ry="10" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

// Power BI - Yellow bars
export const PowerBIIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#F2C811"/>
    <rect x="12" y="26" width="6" height="12" rx="1" fill="white"/>
    <rect x="21" y="18" width="6" height="20" rx="1" fill="white"/>
    <rect x="30" y="10" width="6" height="28" rx="1" fill="white"/>
  </svg>
);

// Intune - Device with check
export const IntuneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="18" height="30" rx="2" fill="#666" stroke="#444" strokeWidth="1"/>
    <rect x="12" y="8" width="14" height="20" fill="white"/>
    <circle cx="19" cy="31" r="1.5" fill="white"/>
    <rect x="24" y="20" width="16" height="20" rx="2" fill="#0078D4"/>
    <rect x="26" y="24" width="12" height="12" fill="white"/>
    <path d="M30 30l2 2 4-4" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Azure AD - Blue hexagon with person
export const AzureADIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="none" stroke="#0078D4" strokeWidth="2"/>
    <circle cx="24" cy="8" r="3" fill="#0078D4"/>
    <circle cx="10" cy="32" r="3" fill="#0078D4"/>
    <circle cx="38" cy="32" r="3" fill="#0078D4"/>
    <path d="M24 8v8M10 32l10-8M38 32l-10-8" stroke="#0078D4" strokeWidth="2"/>
    <circle cx="24" cy="20" r="4" fill="#0078D4"/>
    <path d="M16 34c0-4 4-6 8-6s8 2 8 6" stroke="#0078D4" strokeWidth="2" strokeLinecap="round"/>
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
