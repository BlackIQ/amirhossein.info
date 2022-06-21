const Projects = () => {
    return (
        <div className="card rounded-0 shadow-0 mb-3" id='projects'>
            <div className="card-header rounded-0">
                Projects
            </div>
            <div className="card-body">
                <div className='project'>
                    <div className="d-flex justify-content-start align-items-center">
                        <h3 className='font-weight-bold darkbluenavy-fore'><a href='https://mbrtrading.com' className='text-reset' target='_blank'>MBE TRADING</a></h3>
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
    );
}

export default Projects;