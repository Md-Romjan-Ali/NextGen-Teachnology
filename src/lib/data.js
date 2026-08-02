// NextGen Technology Company Website - Data File

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustedCompanies = [
  "Google", "Microsoft", "Amazon", "Spotify", "Airbnb",
  "Stripe", "Shopify", "Netflix", "Slack", "Figma",
  "Vercel", "Notion", "Discord", "Linear", "Atlassian",
];

export const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Team Members" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export const coreValues = [
  {
    icon: "FiZap",
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver future-proof solutions.",
  },
  {
    icon: "FiShield",
    title: "Integrity",
    description: "We maintain transparency and honesty in every client relationship.",
  },
  {
    icon: "FiUsers",
    title: "Collaboration",
    description: "Teamwork and open communication drive our best outcomes.",
  },
  {
    icon: "FiTarget",
    title: "Excellence",
    description: "We hold ourselves to the highest quality standards on every project.",
  },
];

export const services = [
  {
    icon: "FiCode",
    title: "Web Development",
    description: "Modern, fast, and SEO-optimized websites built with React, Next.js, and cutting-edge web technologies.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: "FiSmartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: "FiLayout",
    title: "UI/UX Design",
    description: "Beautiful, intuitive, and user-centered interfaces designed to convert visitors into customers.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: "FiShoppingCart",
    title: "E-Commerce Solutions",
    description: "Fully-featured online stores with payment gateways, inventory management, and analytics.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "FiCloud",
    title: "SaaS Development",
    description: "Scalable, subscription-based software products built for reliability and rapid growth.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "FiGitMerge",
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs designed for performance, security, and scalability.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "FiServer",
    title: "Cloud Deployment",
    description: "CI/CD pipelines, containerization, and cloud infrastructure on AWS, GCP, and Azure.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "FiTool",
    title: "Maintenance & Support",
    description: "Dedicated ongoing support, updates, performance monitoring, and bug fixing services.",
    color: "from-pink-500 to-rose-600",
  },
];

export const projects = [
  {
    id: 1,
    name: "A M I School",
    category: "Dashboard",
    description: "A modern, scalable School Management System built with Next.js and modern web technologies. The goal of this project is to provide a complete digital solution for managing school operations, including students, teachers, admissions, notices, events, academic information, and administrative workflows.",
    technologies: ["React.js", "Next.js", "JavaScript (ES6)", "Tailwind CSS", "Node.js", "Express.js", "Mongodb", "API"],
    image: "https://i.ibb.co.com/XkyYjHk9/image.png",
    liveUrl: "https://akher-mamud-ideal-school.vercel.app",
    color: "from-blue-600 to-cyan-500",
    company: "NextGen Technology",
  },
  {
    id: 2,
    name: "PropertyHub",
    category: "E-Commerce",
    description: "Built a modern property rental booking platform with responsive UI, secure JWT-based authentication, and seamless property booking with secure Stripe payment integration.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Mongodb", "JavaScript (ES6)", "API"],
    image: "https://i.ibb.co.com/W459yLD6/Whats-App-Image-2026-06-27-at-9-56-27-PM.jpg",
    liveUrl: "https://property-renteal-booking-platformcl.vercel.app",
    color: "from-purple-600 to-pink-500",
    company: "NextGen Technology",
  },
  {
    id: 3,
    name: "DOHPS — Organization",
    category: "Mobile",
    description:
      "Built a responsive NGO organization website for DOHPS with dynamic content management, success stories, scholarship information, and secure admin functionality.",

    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "Mongodb", "API",],
    image: "https://i.ibb.co.com/0RSRsZD4/image.png",
    liveUrl: "https://dohps-organization-client-rzsh.vercel.app",
    color: "from-teal-500 to-green-500",
    company: "NextGen Technology",
  },
  {
    id: 4,
    name: "StudyRoom",
    category: "Web",
    description:
      "Study Nook is a modern AI-powered study platform designed to help users focus better, plan efficiently, and improve learning productivity in a distraction-free environment.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "JavaScript (ES6)", "API",],
    image: "https://i.ibb.co.com/rKVrJGbq/a73e3bae-ebb3-45fa-8eed-2af93bbc1053.jpg",
    liveUrl: "https://study-nook-delta.vercel.app",
    color: "from-orange-500 to-red-500",
    company: "NextGen Technology",
  },
  {
    id: 5,
    name: "MediQueue",
    category: "Web",
    description: "MediQeue is a modern online tutor platform designed to connect students with qualified tutors for personalized learning and academic support.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Mongodb", "JavaScript (ES6)", "API"],
    image: "https://i.ibb.co.com/qYXdfQJJ/b2e4a65d-ca64-41e4-8c4d-535c2b7fa16a.jpg",
    liveUrl: "https://mediqeue.vercel.app",
    color: "from-indigo-600 to-purple-600",
    company: "NextGen Technology",
  },
  {
    id: 6,
    name: "FitTrack Dashboard",
    category: "Dashboard",
    description: "Fitness analytics dashboard with workout tracking, nutrition monitoring, and progress visualization.",
    shortDescription: "Fitness analytics dashboard with workout tracking, nutrition monitoring, and progress visualization.",
    features: [
      "Wearable sensor sync protocols",
      "Interactive calory tracker metrics",
      "Interactive SVG charts and maps"
    ],
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/images/project6.jpg",
    liveUrl: "https://fittrack.nextgentech.io",
    githubUrl: "https://github.com/nextgentech/fittrack",
    color: "from-yellow-500 to-orange-500",
    company: "NextGen Technology",
    keywords: ["ReactJS", "D3JS", "Dashboard", "HealthTech"]
  },
];

export const processSteps = [
  {
    step: "01",
    icon: "FiSearch",
    title: "Requirement Analysis",
    description: "We dive deep into your business goals, target audience, and technical requirements to lay a solid foundation.",
  },
  {
    step: "02",
    icon: "FiLayout",
    title: "UI/UX Design",
    description: "Our designers craft wireframes and high-fidelity prototypes, iterating until your vision is perfectly captured.",
  },
  {
    step: "03",
    icon: "FiCode",
    title: "Development",
    description: "Our engineers build with clean, scalable code using the latest technologies and best practices.",
  },
  {
    step: "04",
    icon: "FiCheckCircle",
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers ensures your product is bug-free and performant.",
  },
  {
    step: "05",
    icon: "FiUploadCloud",
    title: "Deployment",
    description: "We deploy with CI/CD pipelines for zero-downtime launches and instant rollback capability.",
  },
  {
    step: "06",
    icon: "FiTool",
    title: "Maintenance",
    description: "Ongoing monitoring, updates, and optimizations keep your product fast, secure, and evolving.",
  },
];

export const whyChooseUs = [
  {
    icon: "FiAward",
    title: "Experienced Developers",
    description: "5+ years of hands-on experience building enterprise-grade applications across diverse industries.",
  },
  {
    icon: "FiCode",
    title: "Clean Code",
    description: "We follow SOLID principles and best practices, writing maintainable, scalable, and documented code.",
  },
  {
    icon: "FiZap",
    title: "Fast Delivery",
    description: "Agile sprints and efficient workflows ensure on-time delivery without compromising quality.",
  },
  {
    icon: "FiTrendingUp",
    title: "SEO Friendly",
    description: "Every project is built with SEO best practices baked in — from semantic HTML to Core Web Vitals.",
  },
  {
    icon: "FiMonitor",
    title: "Responsive Design",
    description: "Pixel-perfect, fluid designs that look stunning and work flawlessly on all screen sizes.",
  },
  {
    icon: "FiHeadphones",
    title: "24/7 Support",
    description: "Round-the-clock dedicated support to ensure your business runs without interruption.",
  },
];

export const teamMembers = [
  {
    name: "Alex Morgan",
    position: "CEO & Founder",
    bio: "Visionary tech leader with 10+ years driving digital transformation for global brands.",
    github: "#",
    linkedin: "#",
    facebook: "#",
    gradient: "from-blue-600 to-cyan-500",
    initials: "AM",
  },
  {
    name: "Sophia Chen",
    position: "Lead UI/UX Designer",
    bio: "Award-winning designer creating intuitive experiences that delight users and drive conversions.",
    github: "#",
    linkedin: "#",
    facebook: "#",
    gradient: "from-purple-600 to-pink-500",
    initials: "SC",
  },
  {
    name: "James Rodriguez",
    position: "Full-Stack Developer",
    bio: "Expert in React, Node.js, and cloud architecture. Passionate about performance and clean code.",
    github: "#",
    linkedin: "#",
    facebook: "#",
    gradient: "from-teal-500 to-green-500",
    initials: "JR",
  },
  {
    name: "Emily Watson",
    position: "Mobile Developer",
    bio: "React Native and Flutter specialist who has shipped 20+ apps to the App Store and Google Play.",
    github: "#",
    linkedin: "#",
    facebook: "#",
    gradient: "from-orange-500 to-red-500",
    initials: "EW",
  },
];

export const testimonials = [
  {
    name: "David Thompson",
    company: "TechCorp Inc.",
    role: "CTO",
    rating: 5,
    review: "NextGen Technology delivered our SaaS platform ahead of schedule. The code quality and attention to detail exceeded our expectations. Our user base grew 300% within 3 months of launch.",
    initials: "DT",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Sarah Mitchell",
    company: "E-Shop Global",
    role: "CEO",
    rating: 5,
    review: "The e-commerce platform they built for us is absolutely stunning. Sales increased by 150% in the first quarter. Their team is responsive, professional, and truly talented.",
    initials: "SM",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    name: "Michael Lee",
    company: "StartupXYZ",
    role: "Founder",
    rating: 5,
    review: "From the initial consultation to the final deployment, the experience was seamless. They understood our vision perfectly and translated it into a beautiful, high-performing product.",
    initials: "ML",
    gradient: "from-teal-500 to-green-500",
  },
  {
    name: "Anna Kowalski",
    company: "HealthTrack",
    role: "Product Manager",
    rating: 5,
    review: "The mobile app they developed has over 10,000 active users with a 4.9-star rating. The team's dedication to quality and their deep technical expertise are unmatched.",
    initials: "AK",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Carlos Mendez",
    company: "RetailPro",
    role: "Director of Technology",
    rating: 5,
    review: "Exceptional service from start to finish. The dashboard they built gave us unprecedented visibility into our operations. ROI was evident within weeks of going live.",
    initials: "CM",
    gradient: "from-indigo-600 to-purple-600",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    period: "/project",
    description: "Perfect for small businesses and startups launching their first digital product.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Optimization",
      "Contact Form",
      "3 Rounds of Revisions",
      "2 Weeks Delivery",
      "1 Month Support",
    ],
    notIncluded: ["Custom Animations", "CMS Integration", "E-Commerce Features"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$3,499",
    period: "/project",
    description: "The most popular choice for growing businesses that need a powerful digital presence.",
    features: [
      "Up to 15 Pages",
      "Advanced Animations",
      "Full SEO Suite",
      "CMS Integration",
      "E-Commerce Ready",
      "Custom Dashboard",
      "5 Rounds of Revisions",
      "4 Weeks Delivery",
      "3 Months Support",
    ],
    notIncluded: [],
    cta: "Start Project",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements and scale.",
    features: [
      "Unlimited Pages",
      "Custom Architecture",
      "Microservices / API",
      "Multi-language Support",
      "Advanced Security",
      "Load Balancing & CDN",
      "Unlimited Revisions",
      "Dedicated Project Manager",
      "12 Months Support",
    ],
    notIncluded: [],
    cta: "Contact Us",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "What is your typical development process?",
    answer: "We follow an agile methodology with 6 clear phases: Requirement Analysis, UI/UX Design, Development, Testing & QA, Deployment, and ongoing Maintenance. You'll receive regular progress updates and have access to a dedicated project manager throughout.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timelines vary by project complexity. A simple landing page takes 1-2 weeks, a business website 3-4 weeks, and complex web applications or SaaS products can take 2-4 months. We always provide a detailed timeline estimate before starting.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in React, Next.js, Vue.js for frontend; Node.js, Python, Laravel for backend; MongoDB, PostgreSQL, MySQL for databases; and AWS, GCP, Vercel for cloud deployment. We select the best stack based on your specific requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. All our plans include post-launch support ranging from 1 month (Starter) to 12 months (Enterprise). We offer bug fixes, performance monitoring, security updates, and feature additions. Extended support plans are available.",
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing is based on project scope, complexity, timeline, and required technologies. We offer fixed-price packages for standard projects and custom quotes for enterprise solutions. Contact us for a detailed, transparent estimate.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, 100%. Every project we build is fully responsive and tested across all major devices and browsers. We follow a mobile-first design approach and ensure your site scores 90+ on Google's PageSpeed Insights.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. We specialize in both new builds and redesigns. We'll audit your current site, identify improvement areas, and deliver a modern, high-performing upgrade while preserving your brand identity and SEO rankings.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we sign Non-Disclosure Agreements (NDAs) before any project kickoff. Your ideas, data, and business information are fully protected and treated with strict confidentiality.",
  },
];

export const contactInfo = [
  {
    icon: "FiMapPin",
    label: "Address",
    value: "Sherpur, Mymensingh, Bangladesh",
  },
  {
    icon: "FiPhone",
    label: "Phone",
    value: "+88 1990211158",
  },
  {
    icon: "FiMail",
    label: "Email",
    value: "romjan.merndev@gmail.com",
  },
  {
    icon: "FiClock",
    label: "Working Hours",
    value: "Sat – Thu: 9:00 AM – 6:00 PM",
  },
];
