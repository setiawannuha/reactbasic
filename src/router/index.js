import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Detail from '../views/Detail'

const router = () => {
  return(
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
      <Route path="/about/:iduser">
        <Detail/>
      </Route>
    </Switch>
  )
}

export default router