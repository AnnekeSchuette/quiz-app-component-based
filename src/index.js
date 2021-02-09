import Card from './components/Card'
import Header from './components/Header'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm'

const { el: headerEl } = Header('Quiz App', 'May the best win!')

const navigation = Navigation(onNavigate)

const homePage = createElement(
  'main',
  { className: 'HomePage', hidden: false },
  Card('Foo bar?', 'Bar baz!'),
  Card('Bar bar?', 'Bar baz!'),
  Card('Baz bar?', 'Bar baz!')
)

const form = CreateForm(onSubmit)
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
  console.log(question, answer)
}

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  homePage,
  createPage,
  bookmarksPage,
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
  }

  if (name === 'Add Card') {
    homePage.hidden = true
    createPage.hidden = false
    bookmarksPage.hidden = true
    settingsPage.hidden = true
  }

  if (name === 'Bookmarks') {
    homePage.hidden = true
    createPage.hidden = true
    bookmarksPage.hidden = false
    settingsPage.hidden = true
  }

  if (name === 'Setting') {
    homePage.hidden = true
    createPage.hidden = true
    bookmarksPage.hidden = true
    settingsPage.hidden = false
  }
}
