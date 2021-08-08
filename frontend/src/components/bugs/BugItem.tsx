function BugItem(props:any){
    return(
        <li>
            <div>
                <h3>{props.createdOn}</h3>
                <h3>{props.application}</h3>
                <h3>{props.description}</h3>
                <h3>{props.submitter}</h3>
                <h3>{props.processor}</h3>
            </div>
        </li>
    )
}

export default BugItem;