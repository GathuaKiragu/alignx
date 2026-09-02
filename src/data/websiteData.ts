export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  subfeatures: string[];
  iconName: 'strategy' | 'pmo' | 'digital' | 'automation' | 'hr' | 'operations' | 'proptech';
}

export interface StatItem {
  value: string;
  label: string;
  iconName: 'network' | 'chart' | 'globe' | 'trophy';
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  iconName: 'discover' | 'design' | 'build' | 'implement' | 'optimise';
}

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    title: 'Strategy Execution & Transformation',
    description: 'Strategy-to-execution roadmaps, transformation programmes, operating-model improvement, and executive governance.',
    subfeatures: ['Transformation Programmes', 'Operating Model Improvement', 'Executive Governance'],
    iconName: 'strategy'
  },
  {
    id: '02',
    title: 'Project, Programme & PMO Services',
    description: 'Project & programme leadership, PMO setup, delivery planning, risk management, and executive dashboards.',
    subfeatures: ['PMO Setup & Leadership', 'Risk & Dependency Management', 'Vendor Coordination'],
    iconName: 'pmo'
  },
  {
    id: '03',
    title: 'Digital Transformation & Platforms',
    description: 'Corporate and commercial websites, property platforms, CRM/ERP implementation, portals, and workflow digitisation.',
    subfeatures: ['Commercial Platforms', 'CRM / ERP Integration', 'Management Reporting'],
    iconName: 'digital'
  },
  {
    id: '04',
    title: 'Process Digitisation & Automation',
    description: 'Process redesign, automated approvals, notifications, payment & collection workflows, and systems integration.',
    subfeatures: ['Workflow Automation', 'Collections & Invoicing', 'Systems Integration'],
    iconName: 'automation'
  },
  {
    id: '05',
    title: 'Human Resources & Resource Solutions',
    description: 'Organisation and role design, talent sourcing, recruitment support, supervision, performance and workforce planning.',
    subfeatures: ['Recruitment Support', 'Performance Management', 'Specialist Sourcing'],
    iconName: 'hr'
  },
  {
    id: '06',
    title: 'Managed Operations & Business Support',
    description: 'Operational oversight, KPI management, finance/bookkeeping coordination, vendor management, and continuous improvement.',
    subfeatures: ['Operational Oversight', 'KPI & Finance Coordination', 'Process Control'],
    iconName: 'operations'
  },
  {
    id: '07',
    title: 'Property Technology & Site Builds',
    description: 'Turnkey padel club construction & activation, digital listings, tenant & lease management, and landlord dashboards.',
    subfeatures: ['Padel Club Turnkey Builds', 'Lease & Tenant Management', 'Occupancy Dashboards'],
    iconName: 'proptech'
  }
];

export const statsData: StatItem[] = [
  {
    value: '90+',
    label: 'Projects\nDelivered',
    iconName: 'network'
  },
  {
    value: '98%',
    label: 'Client\nSatisfaction',
    iconName: 'chart'
  },
  {
    value: '10+',
    label: 'Industries\nServed',
    iconName: 'globe'
  },
  {
    value: '25+',
    label: 'Years of\nExperience',
    iconName: 'trophy'
  }
];

export const processStepsData: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the objective, pain points, stakeholders, processes, data and constraints.',
    iconName: 'discover'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Define the target solution, priorities, operating model and implementation roadmap.',
    iconName: 'design'
  },
  {
    step: '03',
    title: 'Build',
    description: 'Configure, develop, source resources and establish the workflows required to deliver.',
    iconName: 'build'
  },
  {
    step: '04',
    title: 'Implement',
    description: 'Deploy, migrate, train, communicate and transition the solution into live operations.',
    iconName: 'implement'
  },
  {
    step: '05',
    title: 'Operate & Optimise',
    description: 'Track performance, manage issues and continuously improve operational outcomes.',
    iconName: 'optimise'
  }
];

export const valuesList = [
  'EXECUTION',
  'EXCELLENCE',
  'ACCOUNTABILITY',
  'PARTNERSHIP',
  'INNOVATION',
  'INTEGRITY'
];

export const navLinks = [
  { label: 'Home', href: '#hero', active: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Delivery Model', href: '#approach' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
];
