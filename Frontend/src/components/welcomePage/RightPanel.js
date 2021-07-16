import React from 'react';
import { carouselStyle } from './welcome-page';

const RightPanel = () => { 
    return (
        <React.Fragment>
            <div className="container col-md-6 border-start position-relative d-flex flex-column justify-content-center">
                <div id="carouselExampleIndicators" className="container carousel slide" data-bs-ride="carousel" style={carouselStyle}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src='https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg' className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src='https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg' className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src='https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg' className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div className="container col-md-6 border-start d-flex justify-content-around vertical-center">
                <div id="carouselExampleControls" className="carousel slide align-self-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg' className="d-block " alt="slide-1" />
                        </div>
                        <div className="carousel-item">
                            <img src='https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg' className="d-block " alt="slide-2" />
                        </div>
                        <div className="carousel-item">
                            <img src='https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg' className="d-block " alt="slide-3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <p className="text-center " style={carouselStyle}>
                        Your chats are safe. <br></br>
                        Get a link you can share.
                    </p>
                </div>
            </div> */}
        </React.Fragment>
    );
};

export default RightPanel;