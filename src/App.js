import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

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

//TODO:
//  Flush out work page
//  Fix prettier -- doesn't seem to be hitting all files
//  add Typescript
//  add tests? not a ton of functionality
//  Longterm: put data on server???
function App() {
  const { about, chuck, contact, footer, home, navigation, personalLinks, work } = data
  const [theme, setTheme] = useState('light')

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <div className="App">
          <GlobalStyles />
          <Header
            navigation={navigation}
            handleThemeClick={toggleTheme}
            theme={theme}
          />
          <main>
            <Switch>
              <Route path="/about">
                <About {...about} />
              </Route>
              <Route path="/work-experience">
                <Work {...work} links={personalLinks}/>
              </Route>
              <Route path="/contact">
                <Contact {...contact} />
              </Route>
              <Route path="/chuck">
                <Chuck {...chuck} />
              </Route>
              <Route path="/">
                <Home {...home} links={personalLinks}/>
              </Route>
            </Switch>
          </main>
          <Footer {...footer} />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
