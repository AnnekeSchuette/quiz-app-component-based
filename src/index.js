import Card from './components/Card'
import Header from './components/Header'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm'

const cards = []

const header = Header('Quiz App', 'May the best win!')

const navigation = Navigation(onNavigate)

const form = CreateForm(onSubmit)

const homePage = createElement('main', { className: 'HomePage', hidden: false })

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const bookmarksPage = createElement(
  'main',
  { className: 'BookmarksPage', hidden: true },
  'Bookmarks page is under construction'
)

const settingsPage = createElement(
  'main',
  { className: 'SettingsPage', hidden: true },
  'Setting page is under construction'
)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  renderCards()
}

function renderCards() {
  const cardElements = cards.map(({ question, answer }) =>
    Card(question, answer)
  )
  homePage.innerHTML = ''
  homePage.append(...cardElements)
}
const grid = createElement(
  'div',
  { className: 'appGrid' },
  header,
  createPage,
  bookmarksPage,
  homePage,
  settingsPage,
  navigation
)

document.body.append(grid)

function onNavigate(name) {
  if (name === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
    bookmarksPage.hidden = true
    settingsPage.hidden = true
    header.setText('Quiz App', 'Home')
  }

  if (name === 'Add Card') {
    homePage.hidden = true
    createPage.hidden = false
    bookmarksPage.hidden = true
    settingsPage.hidden = true
    header.setText('Quiz App', 'Add Card')
  }

  if (name === 'Bookmarks') {
    homePage.hidden = true
    createPage.hidden = true
    bookmarksPage.hidden = false
    settingsPage.hidden = true
    header.setText('Quiz App', 'Bookmarks')
  }

  if (name === 'Settings') {
    homePage.hidden = true
    createPage.hidden = true
    bookmarksPage.hidden = true
    settingsPage.hidden = false
    header.setText('Quiz App', 'Account & Settings')
  }
}
