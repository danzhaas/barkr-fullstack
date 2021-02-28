import React, { useState, useEffect } from 'react';
import { Row, Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, Col, CustomInput, TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import UserHeader from './UserHeaderComponent';
import {Consumer} from "./configContext";
import Footer from './FooterComponent';
import Autosuggest from 'react-autosuggest';
import dogBreeds from 'dog-breeds';



// ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
// ██║  ██║██╔═══██╗████╗ ████║██╔════╝
// ███████║██║   ██║██╔████╔██║█████╗  
// ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
// ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
// ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
                                    
function HomeForm({ context: { chosenDog, chooseDog, dogId } }) {

    const [ formData, setFormData ] = useState({
        id:"",
        aName:"",
        bio:"",
        sex:"M",
        breeds:"",
        yearBorn:"",
        from:"",
        dateRegistered:"",
        thumbnailPic:"",
        profilePic:""
    });

    useEffect(() => {
        if (!chosenDog) chooseDog(dogId);

        const {
            id,
            aName,
            bio,
            sex,
            breeds,
            yearBorn,
            from,
            dateRegistered, 
        } = chosenDog;

        setFormData({
            id:id,
            aName:aName,
            bio:bio,
            sex:sex,
            breeds:breeds,
            yearBorn:yearBorn,
            from:from,
            dateRegistered:dateRegistered,
            thumbnailPic:"",
            profilePic:""
        })
    }, [])

    var {
        id,
        aName,
        bio,
        sex,
        breeds,
        yearBorn,
        from,
        dateRegistered,
        thumbnailPic,
        profilePic
    } = formData;

    
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const breedsList = dogBreeds.all;

    return (
        <div className="bg-white border-0">
            <h1>Dog Info</h1>
            <p>Dog ID: {id}</p>
            <p>Date Registered: {dateRegistered}</p>
            <Form>
                
                <FormGroup className="bg-white border-0" row>
                    <Label for="aName" sm={3}>Name</Label>
                    <Col sm={9}>
                        <Input type="text" name="aName" id="aName" value={aName} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="bio" sm={3}>Bio</Label>
                    <Col sm={9}>
                        <Input type="textarea" name="bio" id="bio" value={bio} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="sex" sm={3}>Sex</Label>
                    <Col sm={9}>
                        <Input type="select" name="sex" id="sex" value={sex} onChange={(e) => onChange(e)} >
                            <option>M</option>
                            <option>F</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Col>
                        <Label className="text-left" for="selectBreeds" >Select All Breeds</Label>
                        <p><i class="fas fa-paw"></i> Start typing to jump ahead</p>
                        <p><i class="fas fa-paw"></i> Ctrl+Click to select multiple</p>
                    </Col>
                    <Col sm={9}>
                        <Input type="select" name="selectBreeds" id="selectBreeds" multiple
                            value={breeds} 
                            onChange={(e) => onChange(e)}
                        >
                            {breedsList.map(breed => <option>{breed.name}</option>)}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="yearBorn" sm={3}>Year Born</Label>
                    <Col sm={9}>
                        <Input type="text" name="yearBorn" id="yearBorn" value={yearBorn} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="from" sm={3}>Where Born or Adopted</Label>
                    <Col sm={9}>
                        <Input type="text" name="from" id="from" value={from} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <h1>Pictures</h1>
                <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                    <Label className="col-3" for="">Upload Thumbnail Picture</Label>
                    <Input className="col-9" type="file" name="thumbnailPic" id="thumbnailPic" value={thumbnailPic} onChange={(e) => onChange(e)} />
                    <FormText className="col-12" color="black">
                        Suggested size 200x200 pixels.  
                    </FormText>
                </FormGroup>
                <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                    <Label className="col-3" for="">Upload Profile Picture</Label>
                    <Input className="col-9" type="file" name="profilePic" id="profilePic" value={profilePic} onChange={(e) => onChange(e)} />
                    <FormText className="col-12" color="black">
                        Suggested size 800x800 pixels.  
                    </FormText>
                </FormGroup>
            </Form>
        </div>
    )
}



// ███████╗██████╗ ███████╗ █████╗ ██╗  ██╗
// ██╔════╝██╔══██╗██╔════╝██╔══██╗██║ ██╔╝
// ███████╗██████╔╝█████╗  ███████║█████╔╝ 
// ╚════██║██╔═══╝ ██╔══╝  ██╔══██║██╔═██╗ 
// ███████║██║     ███████╗██║  ██║██║  ██╗
// ╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝

const CommandsList = ({ commands, setActiveCommand}) => {

    return commands.map((command) => {
        return(
            <div key={command.id} className="w-100">
                <Button className="bg-white w-100" onClick={() => setActiveCommand(command.id)}>
                    <h2 className="my-auto ml-2 text-primary">{command.commandName}</h2>
                </Button>
            </div>
        )
    })

}

function SpeakForm({ context: { chosenDog } }) {
    
    const [ activeCommand, setActiveCommand ] = useState('0');
    const [ updatedCommandsList, updateCommands ] = useState([...chosenDog.commands]);
    const [ formData, setFormData ] = useState({
        "id":0,
        "commandName":"My First Command",
        "image":"",
        "description":"The first trick I can do"
    });

    useEffect(() => {

        var {
            id,
            commandName,
            image,
            description
        } = updatedCommandsList[activeCommand];

        setFormData({
            id:id,
            commandName:commandName,
            image:image,
            description:description
        });
    }, [ activeCommand, updateCommands ]
    );

    var {
        id,
        commandName,
        image,
        description
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function addNewCommand () {
        setFormData({
            id:updatedCommandsList.length,
            commandName:"",
            image:"",
            description:""
        });
        chosenDog.commands.push(formData);
    }

    function updateCommand () {
        const newCommand = {...formData};
        const commandUpdate = [...updatedCommandsList, newCommand];
        updateCommands(
            [...commandUpdate]
        )
    }

    return (
        <div className="bg-white border-0">
            <h1>Commands</h1>
            <Row className="bg-white border-0 py-3">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" onClick={ () => addNewCommand() } >
                            <h2 className="my-auto ml-2 text-primary">Add New Command</h2>
                        </Button>
                    </div>
                    <h2>Known Commands</h2>
                    <CommandsList commands={ updatedCommandsList } setActiveCommand={setActiveCommand} />
                </div>
                <div className="col-8">
                    <Form>
                        <p>Command # {formData.id}</p>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="commandName" sm={3}>Command Name</Label>
                            <Col sm={9}>
                                <Input type="text" name="commandName" id="commandName" value={ commandName } onChange={(e) => onChange(e)} />
                            </Col>
                        </FormGroup>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="name" sm={3}>Description</Label>
                            <Col sm={9}>
                                <Input type="text" name="description" id="description" value={ description } onChange={(e) => onChange(e)} />
                            </Col>
                        </FormGroup>
                        <FormGroup tag="fieldset" className="bg-white border-0" row>
                            <legend className="col-form-label">Choose Image</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="photoSource" />{' '}
                                    Upload a picture or GIF
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="photoSource" />{' '}
                                    Use Stock Photo
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="photoSource" />{' '}
                                    Leave blank for now
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                            <Label className="col-3" for="image">Upload Picture/GIF</Label>
                            <Input className="col-9" type="file" name="image" id="image" onChange={(e) => onChange(e)} />
                            <FormText className="col-12" color="black">
                                Suggested size 400x400 pixels  
                            </FormText>
                        </FormGroup>
                        <br /><br />
                        <div className="flex-row justify-content-between w-100">
                            <Button className="bg-success" onClick={ () => updateCommand() } >Update Command</Button>{' '}
                            <Button className="bg-danger">Delete Command</Button>
                        </div>
                    </Form>
                </div>
            </Row>
        </div>
    )
}


//  █████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗
// ██╔══██╗██╔══██╗██║   ██║██╔════╝████╗  ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝
// ███████║██║  ██║██║   ██║█████╗  ██╔██╗ ██║   ██║   ██║   ██║██████╔╝█████╗  
// ██╔══██║██║  ██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ██║   ██║██╔══██╗██╔══╝  
// ██║  ██║██████╔╝ ╚████╔╝ ███████╗██║ ╚████║   ██║   ╚██████╔╝██║  ██║███████╗
// ╚═╝  ╚═╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝


function AdventureForm(props) {

    const [displayUrlInput, toggledisplay] = useState(false);

    return (
        <div className="bg-white border-0">
            <h1>My Local Map</h1>
            <Row className="bg-white border-0">
                <Col>
                
                    <p>If you use <a href="https://www.google.com/maps/d/u/0/">Google My Maps</a>, you can share your map of your favorite local spots to take your dog on adventures.  <a href="https://www.google.com/maps/d/u/0/">You can make your own map</a>.</p>
                    <Form>
                        <FormGroup>
                            <Label for="toggleAdventure">Share your map of local spots?</Label>
                                <CustomInput type="switch" id="toggleAdventure" name="toggleAdventure" 
                                label="Share my map" 
                                checked={displayUrlInput}
                                onChange={() => toggledisplay(!displayUrlInput)}
                            />
                        </FormGroup>
                        {displayUrlInput ? 
                        <FormGroup>
                            <Label for="mapUrl" sm={3} >Enter Google My Maps Url</Label>
                            <Col sm={9}>
                                <Input
                                    type="url"
                                    name="mapUrl"
                                    id="mapUrl"
                                    placeholder="ex: https://www.google.com/maps/d/u/0/embed?mid=1J75h137lZpMDdLeovFbWOkHCl_YZDRlg"
                                />
                            </Col>
                        </FormGroup>
                        :
                        ""
                        } 
                    </Form>

                </Col>
            </Row>
        </div>
    )
}


//  ██████╗ █████╗ ██████╗ ███████╗
// ██╔════╝██╔══██╗██╔══██╗██╔════╝
// ██║     ███████║██████╔╝█████╗  
// ██║     ██╔══██║██╔══██╗██╔══╝  
// ╚██████╗██║  ██║██║  ██║███████╗
//  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

const RoutineList = ({context: { chosenDog }, setActiveRoutine}) => {

    return(
        chosenDog.routine.map(routine => {
            return(
                <div key={routine.id} className="w-100">
                    <Button className="bg-white w-100" onClick={() => setActiveRoutine(routine.id)}>
                        <h2 className="my-auto ml-2 text-primary">{routine.detail}</h2>
                    </Button>
                </div>
            )
        })
    )
}

const SuppliesList = ({context: { chosenDog }, setActiveSupplies}) => {

    return(
        chosenDog.supplies.map(supplies => {
            return(
                <div key={supplies.id} className="w-100">
                    <Button className="bg-white w-100" onClick={() => setActiveSupplies(supplies.id)}>
                        <h2 className="my-auto ml-2 text-primary">{supplies.detail}</h2>
                    </Button>
                </div>
            )
        })
    )
}

const NotesList = ({context: { chosenDog }, setActiveNote}) => {

    return(
        chosenDog.notes.map(note => {
            return(
                <div key={note.id} className="w-100">
                    <Button className="bg-white w-100" onClick={() => setActiveNote(note.id)}>
                        <h2 className="my-auto ml-2 text-primary">{note.content}</h2>
                    </Button>
                </div>
            )
        })
    )
}

function CareForm({ context }) {

    const [activeTab, setActiveTab] = useState('1');
    const [activeRoutine, setActiveRoutine] = useState('0');
    const [activeSupplies, setActiveSupplies] = useState('0');
    const [activeNote, setActiveNote] = useState('0');


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="bg-white border-0">
            <h1>Care Categories</h1>
            <div id="dogForm" >
                <Nav tabs>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Routine
                        </NavLink>
                    </NavItem>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Supplies
                        </NavLink>
                    </NavItem>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Notes
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <h1>Routine</h1>
                        <Row className="bg-white border-0">
                            <div className="col-4">
                                <div className="w-100">
                                    <Button className="bg-white w-100" >
                                        <h2 className="my-auto ml-2 text-primary">Add New Command</h2>
                                    </Button>
                                </div>
                                <h2>Routine</h2>
                                <RoutineList context={context} setActiveRoutine={setActiveRoutine} />
                            </div>
                            <div className="col-8">
                                <Form>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="routineDetail" sm={3}>Detail</Label>
                                        <Col sm={9}>
                                            <Input type="text" name="routineDetail" id="routineDetail" value={ context.chosenDog.routine[activeRoutine].detail} />
                                        </Col>
                                    </FormGroup>
                                    <br /><br />
                                    <div className="flex-row justify-content-between w-100">
                                        <Button className="bg-success">Add/Update Routine Detail</Button>{' '}
                                        <Button className="bg-danger">Delete Routine Detail</Button>
                                    </div>
                                </Form>
                            </div>
                        </Row>
                    </TabPane>

                    <TabPane tabId="2">
                        <h1>Supplies</h1>
                        <Row className="bg-white border-0">
                            <div className="col-4">
                                <div className="w-100">
                                    <Button className="bg-white w-100" >
                                        <h2 className="my-auto ml-2 text-primary">Add New Supplies</h2>
                                    </Button>
                                </div>
                                <h2>Supplies</h2>
                                <SuppliesList context={context} setActiveSupplies={setActiveSupplies} />
                            </div>
                            <div className="col-8">
                                <Form>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="suppliesDetail" sm={3}>Supplies</Label>
                                        <Col sm={9}>
                                            <Input type="text" name="suppliesDetail" id="suppliesDetail" value={ context.chosenDog.supplies[activeSupplies].detail} />
                                        </Col>
                                    </FormGroup>

                                    <br /><br />
                                    <div className="flex-row justify-content-between w-100">
                                        <Button className="bg-success">Add/Update Supplies Detail</Button>{' '}
                                        <Button className="bg-danger">Delete Supplies Detail</Button>
                                    </div>
                                </Form>
                            </div>
                        </Row>
                    </TabPane>

                    <TabPane tabId="3">
                        <h1>Notes</h1>
                        <Row className="bg-white border-0">
                            <div className="col-4">
                                <div className="w-100">
                                    <Button className="bg-white w-100" >
                                        <h2 className="my-auto ml-2 text-primary">Add New Note</h2>
                                    </Button>
                                </div>
                                <h2>Notes</h2>
                                <NotesList context={context} setActiveNote={setActiveNote} />
                            </div>
                            <div className="col-8">
                                <Form>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="noteContent" sm={3}>Note</Label>
                                        <Col sm={9}>
                                            <Input type="text" name="noteContent" id="noteContent" value={ context.chosenDog.notes[activeNote].content} />
                                        </Col>
                                    </FormGroup>
                                    <br /><br />
                                    <div className="flex-row justify-content-between w-100">
                                        <Button className="bg-success">Add/Update Note</Button>{' '}
                                        <Button className="bg-danger">Delete Note</Button>
                                    </div>
                                </Form>
                            </div>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}


// ████████╗ █████╗ ██████╗ ███████╗
// ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
//    ██║   ███████║██████╔╝███████╗
//    ██║   ██╔══██║██╔══██╗╚════██║
//    ██║   ██║  ██║██████╔╝███████║
//    ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚══════╝


const DogTabs = ({ context }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div id="dogForm" >
            <Nav tabs>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Speak
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Adventure
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        Care
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <HomeForm context={context} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <SpeakForm context={context} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <AdventureForm context={context} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <CareForm context={context} />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}


// ██████╗  ██████╗  ██████╗ ████████╗     ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
// ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
// ██████╔╝██║   ██║██║   ██║   ██║       ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
// ██╔══██╗██║   ██║██║   ██║   ██║       ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
// ██║  ██║╚██████╔╝╚██████╔╝   ██║       ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝        ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   


function FormDogComponent(props) {

    return (
        <Consumer>
            {context => {
                return (
                    <>
                        <UserHeader pageName="My Dog"/>
                        <div className="container">
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 m-auto">
                                    <h1>{context.chosenDog.name}</h1>
                                    <DogTabs context={context} />
                                    <br /><br />
                                    <div className="flex-row justify-content-between w-100">
                                        <Button className="bg-success">Submit Changes</Button>
                                        <Button className="bg-danger">Switch to Legacy Profile (RIP)</Button>
                                    </div>
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

export default FormDogComponent;