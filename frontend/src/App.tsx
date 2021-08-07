import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/Home';
import AllUsersPage from './pages/AllUsers';
import BugsPage from './pages/AllBugs';
import WelcomePage from './pages/Welcome';
import UserLoginPage from './pages/UserLogin';
import UserSignupPage from './pages/UserSignup';
import MainNavigation from './components/layout/MainNavigation';
import LoginNavigation from './components/layout/LoginNavigation';

function App(){
    return (
        <div>
            <MainNavigation/>
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
            <Route path='/home' exact>
                <HomePage/>
            </Route>
            <Route path='/users' exact>
                <AllUsersPage/>
            </Route>
            <Route path='/bugs' exact>
                <BugsPage/>
            </Route>
            </Switch>
        </div>
    );
};

export default App;