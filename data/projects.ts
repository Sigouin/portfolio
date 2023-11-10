

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
    description: 'Cool info about dashdoor',
    demoURL: 'http://dashdoor.sigouin.com',
    gitURL: 'https://github.com/sigouin/dashdoor'
  },
  {
    id: "whackamole",
    name: "whackamole",
    img: "whackamole.jpg",
    description: 'Cool info about whackamole',
    demoURL: 'http://whackamole.sigouin.com',
    gitURL: 'https://github.com/sigouin/whackamole'
  },
  {
    id: "packagejsoncrawler",
    name: "package.json crawler",
    img: "package.json crawler.jpg",
    description: 'Cool info about package.json crawler',
    demoURL: 'http://packagejsoncrawler.sigouin.com',
    gitURL: 'https://github.com/sigouin/packagejsoncrawler'
  },
  {
    id: "ratingcomponent",
    name: "rating component",
    img: "ratingcomp.png",
    description: 'Cool info about rating component',
    demoURL: 'http://ratingcomponent.sigouin.com',
    gitURL: 'https://github.com/sigouin/ratingcomponent'
  },
]

export default projects