import { object } from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import About from '../pages/About'
import Chuck from '../pages/Chuck'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Work from '../pages/Work/Work'
import PageNotFound from '../pages/PageNotFound'

const Routes = (props) => {
  const { about, chuck, contact, home, work } = props

  return (
    <Switch>
      <Route exact path="/about">
        <About {...about} />
      </Route>
      <Route path="/work-experience">
        <Work {...work} />
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
  )
}

Routes.propTypes = {
  about: object.isRequired,
  chuck: object.isRequired,
  contact: object.isRequired,
  home: object.isRequired,
  work: object.isRequired,
}

export default Routes
