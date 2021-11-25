import {useHistory} from 'react-router-dom';

const userInfo = {
   userIsloggedIn: false,
   authorization: "",
   email: "",
   id: "",
   position: ""
};

const selectedUser = {
   email: "" 
};

// Checks if a user is logged in.
export function CheckAuth(){
   const history = useHistory();

   if(!userInfo.userIsloggedIn){
      history.replace("/");
  }
  else{
     return;
  }
}

export {userInfo, selectedUser};
