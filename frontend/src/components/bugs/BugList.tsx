import BugItem from './BugItem';

function BugList(props:any){
    return (
        <ul>
            {props.bugs.map((bug:any) => {
                return (
                <BugItem
                    key={bug.id}
                    id={bug.id}
                    createdOn={bug.createdOn}
                    application={bug.application}
                    description={bug.description}
                    submitter={bug.submitter}
                    processer={bug.processor}
                />
                )
            })}
        </ul>
    )
}

export default BugList;