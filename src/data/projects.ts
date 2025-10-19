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
  videos?: string[]; // YouTube URLs or video file paths
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
    id: 'gamekraft-internal-event',
    title: 'Gameskraft - Internal Event',
    category: 'Video',
    tags: ['Corporate', 'Event', 'Aftermovie'],
    client: 'Gameskraft',
    year: '2023',
    duration: '1 Week',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/gamekraft/DSC00002.jpg',
    description: 'A large-scale corporate event coverage for a Guinness World Record attempt at their office in 2023.',
    challenge: 'Capturing a large-scale Guinness World Record event at Gameskraft\'s office in 2023, ensuring both coverage and quality under high-pressure circumstances.',
    solution: 'Handled photography and operated the second camera, balancing documentation of key moments with creative visual storytelling throughout the event.',
    results: 'The campaign resulted in a 150% increase in brand recognition and helped secure Series A funding.',
    gallery: [
      '/assets/photography/gamekraft/DSC00002.jpg',
      '/assets/photography/gamekraft/DSC00004.jpg',
      '/assets/photography/gamekraft/DSC00005.jpg',
      '/assets/photography/gamekraft/DSC00008.jpg',
      '/assets/photography/gamekraft/DSC00011.jpg',
      '/assets/photography/gamekraft/DSC00015.jpg',
      '/assets/photography/gamekraft/DSC00017.jpg',
      '/assets/photography/gamekraft/DSC00018.jpg',
      '/assets/photography/gamekraft/DSC00021.jpg',
      '/assets/photography/gamekraft/DSC00022.jpg',
      '/assets/photography/gamekraft/DSC00023.jpg',
      '/assets/photography/gamekraft/DSC00027.jpg',
      '/assets/photography/gamekraft/DSC00028.jpg',
      '/assets/photography/gamekraft/DSC00029.jpg',
      '/assets/photography/gamekraft/DSC00030.jpg',
      '/assets/photography/gamekraft/DSC00031.jpg',
      '/assets/photography/gamekraft/DSC00032.jpg',
      '/assets/photography/gamekraft/DSC00033.jpg',
      '/assets/photography/gamekraft/DSC02170.jpg',
      '/assets/photography/gamekraft/DSC02171.jpg',
      '/assets/photography/gamekraft/DSC02173.jpg',
      '/assets/photography/gamekraft/DSC02174.jpg',
      '/assets/photography/gamekraft/DSC02179.jpg',
      '/assets/photography/gamekraft/DSC02181.jpg',
      '/assets/photography/gamekraft/DSC02182.jpg',
      '/assets/photography/gamekraft/DSC02183.jpg',
      '/assets/photography/gamekraft/DSC02184.jpg',
      '/assets/photography/gamekraft/DSC02186.jpg',
      '/assets/photography/gamekraft/DSC02192.jpg',
      '/assets/photography/gamekraft/DSC02194.jpg',
      '/assets/photography/gamekraft/DSC02200.jpg',
      '/assets/photography/gamekraft/DSC02205.jpg',
      '/assets/photography/gamekraft/DSC02211.jpg',
      '/assets/photography/gamekraft/DSC02214.jpg',
      '/assets/photography/gamekraft/DSC02216.jpg',
      '/assets/photography/gamekraft/DSC02221.jpg',
      '/assets/photography/gamekraft/DSC02222.jpg',
      '/assets/photography/gamekraft/DSC09914.jpg',
      '/assets/photography/gamekraft/DSC09916.jpg',
      '/assets/photography/gamekraft/DSC09917.jpg',
      '/assets/photography/gamekraft/DSC09918.jpg',
      '/assets/photography/gamekraft/DSC09919.jpg',
      '/assets/photography/gamekraft/DSC09921.jpg',
      '/assets/photography/gamekraft/DSC09926.jpg',
      '/assets/photography/gamekraft/DSC09932.jpg',
      '/assets/photography/gamekraft/DSC09933.jpg',
      '/assets/photography/gamekraft/DSC09934.jpg',
      '/assets/photography/gamekraft/DSC09945.jpg',
      '/assets/photography/gamekraft/DSC09946.jpg',
      '/assets/photography/gamekraft/DSC09949.jpg',
      '/assets/photography/gamekraft/DSC09953.jpg',
      '/assets/photography/gamekraft/DSC09954.jpg',
      '/assets/photography/gamekraft/DSC09958.jpg',
      '/assets/photography/gamekraft/DSC09960.jpg',
      '/assets/photography/gamekraft/DSC09961.jpg',
      '/assets/photography/gamekraft/DSC09963.jpg',
      '/assets/photography/gamekraft/DSC09967.jpg',
      '/assets/photography/gamekraft/DSC09969.jpg',
      '/assets/photography/gamekraft/DSC09971.jpg',
      '/assets/photography/gamekraft/DSC09972.jpg',
      '/assets/photography/gamekraft/DSC09973.jpg',
      '/assets/photography/gamekraft/DSC09974.jpg',
      '/assets/photography/gamekraft/DSC09975.jpg',
      '/assets/photography/gamekraft/DSC09977.jpg',
      '/assets/photography/gamekraft/DSC09979.jpg',
      '/assets/photography/gamekraft/DSC09981.jpg',
      '/assets/photography/gamekraft/DSC09983.jpg',
      '/assets/photography/gamekraft/DSC09985.jpg',
      '/assets/photography/gamekraft/DSC09987.jpg',
      '/assets/photography/gamekraft/DSC09989.jpg',
      '/assets/photography/gamekraft/DSC09990.jpg',
      '/assets/photography/gamekraft/DSC09991.jpg',
      '/assets/photography/gamekraft/DSC09993.jpg',
      '/assets/photography/gamekraft/DSC09994.jpg',
      '/assets/photography/gamekraft/DSC09996.jpg',
      '/assets/photography/gamekraft/DSC09998.jpg'
    ],
    videos: [
      'https://youtu.be/-ZSgYzDfu4Y'
    ],
    testimonial: {
      text: "Grain Theory transformed our brand identity beyond our expectations. Their attention to detail and creative vision helped us stand out in a crowded market.",
      author: "Sarah Chen",
      position: "CEO, TechFlow"
    },
    featured: false
  },
  {
    id: 'marriott-social-campaign',
    title: 'Marriott Social Media Campaign',
    category: 'Photography',
    tags: ['Food Photography', 'Architecture', 'Ambience', 'Social Media'],
    client: 'Marriott',
    year: '2021-2022',
    duration: '1 Day',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/marriot/1-11.jpg',
    description: 'A social media content shoot, designed to highlight Marriott\'s property through clean and versatile imagery that could serve both internal and external needs.',
    challenge: 'Marriott required a set of visuals that were simple yet polished, capturing their property in a way that could serve both internal use and social media content. The brief emphasized clarity and neat presentation over heavy styling.',
    solution: 'I executed a basic content shoot, focusing on the property\'s ambience, layout, and key details. The approach ensured the visuals looked natural and versatile.',
    results: 'Delivered a refined set of visuals that captured the ambience, layout, and details of the property. The images provided Marriott with adaptable assets for internal communications and polished content for their social media presence.',
    gallery: [
      '/assets/photography/marriot/1-11.jpg',
      '/assets/photography/marriot/1-16.jpg',
      '/assets/photography/marriot/1-2.jpg',
      '/assets/photography/marriot/1-21.jpg',
      '/assets/photography/marriot/1-29.jpg',
      '/assets/photography/marriot/1-31.jpg',
      '/assets/photography/marriot/1-32.jpg'
    ],
    featured: false
  },
  {
    id: 'hyatt-social-campaign',
    title: 'Hyatt Social Media Campaign',
    category: 'Photography',
    tags: ['Architecture', 'Ambience'],
    client: 'Hyatt',
    year: '2022',
    duration: '1 Day',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/hyatt/Room 1.jpg',
    description: 'A clean, basic shoot capturing Hyatt\'s new room spaces in a natural and polished style.',
    challenge: 'Hyatt needed to highlight their newly launched room spaces. The brief was to keep it simple and straightforward, avoiding over-stylization while still ensuring the visuals looked inviting and professional.',
    solution: 'I executed a basic property shoot that focused on clarity and neat presentation. The images captured the rooms in natural light, showcasing their comfort, layout, and design details in a way that felt authentic.',
    results: 'Delivered a set of clean and polished visuals that aligned perfectly with Hyatt\'s brief. The imagery highlighted the new room spaces with authenticity and elegance, providing the brand with ready to use assets for their social media campaign and strengthening their online presence.',
    gallery: [
      '/assets/photography/hyatt/Room 1.jpg',
      '/assets/photography/hyatt/Room 2.jpg',
      '/assets/photography/hyatt/Room 3.jpg',
      '/assets/photography/hyatt/Room 4.jpg'
    ],
    featured: true
  },
  {
    id: 'wild-origin-launch',
    title: 'Wild Origin Launch Shoot',
    category: 'Photography',
    tags: ['Architecture', 'Ambience', 'Launch Shoot'],
    client: 'Wild Origin',
    year: '2025',
    duration: '5 Days',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/wildorigin/PAT07153.jpg',
    description: 'A launch media kit shoot for Wild Origin, capturing interiors and staycation visuals in bulk as a one-year content resource.',
    challenge: 'Wild Origin needed a comprehensive set of visuals for their launch media kit. The requirement was to cover both interiors and lifestyle imagery, with enough content to sustain their brand presence for a year.',
    solution: 'We executed an extensive shoot capturing interiors, staycation experiences, and property highlights. Both images and videos were produced in bulk, designed to serve as a one-year resource library for marketing and social media.',
    results: 'Delivered a complete bank of interiors, lifestyle, and staycation visuals packaged as a one-year media kit. While the brand is yet to launch, the content stands ready as a strong foundation for their marketing and social presence once they go live.',
    gallery: [
      '/assets/photography/wildorigin/PAT07153.jpg',
      '/assets/photography/wildorigin/PAT07363-HDR.jpg',
      '/assets/photography/wildorigin/PAT07466-HDR.jpg',
      '/assets/photography/wildorigin/PAT07469-HDR.jpg',
      '/assets/photography/wildorigin/PAT07614-HDR.jpg',
      '/assets/photography/wildorigin/PAT07720-HDR.jpg',
      '/assets/photography/wildorigin/PAT07879.jpg',
      '/assets/photography/wildorigin/PAT07891.jpg',
      '/assets/photography/wildorigin/PAT07960-HDR.jpg',
      '/assets/photography/wildorigin/PAT08009-HDR.jpg',
      '/assets/photography/wildorigin/arch2.jpg',
      '/assets/photography/wildorigin/arch3.jpg'
    ],
    projectUrl: 'https://wildorigin.co.in/',
    featured: true
  },
  {
    id: 'big-bang',
    title: 'Big Bang Launch Shoot',
    category: 'Photography',
    tags: ['Architecture', 'Interior', 'Exterior'],
    client: 'Big Bang',
    year: '2021',
    duration: '1 week',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/bigbang/Ambience-1.jpg',
    description: 'Comprehensive video documentation of a major industry conference, capturing keynotes, panels, and networking events.',
    challenge: 'Though the property wasn\'t fully ready, the client wanted to highlight the best of what they had to offer.',
    solution: 'Our team stepped in to style and arrange the space, ensuring every frame reflected the right vibe. With careful planning and creative adjustments, we captured visuals that showcased the property\'s potential while keeping it launch-ready for their audience.',
    results: 'We supported the client with the right content and creative direction, giving them a strong initial push to attract and engage their crowd.',
    gallery: [
      '/assets/photography/bigbang/Ambience-1.jpg',
      '/assets/photography/bigbang/Ambience-2.jpg',
      '/assets/photography/bigbang/Ambience-3.jpg',
      '/assets/photography/bigbang/Ambience-4.jpg',
      '/assets/photography/bigbang/Ambience-5.jpg',
      '/assets/photography/bigbang/Ambience-6.jpg',
      '/assets/photography/bigbang/Ambience-7.jpg'
    ],
    featured: true
  }
];

export const categories = ['All', 'Photography', 'Video'];

export const tags = [
  'Corporate', 'Event', 'Aftermovie', 'Architecture', 'Ambience', 
  'Launch Shoot', 'Food Photography', 'Social Media', 'Interior', 'Exterior'
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
