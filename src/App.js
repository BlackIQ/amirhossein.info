import React from "react";
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Title from "./components/title";
import PersonalItems from "./components/persoanl_items";
import ItemBoxes from "./components/item-boxes";

function App() {
    const state = {
        activity: [
            'Mobile development in both Android and iOS platforms',
            'Web development in both Server and Client side',
            'React front-end development in medium level',
            'Laravel back-end development in medium level',
            'Launch web project on the bed of Docker',
            'Launch web project on the bed of Apache and LiteSpeed',
            'Launch and create WordPress sites',
            'Design and use APIs',
            'Laving knowledge of managing project in Git and Github',
            'Launching Microsoft and Linux services',
        ],
        researching: [
            'Cloud Computing',
            'Fog Cumputing',
            'Virtualization',
            'IoT',
        ],
        courses: [
            'Mobile development with Flutter',
            'Integration Firebase with Flutter as Back-End',
            'ReactJs library for user interface development',
            'Laravel framework for back end development',
            'Programming with Python full course',
            'Web development with Php full course',
        ],
    };

    return (
        <React.Fragment>
            <Header/>
            <br/>
            <div className="container-fluid">
                <Title title="Introduction" desc="Name and public data"/>
                <div className="row">
                    <div className="col-md-3">
                        <PersonalItems name="Name" value="Amirhossein"/>
                    </div>
                    <div className="col-md-3">
                        <PersonalItems name="Surname" value="Mohamamdi"/>
                    </div>
                    <div className="col-md-3">
                        <PersonalItems name="Born" value={"Nov, 20 2003 | Age: " + <span className="age" />}/>
                    </div>
                    <div className="col-md-3">
                        <PersonalItems name="Gender" value="Male"/>
                    </div>
                </div>
                <Title title="In summary" desc="Here you can see more details about me"/>
                <div className="row">
                    <div className="col-md-4">
                        <ItemBoxes title="Fields of activity" items={state.activity} />
                    </div>
                    <div className="col-md-4">
                        <ItemBoxes title="Favorite researching fields" items={state.researching} />
                    </div>
                    <div className="col-md-4">
                        <ItemBoxes title="Passed courses" items={state.courses} />
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
