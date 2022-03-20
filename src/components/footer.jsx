import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin, FaMap, FaMedium, FaMobileAlt} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000080" fill-opacity="1" d="M0,160L10,181.3C20,203,40,245,60,229.3C80,213,100,139,120,117.3C140,96,160,128,180,144C200,160,220,160,240,165.3C260,171,280,181,300,165.3C320,149,340,107,360,112C380,117,400,171,420,165.3C440,160,460,96,480,85.3C500,75,520,117,540,122.7C560,128,580,96,600,117.3C620,139,640,213,660,240C680,267,700,245,720,202.7C740,160,760,96,780,74.7C800,53,820,75,840,117.3C860,160,880,224,900,213.3C920,203,940,117,960,112C980,107,1000,181,1020,176C1040,171,1060,85,1080,58.7C1100,32,1120,64,1140,112C1160,160,1180,224,1200,213.3C1220,203,1240,117,1260,117.3C1280,117,1300,203,1320,240C1340,277,1360,267,1380,256C1400,245,1420,235,1430,229.3L1440,224L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path></svg>
            <div className="footer">
                <div className="row">
                    <div className="col-md-4">
                        <div className="m-1">
                            <b>Amirhossein Mohammadi</b>
                            <hr/>
                            <p>
                                <a href="https://github.com/BlackIQ/amirhossein.info" className="text-white">
                                    <FaGithub/> Open this page source in Github
                                </a>
                            </p>
                            <p className="download"/>
                            <br/>
                            <small id="years"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="m-1">
                            <b>Home</b>
                            <hr/>
                            <FaMap/> No 23, Naghdi St, Jahantab St, Mofateh, Motahari
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="m-1">
                            <b>Contact</b>
                            <hr/>
                            <FaEnvelope/> amirhosseinmohammadi1380@yahoo.com
                            <br/>
                            <FaMobileAlt/> <span className="text-white text-decoration-none">+98 901 4784 362</span>
                            <br/>
                            <br/>
                            <a href="https://github.com/BlackIQ" className="text-white text-decoration-none">
                                <FaGithub/>
                            </a>
                            &nbsp;
                            <a href="https://www.linkedin.com/in/amirhosseinmohammadi"
                               className="text-white text-decoration-none">
                                <FaLinkedin/>
                            </a>
                            &nbsp;
                            <a href="https://gnu-amir.medium.com" className="text-white text-decoration-none">
                                <FaMedium/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
