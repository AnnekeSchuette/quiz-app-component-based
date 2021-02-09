import createElement from '../../lib/createElement'
import './BookmarksPage.css'

export default function BookmarksPage() {
  const el = createElement(
    'main',
    { className: 'BookmarksPage', hidden: true },
    'The bookmark function is not implemented yet'
  )

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
