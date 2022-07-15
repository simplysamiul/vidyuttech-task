import React from 'react';
import { Spinner } from 'react-bootstrap';

const Preloader = () => {
    return (
        <div style={{textAlign:"center", margin:"30px"}}>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Preloader;