import userInfo from '../components/CheckAuth';
const CheckAuth = require('../components/CheckAuth');

function HomePage(){
    
    
    
    return(
        CheckAuth.CheckAuth(userInfo.userIsloggedIn));
        <section>
            <h1>Home Page</h1>
        </section>
    )
}

export default HomePage;