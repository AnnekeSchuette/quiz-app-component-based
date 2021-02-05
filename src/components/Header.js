import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement(
    'header',
    {
      className: 'Header',
    },
    createElement(
      'h1',
      {
        className: 'Header__title',
        innerText: title,
      },
      createElement('span', {
        className: 'Header__subtitle',
        innerText: subtitle,
      })
    )
  )

  return el
}
