import { useAuthState } from 'react-firebase-hooks/auth';
import { login, auth } from '../firebase/reactfire';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) history.push('/panel');
    }, [user, loading]);

    return (
        <div className="login">
            <div className="col-md-3">
                <div className="card border">
                    <div className="card-body">
                        <h1>Auth</h1>
                        <hr/>
                        <label className="form-label" htmlFor="email">Email</label>
                        <input id="email" className="form-control" placeholder="email@amirhossein.info" type='email' onChange={e => setEmail(e.target.value)} required />
                        <br/>
                        <label className="form-label" htmlFor="password">Password</label>
                        <input id="password" className="form-control" placeholder="********" type='password' onChange={e => setPassword(e.target.value)} required />
                        <br/>
                        <button onClick={() => login(email, password)} className="btn btn-info w-100">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;