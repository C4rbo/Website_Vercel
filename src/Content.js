import Hero_person from "./assets/images/me.png";
import project_logo1 from "./assets/images/img1.jpg";

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
  },
  Projects: {
    title: "My Projects",
    subtitle: "What I Have Created",
    project_content: [
      {
        name: "Generator Password",
        description: "Generator Password",
        image: project_logo1,
        href: "https://github.com/C4rbo/Generator-Password",
      },
      {
        name: "pdf-encrypt-decrypt",
        description: "Pdf Encrypt Decrypt",
        image: project_logo1,
        href: "https://github.com/C4rbo/pdf-encrypt-decrypt",
      },
      {
        name: "Port Scanner",
        description: "Port Scanner",
        image: project_logo1,
        href: "https://github.com/C4rbo/Port-Scanner",
      },
    ],
  },
  socialLinks: [
    {
      imgSrc: "https://www.svgrepo.com/show/452229/instagram-1.svg",
      href: "#",
      altText: "Instagram",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/475700/youtube-color.svg",
      href: "#",
      altText: "YouTube",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/448234/linkedin.svg",
      href: "#",
      altText: "LinkedIn",
    },
    {
      imgSrc: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png",
      href: "https://github.com/C4rbo",
      altText: "GitHub",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/303156/tiktok-icon-white-1-logo.svg",
      href: "https://www.tiktok.com/@carbodev",
      altText: "TikTok",
    }
  ],
  Footer: {
    text: "Carbo Website Reserved 2025",
  },
};
