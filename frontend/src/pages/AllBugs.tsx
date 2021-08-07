const CheckAuth = require('../components/CheckAuth');

function BugsPage(){
    CheckAuth.CheckAuth();
    
    return(
        <h1>Bugs page.</h1>
    );
}

export default BugsPage;