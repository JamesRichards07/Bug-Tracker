import { useHistory } from 'react-router-dom';
import {userInfo} from '../check_auth';

function BugModal(props:any){
    const history = useHistory();

    function confirmHandler(){
        const id = window.location.href.split("/")[6];
        const url = 'http://localhost:8080/bugs/' + id;

        fetch(
            url,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/JSON',
                    "Authorization": userInfo.authorization,
                    "email": userInfo.email 
                },
            }
        ).then(() => {
            history.replace("/bugtracker/bugs");
        })
    }

    return (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center text-center">
            <div className="bg-white rounded z-50">
                <div className="m-2 pb-2">
                    <h1>Confirm Delete?</h1>
                </div>
                <div className="m-2">
                    <div className="space-x-5">
                        <button className="border-2 border-gray-300 px-2 py-1 rounded text-yellow-600" onClick={props.onCancel}>Cancel</button>
                        <button className="bg-red-600 px-2 py-1 text-white rounded" onClick={confirmHandler}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default BugModal;