import { link } from "fs";


export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];





export const gridItems = [
  {
    id: 1,
    title: "Collaboration and clear communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible across time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "Always growing and improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Turning ideas into clean, functional apps.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Coding with creativity and purpose.",
    description: "Driven to build impactful solutions.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s build together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



export const projects = [
  {
    id: 1,
    title: "Task Manager",
    des: "Organize, track, and complete your tasks with ease",
    img: "/taskManager.jpg",
    iconLists: ["/node.svg", "/ex.svg", "/mongo.svg", "/css.svg"],
    link: "https://task-manager-rhl0.onrender.com",
    githubLink: "https://github.com/ehsan05/Task-manager",
  },
  {
    id: 2,
    title: "Tenzies Game",
    des: "Roll and holde the Dices until they are all the same number.",
    img: "/tenzies.jpg",
    iconLists: ["/re.svg", "/css.svg", "/js.svg"],
    link: "https://tenzies-01.netlify.app",
    githubLink: "https://github.com/ehsan05/tenzies",
  },
  {
    id: 3,
    title: "Search Pokémon app",
    des: "Find any Pokémon by name or Pokédex number.",
    img: "/pokemon.jpg",
    iconLists: ["/js.svg", "/css.svg"],
    link: "https://pokemon-searching-app-00.netlify.app",
    githubLink: "https://github.com/ehsan05/pokemon-search-app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    githubLink: "https://github.com/ehsan05/pokemon-search-app",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    desc: "Building scalable applications with React, Next.js, Node.js, and SQL.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "End-to-End Project Development",
    desc: "From backend APIs to frontend interfaces, delivering complete solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance & Personal Projects",
    desc: "Hands-on experience deploying apps and managing code with Git/GitHub.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Continuous Growth",
    desc: "Expanding knowledge of modern frameworks and best practices.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ehsan05",
  },
  {
    id: 2,
    img: "twit.svg",
    link: "https://x.com/Ehsanokarimi",
  },
  {
    id: 3,
    img: "/ig.png",
    link: "https://www.instagram.com/ehnkar/",
  },
];
