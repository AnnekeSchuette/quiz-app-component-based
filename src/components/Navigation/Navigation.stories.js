import Navigation from './Navigation.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Navigation',
  component: Navigation,
}

export const base = () => Navigation(action('onNavigate'))
