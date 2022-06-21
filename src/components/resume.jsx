const Resume = () => {
    return (
        <div className="card rounded-0 shadow-0 mb-3">
            <div className="card-header rounded-0">
                Download Resume
            </div>
            <div className="card-body">
                <p>You can download my resume in English and Farsi.</p>
                <span>
                    <b className="darkbluenavy-fore">En</b>
                    &nbsp;
                    <a className="text-reset" href="https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohammadi-en.pdf">Download resume in English</a>
                </span>
                <br/>
                <span>
                    <b className="darkbluenavy-fore">Fa</b>
                    &nbsp;
                    <a className="text-reset" href="https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohammadi-fa.pdf">Download resume in Farsi</a>
                </span>
            </div>
        </div>
    );
}

export default Resume;