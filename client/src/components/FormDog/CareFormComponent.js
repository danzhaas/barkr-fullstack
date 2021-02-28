import React, { useState, useEffect } from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col, CustomInput, TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import classnames from 'classnames';
import UserHeader from './UserHeaderComponent';
import {Consumer} from "./configContext";
import Footer from './FooterComponent';


const RoutineList = ({context: { chosenDog }, setActiveRoutine }) => {

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

const SuppliesList = ({context: { chosenDog }, setActiveSupplies }) => {

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

const NotesList = ({context: { chosenDog }, setActiveNote }) => {

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
                            <h2>Routine</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            <h2>Supplies</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            <h2>Notes</h2>
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


// ██████╗  ██████╗  ██████╗ ████████╗     ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
// ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
// ██████╔╝██║   ██║██║   ██║   ██║       ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
// ██╔══██╗██║   ██║██║   ██║   ██║       ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
// ██║  ██║╚██████╔╝╚██████╔╝   ██║       ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝        ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   


function CareFormComponent(props) {

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

export default CareFormComponent;