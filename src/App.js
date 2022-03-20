import React from "react";
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Title from "./components/title";
import PersonalItems from "./components/persoanl_items";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <br/>
            <div className="container-fluid">
                <Title title="Introduction" desc="Name and public data"/>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <PersonalItems name="Name" value="Amirhossein"/>
                    </div>
                    <div className="col-md-3">
                        <PersonalItems name="Surname" value="Mohamamdi"/>
                    </div>
                    <div className="col-md-3">
                        <PersonalItems name="Born" value="Nov, 20 2003 | Age: "/>
                    </div>
                    <div className="col-md-3">
                        <PersonalItems name="Gender" value="Male"/>
                    </div>
                </div>
                <br/>
                <br/>
                <Title title="In summary" desc="Here you can see more details about me"/>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="m-1">
                            <h4 className="itext">
                                Fields of activity
                            </h4>
                            <hr className="itext"/>
                            <ul>
                                <li>Mobile development in both Android and iOS platforms</li>
                                <li>Web development in both Server and Client side</li>
                                <li>React front-end development in medium level</li>
                                <li>Laravel back-end development in medium level</li>
                                <li>Launch web project on the bed of Docker</li>
                                <li>Launch web project on the bed of Apache and LiteSpeed</li>
                                <li>Launch and create WordPress sites</li>
                                <li>Design and use APIs</li>
                                <li>Laving knowledge of managing project in Git and Github</li>
                                <li>Launching Microsoft and Linux services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="m-1">
                            <h4 className="itext">
                                Favorite researching fields
                            </h4>
                            <hr className="itext"/>
                            <ul>
                                <li>Cloud Computing</li>
                                <li>Fog Cumputing</li>
                                <li>Virtualization</li>
                                <li>IoT</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="m-1">
                            <h4 className="itext">
                                Passed courses
                            </h4>
                            <hr className="itext"/>
                            <ul>
                                <li>Mobile development with Flutter</li>
                                <li>Integration Firebase with Flutter as Back-End</li>
                                <li>ReactJs library for user interface development</li>
                                <li>Laravel framework for back end development</li>
                                <li>Programming with Python full cource</li>
                                <li>Web development with Php full cource</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
