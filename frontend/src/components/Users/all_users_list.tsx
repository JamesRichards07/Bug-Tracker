import UsersItem from './all_users_item';

function UserList(props:any){
    return (
        <table>
             <tr>
                <th className="bg-gray-200 border text-left px-2 py-2">Name:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Team:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Title:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Email:</th>
                <th className="bg-gray-200 border text-left px-2 py-2"></th>
            </tr>
            {props.users.map((user:any) => {
                return (
                <UsersItem
                    key={user.id}
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    team={user.team}
                    position={user.position}
                />
                )
            })}
        </table>
    )
}

export default UserList;