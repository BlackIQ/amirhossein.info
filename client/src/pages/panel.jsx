import { useAuthState } from 'react-firebase-hooks/auth';
import { logout, auth } from '../firebase/reactfire';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import MessageItem from '../components/messageitem';

const { REACT_APP_EXPRESS_APP } = process.env;

const Panel = () => {
    const [appLoading, setAppLoading] = useState(true);
    const [appError, setAppError] = useState(false);

    const [messages, setMessages] = useState([]);

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) history.push('/');
        else {
            setAppLoading(true);

            Axios.get(`${REACT_APP_EXPRESS_APP}/messages`)
                .then((data) => {
                    setAppLoading(false);
                    setMessages(data.data);
                })
                .catch((error) => {
                    setAppLoading(false);
                    setAppError(true);
                });
        }
    }, [user, loading]);

    return (
        <div className='container-fluid p-4'>
            <div className='d-flex justify-content-between'>
                <h3>Hello Amir!</h3>
                <span onClick={() => logout()} className='text-danger pointer'>Logout</span>
            </div>
            <br/>
            {
                appLoading
                ?
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                appLoading
                ?
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <div className='card border border-danger py-5'>
                        <div className="card-body text-danger text-center">
                            <h1>Error</h1>
                            <h3>Something went wrong.</h3>
                            <span>Refresh the page, maybe be fixed</span>
                        </div>
                    </div>
                </div>
                :
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead class="table-primary">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">Date</th>
                                <th scope="row">Open</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                messages.map((message) => {
                                    return (<MessageItem message={message} />);
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default Panel;