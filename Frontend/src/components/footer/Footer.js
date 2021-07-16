import React from 'react';

const Footer = () => {
    const FooterStyle = {
        // bottom: 0
        // backgroundColor: "black"
    }
    const profileLinks = {
        textDecoration: "none",
        color: "white"
    }
    return (
        <React.Fragment>
            <div className="container-fluid bg-dark fixed-bottom text-center text-light d-flex justify-content-around p-2" style={FooterStyle}>
                <a href="https://www.linkedin.com/company/celebaltechnologies/mycompany/" style={profileLinks}>@celebal technologies</a>
                <a href="https://www.linkedin.com/in/garvit-singh-00625b1b2/" style={profileLinks}>@garvit singh</a>
                <a href="https://www.linkedin.com/in/priyansh-mehta-432140193/" style={profileLinks}>@priyansh mehta</a>
            </div>
        </React.Fragment>
    );
};

export default Footer;