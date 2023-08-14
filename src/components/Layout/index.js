import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.styles';


const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet /> {/* This will render child routes */}
        </div>
    );
}

export default Layout
