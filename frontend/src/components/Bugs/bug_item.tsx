import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Fetch = require('../fetch');

function BugItem(props:any){
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([]);
    const viewImage = "http://" + props.image;

    function viewBug(){
        history.replace("./bugs/view/" + props.id)
    }

    function deleteBug(){
        history.replace("./bugs/delete/" + props.id)
    }

    useEffect(() => {
        setIsLoading(true);

        const url = 'http://localhost:8080/users/';

        Fetch.FetchAll(url, "GET", setIsLoading, setLoadedUsers);
    
    }, []);

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    let imageName = props.image !== null ? props.image.split("/")[3].slice(13).split(".")[0] : undefined;
    let submitter = props.submitter;
    let processor = props.processor;

    loadedUsers.map((user:any) => {
        if(props.submitter === user.id){
            submitter = `${user.firstName} ${user.lastName}, ${user.email}`;
        }
    })

    loadedUsers.map((user:any) => {
        if(props.processor === user.id){
            processor = `${user.firstName} ${user.lastName}, ${user.email}`;
        }
    })
    
    return(
        <tr>
            <td className="pl-2 pr-4 pt-4">{`${props.createdOn.slice(0,10)} ${props.createdOn.slice(11,16)} UTC`}</td>
            <td className="pl-2 pt-4">{props.application}</td>
            <td className="pl-2 pt-4">{props.description}</td>
            <td className="pl-2 pt-4">
                <a href={viewImage} className="text-blue-600">{imageName}</a>
            </td>
            <td className="pl-2 pt-4">{submitter}</td>
            <td className="pl-2 pt-4">{processor}</td>
            <td className="pl-2 pt-4">{props.status}</td>
            <td className="pl-2 pt-4">
                <div className="flex">
                    <button onClick={viewBug} className="px-2">
                        View/Edit
                    </button>
                    <button onClick={deleteBug} className="px-2">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default BugItem;