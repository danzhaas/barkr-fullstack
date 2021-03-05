import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { DogChooserModal } from './ChooseDogModalComponent';
import { Consumer } from "./configContext";



function Landing () {
    
    const [modal, toggleModal] = useState(false);

        return(
            <Consumer>
                {context => {
                    return(
                        <div className="container h100vh border-0 position-relative p-0">
                            <div id="landing-center" className="row h-100">
                                <div className="col-12 mh-100 p-md-0">
                                    <div className="h-100 w-100 d-flex flex-column position-relative overflow-hidden">
                                        <img id="landing-backsplash" src='assets/img/suede-on-bed-1000x800-faded.jpg' alt="beautiful dog Suede"></img>
                                        <div id="landing-overlay" className="position-absolute">
                                            <Button className="btn-warning text-dark landing-button" 
                                            onClick={() => toggleModal(!modal)} 
                                            >
                                                <h2>Find a Dog</h2>
                                            </Button>

                                            <DogChooserModal modal={modal} toggleModal={toggleModal} />

                                            <div id="landing-logo" className="d-flex align-items-center justify-content-center align-self-start text-danger ">
                                                <i id="paw" className="fa fa-paw"></i>
                                                <h1>Barkr</h1>
                                            </div>
                                            <Link to={`/user/${context.userId}`} >
                                            <Button className="btn-warning text-dark landing-button" >
                                                <h2>Add Your Dog</h2>
                                            </Button>
                                            </Link>
                                            {/* <Button className="btn-warning text-dark landing-button" id="Popover" >
                                                <h2>Add Your Dog</h2>
                                            </Button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }

export default Landing;