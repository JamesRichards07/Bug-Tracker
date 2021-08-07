import {Link} from 'react-router-dom';

function LoginNavigation(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">New User?</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default LoginNavigation;