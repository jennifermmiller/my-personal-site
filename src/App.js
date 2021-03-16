import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import Greeting from './components/Greeting'
import PageShell from './components/PageShell'
import data from './constants/data'

const history = createBrowserHistory()

history.listen(() => {
  window.scrollTo(0, 0)
})

wrapHistory(history)

function App() {
  return (
    <>
      <Greeting />
      <Router history={history}>
        <PageShell {...data} />
      </Router>
    </>
  )
}

export default App
