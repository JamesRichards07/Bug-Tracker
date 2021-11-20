import {useHistory} from 'react-router-dom';

import UserLoginForm from '../components/UsersLogin/user_login_form';
import {userInfo} from '../components/check_auth';

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
            history.replace("/bugTracker/home");
        })
    };

    return (
        <section>
            <div className="container max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center p-10 rounded-lg shadow-xl">
                <UserLoginForm onLogin={userLoginHandler} />
            </div>
        </section>
    );
}

export default UserLoginPage;