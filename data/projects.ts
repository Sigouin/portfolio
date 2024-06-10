

export interface IProject {
  id: string
  name: string
  img: string
  description: string
  demoURL: string
  gitURL: string
}

const projects: IProject[] = [
  {
    id: "prolog",
    name: "Prolog Error Tracking Tool",
    img: "prolog.jpg",
    description: 'This repository is part of the React Job Simulator where you work in a professional dev environment with advanced tooling and workflows.',
    demoURL: 'https://prolog-app-sigouin.vercel.app/',
    gitURL: 'https://github.com/profydev/prolog-app-Sigouin'
  },
  {
    id: "marketplace",
    name: "Online Marketplace",
    img: "marketplace.jpg",
    description: 'This is a simple online marketplace where you can add, edit, and delete products. It also has user messaging and authentication.',
    demoURL: 'https://online-marketplace-one.vercel.app/',
    gitURL: 'https://github.com/Sigouin/online-marketplace'
  },
  {
    id: "packagejsoncrawler",
    name: "package.json crawler",
    img: "package.json crawler.jpg",
    description: 'This project is designed to crawl through multiple package.json files and check the versions of their dependencies against the root package.json.',
    demoURL: 'https://github.com/Sigouin/crawler',
    gitURL: 'https://github.com/Sigouin/crawler'
  },
  {
    id: "dashdoor",
    name: "DashDoor",
    img: "dashdoor.jpg",
    description: 'A classic DoorDash mockup that only has specifically Chick-fil-a as a store which only sells four items that you cannot really purchase.',
    demoURL: 'https://dashdoor.vercel.app/',
    gitURL: 'https://github.com/Sigouin/dashdoor'
  },
  {
    id: "whackamole",
    name: "Whack-a-Mole",
    img: "whackamole.jpg",
    description: 'This is a simple and fun game where you have to quickly tap or click on moles that pop up from their holes. The goal is to whack as many moles as possible within a given time limit.',
    demoURL: 'https://whackamole-navy.vercel.app/',
    gitURL: 'https://github.com/sigouin/whackamole'
  },
  // {
  //   id: "ratingcomponent",
  //   name: "Rating Component",
  //   img: "ratingcomp.png",
  //   description: 'This was a simple challenge hosted on Frontend Mentor. It is aimed to practice user interactions and updating the DOM.',
  //   demoURL: 'https://matts-ratingcomp-81c54f.netlify.app/',
  //   gitURL: 'https://github.com/sigouin/ratingcomponent'
  // },
]

export default projects