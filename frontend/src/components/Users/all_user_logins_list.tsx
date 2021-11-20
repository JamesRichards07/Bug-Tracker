import UserLoginsItem from './all_user_logins_item';

function UserList(props:any){
    return (
        <table>
             <tr>
                <th className="bg-gray-200 border text-left px-2 py-2">Email:</th>
                <th className="bg-gray-200 border text-left px-2 py-2">Password:</th>
            </tr>
            {props.users.map((user:any) => {
                return (
                <UserLoginsItem
                    key={user.id}
                    id={user.id}
                    email={user.email}
                    password={user.password}
                />
                )
            })}
        </table>
    )
}

export default UserList;