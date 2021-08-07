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
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" required id="email" ref={emailInputRef}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" required id="password" ref={passwordInputRef}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export default UserLoginForm;