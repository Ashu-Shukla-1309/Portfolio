const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "AI Models", imgPath: "/images/ideas.svg" },
  { text: "Web Apps", imgPath: "/images/concepts.svg" },
  { text: "Blockchain", imgPath: "/images/designs.svg" },
  { text: "Prompts", imgPath: "/images/code.svg" },
  { text: "AI Models", imgPath: "/images/ideas.svg" },
  { text: "Web Apps", imgPath: "/images/concepts.svg" },
  { text: "Blockchain", imgPath: "/images/designs.svg" },
  { text: "Prompts", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Technical Certifications" },
  { value: 10, suffix: "+", label: "AI/ML Projects Built" },
  { value: 3, suffix: "+", label: "Community Leadership Roles" },
  { value: 100, suffix: "%", label: "Commitment to Learning" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail in data processing and model tuning.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping teams updated at every step to ensure transparency in full-stack and AI deployments.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, from initial architecture to final deployment.",
  },
];

// All your 2D SVG/PNG logos go here
const techStackImgs = [
  { name: "MongoDB", imgPath: "/images/logos/mongodb.svg" },
  { name: "Express.js", imgPath: "/images/logos/express.svg" },
  { name: "TensorFlow", imgPath: "/images/logos/tensorflow.svg" },
  { name: "PyTorch", imgPath: "/images/logos/pytorch.svg" },
  { name: "Scikit-Learn", imgPath: "/images/logos/scikit-learn.svg" },
  { name: "Numpy", imgPath: "/images/logos/numpy.svg" },
  { name: "Claude", imgPath: "/images/logos/claude.svg" },
  { name: "Pandas", imgPath: "/images/logos/pandas.svg" },
  { name: "AI & ML", imgPath: "/images/logos/openai.png" },
  { name: "Computer Vision", imgPath: "/images/logos/opencv.svg" },
];

// ONLY the skills that actually have 3D .glb models go here
const techStackIcons = [
  { name: "Python", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "React.js", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Node.js", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
];

const expCards = [
  {
    review: "During his internship, Ashutosh demonstrated exceptional problem-solving skills in autonomous systems. He quickly grasped complex hardware-software integrations.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Autonomous Robotics Intern",
    date: "Recent", 
    responsibilities: [
      "Worked on integrating sensory data with processing units for autonomous robotic navigation.",
      "Developed logic algorithms to optimize route mapping and obstacle detection.",
      "Collaborated closely with mentors at Kalam Pragati by ERA Foundation to ensure hardware safety protocols were met.",
    ],
  },
  {
    review: "Ashutosh's leadership and deep understanding of Generative AI have been instrumental in building our technical community and driving adoption among peers.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Google Gemini Student Ambassador",
    date: "Present",
    responsibilities: [
      "Acted as a Google Gemini Student Ambassador (GSAP), advocating for advanced AI technologies on campus.",
      "Managed technical networks and collaborative AI training campaigns.",
      "Organized resources to help peers integrate LLMs into their own projects and workflows.",
    ],
  },
  {
    review: "His technical insights and project execution, especially in the Generative AI space, consistently set a high bar for the club.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Founder & Lead, Gemini Labs",
    date: "Present",
    responsibilities: [
      "Founded and lead Gemini Labs, spearheading projects like 'Mindlink AI' featuring Gemini-inspired web interfaces and voice integration.",
      "Serve as an active member of the Technical Club Editing Team and Google Developer Groups (GDG).",
      "Participate in advanced learning programs including Google Code Vipassana and OCI Generative AI technical certifications.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Dr. Sharma",
    mentions: "Faculty Advisor",
    review:
      "Ashutosh possesses a rare combination of theoretical machine learning knowledge and practical frontend skills. His work on predictive AI models has been exceptionally thorough.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Rohan V.",
    mentions: "Hackathon Teammate",
    review:
      "Building a project with Ashutosh is a fantastic experience. He handles API integrations and database architecture effortlessly while always keeping the UI clean. He was the MVP of our team.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Priya M.",
    mentions: "GDG Lead",
    review:
      "Ashutosh's contributions to our technical community have been invaluable. He frequently shares insightful prompt engineering techniques and guides peers through complex cloud setups.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Kunal S.",
    mentions: "Hackathon Teammate",
    review:
      "I've worked alongside Ashutosh in several coding competitions. He writes clean, modular Python code and always ensures his backend routes are properly structured under pressure.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Aman D.",
    mentions: "Project Collaborator",
    review:
      "I worked alongside Ashutosh on a blockchain verification system, and his understanding of SHA-256 hashing and Flask deployment was impressive. He always delivers exactly what he promises.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Prof. Verma",
    mentions: "Department of CSE",
    review:
      "As a second-year student, Ashutosh is already operating at an advanced level. His ability to architect scalable solutions utilizing models like Veo 3 sets him apart from his peers.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ashutoshshukla1309/"
  },
  {
    name: "github",
    imgPath: "/images/github.png", 
    url: "https://github.com/Ashu-Shukla-1309/"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};