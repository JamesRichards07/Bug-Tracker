import {useState, useEffect} from 'react';
import UserLoginsList from '../components/Users/all_user_logins_list';

const Repo = require('../components/fetch');
const CheckAuth = require('../components/check_auth');

function AllUsersPage(){
    CheckAuth.CheckAuth();
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsersLogin, setLoadedUsersLogin] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const url = 'http://localhost:8080/user_login';

        Repo.FetchAll(url, "GET", setIsLoading, setLoadedUsersLogin);
    
    }, []);
    
    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return(
        <section>
            <div className="container max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center px-2 py-10 rounded-lg shadow-xl">
                <UserLoginsList users={loadedUsersLogin}/>
            </div>
        </section>
    );
}

export default AllUsersPage;