import React, { useState, useEffect } from 'react';
import {
    Card, CardBody, CardTitle, CardText, Row, Button, Form, FormGroup, Label, Input, Col, CustomInput, NavItem, NavLink, TabPane, Nav, TabContent
} from 'reactstrap';
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
                <CardText className="text-center">
                    {address}
                </CardText>
                <CardText className="text-center">
                    <a href={formatPhoneDialer({phone})} >
                        {phone}
                    </a>
                </CardText>
            </CardBody>
        </Card>
    )
}


const ContactsTabs = ({ formData, setFormData }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    var {
        aName,
        username,
        ownerDisplayed,
        ownerAddress,
        ownerPhone,
        vetDisplayed,
        vetBusinessName,
        vetAddress,
        vetPhone,
        eVetDisplayed,
        eVetBusinessName,
        eVetAddress,
        eVetPhone
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
                            <FormGroup>
                            <CustomInput type="switch" id="contactOwnerDisplaySwitch" name="contactOwnerDisplaySwitch" 
                            checked={ownerDisplayed} onChange={() => setFormData({...formData, ownerDisplayed:!ownerDisplayed})}
                            label="Display this tab to other users?" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="bg-white border-0">
                        { ownerDisplayed ? 
                            <>
                                <Col sm="6">
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="ownerName" sm={2}>Name</Label>
                                        <Col sm={10}>
                                            {aName}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="ownerAddress" sm={2}>Address</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="ownerAddress" id="ownerAddress" value={ownerAddress} placeholder="123 Fake St" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="ownerPhone" sm={2}>Phone</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="ownerPhone" id="ownerPhone" value={ownerPhone}  placeholder="888-888-8888" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <div className="col col-md-6">
                                    <ContactsCard name={aName} address={ownerAddress} phone={ownerPhone} />
                                </div>
                            </>
                            :
                            <h3 className="text-center" >No Owner card will be displayed</h3> 
                        }
                    </Row>
                </TabPane>

                {/* Vet Tab */}
                <TabPane tabId="2">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <FormGroup>
                                <CustomInput type="switch" id="contactVetDisplaySwitch" name="contactVetDisplaySwitch" 
                                checked={vetDisplayed} onChange={() => setFormData({...formData, vetDisplayed:!vetDisplayed})}
                                label="Display this tab to other users?"  
                            />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="bg-white border-0">
                        { vetDisplayed ? 
                            <>
                                <Col sm="6">
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="contactVetName" sm={2}>Name</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="vetBusinessName" id="vetBusinessName" value={vetBusinessName} placeholder="Vet Clinic Name" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="contactVetAddress" sm={2}>Address</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="vetAddress" id="vetAddress" value={vetAddress} placeholder="123 Fake St" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="contactVetPhone" sm={2}>Phone</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="vetPhone" id="vetPhone" value={vetPhone} placeholder="888-888-8888" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <div className="col col-md-6">
                                    <ContactsCard name={vetBusinessName} address={vetAddress} phone={vetPhone} />
                                </div>
                            </>
                            :
                            <h3 className="text-center" >No Vet card will be displayed</h3> 
                        }
                    </Row>
                </TabPane>


                {/* Emergency Vet Tab */}
                <TabPane tabId="3">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <FormGroup>
                                <CustomInput type="switch" id="contactEVetDisplaySwitch" name="contactEVetDisplaySwitch" 
                                label="Display this tab to other users?" 
                                checked={eVetDisplayed} onChange={() => setFormData({...formData, eVetDisplayed:!eVetDisplayed})}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row className="bg-white border-0">
                        { eVetDisplayed ? 
                            <>
                                <Col sm="6">
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="contactEVetName" sm={2}>Name</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="eVetBusinessName" id="eVetBusinessName" value={eVetBusinessName} placeholder="Emergency Vet Clinic Name" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="contactVetAddress" sm={2}>Address</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="eVetAddress" id="eVetAddress" value={eVetAddress} placeholder="123 Fake St" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="bg-white border-0" row>
                                        <Label for="contactVetPhone" sm={2}>Phone</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="eVetPhone" id="eVetPhone" value={eVetPhone} placeholder="888-888-8888" onChange={(e) => onChange(e)} />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <div className="col col-md-6">
                                    <ContactsCard name={eVetBusinessName} address={eVetAddress} phone={eVetPhone} />
                                </div>
                            </>
                            : 
                            <h3 className="text-center" >No Emergency Vet card will be displayed</h3> 
                        }
                    </Row>

                </TabPane>

            </TabContent>
        </div>
    );
}


function UserForm({ context: { chosenUser, chooseUser, userId } }) {
    
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

    const [ formData, setFormData ] = useState({
            id:"",
            username:"",
            email:"",
            password1:"",
            password2:"",
            aName:"",
            ZIP:"",
            privacy:false,
            ownerDisplayed:true,
            ownerAddress:"",
            ownerPhone:"",
            vetDisplayed:true,
            vetBusinessName:"",
            vetAddress:"",
            vetPhone:"",
            eVetDisplayed:true,
            eVetBusinessName:"",
            eVetAddress:"",
            eVetPhone:"",
            dateRegistered:""
    });

    useEffect(() => {
        if (!chosenUser) chooseUser(userId);

        const {
            id,
            username,
            email,
            aName,
            ZIP,
            privacy,
            contacts: {
                owner,
                vet,
                emergencyVet
            },
            dateRegistered
        } = chosenUser;

        setFormData({
            id:id,
            username:username,
            email:email,
            aName:aName,
            ZIP:ZIP,
            privacy:privacy,
            ownerDisplayed:owner.displayed,
            ownerAddress:owner.address,
            ownerPhone:owner.phone,
            vetDisplayed:vet.displayed,
            vetBusinessName:vet.businessName,
            vetAddress:vet.address,
            vetPhone:vet.phone,
            eVetDisplayed:emergencyVet.displayed,
            eVetBusinessName:emergencyVet.businessName,
            eVetAddress:emergencyVet.address,
            eVetPhone:emergencyVet.phone,
            dateRegistered:dateRegistered
        })
    }, [])

    var {
        id,
        username,
        email,
        password1,
        password2,
        aName,
        ZIP,
        privacy,
        dateRegistered
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Form id="userForm" >

                <h2>User Info</h2>
                <p>Name: {aName}</p>
                <p>Username: {username}</p>
                <p>User id: {id}</p>
                <p>Date registered: {dateRegistered}</p>

                <h2>Login</h2>
                {/* Email */}
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="your@email.com" value={email} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                {/* Change Password */}
                <FormGroup row>
                    <Label for="password1" sm={2}>Change Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password1" id="password1" placeholder="" value={password1} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password2" sm={2}>Confirm New Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password2" id="password2" value={password2} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>

                <h2>Personal Info</h2>
                {/* Name */}
                <FormGroup row>
                    <Label for="aName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="aName" id="aName" placeholder="First Last" value={aName} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                {/* ZIP */}
                <FormGroup row>
                    <div sm={2}>
                        <Label for="ZIP" sm={12}>ZIP Code - Optional</Label>
                        <p sm={12}>(for finding adventure)</p>
                    </div>
                    <Col sm={10}>
                        <Input type="text" name="ZIP" id="ZIP" placeholder="90210" value={ZIP} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>

                <h2>Privacy</h2>
                {/* Visibility */}
                <div className="flex-row" >
                    <p>Visible&nbsp;</p>
                    <CustomInput type="switch" id="privacySwitch" name="privacySwitch" checked={privacy} onChange={() => setFormData({...formData, privacy:!privacy})}
                        label="Private (Other users cannot see you or your dogs)" 
                    />
                </div>
                
                <h2>Contact Cards</h2>
                <ContactsTabs formData={formData} setFormData={setFormData} />
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
                        <UserHeader pageName="Settings for" userName={context.chosenUser.aName} />
                        <div className="container">
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 m-auto">
                                    <UserForm context={context} />
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