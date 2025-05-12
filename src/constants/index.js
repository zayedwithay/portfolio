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
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "AI Agents", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "AI Agents", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Satisfied Clients" },
  { value: 22, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Satisfaction Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Core Java ",
    imgPath: "/images/logos/javal.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Zayed brought creativity and technical expertise with him where he significantly improved frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "Frontend Developer",
    date: "December 2024- January 2025",
    responsibilities: [
      "Built full-stack architecture with React.js frontend and Node.js backend.",
      "Integrated OpenAI API for real-time, AI-powered message suggestions",
      "Implemented email-based OTP login and session management using NextAuth.",
    ],
  },
  {
    review: "Zayed's work on the project was exceptional. He took the time to understand our needs and delivered a solution that exceeded our expectations. His attention to detail and commitment to quality were evident throughout the process.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "May 2024 - June 2024",
    responsibilities: [
     " Developed frontend using React.js and styled with Tailwind CSS for responsive UI.",

"Created RESTful APIs and implemented JWT-based authentication with Node.js and Express.js.",

"Managed and optimized data flow using MongoDB for smooth order processing."
    ],
  },
  {
     review: "Zayed’s work on the User Management Dashboard added structure and usability to our admin panel. His clean interface and secure role-based features significantly improved functionality and accessibility.",
  imgPath: "/images/logo3.png",
  logoPath: "/images/logo3.png",
  title: "Full-Stack Developer",
  date: "January 2024",
  responsibilities: [
    "Designed and developed a role-based user management dashboard using React and Tailwind CSS.",
    "Implemented secure login, CRUD operations, and dynamic role assignments with Node.js and MongoDB.",
    "Ensured responsive UI and smooth user interaction across devices."
  ]
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Akshat Jain",
    mentions: "@akshatjain16",

    review:
      "I can’t say enough good things about Zayed. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Aman Kumar",
    mentions: "@aman25kumar",
    
    review:
      "Working with Zayed was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "",
  },
  {
    name: "Ashish Sharma",
    mentions: "@_ashish",
  
    review:
      "Collaborating with Zayed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Zayed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Zayed is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Ravi Kumar",
    mentions: "@ravi_kumar",
    
    review:
      "Zayed was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate.",
    imgPath: "",
  },
  {
    name: "Mohammed Ali",
    mentions: "@ali_6595",

    review:
      "Zayed’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Zayed was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link:"https://www.instagram.com/mezayedalam?igsh=ZGl3c2tmbDJndXNu"
  },
  {
    name: "fb",
    imgPath: "/images/git.png",
    link:"https://github.com/zayedwithay"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link:"https://x.com/zayedev?s=21&t=7zzad69vcd8rAkQKJlVSxA"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link:"https://www.linkedin.com/in/contactzayed/"
  },
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
