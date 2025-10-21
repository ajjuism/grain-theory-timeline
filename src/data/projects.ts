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
      '/assets/photography/gamekraft/DSC02171.jpg'
    ],
    videos: [
      'https://youtu.be/-ZSgYzDfu4Y'
    ],
    testimonial: {
      text: "Grain Theory transformed our brand identity beyond our expectations. Their attention to detail and creative vision helped us stand out in a crowded market.",
      author: "Sarah Chen",
      position: "CEO, TechFlow"
    },
    featured: true
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
    featured: false
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
  },
  {
    id: 'cult-april-fools-campaign',
    title: 'Cult April Fools Campaign',
    category: 'Photography',
    tags: ['Campaign', 'Social Media', 'Brand Engagement'],
    client: 'Cult',
    year: '2024',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/cultaprilfools/DSC05301.jpg',
    description: 'A campaign shoot, created for Cult\'s April Fool\'s campaign in March 2024, blending humor and brand engagement.',
    challenge: 'Cult needed quirky visuals to complement their April Fool\'s video campaign, ensuring photography matched the fun and viral nature of the concept.',
    solution: 'Handled photography for the project, capturing visuals that aligned with the playful campaign tone. Shot on location in Bangalore to maintain authenticity.',
    results: 'The campaign video generated high views, shares, and free press coverage. The photography supported the campaign\'s success, boosting reach and reinforcing Cult\'s fun brand identity.',
    gallery: [
      '/assets/photography/cultaprilfools/DSC05301.jpg',
      '/assets/photography/cultaprilfools/DSC05229.jpg',
      '/assets/photography/cultaprilfools/DSC05185.jpg',
      '/assets/photography/cultaprilfools/DSC05008.jpg',
      '/assets/photography/cultaprilfools/DSC04951.jpg',
      '/assets/photography/cultaprilfools/DSC04801.jpg',
      '/assets/photography/cultaprilfools/DSC04782.jpg',
      '/assets/photography/cultaprilfools/DSC04690.jpg'
    ],
    featured: false
  },
  {
    id: 'lalit-staycation-shoot',
    title: 'The Lalit Lifestyle Staycation Shoot',
    category: 'Photography',
    tags: ['Lifestyle', 'Hospitality', 'Social Media', 'Inclusivity'],
    client: 'The Lalit',
    year: '2023',
    duration: '2 Days',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/lalit/day(2)-12.jpg',
    description: 'A lifestyle staycation shoot, highlighting hospitality experiences with an inclusive narrative supporting LGBTQ representation.',
    challenge: 'The Lalit Hotel required a visual story around their staycation offerings, capturing multiple amenities while reflecting the brand\'s inclusivity and unique ownership identity.',
    solution: 'Executed a two-day shoot with two female models, covering diverse experiences including bed & breakfast, massage, gym, and curated picnic arrangements, all with a lifestyle-driven approach.',
    results: 'Delivered a comprehensive portfolio of staycation imagery that showcased the hotel\'s hospitality, inclusivity, and guest experience strengthening its positioning as a welcoming luxury destination.',
    gallery: [
      '/assets/photography/lalit/day(1)-11.jpg',
      '/assets/photography/lalit/day(1)-14.jpg',
      '/assets/photography/lalit/day(1)-17.jpg',
      '/assets/photography/lalit/day(1)-19.jpg',
      '/assets/photography/lalit/day(1)-2.jpg',
      '/assets/photography/lalit/day(1)-26.jpg',
      '/assets/photography/lalit/day(1)-28.jpg',
      '/assets/photography/lalit/day(1)-4.jpg',
      '/assets/photography/lalit/day(1)-9.jpg',
      '/assets/photography/lalit/day(2)-10.jpg',
      '/assets/photography/lalit/day(2)-12.jpg',
      '/assets/photography/lalit/day(2)-13.jpg',
      '/assets/photography/lalit/day(2)-15.jpg',
      '/assets/photography/lalit/day(2)-19.jpg',
      '/assets/photography/lalit/day(2)-25.jpg',
      '/assets/photography/lalit/day(2)-28.jpg',
      '/assets/photography/lalit/day(2)-34.jpg',
      '/assets/photography/lalit/day(3)-5.jpg',
      '/assets/photography/lalit/day(3)-8.jpg',
      '/assets/photography/lalit/day(3)-9.jpg'
    ],
    projectUrl: 'https://www.thelalit.com/the-lalit-bangalore/',
    featured: true
  },
  {
    id: 'liquid-design-corporate-event',
    title: 'Liquid Design Internal Corporate Event',
    category: 'Photography',
    tags: ['Corporate', 'Event', 'Internal Event', 'Family', 'Employee Recognition'],
    client: 'Liquid Design',
    year: '2025',
    duration: '2 Days',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/liquiddesign/PAT00253.jpg',
    description: 'An internal corporate event shoot, capturing a family-oriented celebration honoring employees and their families.',
    challenge: 'Liquid Design wanted to document a warm, intimate evening that highlighted employee recognition and family participation, ensuring the images conveyed genuine emotions and togetherness.',
    solution: 'Shot and edited the event to focus on candid, heartfelt moments, capturing both employee interactions and family presence to reflect a sense of community and appreciation.',
    results: 'Delivered a collection of authentic and emotive images that celebrated the employees, showcased the company\'s family-friendly culture, and provided memorable keepsakes of the event.',
    gallery: [
      '/assets/photography/liquiddesign/PAT00253.jpg',
      '/assets/photography/liquiddesign/PAT00265.jpg',
      '/assets/photography/liquiddesign/PAT00274.jpg',
      '/assets/photography/liquiddesign/PAT00280.jpg',
      '/assets/photography/liquiddesign/PAT00310.jpg',
      '/assets/photography/liquiddesign/PAT00317.jpg',
      '/assets/photography/liquiddesign/PAT00318.jpg',
      '/assets/photography/liquiddesign/PAT00334.jpg',
      '/assets/photography/liquiddesign/PAT00344.jpg',
      '/assets/photography/liquiddesign/PAT00356.jpg',
      '/assets/photography/liquiddesign/PAT00374.jpg',
      '/assets/photography/liquiddesign/PAT00384.jpg',
      '/assets/photography/liquiddesign/PAT00394.jpg',
      '/assets/photography/liquiddesign/PAT00435.jpg',
      '/assets/photography/liquiddesign/PAT00449.jpg',
      '/assets/photography/liquiddesign/PAT00535.jpg',
      '/assets/photography/liquiddesign/PAT00567.jpg',
      '/assets/photography/liquiddesign/PAT00602.jpg',
      '/assets/photography/liquiddesign/PAT00626.jpg'
    ],
    projectUrl: 'https://www.liquidink.design/',
    featured: false
  },
  {
    id: 'redseer-internal-event',
    title: 'Redseer Internal Event Shoot',
    category: 'Video',
    tags: ['Corporate', 'Event', 'Aftermovie', 'Internal Event'],
    client: 'Redseer',
    year: '2025',
    duration: '3 Days',
    status: 'completed',
    isVideo: true,
    imageUrl: '/assets/photography/redsheer/DSC07699.jpg',
    description: 'An internal corporate event shoot, focused on employee culture and visiting delegates, created for both internal use and LinkedIn presence.',
    challenge: 'Redseer hosted an internal event in 2025 with a mix of employees and foreign delegates, seeking coverage that reflected both the atmosphere of their workplace and the emotions of their people.',
    solution: 'Handled photography and videography of the event, focusing on candid employee interactions, office environment, and delegate presence to balance internal needs with LinkedIn-ready visuals.',
    results: 'Delivered a versatile set of visuals that highlighted Redseer\'s workplace culture, successfully serving both internal documentation and external branding.',
    gallery: [
      '/assets/photography/redsheer/DSC07699.jpg',
      '/assets/photography/redsheer/DSC07728.jpg',
      '/assets/photography/redsheer/DSC07734.jpg',
      '/assets/photography/redsheer/DSC07738.jpg',
      '/assets/photography/redsheer/DSC07744.jpg',
      '/assets/photography/redsheer/DSC07763.jpg',
      '/assets/photography/redsheer/DSC07781.jpg',
      '/assets/photography/redsheer/DSC07785.jpg',
      '/assets/photography/redsheer/DSC07787.jpg',
      '/assets/photography/redsheer/DSC07789.jpg',
      '/assets/photography/redsheer/DSC07815.jpg',
      '/assets/photography/redsheer/DSC07828.jpg',
      '/assets/photography/redsheer/DSC07881.jpg',
      '/assets/photography/redsheer/DSC07886.jpg',
      '/assets/photography/redsheer/DSC07932.jpg',
      '/assets/photography/redsheer/DSC07947.jpg',
      '/assets/photography/redsheer/DSC07970.jpg',
      '/assets/photography/redsheer/DSC08060.jpg',
      '/assets/photography/redsheer/DSC08451.jpg',
      '/assets/photography/redsheer/DSC08469.jpg'
    ],
    videos: [
      'https://youtu.be/A1W3AcYW1cE'
    ],
    projectUrl: 'https://redseer.com/',
    featured: true
  },
  {
    id: 'weaverstores-collection-launch',
    title: 'Weaverstores New Collection Launch',
    category: 'Photography',
    tags: ['Product Photography', 'Collection Launch', 'Social Media', 'E-commerce'],
    client: 'Weaverstores',
    year: '2024',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/weaver/DSC00115.jpg',
    description: 'A product photography shoot for Weaverstores\' new collection launch, creating versatile imagery for promotions, website, and social media.',
    challenge: 'Weaverstores needed high-quality product imagery for their new collection launch that would work across multiple platforms including their website, social media, and promotional materials.',
    solution: 'Executed a comprehensive product photography shoot in Payyanur, Kerala, capturing the collection with attention to detail and versatility for various marketing applications.',
    results: 'Delivered a complete set of product images that successfully supported the new collection launch across all digital platforms, enhancing the brand\'s online presence and promotional efforts.',
    gallery: [
      '/assets/photography/weaver/DSC00115.jpg',
      '/assets/photography/weaver/DSC00134.jpg',
      '/assets/photography/weaver/DSC00168.jpg',
      '/assets/photography/weaver/DSC00232.jpg',
      '/assets/photography/weaver/DSC00289.jpg',
      '/assets/photography/weaver/DSC00329.jpg',
      '/assets/photography/weaver/DSC00335.jpg',
      '/assets/photography/weaver/DSC00622.jpg',
      '/assets/photography/weaver/DSC00649.jpg',
      '/assets/photography/weaver/DSC00760.jpg',
      '/assets/photography/weaver/DSC00770.jpg',
      '/assets/photography/weaver/DSC00927.jpg',
      '/assets/photography/weaver/DSC09236.jpg',
      '/assets/photography/weaver/DSC09243.jpg',
      '/assets/photography/weaver/DSC09795.jpg'
    ],
    projectUrl: 'https://weaversstores.com/',
    featured: true
  },
  {
    id: 'bigj-launch-campaign',
    title: 'Big J\'s Launch Campaign',
    category: 'Photography',
    tags: ['Campaign', 'Food Photography', 'Launch Shoot'],
    client: 'Big J\'s',
    year: '2021',
    duration: '1 Day',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/bigj/BigJ-19.jpg',
    description: 'A launch campaign shoot, focused on creating a small but impactful set of images for immediate promotional use.',
    challenge: 'Big J\'s required quick turn around visuals to support their brand launch, with the goal of kick-starting promotions and establishing an initial presence.',
    solution: 'Executed a concise shoot that delivered polished imagery tailored for their launch campaign, ensuring the content aligned with their brand identity and marketing needs.',
    results: 'Provided a ready-to-use set of launch visuals that helped Big J\'s begin promotions smoothly, giving them a professional foundation for their early marketing efforts.',
    gallery: [
      '/assets/photography/bigj/BigJ-19.jpg',
      '/assets/photography/bigj/BigJ-23.jpg',
      '/assets/photography/bigj/BigJ-25.jpg',
      '/assets/photography/bigj/BigJ-8.jpg'
    ],
    featured: false
  },
  {
    id: 'watsons-food-photography',
    title: 'Watson\'s Food Photography Shoot',
    category: 'Photography',
    tags: ['Food Photography', 'Social Media'],
    client: 'Watson\'s',
    year: '2022',
    duration: '2 Days',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/watsons/AW-12.jpg',
    description: 'A food photography shoot, created to generate fresh content for Watson\'s social media promotions.',
    challenge: 'Watson\'s needed appetizing, social-media-ready visuals of their dishes that stayed true to their natural plating while still looking polished and engaging.',
    solution: 'Executed a focused food shoot highlighting their signature dishes with clean composition and natural styling, ensuring the imagery aligned with their brand\'s casual-yet-inviting vibe.',
    results: 'Delivered a set of high-quality food visuals that elevated Watson\'s social media presence, providing them with content designed to boost engagement and attract customers online.',
    gallery: [
      '/assets/photography/watsons/AW-12.jpg',
      '/assets/photography/watsons/AW-5.jpg',
      '/assets/photography/watsons/AW-7.jpg',
      '/assets/photography/watsons/AW-9.jpg',
      '/assets/photography/watsons/AW.jpg',
      '/assets/photography/watsons/AW(1)-12.jpg',
      '/assets/photography/watsons/AW(1)-13.jpg',
      '/assets/photography/watsons/AW(1)-2.jpg',
      '/assets/photography/watsons/AW(1)-6.jpg'
    ],
    featured: true
  },
  {
    id: 'cafe-reset-food-photography',
    title: 'Cafe Reset Food Photography',
    category: 'Photography',
    tags: ['Food Photography', 'Restaurant'],
    client: 'Cafe Reset',
    year: '2025',
    duration: '2 Days',
    status: 'completed',
    isVideo: false,
    imageUrl: '/assets/photography/reset/PAT09871.jpg',
    description: 'A food photography shoot created specifically to meet Zomato\'s listing requirements while maintaining authenticity in presentation.',
    challenge: 'Cafe Reset needed dish photography that complied with Zomato guidelines showing real plating without added props or heavy styling while still making the food look appealing.',
    solution: 'Shot the dishes as they are served to customers, using the Cafe\'s own tables as the backdrop. Focused on clean composition and natural presentation to highlight authenticity.',
    results: 'Delivered a set of compliant, high-quality food images that showcased Cafe Reset\'s menu honestly and beautifully, enhancing their Zomato presence and setting clear customer expectations.',
    gallery: [
      '/assets/photography/reset/PAT09871.jpg',
      '/assets/photography/reset/PAT09872.jpg',
      '/assets/photography/reset/PAT09874.jpg',
      '/assets/photography/reset/PAT09875.jpg',
      '/assets/photography/reset/PAT09876.jpg',
      '/assets/photography/reset/PAT09877.jpg',
      '/assets/photography/reset/PAT09879.jpg',
      '/assets/photography/reset/PAT09882.jpg',
      '/assets/photography/reset/PAT09887-Edit.jpg',
      '/assets/photography/reset/PAT09899.jpg',
      '/assets/photography/reset/PAT09902.jpg',
      '/assets/photography/reset/PAT09904.jpg',
      '/assets/photography/reset/PAT09918.jpg',
      '/assets/photography/reset/PAT09941.jpg',
      '/assets/photography/reset/PAT09944.jpg',
      '/assets/photography/reset/PAT09956.jpg',
      '/assets/photography/reset/PAT09964.jpg',
      '/assets/photography/reset/PAT09966.jpg',
      '/assets/photography/reset/PAT09975.jpg',
      '/assets/photography/reset/PAT09991.jpg'
    ],
    featured: false
  }
];

export const categories = ['All', 'Photography', 'Video'];

export const tags = [
  'Corporate', 'Event', 'Aftermovie', 'Architecture', 'Ambience', 
  'Launch Shoot', 'Food Photography', 'Social Media', 'Interior', 'Exterior',
  'Campaign', 'Brand Engagement', 'Lifestyle', 'Hospitality', 'Inclusivity',
  'Internal Event', 'Family', 'Employee Recognition', 'Product Photography',
  'Collection Launch', 'E-commerce', 'Restaurant'
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
