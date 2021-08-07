import { Switch, Route} from 'react-router-dom';

import WelcomePage from '../../pages/Welcome';
import UserLoginPage from '../../pages/UserLogin';
import UserSignupPage from '../../pages/UserSignup';
import LoginNavigation from "../layout/LoginNavigation";

function NotLoggedInRoute() {
  
  return (
      <Switch>
        <Route path='/' exact>
          <WelcomePage/>
          <LoginNavigation/>
        </Route>
        <Route path='/login' exact>
          <UserLoginPage/>
        </Route>
        <Route path='/signup' exact>
          <UserSignupPage/>
        </Route>
      </Switch>
  );
}

export default NotLoggedInRoute;
