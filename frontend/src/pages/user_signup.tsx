import {useHistory, Link} from 'react-router-dom';

import UserSignupForm from '../components/UsersLogin/user_sign_up_form';

function UserSignupPage(){
    const history = useHistory();

    function newUserHandler(newUserData: any){
        fetch(
            'http://localhost:8080/users/signup',
            {
                method: "POST",
                body: JSON.stringify(newUserData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            history.replace("/bugTracker")
        })
    }

    return(
        <section>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <UserSignupForm onNewUser={newUserHandler}/>
            </div>

            <div className="text-grey-dark mt-6 flex space-x-2">
                <h3>Already have an account?</h3>
                    <Link className="no-underline border-b border-blue text-blue-500" to="./login">Log in</Link>
            </div>
        </div>
        
        
        </section>
    );
}

export default UserSignupPage;