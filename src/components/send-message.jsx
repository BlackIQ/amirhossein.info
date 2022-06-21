import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const SendMessage = () => {
    const env = process.env;

    const successNotify = () => toast.success('🥂 Message send!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const errorNotify = () => toast.error('🤷🏻‍♂️ Oh, an error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const blankNotify = () => toast.warning('🤔 Did you fill all fields!?', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const form = useRef();

    const [subject, setSubject] = useState([]);
    const [from, setFrom] = useState([]);
    const [message, setmessage] = useState([]);

    const submit = e => {
        e.preventDefault();

        if (subject && from && message) {
            emailjs.sendForm(env.REACT_APP_EMAIL_SERVICE_NAME, env.REACT_APP_EMAIL_TEMPLATE_NAME, form.current, env.REACT_APP_EMAIL_ACCOUNT_TOKEN)
                .then((result) => successNotify())
                .catch((error) => errorNotify());
        } else blankNotify();
    }

    return (
        <div className="card rounded-0 shadow-0 mt-2 mb-3">
            <div className="card-header fw-bold rounded-0">
                Send me a message
            </div>
            <div className="card-body">
                <p>Send your messages directly to my email with using this form. Or you can send it with composing an email in your email panel.</p>
                <form ref={form} onSubmit={submit}>
                    <label className="form-label" for="subject">Subject</label>
                    <input className="form-control" id="subject" placeholder="Subject" name='subject' onChange={(e) => setSubject(e.target.value)} />
                    <br/>
                    <label className="form-label" for="from">From</label>
                    <input className="form-control" id="from" placeholder="From" name='from' onChange={(e) => setFrom(e.target.value)} />
                    <br/>
                    <label className="form-label" for="message">Message</label>
                    <textarea className="form-control" id="message" placeholder="Message" name='message' rows="5" onChange={(e) => setmessage(e.target.value)}></textarea>
                    <br/>
                    <button type='submit' className="btn btn-lg btn-dark w-100 shadow-0 darkbluenavy-bg" disabled={subject && from && message ? null : true}>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default SendMessage;