import React, { useState, useEffect } from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap'


const NotesList = ({ notes, setActiveNote }) => {

    return(
        notes.map(note => {
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


function NotesFormComponent({ context: { chosenDog } }) {
    
    const [activeNote, setActiveNote] = useState('0');
    // const [ activeCommand, setActiveCommand ] = useState('0');
    // const [ updatedCommandsList, updateCommands ] = useState([...chosenDog.commands]);
    // const [ formData, setFormData ] = useState({
    //     "id":0,
    //     "commandName":"My First Command",
    //     "image":"",
    //     "description":"The first trick I can do"
    // });

    // useEffect(() => {

    //     var {
    //         id,
    //         commandName,
    //         image,
    //         description
    //     } = updatedCommandsList[activeCommand];

    //     setFormData({
    //         id:id,
    //         commandName:commandName,
    //         image:image,
    //         description:description
    //     });
    // }, [ activeCommand, updateCommands ]
    // );

    // var {
    //     id,
    //     commandName,
    //     image,
    //     description
    // } = formData;

    // const onChange = e => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }

    // function addNewCommand () {
    //     setFormData({
    //         id:updatedCommandsList.length,
    //         commandName:"",
    //         image:"",
    //         description:""
    //     });
    //     chosenDog.commands.push(formData);
    // }

    // function updateCommand () {
    //     const newCommand = {...formData};
    //     const commandUpdate = [...updatedCommandsList, newCommand];
    //     updateCommands(
    //         [...commandUpdate]
    //     )
    // }


    return (
        <div className="bg-white border-0">
            <h1>Notes</h1>
            <Row className="bg-white border-0">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" >
                            <h2 className="my-auto ml-2 text-primary">Add New Note</h2>
                        </Button>
                    </div>
                    <h2>Notes</h2>
                    <NotesList notes={chosenDog.notes} setActiveNote={setActiveNote} />
                </div>
                <div className="col-8">
                    <Form>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="noteContent" sm={3}>Note</Label>
                            <Col sm={9}>
                                <Input type="text" name="noteContent" id="noteContent" value={ chosenDog.notes[activeNote].content} />
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
        </div>
    )
}

export default NotesFormComponent;