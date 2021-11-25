import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import {FaAngleDown} from 'react-icons/fa';
import dropdown from '../dropdown';
import {dropdownBugStatus} from '../dropdown_items';

const Repo = require('../fetch');

interface User {
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    team:string
    position:string
}

function UpdateBugForm(props: any){

    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([]);
    const [firstDropdownIsOpen, setFirstDropdownIsOpen] = useState(false);
    const [secondDropdownIsOpen, setSecondDropdownIsOpen] = useState(false);
    const [currentProcessor, setCurrentProcessor] = useState<string|undefined>(undefined);
    const [currentStatus, setCurrentStatus] = useState("");

    const applicationInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    const viewImage = "http://" + props.selectedBug.imageURL;
    const imageName = props.selectedBug.imageURL !== null ? props.selectedBug.imageURL.split("/")[3].slice(13).split(".")[0] : undefined;

    useEffect(() => {
        setIsLoading(true);

        const url = 'http://localhost:8080/users/';

        Repo.FetchAll(url, "GET", setIsLoading, setLoadedUsers);

        setCurrentStatus(props.selectedBug.status);
    
    },[props.selectedBug]);

    useEffect(() => {
        setIsLoading(true);

        if(loadedUsers.length > 0 && props.selectedBug.processor !== null){
            const findCurrentProcessor:User = loadedUsers.filter((user: User) => props.selectedBug.processor === user.id)[0];
            setCurrentProcessor(`${findCurrentProcessor.firstName} ${findCurrentProcessor.lastName}, ${findCurrentProcessor.email}`);
        }

        setIsLoading(false);
    },[isLoading, loadedUsers, props.selectedBug.processor]);

    const userChoices:string[] = loadedUsers.map((user: User):string => {
        return `${user.firstName} ${user.lastName}, ${user.email}`;
    });

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    function SubmitUpdateHandler(event: React.FormEvent<HTMLFormElement>): object{
        event.preventDefault();

        const currentApplication = props.selectedBug.application;
        const currentDescription = props.selectedBug.description;
        const newProcessor:User = loadedUsers.filter((user: User) => currentProcessor?.split(" ")[2] === user.email)[0];
         
        let updatedApplication: string|undefined = "";
        let updatedDescription: string|undefined = "";
        let updatedProcessor: string|undefined = "";
        let updatedStatus: string|undefined = "";

        applicationInputRef.current !== currentApplication? 
            updatedApplication = applicationInputRef.current?.value : updatedApplication = currentApplication; 

        descriptionInputRef.current !== currentDescription ?
            updatedDescription = descriptionInputRef.current?.value : updatedDescription = currentDescription;

        newProcessor.id !== undefined ? 
            updatedProcessor = newProcessor.id : updatedProcessor = undefined;
            
        updatedStatus = currentStatus;
            
        const updatedBugData:{processor:string|undefined, application: string|undefined, description: string|undefined, status: string } = {
            processor: updatedProcessor,
            application: updatedApplication,
            description: updatedDescription,
            status: updatedStatus
        };

        return props.onSave(updatedBugData);
    };

    return(
        <form onSubmit={SubmitUpdateHandler}>
            <div className="flex space-x-8">
                <h3>
                    Created on: 
                </h3>
                <div
                    className="rounded mb-4" 
                    id="createdOn" 
                    placeholder="Created On"
                >
                    {`${props.selectedBug.createdOn.slice(0,10)} ${props.selectedBug.createdOn.slice(11,16)} UTC`} 
                </div>
            </div>
            <div className="flex space-x-10">
                <h3>
                    Posted by:
                </h3>
                <div 
                    className="mb-4"
                    id="submitter"
                    placeholder="Submitter"
                    >
                    {loadedUsers.map((user:User) => {
                        if(props.selectedBug.submitter === user.id){
                            return `${user.firstName} ${user.lastName}, ${user.email}`
                        }
                    })}
                </div>
            </div>
            <div className="flex space-x-6 pb-4">
                <div className="flex pr-3 pt-3">
                    <h3>Assign to:</h3>
                </div>
                <div className="flex block border border-grey-light rounded bg-blue-50">
                    <div className="flex pr-1 mb-4 bg-blue-50">
                        <div className="pr-72 rounded">
                            <div className="absolute pt-2 pl-3">
                                {currentProcessor !== undefined ? currentProcessor : undefined}
                            </div>
                        </div>
                        <button 
                            type="button"
                            id="btn-1"
                            className="rounded pt-3 z-50" 
                            onClick={()=> setFirstDropdownIsOpen(!firstDropdownIsOpen)}
                        >
                            <FaAngleDown/>
                        </button>
                        <div className="absolute pt-11 rounded transparant">
                            <div className='border rounded bg-blue-50 pr-12'>
                                {firstDropdownIsOpen ? dropdown(currentProcessor, userChoices, setCurrentProcessor, setFirstDropdownIsOpen) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-3">
                <div className="pr-3">
                    <h3 className="pt-1 pl-2"> Affected</h3>
                    <h3>Application:</h3>
                </div>
                <input 
                    type="text"
                    className="block border border-grey-light p-3 pr-24 rounded mb-4 bg-blue-50"
                    name="application"
                    placeholder="Application" 
                    ref={applicationInputRef}
                    defaultValue={props.selectedBug.application}
                    required
                />
            </div>
            
            <div className="pb-1 pt-3">
                Description:
            </div>
            <textarea
                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-50"
                name="description"
                placeholder="Description" 
                rows={4}
                ref={descriptionInputRef}
                defaultValue={props.selectedBug.description}
                required
            >
            </textarea> 
            <div className="flex space-x-20">
                <div className="pb-3 pt-3">
                    <h3>Image:</h3>
                </div>
                <div className="mb-4 pt-3 pb-3">
                    <a href={viewImage} className="text-blue-600">{imageName}</a>
                </div>
            </div>
            <div className="flex space-x-12">
                <div className="pr-3 pt-3">
                    <h3>Status:</h3>
                </div>
                <div className="flex block border border-grey-light rounded bg-blue-50">
                    <div className="flex pr-1 bg-blue-50">
                        <div className="pl-3 pt-3 pb-3 pr-24 rounded">
                            <h3>{currentStatus}</h3>
                        </div>
                        <button 
                            type="button"
                            id="btn-2"
                            className="rounded pt-3 pb-3 z-50" 
                            onClick={()=> setSecondDropdownIsOpen(!secondDropdownIsOpen)}
                        >
                            <FaAngleDown/>
                        </button>
                        <div className="absolute pt-12 pr-24 rounded">
                            <div className='border pr-20 rounded bg-blue-50'>
                                {secondDropdownIsOpen ? dropdown(currentStatus, dropdownBugStatus, setCurrentStatus, setSecondDropdownIsOpen) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-56 pt-12">
                <div className="p-2">
                    <Link className="rounded text-black pl-3" to="/bugs">{"<-- Back"}</Link>
                </div>
                <button 
                    type="submit"
                    className="border-2 border-green-500 px-7 py-1 rounded bg-green-500 text-white hover:bg-green-dark"
                >
                    Update
                </button>
            </div>
        </form>
    )
}

export default UpdateBugForm;