import Header from './components/Header'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm'
import HomePage from './components/HomePage'

const cards = []

const header = Header('Quiz App', 'May the best win!')

const navigation = Navigation(onNavigate)

const form = CreateForm(onSubmit)

const homePage = HomePage()

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
  homePage.setCards(cards)
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
    homePage.show()
    createPage.hidden = true
    bookmarksPage.hidden = true
    settingsPage.hidden = true
    header.setText('Quiz App', 'Home')
  }

  if (name === 'Add Card') {
    homePage.hide()
    createPage.hidden = false
    bookmarksPage.hidden = true
    settingsPage.hidden = true
    header.setText('Quiz App', 'Add Card')
  }

  if (name === 'Bookmarks') {
    homePage.hide()
    createPage.hidden = true
    bookmarksPage.hidden = false
    settingsPage.hidden = true
    header.setText('Quiz App', 'Bookmarks')
  }

  if (name === 'Settings') {
    homePage.hide()
    createPage.hidden = true
    bookmarksPage.hidden = true
    settingsPage.hidden = false
    header.setText('Quiz App', 'Account & Settings')
  }
}
