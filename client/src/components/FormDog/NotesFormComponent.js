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
    
    const [ activeNote, setActiveNote ] = useState('0');
    const [ updatedNotesList, updateNotes ] = useState([...chosenDog.notes]);
    const [ formData, setFormData ] = useState({
        "id":0,
        "commandName":"My First Command",
        "image":"",
        "description":"The first trick I can do"
    });

    useEffect(() => {

        var {
            id,
            content
        } = updatedNotesList[activeNote];

        setFormData({
            id:id,
            content:content
        });
    }, [ activeNote, updateNotes ]
    );

    var {
        id,
        content
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function addNewNote () {
        setFormData({
            id:updatedNotesList.length,
            content:""
        });
        chosenDog.notes.push(formData);
    }

    function updateNote () {
        const newNote = {...formData};
        const noteUpdate = [...updatedNotesList, newNote];
        updateNotes(
            [...noteUpdate]
        )
    }


    return (
        <div className="bg-white border-0">
            <h1>Notes</h1>
            <Row className="bg-white border-0">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" onClick={ () => addNewNote() } >
                            <h2 className="my-auto ml-2 text-primary">Add New Note</h2>
                        </Button>
                    </div>
                    <h2>Notes</h2>
                    <NotesList notes={updatedNotesList} setActiveNote={setActiveNote} />
                </div>
                <div className="col-8">
                    <Form>
                        <p>Note # {formData.id}</p>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="content" sm={3}>Content</Label>
                            <Col sm={9}>
                                <Input type="text" name="content" id="content" 
                                    value={ content } 
                                    onChange={(e) => onChange(e)} 
                                />
                            </Col>
                        </FormGroup>
                        <br /><br />
                        <div className="flex-row justify-content-between w-100">
                            <Button className="bg-success" onClick={ () => updateNote() } >Add/Update Note</Button>{' '}
                            <Button className="bg-danger">Delete Note</Button>
                        </div>
                    </Form>
                </div>
            </Row>
        </div>
    )
}

export default NotesFormComponent;