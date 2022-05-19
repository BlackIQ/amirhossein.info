import { useEffect, useState } from 'react';
import Axios from 'axios';
import MessageItem from '../components/messageitem';

const { REACT_APP_EXPRESS_APP } = process.env;

const Messages = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setLoading(true);

        Axios.get(`${REACT_APP_EXPRESS_APP}/messages`)
            .then((data) => {
                setLoading(false);
                setMessages(data.data);
            })
            .catch((error) => {
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <div className='container-fluid p-4'>
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
                        loading
                        ?
                        <p>Loading</p>
                        :
                        error
                        ?
                        <p>Error</p>
                        :
                        messages.map((message) => {
                            return <MessageItem message={message} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Messages;