import React from 'react';
import { Modal, ModalHeader, ModalBody, ButtonGroup, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../db';



function DogList({ loadedDogs, toggleModal, modal }) {
    return loadedDogs.map(dog => {
        return(
            <div key={dog._id}>
                <Link className="d-flex flex-row" onClick={() => {toggleModal(!modal)}} to={`/meet/${dog.id}`} >
                    {/* Note: I removed the chooseDog function below because that should be replaced with updateDog(axios GET query by ID)  */}
                {/* <Link className="d-flex flex-row" onClick={() => {chooseDog(dog.id); toggleModal()}} to={`/meet/${dog.id}`} > */}
                    <img className="border-1 border-primary rounded-circle" src={dog.pic.filter(pic => pic.type==="thumbnail")[0].img} alt={dog.aName + " thumbnail"} />
                    <h1 className="my-auto ml-2">{dog.aName}</h1>
                </Link>
            </div>
        )
    })
}

export function DogChooserModal({ modal, toggleModal, loadedDogs }) {
    
    return (
        <Modal isOpen={modal} toggle={() => toggleModal(!modal)} >
            <ModalHeader toggle={() => toggleModal(!modal)}>
                <h1>Choose a Dog</h1>
            </ModalHeader>
            <ModalBody>
                <ButtonGroup vertical>
                    { loadedDogs.length===0 ? 
                        <Spinner />
                    :
                        <DogList loadedDogs={loadedDogs} toggleModal={toggleModal} modal={modal} />
                    }
                </ButtonGroup>
            </ModalBody>
        </Modal> 
    )
}

export default DogChooserModal;