import createElement from '../../lib/createElement'
import getAllByDataJs from '../../lib/getAllByDataJs'
import './Navigation.css'

const navItems = [
  { name: 'Home', ariaName: 'Home', iconClass: 'icon-anchor1' },
  {
    name: 'Bookmarks',
    ariaName: 'Bookmarks',
    iconClass: 'icon-bookmark-outline',
  },
  {
    name: 'Add Card',
    ariaName: 'Create a Quiz Card',
    iconClass: 'icon-list-add',
  },
  {
    name: 'Settings',
    ariaName: 'Quiz App Settings & Profile',
    iconClass: 'icon-user1',
  },
]

export default function Navigation() {
  const el = createElement('nav', { className: 'Navigation' })
  createNavItems(navItems)
  navInteraction()

  function createNavItems(arr) {
    arr.forEach(function (navItem) {
      const navButton = createElement('button', {
        className: 'Navigation__item',
        innerHTML: `<i class="${navItem.iconClass}"></i>
        <span class="navigation__label">${navItem.name}</span>`,
      })
      navButton.setAttribute('data-js', 'nav')
      navButton.setAttribute('data-name', navItem.name)
      navButton.setAttribute('aria-name', navItem.ariaName)

      el.append(navButton)
      return navButton
    })
  }

  function navInteraction() {
    // const pages = getAllByDataJs('page')
    const navButtons = getAllByDataJs('nav')

    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        const clickedButtonName = button.dataset.name
        /* pages.forEach(page => {
          const pageName = page.dataset.name
          page.classList.toggle('hidden', clickedButtonName !== pageName)
        }) */
        navButtons.forEach(button => {
          button.classList.toggle(
            'Navigation__item--active',
            clickedButtonName === button.dataset.name
          )
        })
        console.log(clickedButtonName)
      })
    })
    console.log('navButtons')
  }

  return el
}
