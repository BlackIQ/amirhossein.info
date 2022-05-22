import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div>
                <h1>404</h1>
                <hr/>
                <h3>Sorry this page is not found.</h3>
                <p><Link className='text-reset' to='/'>Back home</Link></p>
            </div>
        </div>
    )
}

export default NotFound;