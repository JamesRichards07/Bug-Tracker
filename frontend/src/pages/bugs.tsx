import {useState, useEffect} from 'react';
import BugList from '../components/Bugs/bug_list';

const Repo = require('../components/fetch');
const CheckAuth = require('../components/check_auth');

function BugsPage(){
    CheckAuth.CheckAuth();
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBugs, setLoadedBugs] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const url = 'http://localhost:8080/bugs/';

        Repo.FetchAll(url, "GET", setIsLoading, setLoadedBugs);
    
    }, []);

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };
    
    return(
        <section>
            <div className=" mx-auto flex-1 flex flex-col py-5 rounded-lg shadow-xl">
                <BugList bugs={loadedBugs}/>
            </div>
        </section>
    );
}

export default BugsPage;