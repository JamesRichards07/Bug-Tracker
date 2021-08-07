const CheckAuth = require('../components/CheckAuth');

function UsersPage(){
    CheckAuth.CheckAuth();
    
    return(
        <h1>Users page.</h1>
    );
}

export default UsersPage;