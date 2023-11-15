

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
    id: "dashdoor",
    name: "DashDoor",
    img: "dashdoor.jpg",
    description: 'A classic Dashdoor mockup that only has specifically Chick-fil-a as a store which only sells 4 items that you cannot really purchase.',
    demoURL: 'http://dashdoor.sigouin.com',
    gitURL: 'https://github.com/sigouin/dashdoor'
  },
  {
    id: "whackamole",
    name: "whackamole",
    img: "whackamole.jpg",
    description: 'This is a simple and fun game where you have to quickly tap or click on moles that pop up from their holes. The goal is to whack as many moles as possible within a given time limit.',
    demoURL: 'http://whackamole.sigouin.com',
    gitURL: 'https://github.com/sigouin/whackamole'
  },
  {
    id: "packagejsoncrawler",
    name: "package.json crawler",
    img: "package.json crawler.jpg",
    description: 'Crawling through your package.json and checking your deps.',
    demoURL: 'http://packagejsoncrawler.sigouin.com',
    gitURL: 'https://github.com/sigouin/packagejsoncrawler'
  },
  {
    id: "ratingcomponent",
    name: "rating component",
    img: "ratingcomp.png",
    description: 'This was a simple challenge hosted on Frontend Mentor. It is aimed to practice user interactions and updated the DOM.',
    demoURL: 'http://ratingcomponent.sigouin.com',
    gitURL: 'https://github.com/sigouin/ratingcomponent'
  },
]

export default projects