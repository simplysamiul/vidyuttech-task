import React from 'react';
import Body from '../body/Body';
import Footer from '../shared/Footer';
import Menubar from '../shared/Menubar';

const TheLayout = () => {
    return (
        <>
            <div className="menu-section">
                <Menubar />
            </div>
            <div className="body-section">
                <Body />
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </>
    );
};

export default TheLayout;