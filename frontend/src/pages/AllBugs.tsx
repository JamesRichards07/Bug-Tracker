import {useState, useEffect} from 'react';
import BugList from '../components/bugs/BugList';
import userInfo from "../components/users/LoggedInUserInfo";

const CheckAuth = require('../components/CheckAuth');

function AllBugsPage(){
    CheckAuth.CheckAuth();
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBugs, setLoadedBugs] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'http://localhost:8080/bugs',
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
            const bugs:any = [];

            for(const key in data){
                const bug = {
                    id: key,
                    ...data[key]        
                };

                bugs.push(bug);
            };

            setIsLoading(false);
            setLoadedBugs(bugs);
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
            <h1>All Bugs page.</h1>
            <BugList bugs={loadedBugs}/>
        </section>
    );
}

export default AllBugsPage;

// const CheckAuth = require('../components/CheckAuth');

// function BugsPage(){
//     CheckAuth.CheckAuth();
    
//     return(
//         <h1>Bugs page.</h1>
//     );
// }

// export default BugsPage;