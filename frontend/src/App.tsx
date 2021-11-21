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
            <Route path='/bugTracker' exact>
                <LoginNavigation/>
                <WelcomePage/>
            </Route>
            <Route path='/bugTracker/login' exact>
                <LoginNavigation/>
                <UserLoginPage/>
            </Route>
            <Route path='/bugTracker/signup' exact>
                <LoginNavigation/>
                <UserSignupPage/>
            </Route>
            <Route path='/bugTracker/home' exact>
                <MainNavigation/>
                <HomePage/>
            </Route>
            <Route path='/bugTracker/users' exact>
                <MainNavigation/>
                <AllUsersPage/>
            </Route>
            <Route path='/bugTracker/user/view/*' exact>
                <MainNavigation/>
                <UpdateUserPage/>
            </Route>
            <Route path='/bugTracker/user/delete/*' exact>
                <MainNavigation/>
                <DeleteUserPage/>
            </Route>
            <Route path='/bugTracker/bugs' exact>
                <MainNavigation/>
                <BugsPage/>
            </Route>
            <Route path='/bugTracker/bugs/new' exact>
                <MainNavigation/>
                <NewBugPage/>
            </Route>
            <Route path='/bugTracker/bugs/view/*' exact>
                <MainNavigation/>
                <UpdateBugPage/>
            </Route>
            <Route path='/bugTracker/bugs/delete/*' exact>
                <MainNavigation/>
                <DeleteBugPage/>
            </Route>
            <Route path='/bugTracker/userLogins' exact>
                <MainNavigation/>
                <AllUserLoginsPage/>
            </Route>
            </Switch>
        </div>
    );
};

export default App;