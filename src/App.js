import { ToastContainer } from 'react-toastify';

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
