import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import data from './constants/data'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Chuck from './pages/Chuck'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work/Work'
import { GlobalStyles } from './theme/GlobalStyles'
import { lightTheme, darkTheme } from './theme/themes'

const FlexContainer = styled.div(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  ' > main': {
    boxShadow: `0 2px 2px -2px ${theme.border}`,
    flexGrow: '1',
    minHeight: 'calc(100vh - 8.5rem)',
  },
}))

//TODO list:
//    - address any TODOs in files
//    - Styling:
//        - Add overlay to main content when mobile nav is open?
//    - personalize README
//    - Improve carousel experience on Chuck's page
//    - add Typescript?
//    - add tests? (not a ton of functionality)
//    - add audible click sounds?
//    - Longterm: add backend?

function App() {
  const {
    about,
    chuck,
    contact,
    footer,
    home,
    navigation,
    personalLinks,
    work,
  } = data
  const [theme, setTheme] = useState('light')
  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <div className="App">
          <GlobalStyles />
          <Header
            handleThemeClick={toggleTheme}
            navigation={navigation}
            theme={theme}
          />
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
              </Switch>
            </main>
            <Footer {...footer} links={personalLinks} />
          </FlexContainer>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
