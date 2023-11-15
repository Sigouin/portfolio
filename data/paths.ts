enum EPaths {
  projects = 'projects',
  posts = 'posts'
}

const dynamicRoute = (route: string) =>
  (dynamic?: string): string => `/${route}${dynamic && `/${dynamic}`}`

type TPaths = {
  [key in EPaths]?: typeof dynamicRoute
}

export const paths: TPaths = Object.values(EPaths).reduce((prevValue, currentValue) => ({
  ...prevValue,
  ...{ [currentValue]: dynamicRoute(currentValue) }
}), {})

