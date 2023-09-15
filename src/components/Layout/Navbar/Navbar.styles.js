import React from 'react';
import DesktopNavbar from './DesktopNavbar.styles';
import MobileNavbar from './MobileNavbar.styles';
import useWindowSize from '../../../hooks/useWindowSize';

const Navbar = () => {
    const windowSize = useWindowSize();

    return windowSize <= 1000 ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;