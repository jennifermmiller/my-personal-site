import { useState } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'
import styled, { ThemeProvider } from 'styled-components'
import 'focus-visible'

import data from './constants/data'
import Greeting from './components/Greeting/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Chuck from './pages/Chuck'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work/Work'
import PageNotFound from './pages/PageNotFound'
import { GlobalStyles } from './theme/GlobalStyles'
import { lightTheme, darkTheme } from './theme/themes'

const FocusVisible = styled.div({
  '&.js-focus-visible :focus:not(.focus-visible)': {
    outline: 'none',
  },
})

const FlexContainer = styled.div({
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const history = createBrowserHistory()

history.listen(() => {
  window.scrollTo(0, 0)
})

wrapHistory(history)

//TODO list:
//    - address any TODOs in files
//    - Styling:
//        - Add animation to nav/buttons
//        - Add overlay to main content when mobile nav is open?
//        - Add blurred background of code?
//    - personalize README
//    - Improve carousel experience on Chuck's page
//    - Replace propTypes with Typescript?
//    - add tests? (not a ton of functionality)
//    - add audible click sounds?
//    - Longterm: add backend? look into Netilify CMS

function App() {
  const { about, chuck, contact, footer, home, navigation, personalLinks, work } = data
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))

  return (
    <Router history={history}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <FocusVisible className="js-focus-visible focus-visible">
          <Greeting />
          <GlobalStyles />
          <Header handleThemeClick={toggleTheme} navigation={navigation} theme={theme} />
          <FlexContainer>
            <main>
              <Switch>
                <Route exact path="/about">
                  <About {...about} />
                </Route>
                <Route path="/work-experience">
                  <Work {...work} links={personalLinks} />
                </Route>
                <Route path="/contact">
                  <Contact {...contact} />
                </Route>
                <Route path="/about/chuck">
                  <Chuck {...chuck} />
                </Route>
                <Route exact path="/">
                  <Home {...home} />
                </Route>
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
            </main>
            <Footer {...footer} links={personalLinks} />
          </FlexContainer>
        </FocusVisible>
      </ThemeProvider>
    </Router>
  )
}

export default App
