const Profile = () => {
    return (
        <div className="card rounded-0 shadow-0 mt-2 mb-3">
            <div className="card-body intro">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-md-4">
                            <div className="m-1">
                                <img alt='Amirhossein' src="https://avatars.githubusercontent.com/u/55284339?v=4" className="rounded-circle w-100" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="m-1">
                                <h1 className="apple-font">hello.</h1>
                                <h1 className="boogaloo-font">I'm Amirhossein Mohammadi</h1>
                                <p><small>Software developer at </small><b>Narbon technologies</b></p>
                                <p>
                                    <span><i className="fa fa-building"></i> Narbon information technologies</span>
                                    <br/>
                                    <span><i className="fa fa-map-marker"></i> Turkey, Izmir</span>
                                    <br/>
                                    <span><i className="fa fa-birthday-cake"></i> Nov 20 2003</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;