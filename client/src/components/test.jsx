import { useEffect, useState } from 'react';
import Axios from 'axios';

const { REACT_APP_EXPRESS_APP } = process.env;

const Test = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        Axios.get(REACT_APP_EXPRESS_APP)
            .then((data) => setMessages(data))
            .catch((error) => {});
    }, []);

    console.log(messages);

    return (
        <p>{REACT_APP_EXPRESS_APP}</p>
    );
}

export default Test;