import {useState, useEffect} from 'react';
import {userInfo} from '../components/check_auth';

const Repo = require('../components/fetch');
const CheckAuth = require('../components/check_auth');

function HomePage(){
    CheckAuth.CheckAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedUser, setLoadedUser] = useState([]);

    useEffect(() => {
        setIsLoading(true);
    
        const url = 'http://localhost:8080/users/';
    
        Repo.FetchAll(url, "GET", setIsLoading, setLoadedUser);
    }, []);

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    return(
        <section className="bg-gray-100">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 pt-12 pb-36 rounded shadow-md text-black w-full">
                    <h1 className="text-3xl text-center pb-5">Welcome</h1>
                    <ul>
                        {loadedUser.map((user:any) => {
                            if(user.email === userInfo.email){
                                userInfo.position = user.position;
                                return (
                                    <div key="user.id" className="text-center">
                                        <h3 className="text-3xl pb-16">{user.firstName} {user.lastName}!!!</h3>
                                        <div className="text-lg space-y-14">
                                            <div>
                                                <h3>Your Team: </h3>
                                                <h3 className="text-2xl">{user.team}</h3>
                                            </div>
                                            <div>
                                                <h3>Title: </h3>
                                                <h3 className="text-2xl">{user.position}</h3>
                                            </div>
                                            <div>
                                                <h3>Email: </h3>
                                                <h3 className="text-2xl">{user.email}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </section>
    ); 
}

export default HomePage;