import { Outlet } from 'react-router-dom'

function Projects() {
    return (
        <div className="launch">
            Projects Page
            <Outlet></Outlet>
        </div>
    );
}

export default Projects;
