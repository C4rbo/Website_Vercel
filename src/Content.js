// import images
import Hero_person from "./assets/images/me.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/project.png";

import Hireme_person from "./assets/images/social.png";

export const content = {
  hero: {
    title: "Carbo Developer",
    firstName: "CARBO",
    LastName: "CARBO",
    btnText: "Go to my repository",
    linkButton: "https://github.com/C4rbo",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of studying software developer and cybersecurity",
      },
      {
        count: "7",
        text: "Projects Worked",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "C",
        para: "Proficient in C, a powerful general-purpose programming language. I use it for system-level programming, embedded systems, and performance-critical applications.",
      },
      {
        name: "C++",
        para: "Experienced with C++, an object-oriented language used for developing high-performance applications, including games, real-time systems, and large-scale software.",
      },
      {
        name: "Java",
        para: "Skilled in Java, widely used for building scalable enterprise applications, mobile apps (Android), and backend services.",
      },
      {
        name: "React.js",
        para: "Expert in React.js, a JavaScript library for building dynamic user interfaces. I create fast, responsive web applications with reusable components.",
      },
      {
        name: "Bash",
        para: "Proficient in Bash scripting for automating tasks, system administration, and managing workflows in UNIX-based environments.",
      },
      {
        name: "Python",
        para: "Experienced with Python, a versatile language used for web development, automation, data analysis, and cybersecurity tasks like penetration testing and vulnerability scanning.",
      },
    ],
    
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Software Development",
        para: "I offer custom software development services, building scalable and efficient applications tailored to your business needs. Whether it's web, mobile, or enterprise solutions, I ensure top-quality code and seamless user experiences.",
        logo: services_logo1,
      },
      {
        title: "Cybersecurity Solutions",
        para: "I provide comprehensive cybersecurity services to protect your systems and data from evolving threats. From risk assessments to vulnerability management, I ensure your digital assets remain secure and compliant.",
        logo: services_logo2,
      },
      {
        title: "Social Media Content Creation",
        para: "I create and share valuable content related to technology, software development, and cybersecurity across platforms like GitHub, LinkedIn, and TikTok. My goal is to educate, engage, and grow a community of like-minded professionals.",
        logo: services_logo3,
      },
    ],
  },  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Port Scanner",
        image: project1,
        link  :"https://github.com/C4rbo/Port-Scanner",
      },
      {
        title: "System Resource Monitor",
        image: project2,
        link  :"https://github.com/C4rbo/system-resource-monitor",
      },
      {
        title: "Pdf Encrypte & Decrypt",
        image: project3,
        link  :"https://github.com/C4rbo/pdf-encrypt-decrypt",
      },
      {
        title: "Check Password",
        image: project3,
        link  :"https://github.com/C4rbo/CheckPassword",
      },
    ],
  },
  Hireme: {
    title: "Social Media",
    subtitle: "FOR MY CONTENTS",
    image1: Hireme_person,

  },
  Footer: {
    text: "Carbo Website Reserved 2024",
  },
};
