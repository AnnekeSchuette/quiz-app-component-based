import createElement from '../../lib/createElement'
import './Navigation.css'

import svgSrc from '../../vendor/icomoon/symbol-defs.svg'

const buttonsConfig = [
  { svgPath: svgSrc, svgId: 'icon-anchor1', name: 'Home' },
  { svgPath: svgSrc, svgId: 'icon-bookmark-outline', name: 'Bookmarks' },
  { svgPath: svgSrc, svgId: 'icon-list-add', name: 'Add Card' },
  { svgPath: svgSrc, svgId: 'icon-user1', name: 'Settings' },
]

export default function Navigation(onNavigate) {
  // destructuring assignment
  const buttons = buttonsConfig.map(({ svgPath, svgId, name }) => {
    const button = createElement(
      'button',
      {
        className: 'Navigation__item',
      },
      createElement('svg', {
        className: `icon ${svgId}`,
        innerHTML: `<use xlink:href="${svgPath}#${svgId}"></use>`,
      }),
      createElement('span', { className: 'Navigation__label', innerText: name })
    )
    button.addEventListener('click', () => onNavigate(name))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
