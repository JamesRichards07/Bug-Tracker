import React, { useRef } from "react";

function UserLoginForm(props: any){
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;
    
        const loginData: object = {
            email: enteredEmail,
            password: enteredPassword
        };

        props.onLogin(loginData);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-grey-darker text-md font-bold mb-2">
                    Username
                </label>
                <input 
                    type="text" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    placeholder="Username"
                    ref={emailInputRef}
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-md font-bold mb-2">
                    Password
                </label>
                <input 
                    type="password"
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                    id="password"  
                    placeholder="******************"
                    ref={passwordInputRef}
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button 
                    className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" 
                >
                    Sign In
                </button>
            </div>
    </form>
    );
}

export default UserLoginForm;