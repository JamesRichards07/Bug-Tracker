const CheckAuth = require('../components/CheckAuth');

function HomePage(){
    CheckAuth.CheckAuth();

    return(
        <div>Home Page</div>
    ); 
}

export default HomePage;