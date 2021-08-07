function UserItem(props:any){
    return(
        <li>
            <div>
                <h3>{props.firstName}</h3>
                <h3>{props.lastName}</h3>
                <h3>{props.team}</h3>
                <h3>{props.position}</h3>
                <h3>{props.email}</h3>
            </div>
        </li>
    )
}

export default UserItem;