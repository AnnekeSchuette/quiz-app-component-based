import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(text, extraClasses) {
  const el = createElement('button', {
    className: `Button ${extraClasses}`,
    innerHTML: text,
  })
  return el
}
