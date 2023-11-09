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
    demoURL: 'dashdoor.sigouin.com',
    gitURL: 'https://github.com/sigouin/dashdoor'
  },
  {
    id: "whackamole",
    name: "whackamole",
    img: "whackamole.jpg",
    description: 'Cool info about whackamole',
    demoURL: 'whackamole.sigouin.com',
    gitURL: 'https://github.com/sigouin/whackamole'
  },
  {
    id: "packagejsoncrawler",
    name: "package.json crawler",
    img: "package.json crawler.jpg",
    description: 'Cool info about package.json crawler',
    demoURL: 'packagejsoncrawler.sigouin.com',
    gitURL: 'https://github.com/sigouin/packagejsoncrawler'
  },
  {
    id: "ratingcomponent",
    name: "rating component",
    img: "rating component.jpg",
    description: 'Cool info about rating component',
    demoURL: 'ratingcomponent.sigouin.com',
    gitURL: 'https://github.com/sigouin/ratingcomponent'
  },
]

export default projects