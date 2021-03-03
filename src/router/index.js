import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Detail from '../views/Detail'
import Perhitungan from '../views/Perhitungan'
import Users from '../views/Users/Users'

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
      <Route path="/perhitungan" exact>
        <Perhitungan/>
      </Route>
      <Route path="/users" exact>
        <Users/>
      </Route>
    </Switch>
  )
}

export default router