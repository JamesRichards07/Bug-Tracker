import {useState} from 'react';
import { useHistory } from 'react-router-dom';

import BugModal from '../components/Modals/bug_modal';
import Backdrop from '../components/Modals/backdrop';

const CheckAuth = require('../components/check_auth');

function DeleteUserPage(){
    CheckAuth.CheckAuth();

    const [modalIsOpen, setModalIsOpen] = useState(true);

    const history = useHistory();

    function closeModalHandler(){
        setModalIsOpen(false);
        history.replace("/bugs");
    }

    return(
        <section>
            <div>
                <div>
                { modalIsOpen && <BugModal onCancel={closeModalHandler}/>}
                { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
                </div>
            </div>
        </section>
    );
};

export default DeleteUserPage;