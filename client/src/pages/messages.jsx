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

    console.log(messages.map((message) => message));

    return (
        loading ? <p>Loading</p> : error ? <p>Error</p> : <div>
            {
                messages.map((message) => {
                    return <MessageItem message={message} />
                })
            }
        </div>
    );
}

export default Messages;