const SocialMedia = () => {
    return (
        <div className="card rounded-0 shadow-0 mb-3">
            <div className="card-header fw-bold rounded-0">
                Social medias
            </div>
            <div className="card-body">
                <p>Here are Github and LinkedIn links.</p>
                <span>
                    <i className="fab fa-github darkbluenavy-fore"></i>
                    &nbsp;
                    <a className="text-reset" href="https://github.com/BlackIQ">Github</a>
                </span>
                <br/>
                <span>
                    <i className="fab fa-linkedin-in darkbluenavy-fore"></i>
                    &nbsp;
                    <a className="text-reset" href="https://www.linkedin.com/in/amirhosseinmohammadi">LinkedIn</a>
                </span>
                <hr/>
                <h4>Also, remember my email</h4>
                <span>
                    <i className="fas fa-envelope darkbluenavy-fore"></i>
                    &nbsp;
                    <a className="text-reset" href="mailto:amirhosseinmohammadi1380@yahoo.com">amirhosseinmohammadi1380@yahoo.com</a>
                </span>
            </div>
        </div>
    );
}

export default SocialMedia;