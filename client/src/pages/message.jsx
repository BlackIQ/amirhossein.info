import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const { REACT_APP_EXPRESS_APP } = process.env;

const Message = () => {
    const {id} = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [message, setMessage] = useState([]);

    useEffect(() => {
        setLoading(true);

        Axios.get(`${REACT_APP_EXPRESS_APP}/messages/${id}`)
            .then((data) => {
                setLoading(false);
                setMessage(data.data);
            })
            .catch((error) => {
                setLoading(false);
                setError(true);
            });
    }, []);
    
    return (
        <div className='container-fluid py-4'>
            {
                loading
                ?
                <p className='py-5 text-center'>Loading</p>
                :
                error
                ?
                <p className='py-5 text-center'>Error</p>
                :
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='m-1'>
                            <h3>Message information</h3>
                            <br/>
                            <p><b>Title</b>: {message.title}</p>
                            <p><b>Message</b>: {message.message}</p>
                            <p><b>Delivered</b>: {message.createdAt}</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='m-1'>
                            <h3>Sender information</h3>
                            <br/>
                            <p><b>Name</b>: {message.name}</p>
                            <p><b>Email</b>: {message.email}</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='m-1'>
                            <h3>Document information</h3>
                            <br/>
                            <p><b>ID</b>: {message._id}</p>
                            <p><b>Read</b>: {message.read.toString()}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Message;