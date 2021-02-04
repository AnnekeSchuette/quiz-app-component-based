import './Header.css'

export default function Header(headline, subline) {
  const el = document.ceateElement('header')
  el.className = 'Header'
  el.innerHtml = `
    <h1 class="Header__title">
      ${headline}
      <span class="Header__subline">${subline}</span>
    </h1>
  `
  return el
}
