import {useState} from 'react';
import { useHistory } from 'react-router-dom';

import UserModal from '../components/Modals/user_modal';
import Backdrop from '../components/Modals/backdrop';

const CheckAuth = require('../components/check_auth');

function DeleteUserPage(){
    CheckAuth.CheckAuth();

    const [modalIsOpen, setModalIsOpen] = useState(true);

    const history = useHistory();

    function closeModalHandler(){
        setModalIsOpen(false);
        history.replace("/users");
    }

    return(
        <section>
            <div>
                <div>
                { modalIsOpen && <UserModal onCancel={closeModalHandler}/>}
                { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
                </div>
            </div>
        </section>
    );
};

export default DeleteUserPage;