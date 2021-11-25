import {Link} from "react-router-dom";

function WelcomePage(props: any){  
    return(    
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <h1 className="font-bold text-center text-lg pb-5"> Welcome to Tracker! </h1>
        
            <h2 className="pb-5 text-center">
                Internal communication is paramount for a business, and this program strives to 
            provide a usable tool to track bugs, issues or tasks which can then be assigned 
            to designated team members to fix or complete.
            </h2>

            <h3>Please 
                <Link className="text-blue-600" to="/login"> Login </Link>
                
                or 
                
                <Link className='text-green-600' to="/signup"> Sign Up </Link>
                
                to get started.</h3>
            


        </div>
    );
}

export default WelcomePage;