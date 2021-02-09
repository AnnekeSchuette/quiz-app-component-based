import createElement from '../../lib/createElement'
import svgComponent from '../../lib/svgComponent'
import './Navigation.css'

const buttonsConfig = [
  { svgId: 'icon-anchor1', name: 'Home' },
  { svgId: 'icon-bookmark-outline', name: 'Bookmarks' },
  { svgId: 'icon-list-add', name: 'Add Card' },
  { svgId: 'icon-user1', name: 'Settings' },
]

export default function Navigation(onNavigate) {
  // destructuring assignment
  const buttons = buttonsConfig.map(({ svgId, name }) => {
    const button = createElement(
      'button',
      {
        className: 'Navigation__item',
      },
      createElement('svg', {
        className: `icon ${svgId}`,
        innerHTML: `<use xlink:href="#${svgId}"/>`,
      }),
      createElement('span', { className: 'Navigation__label', innerText: name })
    )
    button.addEventListener('click', () => onNavigate(name))
    return button
  })

  const iconSet = svgComponent()

  const el = createElement(
    'nav',
    { className: 'Navigation' },
    ...buttons,
    iconSet
  )
  return el
}
