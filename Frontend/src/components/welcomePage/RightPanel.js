import React from 'react';
import { carouselStyle } from './welcome-page';

const RightPanel = () => { 
    return (
        <React.Fragment>
            <div className="container col-md-6 border-start d-flex justify-content-around vertical-center">
                <div id="carouselExampleControls" className="carousel slide align-self-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='/crouselImage.svg' className="d-block " alt="slide-1" />
                        </div>
                        <div className="carousel-item">
                            <img src='/crouselImage.svg' className="d-block " alt="slide-2" />
                        </div>
                        <div className="carousel-item">
                            <img src='/crouselImage.svg' className="d-block " alt="slide-3" />
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
            </div>
        </React.Fragment>
    );
};

export default RightPanel;