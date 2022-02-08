import { Outlet } from 'react-router-dom'

function Launch() {
    return (
        <div className="launch">
            Launch Page
            <Outlet></Outlet>
        </div>
    );
}

export default Launch;
