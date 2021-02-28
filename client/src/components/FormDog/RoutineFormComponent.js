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
    
    const [activeRoutine, setActiveRoutine] = useState('0');
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
            <h1>Routine</h1>
            <Row className="bg-white border-0">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" >
                            <h2 className="my-auto ml-2 text-primary">Add New Command</h2>
                        </Button>
                    </div>
                    <h2>Routine</h2>
                    <RoutineList routines={chosenDog.routine} setActiveRoutine={setActiveRoutine} />
                </div>
                <div className="col-8">
                    <Form>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="routineDetail" sm={3}>Detail</Label>
                            <Col sm={9}>
                                <Input type="text" name="routineDetail" id="routineDetail" value={ chosenDog.routine[activeRoutine].detail} />
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
        </div>
    )
}

export default RoutineFormComponent;