import {useHistory} from 'react-router-dom';
import userInfo from './users/UserItem';

export function CheckAuth(){
   const history = useHistory();

   if(!userInfo.userIsloggedIn){
      history.replace("/");
  }
  else{
     return;
  }
}
