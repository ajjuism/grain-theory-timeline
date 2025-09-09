export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  client: string;
  year: string;
  duration?: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  isVideo: boolean;
  imageUrl: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  gallery?: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  projectUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'brand-identity-campaign',
    title: 'Brand Identity Campaign',
    category: 'Photography',
    tags: ['Brand Identity', 'Commercial', 'Startup'],
    client: 'Tech Startup',
    year: '2024',
    duration: '3 months',
    status: 'completed',
    isVideo: false,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
    description: 'A comprehensive brand identity campaign for an emerging tech startup, focusing on modern aesthetics and innovative visual storytelling.',
    challenge: 'The client needed to establish a strong visual identity that would resonate with both investors and customers in a competitive tech market.',
    solution: 'We developed a cohesive brand identity system with contemporary photography that showcased the company\'s innovation and reliability.',
    results: 'The campaign resulted in a 150% increase in brand recognition and helped secure Series A funding.',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
    ],
    testimonial: {
      text: "Grain Theory transformed our brand identity beyond our expectations. Their attention to detail and creative vision helped us stand out in a crowded market.",
      author: "Sarah Chen",
      position: "CEO, TechFlow"
    },
    featured: true
  },
  {
    id: 'corporate-documentary',
    title: 'Corporate Documentary',
    category: 'Video',
    tags: ['Documentary', 'Corporate', 'Storytelling'],
    client: 'Fortune 500',
    year: '2024',
    duration: '6 months',
    status: 'completed',
    isVideo: true,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
    description: 'An in-depth documentary showcasing the evolution and impact of a Fortune 500 company over five decades.',
    challenge: 'Creating a compelling narrative that honored the company\'s legacy while showcasing its future vision.',
    solution: 'We crafted a documentary that balanced historical footage with contemporary interviews and cutting-edge cinematography.',
    results: 'The documentary was featured at three film festivals and is now used as the primary recruitment tool.',
    gallery: [
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
    ],
    testimonial: {
      text: "The documentary captured our company's essence perfectly. It's become an invaluable asset for our organization.",
      author: "Michael Rodriguez",
      position: "Chief Marketing Officer"
    },
    featured: true
  },
  {
    id: 'product-launch-series',
    title: 'Product Launch Series',
    category: 'Photography',
    tags: ['Product Photography', 'E-commerce', 'Brand'],
    client: 'Consumer Brand',
    year: '2023',
    duration: '2 months',
    status: 'completed',
    isVideo: false,
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
    description: 'A comprehensive product photography series for a major consumer brand\'s new product line launch.',
    challenge: 'Capturing the essence of 50+ products while maintaining brand consistency and visual appeal.',
    solution: 'We developed a systematic approach with consistent lighting and styling that highlighted each product\'s unique features.',
    results: 'The product launch exceeded sales targets by 40% and the imagery is still being used across all marketing channels.',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
    ],
    featured: false
  },
  {
    id: 'executive-profiles',
    title: 'Executive Profiles',
    category: 'Photography',
    tags: ['Portrait', 'Corporate', 'Executive'],
    client: 'Investment Firm',
    year: '2024',
    duration: '1 month',
    status: 'completed',
    isVideo: false,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
    description: 'Professional executive portraits for a prestigious investment firm\'s leadership team.',
    challenge: 'Creating authoritative yet approachable portraits that reflect the firm\'s values and professionalism.',
    solution: 'We used controlled lighting and contemporary styling to create portraits that convey both competence and accessibility.',
    results: 'The portraits are now featured prominently on the firm\'s website and have improved their professional image significantly.',
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
    ],
    featured: false
  },
  {
    id: 'brand-story-film',
    title: 'Brand Story Film',
    category: 'Video',
    tags: ['Brand Story', 'Luxury', 'Cinematography'],
    client: 'Luxury Goods',
    year: '2023',
    duration: '4 months',
    status: 'completed',
    isVideo: true,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
    description: 'An elegant brand story film for a luxury goods company, showcasing their craftsmanship and heritage.',
    challenge: 'Communicating the brand\'s premium positioning and artisanal quality through visual storytelling.',
    solution: 'We created a cinematic experience that highlighted the meticulous craftsmanship and attention to detail.',
    results: 'The film generated 2M+ views across social platforms and elevated the brand\'s market positioning.',
    gallery: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
    ],
    testimonial: {
      text: "The film perfectly captures the soul of our brand. It's a masterpiece that continues to drive engagement and sales.",
      author: "Isabella Martinez",
      position: "Brand Director"
    },
    featured: true
  },
  {
    id: 'event-documentation',
    title: 'Event Documentation',
    category: 'Video',
    tags: ['Event', 'Conference', 'Live Coverage'],
    client: 'Conference',
    year: '2024',
    duration: '1 week',
    status: 'completed',
    isVideo: true,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
    description: 'Comprehensive video documentation of a major industry conference, capturing keynotes, panels, and networking events.',
    challenge: 'Covering multiple simultaneous events while maintaining high production quality throughout.',
    solution: 'We deployed a multi-camera setup with dedicated teams for different event areas to ensure complete coverage.',
    results: 'The documentation package helped increase next year\'s conference attendance by 60% and provided valuable content for sponsors.',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
    ],
    featured: false
  }
];

export const categories = ['All', 'Photography', 'Video'];

export const tags = [
  'Brand Identity', 'Commercial', 'Startup', 'Documentary', 'Corporate', 
  'Storytelling', 'Product Photography', 'E-commerce', 'Brand', 'Portrait', 
  'Executive', 'Brand Story', 'Luxury', 'Cinematography', 'Event', 
  'Conference', 'Live Coverage'
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project => project.tags.includes(tag));
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
