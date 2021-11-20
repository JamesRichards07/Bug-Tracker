import {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaAngleDown} from 'react-icons/fa';
import dropdown from '../dropdown';
import {dropdownUserPositions} from '../dropdown_items';

function UpdateUserForm(props: any){

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [currentPosition, setCurrentPosition] = useState("");

    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const teamInputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        setCurrentPosition(props.selectedUser[0].position);
    },[props.selectedUser])

    function SubmitUpdateHandler(event: React.FormEvent<HTMLFormElement>): object{
        event.preventDefault();

        const currentFirstName = props.selectedUser.firstName;
        const currentLastName = props.selectedUser.lastName;
        const currentTeam = props.selectedUser.team;

        let updatedFirstName: string|undefined = "";
        let updatedLastName: string|undefined = "";
        let updatedTeam: string|undefined = "";
        let updatedPosition: string|undefined = "";

        firstNameInputRef.current !== currentFirstName ? 
            updatedFirstName = firstNameInputRef.current?.value : updatedFirstName = currentFirstName; 

        lastNameInputRef.current !== currentLastName ?
            updatedLastName = lastNameInputRef.current?.value : updatedLastName = currentLastName;

        teamInputRef.current !== currentTeam ?
            updatedTeam = teamInputRef.current?.value : updatedTeam = currentTeam;

        updatedPosition = currentPosition;

        const updatedUserData: object = {
            id: props.selectedUser.id,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            team: updatedTeam,
            position: updatedPosition
        };

        return props.onSave(updatedUserData);
    };

    return(
        <section>
            <form onSubmit={SubmitUpdateHandler}>
                <div className="flex space-x-3">
                    <div className="pr-3 pt-3">
                        <h3>First Name:</h3>
                    </div>
                    <input 
                        type="text"
                        className="block border border-grey-light p-3 rounded mb-4 bg-blue-50"
                        name="firstName"
                        placeholder="First Name" 
                        ref={firstNameInputRef}
                        defaultValue={props.selectedUser[0].firstName}
                        required
                    />
                </div>
                <div className="flex space-x-3">
                    <div className="pr-3 pt-3">
                        <h3>Last Name:</h3>
                    </div>
                    <input 
                        type="text"
                        className="block border border-grey-light p-3 rounded mb-4 bg-blue-50"
                        name="lastName"
                        placeholder="Last Name" 
                        ref={lastNameInputRef}
                        defaultValue={props.selectedUser[0].lastName}
                        required
                    />
                </div>
                <div className="flex space-x-12">
                    <h3 className="pr-3 pt-3">Email:</h3>
                    <div className="block border border-grey-light pl-3 pt-3 pb-3 pr-14 rounded mb-4 bg-white">
                        <h3 className="pr-1">{props.selectedUser[0].email}</h3>
                    </div>
                </div>
                <div className="flex space-x-12">
                    <div className="pr-3 pt-3">
                        <h3>Team:</h3>
                    </div>
                    <input 
                        type="text"
                        className="block border border-grey-light p-3 rounded mb-4 bg-blue-50"
                        name="team"
                        placeholder="Team" 
                        ref={teamInputRef}
                        defaultValue={props.selectedUser[0].team}
                        required
                    />
                </div>
                <div>
                    <div className="flex space-x-7">
                        <div className="pr-3 pt-3">
                            <h3>Position:</h3>
                        </div>
                        <div className="flex block border border-grey-light rounded bg-blue-50">
                            <div className="flex pr-1 bg-blue-50">
                                <div className="pl-3 pt-3 pb-3 pr-24 rounded">
                                    <h3>{currentPosition}</h3>
                                </div>
                                <button 
                                    type="button"
                                    className="rounded pt-3 pb-3 z-50" 
                                    onClick={()=> setDropdownIsOpen(!dropdownIsOpen)}
                                >
                                    <FaAngleDown/>
                                </button>
                                <div className="absolute pt-12 pr-24 rounded transparant">
                                    <div className='border border-grey-light pr-28 rounded bg-blue-50'>
                                        {dropdownIsOpen ? dropdown(props.selectedUser[0].position, dropdownUserPositions, setCurrentPosition, setDropdownIsOpen) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-28 pt-10">
                    <div className="p-2">
                        <Link className="rounded text-black" to="/bugTracker/users">{"<-- Back"}</Link>
                    </div>
                    <button 
                        type="submit"
                        className="border-2 border-green-500 px-7 py-1 rounded bg-green-500 text-white hover:bg-green-dark"
                    >
                        Update
                    </button>
                </div>
            </form>
        </section>
    )
}

export default UpdateUserForm;