import React from 'react';
import { Button, ButtonGroup } from 'reactstrap'
import UserHeader from './UserHeaderComponent';
import { Consumer } from "./configContext";
import Footer from './FooterComponent';
import { Link } from 'react-router-dom';


function DogList ({ context: { chosenUser, dogs, chooseDog }, dogGroup }) {
    var usersDogs = [];
    chosenUser[dogGroup].forEach(dogsId => {
        usersDogs=usersDogs.concat(dogs.filter(dog => dog.id === dogsId));
    });
    return (
        usersDogs.map(dog => {
            return(
                <div key={dog.id} className="w-100">
                    <Button className="bg-white w-100" >
                        <Link 
                            className="d-flex flex-row" 
                            onClick={() => chooseDog(dog.id)} 
                            to={dogGroup==='myDogs' ? `/user/${chosenUser.id}/${dog.id}` : `/meet/${dog.id}` }
                        >
                            <img className="border-1 border-primary rounded-circle" src={dog.pic.filter(pic => pic.type === "thumbnail")[0].img} alt={dog.name + " thumbnail"} />
                            <h1 className="my-auto ml-2">{dog.name}</h1>
                        </Link>
                    </Button>
                </div>
            )
        })
    )
}


function FormUserComponent(props) {

    return (
        <Consumer>
            {context => {

                return (
                    <>
                        <UserHeader pageName="Homepage for" userName={context.chosenUser.aName} />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 m-auto">
                                    <h1>Update My Dogs</h1>
                                    <ButtonGroup vertical>
                                        <DogList 
                                            context={context} 
                                            dogGroup='myDogs' 
                                            
                                        />
                                        <div className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" onClick={() => context.chosenDog.id} to="/user/:userId/:dogId">                                                    
                                                    <h1 className="my-auto ml-2">Add A Dog</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 m-auto">
                                    <h1>Visit Followed Dogs</h1>
                                    <ButtonGroup vertical>
                                    <DogList 
                                        context={context} 
                                        dogGroup='followedDogs' 
                                    />
                                    </ButtonGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 m-auto">
                                    <ButtonGroup vertical>
                                        <div className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" to={`/user/${context.userId}/settings`} >
                                                    <h1 className="my-auto ml-2">My Settings</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </>
                )
            }}
        </Consumer>
    )
}

export default FormUserComponent;