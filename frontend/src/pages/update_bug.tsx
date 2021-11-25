import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {userInfo} from '../components/check_auth';
import UpdateBugForm from '../components/Bugs/update_bug_form';

const Repo = require('../components/fetch');
const CheckAuth = require('../components/check_auth');

function UpdateBugPage(props: any){
    CheckAuth.CheckAuth();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedBug, setLoadedBug] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const id = window.location.href.split("/")[6];  
        const bugUrl = 'http://localhost:8080/bugs/' + id;

        Repo.FetchById(bugUrl, "GET", setIsLoading, setLoadedBug);
    },[])

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    function UpdateBugHandler(updateBugData:any){
        const id = window.location.href.split("/")[6];
        const url = 'http://localhost:8080/bugs/' + id;

        fetch(
            url, 
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": userInfo.authorization, 
                    "email": userInfo.email
                },
                body: JSON.stringify(updateBugData)
            }
        )
        .then(() => {
            history.replace("/bugs")
        })
    } 

    return(
        <section className="bg-gray-100">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Bug Information</h1>
                    <UpdateBugForm onSave={UpdateBugHandler} selectedBug={loadedBug[0]}/>
                </div>
            </div>
        </section>
    );
}

export default UpdateBugPage;