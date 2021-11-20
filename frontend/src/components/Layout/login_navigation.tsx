import {Link} from 'react-router-dom';

function LoginNavigation(){
    return(
        <header>
            <nav className="fixed relative flex inset-x-0 top-0 bg-gray-200 text-white z-10 p-3">
                <div className="flex align-center text-black text-2xl font-bold top-0 left-0">
                    <Link to='/bugTracker/home'>Tracker</Link>
                </div>
                <ul className='absolute flex text-black right-0 space-x-10 pr-7'> 
                    <li>
                        <Link className='text-center item-center' to="/bugTracker/login">Login</Link>
                    </li>
                    <li>
                        <Link className='bg-green-600 px-2 py-1 text-white rounded-full h-9 w-9 text-center' to="/bugTracker/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default LoginNavigation;