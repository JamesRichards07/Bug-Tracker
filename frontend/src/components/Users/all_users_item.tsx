import { useHistory } from "react-router-dom";
import {selectedUser} from '../check_auth';

function UserItem(props:any){
    const history = useHistory();

    function viewUser(){
        history.replace("./user/view/" + props.id)
    }

    function deleteUser(){
        selectedUser.email = props.email;
        history.replace("./user/delete/" + props.id)
    }
    
    return(
        <tr>
            <td className="pl-2 pr-8 pt-4">{props.firstName + " " + props.lastName}</td>
            <td className="pl-2 pr-8 pt-4">{props.team}</td>
            <td className="pl-2 pr-8 pt-4">{props.position}</td>
            <td className="pl-2 pr-8 pt-4">{props.email}</td>
            <td className="pl-2 pr-8 pt-4">
                <div className="flex">
                    <button onClick={viewUser} className="px-2">
                        View/Edit
                    </button>
                    <button onClick={deleteUser} className="px-2">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default UserItem;