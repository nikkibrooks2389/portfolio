import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar.styles';
import MobileNavbar from './MobileNavbar.styles';

const Navbar = () => {
    const [showHamburger, setShowHamburger] = useState(window.innerWidth <= 1000);

    const handleResize = () => {
        setShowHamburger(window.innerWidth <= 1000);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {showHamburger ? <MobileNavbar /> : <DesktopNavbar />}
        </ >

    );
};

export default Navbar;