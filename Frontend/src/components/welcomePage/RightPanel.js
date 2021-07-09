import React from 'react';
import { infoContent } from './welcome-page';

const RightPanel = () => {
    return (
        <React.Fragment>
            <div className="col-6 border-start d-flex justify-content-around vertical-center">
                <div id="carouselExampleControls" className="carousel slide align-self-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" className="d-block w-100" alt="slide-1" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" className="d-block w-100" alt="slide-2" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" className="d-block w-100" alt="slide-3" />
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
                    <p className="text-center pl-1" style={infoContent}>
                        Your chats are safe
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RightPanel;