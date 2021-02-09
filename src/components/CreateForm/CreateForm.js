import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement(
    'form',
    {
      className: 'CreateForm',
      innerHTML: `
        <label class="Form_label" for="question">Question:
        </label>
        <input name="question" class="Form__input--text" placeholder="Question goes here ..."></input>
        <label class="Form_label" for="answer">Answer:</label>
          <textarea name="answer" class="Form__textarea" placeholder="Answer goes here ..." rows="3"></textarea>
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
    form.reset()
    questionInput.focus()
  })
  return form
}
