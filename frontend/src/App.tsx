import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/Home';
import AllUsersPage from './pages/all_users';
import AllUserLoginsPage from './pages/all_user_logins';
import BugsPage from './pages/bugs';
import WelcomePage from './pages/Welcome';
import UserLoginPage from './pages/user_login';
import UserSignupPage from './pages/user_signup';
import MainNavigation from './components/Layout/main_navigation';
import LoginNavigation from './components/Layout/login_navigation';
import DeleteUserPage from './pages/delete_user';
import DeleteBugPage from './pages/delete_bug';
import NewBugPage from './pages/bug_new';
import UpdateUserPage from './pages/update_user';
import UpdateBugPage from './pages/update_bug';

function App(){
    return (
        <div>
            <Switch>
            <Route path='/' exact>
                <LoginNavigation/>
                <WelcomePage/>
            </Route>
            <Route path='/login' exact>
                <LoginNavigation/>
                <UserLoginPage/>
            </Route>
            <Route path='/signup' exact>
                <LoginNavigation/>
                <UserSignupPage/>
            </Route>
            <Route path='/home' exact>
                <MainNavigation/>
                <HomePage/>
            </Route>
            <Route path='/users' exact>
                <MainNavigation/>
                <AllUsersPage/>
            </Route>
            <Route path='/user/view/*' exact>
                <MainNavigation/>
                <UpdateUserPage/>
            </Route>
            <Route path='/user/delete/*' exact>
                <MainNavigation/>
                <DeleteUserPage/>
            </Route>
            <Route path='/bugs' exact>
                <MainNavigation/>
                <BugsPage/>
            </Route>
            <Route path='/bugs/new' exact>
                <MainNavigation/>
                <NewBugPage/>
            </Route>
            <Route path='/bugs/view/*' exact>
                <MainNavigation/>
                <UpdateBugPage/>
            </Route>
            <Route path='/bugs/delete/*' exact>
                <MainNavigation/>
                <DeleteBugPage/>
            </Route>
            <Route path='/userLogins' exact>
                <MainNavigation/>
                <AllUserLoginsPage/>
            </Route>
            </Switch>
        </div>
    );
};

export default App;