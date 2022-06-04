import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/navbar';

function App() {
    const env = process.env;

    const successNotify = () => toast.success('🦄 Message send!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const errorNotify = () => toast.error('🦄 Oh, an error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const form = useRef();
    const history = useHistory();

    const submit = e => {
        e.preventDefault();

        emailjs.sendForm(env.REACT_APP_EMAIL_SERVICE_NAME, env.REACT_APP_EMAIL_TEMPLATE_NAME, form.current, env.REACT_APP_EMAIL_ACCOUNT_TOKEN)
            .then(
                (result) => console.log(successNotify()),
                (error) => console.log(errorNotify())
            );
    }

  return (
    <div className="App">
        <Navbar />
        <div className="container-fluid pt-3 px-3 main">
            <div className="row">
                <div className="col-md-8">
                    <div className="card rounded-0 shadow-0 mt-2 mb-3">
                        <div className="card-body intro">
                            <div className="container">
                                <div className="row justify-content-start align-items-center">
                                    <div className="col-md-4">
                                        <div className="m-1">
                                            <img src="https://avatars.githubusercontent.com/u/55284339?v=4" className="rounded-circle w-100" />
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
                    <div className="card rounded-0 shadow-0 mb-3">
                        <div className="card-header rounded-0">
                            About me
                        </div>
                        <div className="card-body">
                            <span>Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.</span>
                        </div>
                    </div>
                    <div className="card rounded-0 shadow-0 mb-3">
                        <div className="card-header rounded-0">
                            Experience
                        </div>
                        <div className="card-body">
                            <div className="job">
                                <h3 className="font-weight-bold darkbluenavy-fore">Software developer</h3>
                                <div className="d-flex justify-content-start align-items-end">
                                    <h4 className="font-weight-bold">Narbon information technologies.</h4>
                                    &nbsp;
                                    <h5>Iran, Tehran</h5>
                                </div>
                                <h6>Nov 2021, PRESENT</h6>
                                <ul>
                                    <li>Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.</li>
                                    <li>Developed software for both desktop and mobile operating systems.</li>
                                    <li>Collaborated on stages of systems development lifecycle from requirement gathering to production releases.</li>
                                    <li>Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.</li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="job">
                                <h3 className="font-weight-bold darkbluenavy-fore">Back-End developer</h3>
                                <div className="d-flex justify-content-start align-items-end">
                                    <h4 className="font-weight-bold">Narbon.</h4>
                                    &nbsp;
                                    <h5>Iran, Tehran</h5>
                                </div>
                                <h6>Apr 2019, Nov 2021</h6>
                                <ul>
                                    <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.</li>
                                    <li>Provided front-end website development using WordPress and other editing software.</li>
                                    <li>Coded websites using HTML, CSS, JavaScript and jQuery languages.</li>
                                    <li>Conducted testing and review of website design for responsiveness, clarity and effectiveness.</li>
                                    <li>Built and styled new mobile-friendly websites, transitioning legacy presentations to simultaneous easyto-use versions.</li>
                                    <li>Oversaw back-end development using PHP to maintain website integrity, security and efficiency.</li>
                                    <li>Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster programming resources.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-0 shadow-0 mb-3">
                        <div className="card-header rounded-0">
                            Languages
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    Persian
                                    <span className="float-end">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </li>
                                <li>
                                    English
                                    <span className="float-end">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </span>
                                </li>
                                <li>
                                    German
                                    <span className="float-end">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card rounded-0 shadow-0 mb-3">
                        <div className="card-header rounded-0">
                            Skills
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="darkbluenavy-td">
                                            <td colspan="4" className="font-weight-bold">Front-End development</td>
                                        </tr>
                                        <tr>
                                            <td><li>ReactJs</li></td>
                                            <td><li>Material Design</li></td>
                                            <td><li>SASS</li></td>
                                            <td><li>Responsive</li></td>
                                        </tr>
                                        <tr className="darkbluenavy-td">
                                            <td colspan="4" className="font-weight-bold">Back-End development</td>
                                        </tr>
                                        <tr>
                                            <td><li>NodeJs</li></td>
                                            <td><li>ExpressJs</li></td>
                                            <td><li>Laravel</li></td>
                                            <td><li>Flask</li></td>
                                        </tr>
                                        <tr className="darkbluenavy-td">
                                            <td colspan="4" className="font-weight-bold">Mobile development</td>
                                        </tr>
                                        <tr>
                                            <td><li>Dart</li></td>
                                            <td><li>Flutter</li></td>
                                            <td><li>iOS development</li></td>
                                            <td><li>Android development</li></td>
                                        </tr>
                                        <tr>
                                            <td><li>Firebase</li></td>
                                            <td><li>MongoDB</li></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="darkbluenavy-td">
                                            <td colspan="4" className="font-weight-bold">Database</td>
                                        </tr>
                                        <tr>
                                            <td><li>Firebase Firestore</li></td>
                                            <td><li>PostgresSQL</li></td>
                                            <td><li>MongoDB</li></td>
                                            <td><li>MariaDB</li></td>
                                        </tr>
                                        <tr className="darkbluenavy-td">
                                            <td colspan="4" className="font-weight-bold">Languages</td>
                                        </tr>
                                        <tr>
                                            <td><li>Php</li></td>
                                            <td><li>Python</li></td>
                                            <td><li>Php</li></td>
                                            <td><li>Dart</li></td>
                                        </tr>
                                        <tr>
                                            <td><li>C</li></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="darkbluenavy-td">
                                            <td colspan="4" className="font-weight-bold">Others</td>
                                        </tr>
                                        <tr>
                                            <td><li>APIs</li></td>
                                            <td><li>Documentation</li></td>
                                            <td><li>Git</li></td>
                                            <td><li>Linux</li></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-0 shadow-0 mb-3" id='projects'>
                        <div className="card-header rounded-0">
                            Projects
                        </div>
                        <div className="card-body">
                            <div className='project'>
                                <div className="d-flex justify-content-start align-items-center">
                                    <h3 className='font-weight-bold darkbluenavy-fore'><a href='https://mbrtrading.com' className='text-reset' target='_blank'>MBR TRADING</a></h3>
                                    &nbsp;
                                    <h6>Dubai, UAE</h6>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <i>#Wordpress, #Elementor</i>
                                    &nbsp;
                                    |
                                    &nbsp;
                                    <small>2020, 2021</small>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded-0 shadow-0 mt-2 mb-3">
                        <div className="card-header rounded-0">
                            Send me a message
                        </div>
                        <div className="card-body">
                            <p>Send your messages directly to my email with using this form. Or you can send it with composing an email in your email panel.</p>
                            <form ref={form} onSubmit={submit}>
                                <label className="form-label" for="subject">Subject</label>
                                <input className="form-control" id="subject" placeholder="Subject" name='subject' />
                                <br/>
                                <label className="form-label" for="from">From</label>
                                <input className="form-control" id="from" placeholder="From" name='from' />
                                <br/>
                                <label className="form-label" for="message">Message</label>
                                <textarea className="form-control" id="message" placeholder="Message" name='message' rows="5"></textarea>
                                <br/>
                                <button type='submit' className="btn btn-lg btn-dark w-100 shadow-0 darkbluenavy-bg">Send message</button>
                            </form>
                        </div>
                    </div>
                    <div className="card rounded-0 shadow-0 mb-3">
                        <div className="card-header rounded-0">
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
                </div>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </div>
  );
}

export default App;
