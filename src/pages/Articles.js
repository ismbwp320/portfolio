import { Outlet } from 'react-router-dom'

function Articles() {
    return (
        <div className="launch">
            Articles Page
            <Outlet></Outlet>
        </div>
    );
}

export default Articles;
