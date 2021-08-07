import { Switch, Route} from 'react-router-dom';

import HomePage from '../../pages/Home';
import UsersPage from '../../pages/Users';
import BugsPage from '../../pages/Bugs';
import MainNavigation from '../layout/MainNavigation';

function LoggedInRoute(){
    return (
      <Switch>
        <Route path='/home' exact>
          <MainNavigation/>
          <HomePage/>
        </Route>
        <Route path='/users' exact>
          <MainNavigation/>
          <UsersPage/>
        </Route>
        <Route path='/bugs' exact>
          <MainNavigation/>
          <BugsPage/>
        </Route>
      </Switch>
    );
}

export default LoggedInRoute;
