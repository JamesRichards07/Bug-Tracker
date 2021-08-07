import UserItem from './UserItem';

function UserList(props:any){
    return (
        <ul>
            {props.users.forEach((user:any) => {
                <UserItem
                    key={user.id}
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    team={user.team}
                    position={user.position}
                />
            })}
        </ul>
    )
}

export default UserList;