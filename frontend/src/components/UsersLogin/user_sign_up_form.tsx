import {useRef} from 'react';

function UserSignUpForm(props: any){

    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
    const teamInputRef = useRef<HTMLInputElement>(null);
    const positionInputRef = useRef<HTMLInputElement>(null);

    function sumbitUserHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current?.value;
        const enteredLastName = lastNameInputRef.current?.value;
        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current?.value;
        const enteredTeam = teamInputRef.current?.value;
        const enteredPosition = positionInputRef.current?.value;

        const userData: object = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            team: enteredTeam,
            position: enteredPosition,
        };

        if(enteredPassword === enteredConfirmPassword){
            props.onNewUser(userData);
        }
        else{
            alert("Passwords do not match");
        } 
    }

    return(
        <form onSubmit={sumbitUserHandler}>
            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstName"
                placeholder="First name" 
                ref={firstNameInputRef}
                required
            />

            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastName"
                placeholder="Last name" 
                ref={lastNameInputRef}
                required
            />

            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="team"
                placeholder="Team" 
                ref={teamInputRef}
                required
            />

            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                ref={emailInputRef}
                required
            />

            <input 
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" 
                ref={passwordInputRef}
                required
            />

            <input 
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password" 
                ref={confirmPasswordInputRef}
                required
            />

            <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
                Create Account
            </button>
        </form>
    );
}



export default UserSignUpForm;