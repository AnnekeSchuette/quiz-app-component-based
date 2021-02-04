import './Card.css'

export default function Card(question, answer) {
  const el = document.createElement('section')
  el.className = 'Card'
  el.innerHTML = `
    <h3>${question}</h3>
    <button>Show answer</button>
    <p hidden>${answer}</p>
  `
  return el
}
