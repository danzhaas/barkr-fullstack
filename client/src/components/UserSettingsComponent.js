import React, { useState } from 'react';
import {
    Card, CardBody, CardTitle, CardText, Row, Button, Form, FormGroup, Label, Input, Col, CustomInput, NavItem, NavLink, TabPane, Nav, TabContent
} from 'reactstrap';
import axios from 'axios';
import classnames from 'classnames';
import UserHeader from './UserHeaderComponent';
import {Consumer} from "./configContext";
import Footer from './FooterComponent';


const ContactTab = ({ activeTab, toggle, tabNo, title }) => {
    return (
        <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === tabNo })}
                        onClick={() => { toggle(tabNo); }}
                    >
                        {title}
                    </NavLink>
                </NavItem>
    )
}

const ContactsCard = ({ name, address, phone }) => {
    
    const formatPhoneDialer = (phone) => `tel:${phone}`;

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h3>{name}</h3>
                </CardTitle>
                <CardText>
                    {address}
                </CardText>
                <CardText>
                    <a href={formatPhoneDialer({phone})} >
                        {phone}
                    </a>
                </CardText>
            </CardBody>
        </Card>
    )
}


const ContactsTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div>
            <Nav tabs>
                <ContactTab activeTab={activeTab} toggle={toggle} tabNo="1" title="Owner" />
                <ContactTab activeTab={activeTab} toggle={toggle} tabNo="2" title="Vet" />
                <ContactTab activeTab={activeTab} toggle={toggle} tabNo="3" title="Emergency Vet" />
            </Nav>

            <TabContent activeTab={activeTab}>
                
                {/* Owner Tab */}
                <TabPane tabId="1">
                <Row className="bg-white border-0">
                        <Col sm="12">
                            <p>Your Contact Card</p>
                            <FormGroup>
                            <CustomInput type="switch" id="contactOwnerDisplaySwitch" name="contactOwnerDisplaySwitch" label="Display this tab to other users?" checked />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="bg-white border-0">
                        <Col sm="6">
                            <FormGroup className="bg-white border-0" row>
                                <Label for="ownerName" sm={2}>Name</Label>
                                <Col sm={10}>
                                    Username
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="ownerAddress" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input type="text" name="ownerAddress" id="ownerAddress" placeholder="123 Fake St" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="ownerPhone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="text" name="ownerPhone" id="ownerPhone" placeholder="8888888888" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <div className="col col-md-6">
                            <ContactsCard name="Owner Name" address="Owner Address" phone="4105555555" />
                        </div>
                    </Row>
                </TabPane>

                {/* Vet Tab */}
                <TabPane tabId="2">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <p>Vet Contact Card</p>
                            <FormGroup>
                                <CustomInput type="switch" id="contactVetDisplaySwitch" name="contactVetDisplaySwitch" label="Display this tab to other users?" checked />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="bg-white border-0">
                        <Col sm="6">
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetName" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactVetName" id="contactVetName" placeholder="Vet Clinic Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetAddress" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactVetAddress" id="contactVetAddress" placeholder="123 Fake St" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetPhone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactVetPhone" id="contactVetPhone" placeholder="8888888888" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <div className="col col-md-6">
                            <ContactsCard name="Vet Name" address="Vet Address" phone="4105555556" />
                        </div>
                    </Row>
                </TabPane>

                {/* Emergency Vet Tab */}
                <TabPane tabId="3">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <p>Emergency Vet Contact Card</p>
                            <FormGroup>
                                <CustomInput type="switch" id="contactEVetDisplaySwitch" name="contactEVetDisplaySwitch" label="Display this tab to other users?" checked />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="bg-white border-0">
                        <Col sm="6">
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactEVetName" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactEVetName" id="contactEVetName" placeholder="Emergency Vet Clinic Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetAddress" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactEVetAddress" id="contactEVetAddress" placeholder="123 Fake St" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetPhone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactEVetPhone" id="contactEVetPhone" placeholder="8888888888" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <div className="col col-md-6">
                            <ContactsCard name="E-Vet Name" address="E-Vet Address" phone="4105555557" />
                        </div>
                    </Row>
                </TabPane>

            </TabContent>
        </div>
    );
}


function UserForm(props) {
    
    // async function submitUserSettings( userId, formData ) {
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }

    //     try {
    //         const res = await axios.put(`/api/users/${userId}`, formData, config);
    //     } catch (err) {
    //         const errors = err.response.data.errors;    // errors from the data in the response declared errors
    
    //         if(errors) {    // if there are errors 
    //             errors.forEach(error => alert(error.msg))    // for eac
    //         }
    //     }
    // }

    // document.querySelector('#userForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     submitUserSettings();
    // })

    const [ formValues, updateValues ] = useState(
        // id,
        // username,
        // email,
        // personal: {
        //   name,
        //   ZIP   
        // },
        // private,
        // contacts: {
        //   owner: {
        //      displayed,
        //      address,
        //      phone
        //   },
        //   vet: {
        //      displayed,
        //      businessName,
        //      address,
        //      phone
        //   },
        //   emergencyVet: {
        //      displayed,
        //      businessName,
        //      address,
        //      phone
        //   }
        // },
        // dateRegistered
    )
    
    return (
        <>
            <Form id="userForm" >

                <h2>Login</h2>
                {/* Email */}
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="your@email.com" />
                    </Col>
                </FormGroup>
                {/* Change Password */}
                <FormGroup row>
                    <Label for="password1" sm={2}>Change Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password1" id="password1" placeholder=""/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password2" sm={2}>Confirm New Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password2" id="password2" />
                    </Col>
                </FormGroup>

                <h2>Personal Info</h2>
                {/* Name */}
                <FormGroup row>
                    <Label for="aName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="aName" id="aName" placeholder="First Last" />
                    </Col>
                </FormGroup>
                {/* ZIP */}
                <FormGroup row>
                    <div sm={2}>
                        <Label for="ZIP" sm={12}>ZIP Code - Optional</Label>
                        <p sm={12}>(for finding adventure)</p>
                    </div>
                    <Col sm={10}>
                        <Input type="text" name="ZIP" id="ZIP" placeholder="90210" />
                    </Col>
                </FormGroup>

                <h2>Privacy</h2>
                {/* Visibility */}
                <div className="flex-row" >
                    <p>Visible&nbsp;</p><CustomInput type="switch" id="privacySwitch" name="privacySwitch" label="Private (Other users cannot see you or your dogs)" />
                </div>
                
                <h2>Contacts</h2>
                <ContactsTabs />
            </Form>

            <br />
            <div className="flex-row justify-content-between w-100">
                <Button className="bg-success">Submit Changes</Button>
                <Button className="bg-danger">Delete My Account</Button>
            </div>
            
        </>
    )
}


function UserSettingsComponent(props) {

    return (
        <Consumer>
            {context => {
                console.log(context.chosenUser);
                return (
                    <>
                        <UserHeader pageName="Settings for" userName={context.chosenUser.name} />
                        <div className="container">
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 m-auto">
                                    <UserForm />
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

export default UserSettingsComponent;