import createElement from '../../lib/createElement'
import './SettingsPage.css'

export default function SettingsPage() {
  const el = createElement(
    'main',
    { className: 'SettingsPage', hidden: false },
    'Setting page is under construction'
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
