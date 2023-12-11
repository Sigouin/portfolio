

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
    id: "whackamole",
    name: "Whack-a-Mole",
    img: "whackamole.jpg",
    description: 'This is a simple and fun game where you have to quickly tap or click on moles that pop up from their holes. The goal is to whack as many moles as possible within a given time limit.',
    demoURL: 'https://whackamole-navy.vercel.app/',
    gitURL: 'https://github.com/sigouin/whackamole'
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
    description: 'A classic DoorDash mockup that only has specifically Chick-fil-a as a store which only sells 4 items that you cannot really purchase.',
    demoURL: 'https://dashdoor.vercel.app/',
    gitURL: 'https://github.com/Sigouin/dashdoor'
  },
  {
    id: "ratingcomponent",
    name: "Rating Component",
    img: "ratingcomp.png",
    description: 'This was a simple challenge hosted on Frontend Mentor. It is aimed to practice user interactions and updated the DOM.',
    demoURL: 'https://matts-ratingcomp-81c54f.netlify.app/',
    gitURL: 'https://github.com/sigouin/ratingcomponent'
  },
]

export default projects