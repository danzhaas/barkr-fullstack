import React from 'react';
import { Card, CardText, CardBody, CardImg, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MeetHeader from './MeetHeaderComponent';
import Footer from './FooterComponent';
import { Consumer } from "./configContext";
import { getDog } from "../actions/dogs";


function DogId ({ chosenDog, updateDog }) {

    const {
        id,
        aName,
        bio,
        sex,
        breeds,
        yearBorn,
        from,
        pic
    } = chosenDog;
    // async function getDog({dogId}) {
    //     try {
    //         const res = await axios.get( `/api/dogs/${dogId}` );
    //         return res.data;
    //     } catch (err) {
    //         const errors = err.response.data.errors;    // errors from the data in the response declared errors
    
    //         if(errors) {    // if there are errors 
    //             errors.forEach(error => alert(error.msg))    // for eac
    //         }
    //     }
    // } 

    const renderSiblings = (data) => {
        if (typeof data === "string") {
            return <span>{data}</span>  
        }
        else return data.map((sibling) => {
            if (sibling.id) {
                // return <a className="text-primary" onClick={() => chooseDog(sibling.id)} href="#">
                //     <p>&nbsp;{sibling.name}</p>
                // </a>
                return <Button className="text-primary bg-light btn p-1 mx-1" onClick={() => getDog(sibling.id)}>
                <p className="m-0 font-weight-bold">{sibling.name}</p>
                </Button>
            }
            else {
                return <span>&nbsp;{sibling.name}</span>
            }
        })  
    }
    
    const getAge = (yearBorn) => {
        const currentYear = (new Date()).getFullYear();
        return currentYear - yearBorn
    }

    return(
        <>
            <Card id="dog-card" className="col-12 col-md-8 p-3 h-auto" >
                <CardImg id="dog-home-img" src={chosenDog.pic.filter(pic => pic.type==="profilePic")[0].img} alt={chosenDog.name + " profile pic"}/>
                <CardBody className="p-2 p-md-3 h-auto" >
                    <CardText className="text-left">
                        {chosenDog.bio}
                    </CardText>
                </CardBody>
            </Card>
            <div className="col-12 col-md-4 px-0 pl-md-3">
                <ListGroup className="p-0 text-left">
                    <ListGroupItem>
                        <h4 className="text-center">More About {chosenDog.name}</h4>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="font-weight-bold">Sex:</span> {chosenDog.sex}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="font-weight-bold">Breed:</span> {chosenDog.breed}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="font-weight-bold">Age:</span> {getAge(chosenDog.yearBorn)}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="font-weight-bold">From:</span> {chosenDog.from}
                    </ListGroupItem>
                    <ListGroupItem className="d-flex flex-row align-items-center">
                        <span className="font-weight-bold">Siblings:</span> {renderSiblings(chosenDog.siblings)}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="font-weight-bold">Owner:</span> {chosenDog.owner}
                    </ListGroupItem>
                </ListGroup>
                <div className="py-3 bg-white rounded">
                    <h4 className="center">Share {chosenDog.name}</h4>
                    <div id="social-media" className="d-flex flex-row justify-content-around align-items-center pt-3">
                        <Link to="instagram.com">
                            <i className="fa fa-instagram fa-3x"></i>
                        </Link>
                        <Link to="facebook.com">
                            <i className="fa fa-facebook fa-3x"></i>
                        </Link>
                        <Link to="twitter.com">
                            <i className="fa fa-twitter fa-3x"></i>
                        </Link>
                        <Link to="youtube.com">
                            <i className="fa fa-youtube fa-3x"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
} 



function DogHome () {

    // const [loadedDogs, getDogs] = useState([]);

    useEffect(() => {
        loadDogs(getDogs);
    }, [])
    
    return(            
        <Consumer>
            {context => {
                return(
                    <div className="h-100">
                        <MeetHeader pageName="Meet" dogName={context.chosenDog.name} chooseDog={context.chooseDog} />         
                        <div className="container h-100">                    
                            <div className="row h-100">                      
                                <div className="col-12 mh-100 p-0 p-md-1 d-flex flex-row flex-wrap overflow-auto">
                                    <DogId chosenDog={context.chosenDog} updateDog={context.updateDog} />
                                </div>
                            </div>
                        </div>
                        <Footer />   
                    </div>
                )
            }}
        </Consumer>
    )
}

export default DogHome;