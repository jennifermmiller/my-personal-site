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

//TODO list:
//    - address any TODOs in files
//    - Styling:
//        - Add animation to nav links/contact buttons
//        - Change background? thoughts: blurred image of code
//    - personalize README
//    - Improve carousel experience on Chuck's page
//    - Replace propTypes with Typescript?
//    - add tests? (not a ton of functionality)
//    - add audible click sounds?
//    - Longterm: add backend? look into Netilify CMS

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
