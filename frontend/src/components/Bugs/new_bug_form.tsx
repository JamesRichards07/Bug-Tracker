import React, {useRef, useState} from 'react';

function NewBugForm(props: any){

    const [file, setFile] = useState("");

    const applicationInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);

    function sumbitUserHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const enteredApplication = applicationInputRef.current?.value;
        const enteredDescription = descriptionInputRef.current?.value;

        let formData = new FormData();

        formData.append('application', `${enteredApplication}`);
        formData.append('description', `${enteredDescription}`);
        formData.append('bugImage', file);

        props.onNewBug(formData);
    }

    return(
        <form id="myForm" onSubmit={sumbitUserHandler}>
            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                id="application"
                name="application"
                placeholder="Application" 
                ref={applicationInputRef}
                required
            />

            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                id="description"
                name="description"
                placeholder="Description" 
                ref={descriptionInputRef}
                required
            />

            <input
                type="file"
                onChange={event => {
                    const selectedFile:any = event.target!.files![0];
                    setFile(selectedFile);
                }}
                className=""
                id="image"
                name="image"
            />

            <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
                Create Bug
            </button>
        </form>
    );
}



export default NewBugForm;