import React, { useState, useEffect } from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap'


const CommandsList = ({ commands, setActiveCommand }) => {

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


function SpeakFormComponent({ context: { chosenDog } }) {
    
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
        // if the command is an edit to an existing command
        // (we can tell because the formData.id does not match id for any of the )
        // if ()
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

export default SpeakFormComponent;