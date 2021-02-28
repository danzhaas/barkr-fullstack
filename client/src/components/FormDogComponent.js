import React, { useState } from 'react';
import { Row, Col, Button, TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import classnames from 'classnames';
import {Consumer} from "./configContext";
import UserHeader from './UserHeaderComponent';
import HomeFormComponent from './FormDog/HomeFormComponent';
import SpeakFormComponent from './FormDog/SpeakFormComponent';
import AdventureFormComponent from './FormDog/AdventureFormComponent';
import CareFormComponent from './FormDog/CareFormComponent';
import Footer from './FooterComponent';


const DogTabs = ({ context }) => {
    const [activeTab, setActiveTab] = useState('4');

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
                            <HomeFormComponent context={context} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <SpeakFormComponent context={context} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <AdventureFormComponent />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <CareFormComponent context={context} />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}


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