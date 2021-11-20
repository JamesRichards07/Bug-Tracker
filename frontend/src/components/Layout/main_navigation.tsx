import {Link} from 'react-router-dom';

function MainNavigation(){
    return(
        <header>
            <nav className="fixed relative flex inset-x-0 top-0 bg-gray-200 text-white z-10 p-3">
                <div className="flex text-black text-2xl font-bold top-0 left-0">
                    <Link to='/bugTracker/home'>Tracker</Link>
                </div>
                <ul className='absolute flex text-black right-1 space-x-7 pr-28'> 
                    <li>
                        <Link to="/bugTracker/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/bugTracker/bugs">Bugs</Link>
                    </li>
                    <li>
                        <Link to='/bugTracker/users'>Users</Link>
                    </li>
                    <li>
                        <Link to='/bugTracker/userLogins'>User Logins</Link> 
                    </li>
                </ul>
                <div className="absolute flex text-red-600 text-bold top-3 right-2 pr-5">
                    <Link to="/bugTracker">Log Out</Link>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation;