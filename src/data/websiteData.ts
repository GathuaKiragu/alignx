export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'projects' | 'hr' | 'site' | 'digitisation' | 'automation' | 'professional';
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
  iconName: 'discover' | 'design' | 'execute' | 'measure' | 'transform';
}

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    title: 'Projects',
    description: 'End-to-end project delivery that turns plans into tangible results.',
    iconName: 'projects'
  },
  {
    id: '02',
    title: 'Human Resources',
    description: 'Talent solutions that empower people and drive performance.',
    iconName: 'hr'
  },
  {
    id: '03',
    title: 'Site Builds',
    description: 'Design, build, and deliver spaces that create lasting impact.',
    iconName: 'site'
  },
  {
    id: '04',
    title: 'Digitisation',
    description: 'Smart digital solutions that streamline operations and unlock value.',
    iconName: 'digitisation'
  },
  {
    id: '05',
    title: 'Automation',
    description: 'Intelligent automation that increases efficiency and scales growth.',
    iconName: 'automation'
  },
  {
    id: '06',
    title: 'Professional Services',
    description: 'Expert advisory and support for sustainable business excellence.',
    iconName: 'professional'
  }
];

export const statsData: StatItem[] = [
  {
    value: '100+',
    label: 'Projects\nDelivered',
    iconName: 'network'
  },
  {
    value: '98%',
    label: 'Client Satisfaction\nRate',
    iconName: 'chart'
  },
  {
    value: '15+',
    label: 'Industries\nServed',
    iconName: 'globe'
  },
  {
    value: '10+',
    label: 'Years of\nExcellence',
    iconName: 'trophy'
  }
];

export const processStepsData: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We understand your vision, challenges, and objectives.',
    iconName: 'discover'
  },
  {
    step: '02',
    title: 'Design',
    description: 'We craft tailored strategies and solutions.',
    iconName: 'design'
  },
  {
    step: '03',
    title: 'Execute',
    description: 'We deliver with precision, transparency, and agility.',
    iconName: 'execute'
  },
  {
    step: '04',
    title: 'Measure',
    description: 'We track performance and ensure measurable impact.',
    iconName: 'measure'
  },
  {
    step: '05',
    title: 'Transform',
    description: 'We sustain growth and drive long-term success.',
    iconName: 'transform'
  }
];

export const navLinks = [
  { label: 'Home', href: '#hero', active: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Projects', href: '#services' },
  { label: 'Industries', href: '#about' },
  { label: 'Insights', href: '#approach' },
];
