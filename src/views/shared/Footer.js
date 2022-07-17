import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <div>
            <div className="scrool-top">
            <ScrollToTop style={{background: "#C8815F"}} smooth top="170" color='white'/>
            </div>
        </div>
    );
};

export default Footer;