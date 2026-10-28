const siteData = {
  name: 'Nur e Muddassir Tanim',
  role: 'Computer Science & Engineering Student At AIUB | Exploring AI & Machine Learning | Building My Tech Journey | Python • AI • ML Enthusiast',
  intro: 'I build web projects and explore computer vision and data science.',

  // Home page: hero
  photo: 'images/profile.jpg',
  focus: 'Right now: looking for an internship where I can build real software and learn machine learning.',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Web Development',
  ],

  // Home page: short About section
  aboutShort:
    'I am a Computer Science and Engineering student at AIUB who enjoys turning ideas into working software, with a growing focus on AI and machine learning.',

  // Home page: Explore My Work cards
  explore: [
    {
      title: 'Publications',
      text: 'Research papers and ongoing research.',
      link: 'about.html#publications',
    },
    {
      title: 'Projects',
      text: 'Web and data science projects I have built.',
      link: 'projects.html',
    },
    {
      title: 'Experience',
      text: 'Internships, roles and activities.',
      link: 'about.html#experience',
    },
    {
      title: 'Contact',
      text: 'Get in touch for collaboration or questions.',
      link: 'contact.html',
    },
  ],

  // About page
  about:
    'I am a student at American International University-Bangladesh (AIUB). ' +
    'I enjoy turning ideas into working software. I am currently exploring the fields of Artificial Intelligence and Machine Learning. ' +
    'I am also a tech enthusiast and love to learn new technologies. I am currently learning Python, Data Science, and Machine Learning. ' +
    'I am also interested in web development and have built several web projects using HTML, CSS, JavaScript, PHP, and MySQL.',

  skills: [
    'C++',
    'Java',
    'Oracle',
    'C#',
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'R',
    'Git and GitHub',
  ],

  education: [
    {
      institution: 'American International University-Bangladesh (AIUB)',
      degree: 'Bachelor of Science in Computer Science and Engineering',
      year: 'Graduation Year: 2027',
    },
    {
      institution: 'BAF Shaheen College, Chattogram',
      degree: 'Higher Secondary Certificate (HSC)',
      year: 'Graduation Year: 2022',
    },
    {
      institution: 'Coxs Bazar Model High School',
      degree: 'Secondary School Certificate (SSC)',
      year: 'Graduation Year: 2020',
    },
  ],

  // Empty lists show "coming soon" on the About page.
  // Remove the // to add an item.
  publications: [
    // { title: 'Paper title', venue: 'Journal or conference', year: '2027', link: 'https://...' },
  ],
  experience: [
    // { role: 'Intern', organization: 'Company', period: '2027', description: 'What you did.' },
  ],

  // Projects page
  projects: [
    {
      title: 'Stay Or Go - Customer Churn Analysis',
      description:
        'A data science project that predicts which customers may leave.',
      category: 'Data Science',
      tech: ['Python', 'Data Science'],
      link: 'https://github.com/nuremuddassirtanim/stayorgo-telco-churn',
    },
    {
      title: 'AIUB LOST & FOUND',
      description:
        'A web application for reporting and finding lost items at AIUB.',
      category: 'Web Project',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: 'https://github.com/nuremuddassirtanim/Campus_lost_and_found',
    },
  ],

  // Contact page
  contacts: [
    { label: 'GitHub', url: 'https://github.com/nuremuddassirtanim' },
    { label: 'Email', url: 'mailto:nur.etanim@gmail.com' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nuremuddassirtanim',
    },
  ],

  footer: '© 2026 Nm Tanim',
};