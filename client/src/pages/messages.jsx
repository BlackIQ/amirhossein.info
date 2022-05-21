import { useAuthState } from 'react-firebase-hooks/auth';
import { logout, auth } from '../firebase/reactfire';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import MessageItem from '../components/messageitem';

const { REACT_APP_EXPRESS_APP } = process.env;

const Messages = () => {
    const [appLoading, setAppLoading] = useState(false);
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
            <p>
                <b>Hello Amir!</b>
                <span onClick={() => logout()} className='float-end text-danger pointer'>Logout</span>
            </p>
            <br/>
            <table className='table table-bordered'>
                <thead class="table-primary">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="row">Open</th>
                    </tr>
                </thead>
                {
                    appLoading
                    ?
                    <p className='py-5 text-center'>Loading</p>
                    :
                    setAppLoading
                    ?
                    <p className='py-5 text-center'>Error</p>
                    :
                    <tbody>
                        {
                            messages.map((message) => {
                                return <MessageItem message={message} />
                            })
                        }
                    </tbody>
                }
            </table>
        </div>
    );
}

export default Messages;