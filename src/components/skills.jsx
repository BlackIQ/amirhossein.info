const Skills = () => {
    return (
        <div className="card rounded-0 shadow-0 mb-3">
            <div className="card-header fw-bold rounded-0">
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
                                <td><li>Redux</li></td>
                                <td><li>MUI</li></td>
                                <td><li>SASS</li></td>
                            </tr>
                            <tr className="darkbluenavy-td">
                                <td colspan="4" className="font-weight-bold">Back-End development</td>
                            </tr>
                            <tr>
                                <td><li>NodeJs</li></td>
                                <td><li>ExpressJs</li></td>
                                <td><li>Laravel</li></td>
                                <td><li>RESTFuL API</li></td>
                            </tr>
                            <tr className="darkbluenavy-td">
                                <td colspan="4" className="font-weight-bold">Mobile development</td>
                            </tr>
                            <tr>
                                <td><li>Flutter</li></td>
                                <td><li>Firebase</li></td>
                                <td><li>Material UI</li></td>
                                <td><li>Swift UI</li></td>
                            </tr>
                            <tr className="darkbluenavy-td">
                                <td colspan="4" className="font-weight-bold">Database</td>
                            </tr>
                            <tr>
                                <td><li>MongoDB</li></td>
                                <td><li>MariaDB</li></td>
                                <td><li>Firestore</li></td>
                                <td><li>LowDB</li></td>
                            </tr>
                            <tr className="darkbluenavy-td">
                                <td colspan="4" className="font-weight-bold">Languages</td>
                            </tr>
                            <tr>
                                <td><li>Javascript</li></td>
                                <td><li>Php</li></td>
                                <td><li>Dart</li></td>
                                <td><li>Python</li></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Skills;