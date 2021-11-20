import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {userInfo} from '../components/check_auth';
import UpdateUserForm from '../components/Users/update_user_form';

const Repo = require('../components/fetch');
const CheckAuth = require('../components/check_auth');

function UpdateUserPage(props: any){
    CheckAuth.CheckAuth();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedUser, setLoadedUser] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const id = window.location.href.split("/")[6];  
        const url = 'http://localhost:8080/users/' + id;

        Repo.FetchById(url, "GET", setIsLoading, setLoadedUser);
    },[])

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    function UpdateUserHandler(updateUserData:any){
        const id = window.location.href.split("/")[6];
        const url = 'http://localhost:8080/users/' + id;

        fetch(
            url, 
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": userInfo.authorization, 
                    "email": userInfo.email
                },
                body: JSON.stringify(updateUserData)
            }
        )
        .then(() => {
            history.replace("/bugTracker/users")
        })
    } 

    return(
        <section className="bg-gray-100">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 pt-8 pb-36 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">User Information</h1>
                    <UpdateUserForm onSave={UpdateUserHandler} selectedUser={loadedUser}/>
                </div>
            </div>
        </section>
    );
}

export default UpdateUserPage;