import HomePage from './HomePage.js'

export default {
  title: 'HomePage',
  component: HomePage,
}

export const base = () => HomePage('Quiz App', 'Dashboard').el
