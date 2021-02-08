import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm() {
  const form = createElement(
    'form',
    {
      className: 'Form',
      innerHTML: `
  <label class="Form_label">Question:
    <input class="Form_input--text" placeholder="Question goes here ..."></input>
  </label>
  <label class="Form_label">Answer:
    <textarea class="Form_textarea" placeholder="Answer goes here ..." rows="3"></textarea>
  </label>
  `,
    },
    Button('Submit')
  )
  return form
}
