import {Link} from 'react-router-dom';
import BugItem from './bug_item';

function BugList(props:any){
    
    return (
        <table>
             <tr>
                <th className="bg-gray-200 border text-left px-2 py-2">Created On:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Affected Application:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Description:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Images:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Posted By:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Assigned To:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Status:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">
                    <Link className="bg-green-400 px-1 text-white rounded-full h-8 w-44 text-lg text-center" to="/bugs/new">
                        + Create New
                    </Link>
                </th>
            </tr>
            {props.bugs !== undefined ? props.bugs.map((bug:any) => {
                return (
                <BugItem
                    key={bug.id}
                    id={bug.id}
                    createdOn={bug.createdOn}
                    application={bug.application}
                    description={bug.description}
                    image={bug.imageURL}
                    submitter={bug.submitter}
                    processor={bug.processor}
                    status={bug.status}
                />
                )
            }) : null}
        </table>
    )
}

export default BugList;