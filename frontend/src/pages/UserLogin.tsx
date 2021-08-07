import {useHistory} from 'react-router-dom';

import WelcomePage from './Welcome';
import UserLoginForm from '../components/users/UserLoginForm';
import userInfo from '../components/users/LoggedInUserInfo';

function UserLoginPage(props:any){
    const history = useHistory();

    function userLoginHandler(loginData: any){
        fetch(
            'http://localhost:8080/users/login',
            {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            userInfo.email = loginData.email;
            userInfo.authorization = "Bearer " + data.token;
            userInfo.userIsloggedIn = true;
            history.replace("/home")
        })
    };

    return (
        <section>
            <div><WelcomePage/></div>
            <h1>Please login.</h1>
            <UserLoginForm onLogin={userLoginHandler} />
        </section>
    );
}

export default UserLoginPage;