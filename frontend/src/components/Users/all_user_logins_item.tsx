function UserItem(props:any){
    
    return(
        <tr>
            <td className="pl-2 pr-8 pt-4">{props.email}</td>
            <td className='pl-2 pr-8 pt-4'>{props.password}</td>
        </tr>
    )
}

export default UserItem;