import {useHistory} from 'react-router-dom';

import {userInfo} from '../components/check_auth';
import NewBugForm from '../components/Bugs/new_bug_form';

function NewBugPage(){
    const history = useHistory();

    function newBugHandler(newBugData: any){

        fetch(
            'http://localhost:8080/bugs/',
            {
                method: "POST",
                body: newBugData,
                headers: {
                    "Authorization": userInfo.authorization,
                    "email": userInfo.email 
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            history.replace("/bugs")
        })
    }

    return(
        <section>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">New Bug</h1>
                    <NewBugForm onNewBug={newBugHandler}/>
                </div>
            </div>
        </section>
    );
}

export default NewBugPage;