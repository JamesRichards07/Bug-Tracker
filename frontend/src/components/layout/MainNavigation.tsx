import {Link} from 'react-router-dom';

function MainNavigation(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/bugs">Bugs</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;