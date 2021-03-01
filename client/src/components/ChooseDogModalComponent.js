import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ButtonGroup, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../db';
// import { getDogs } from '../actions/dogs';

export function DogChooserModal({ modal, toggleModal, loadedDogs }) {
    
    const dogList=loadedDogs.map(dog => {
        return(
            <div key={dog.id}>
                {/* <Link className="d-flex flex-row" onClick={() => {chooseDog(dog.id); toggleModal()}} to={`/meet/${dog.id}`} >
                    <img className="border-1 border-primary rounded-circle" src={dog.pic.filter(pic => pic.type==="thumbnail")[0].img} alt={dog.name + " thumbnail"} />
                    <h1 className="my-auto ml-2">{dog.name}</h1>
                </Link> */}
            </div>
        )
    })
    
    return (
        <Modal isOpen={modal} toggle={toggleModal} >
            <ModalHeader toggle={toggleModal}>
                <h1>Choose a Dog</h1>
            </ModalHeader>
            <ModalBody>
                <ButtonGroup vertical>
                    { loadedDogs.length===0 ? 
                        <Spinner />
                    :
                        {dogList}
                    }
                </ButtonGroup>
            </ModalBody>
        </Modal> 
    )
}

export default DogChooserModal;