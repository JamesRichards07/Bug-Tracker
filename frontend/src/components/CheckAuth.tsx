import { Switch, Route} from 'react-router-dom';

import WelcomePage from '../pages/Welcome';
import LoginNavigation from './layout/LoginNavigation';

const userInfo = {
   userIsloggedIn: false
}

exports.CheckAuth = (check: boolean) => {
   if(!check){
      return(
         <div>
            <Switch>
            <Route path='/' exact>
                <WelcomePage/>
                <LoginNavigation/>
            </Route>
            </Switch>
         </div>
         
      )
   }
}

export default userInfo;