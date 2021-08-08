import {useState, useEffect} from 'react';
import UserList from '../components/users/UserList';
import userInfo from "../components/users/LoggedInUserInfo";

const CheckAuth = require('../components/CheckAuth');

function AllUsersPage(){
    CheckAuth.CheckAuth();
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'http://localhost:8080/users',
            {
                method: "GET",
                headers: {
                    "Authorization": userInfo.authorization
                }
            }
        )
        .then((response) => {
            return(
                response.json()
            )
        })
        .then((data) => {
            const users:any = [];

            for(const key in data){
                const user = {
                    id: key,
                    ...data[key]        
                };

                users.push(user);
            };

            setIsLoading(false);
            setLoadedUsers(users);
        });
    }, [])

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    return(
        <section>
            <h1>All Users page.</h1>
            <UserList users={loadedUsers}/>
        </section>
    );
}

export default AllUsersPage;