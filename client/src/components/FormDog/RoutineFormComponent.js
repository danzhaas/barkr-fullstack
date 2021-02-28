import React, { useState, useEffect } from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap'


const RoutineList = ({ routines, setActiveRoutine }) => {

    return( 
        routines.map((routine) => {
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


function RoutineFormComponent({ context: { chosenDog } }) {
    
    const [ activeRoutine, setActiveRoutine ] = useState('0');
    const [ updatedRoutinesList, updateRoutines ] = useState([...chosenDog.routine]);
    const [ formData, setFormData ] = useState({
        "id":0,
        "detail": "12:00 AM - Eat 64 slices of American Cheese"
    });

    useEffect(() => {

        var {
            id,
            detail
        } = updatedRoutinesList[activeRoutine];

        setFormData({
            id:id,
            detail:detail
        });

    }, [ activeRoutine, updateRoutines ]
    );

    var {
        id,
        detail
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function addNewRoutine () {
        setFormData({
            id:updatedRoutinesList.length,
            detail:""
        });
        chosenDog.routine.push(formData);
    }

    function updateRoutine () {
        const newRoutine = {...formData};
        const routineUpdate = [...updatedRoutinesList, newRoutine];
        updateRoutines(
            [...routineUpdate]
        )
    }


    return (
        <div className="bg-white border-0">
            <h1>Routine</h1>
            <Row className="bg-white border-0">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" onClick={ () => addNewRoutine() } >
                            <h2 className="my-auto ml-2 text-primary" >Add New Routine</h2>
                        </Button>
                    </div>
                    <h2>Routine</h2>
                    <RoutineList routines={chosenDog.routine} setActiveRoutine={setActiveRoutine} />
                </div>
                <div className="col-8">
                    <Form>
                        <p>Routine Item # {formData.id}</p>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="detail" sm={3}>Detail</Label>
                            <Col sm={9}>
                                <Input type="text" name="detail" id="detail" 
                                    value={ detail } 
                                    onChange={(e) => onChange(e)} 
                                />
                            </Col>
                        </FormGroup>
                        <br /><br />
                        <div className="flex-row justify-content-between w-100">
                            <Button className="bg-success" onClick={ () => updateRoutine() } >Add/Update Routine Detail</Button>{' '}
                            <Button className="bg-danger">Delete Routine Detail</Button>
                        </div>
                    </Form>
                </div>
            </Row>
        </div>
    )
}

export default RoutineFormComponent;