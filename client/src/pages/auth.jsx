const Auth = () => {
    return (
        <div className="login">
            <div className="col-md-3">
                <div className="card border">
                    <div className="card-body">
                        <h1>Auth</h1>
                        <hr/>
                        <label className="form-label" htmlFor="email">Email</label>
                        <input id="email" className="form-control" placeholder="email@amirhossein.info" type='email' required />
                        <br/>
                        <label className="form-label" htmlFor="password">Password</label>
                        <input id="password" className="form-control" placeholder="********" type='password' required />
                        <br/>
                        <div className="login-btn">
                            <button className="btn btn-info w-100">Login</button>
                            &nbsp;
                            <button className="btn btn-danger w-100">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;