import createElement from '../../lib/createElement'
import './CreatePage.css'

export default function CreatePage(form) {
  const el = createElement(
    'main',
    { className: 'CreatePage', hidden: true },
    form
  )

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return { el, show, hide }
}
