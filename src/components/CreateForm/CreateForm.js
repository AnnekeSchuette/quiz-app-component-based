import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement(
    'form',
    {
      className: 'CreateForm',
      innerHTML: `
  <label class="Form_label">Question:
    <input name="question" class="Form_input--text" placeholder="Question goes here ..."></input>
  </label>
  <label class="Form_label">Answer:
    <textarea name="answer" class="Form_textarea" placeholder="Answer goes here ..." rows="3"></textarea>
  </label>
  `,
    },
    Button('Create Question')
  )
  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value
    onSubmit(question, answer)
  })
  return form
}
