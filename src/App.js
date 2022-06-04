import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import SocialMedia from './components/social-media';
import SendMessage from './components/send-message';
import Experience from './components/experience';
import Languages from './components/languages';
import Projects from './components/projects';
import AboutMe from './components/about-me';
import Profile from './components/profile';
import Skills from './components/skills';
import Navbar from './components/navbar';

function App() {
    const env = process.env;

    const welcomeNotify = () => toast.info('🍭 Welcome!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        const d = new Date();

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const data = {
            "timestamp": d.toString(),
            "specific": {
                "time": {
                    "minutes": d.getMinutes(),
                    "hour": d.getHours()
                },
                "date": {
                    "day": d.getUTCDay(),
                    "month": monthNames[d.getUTCMonth()],
                    "year": d.getFullYear()
                }
            }
        };

        axios.post(env.REACT_APP_API_URL, data)
            .then((res) => welcomeNotify())
            .catch((error) => console.log(error));
    });

    return (
        <div className="App">
            <Navbar />
            <div className="container-fluid pt-3 px-3 main">
                <div className="row">
                    <div className="col-md-8">
                        <Profile />
                        <AboutMe />
                        <Experience />
                        <Languages />
                        <Skills />
                        <Projects />
                    </div>
                    <div className="col-md-4">
                        <SendMessage />
                        <SocialMedia />
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
