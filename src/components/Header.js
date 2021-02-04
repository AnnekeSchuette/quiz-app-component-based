import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const subtitleEl = createElement('span', {
    className: 'Header__subtitle',
    innerText: subtitle,
  })

  const titleEl = createElement('h1', {
    className: 'Header__title',
    innerText: title,
    innerHTML: subtitleEl,
  })

  const el = createElement('header', {
    className: 'Header',
  })

  el.append(titleEl)

  return el
}
