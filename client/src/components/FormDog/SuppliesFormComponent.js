import React, { useState, useEffect } from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap'


const SuppliesList = ({ supplies, setActiveSupplies }) => {

    return(
        supplies.map(supply => {
            return(
                <div key={supply.id} className="w-100">
                    <Button className="bg-white w-100" onClick={() => setActiveSupplies(supply.id)}>
                        <h2 className="my-auto ml-2 text-primary">{supply.detail}</h2>
                    </Button>
                </div>
            )
        })
    )

}


function SuppliesFormComponent({ context: { chosenDog } }) {
    
    const [activeSupplies, setActiveSupplies] = useState('0');
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
            <h1>Supplies</h1>
            <Row className="bg-white border-0">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" >
                            <h2 className="my-auto ml-2 text-primary">Add New Supplies</h2>
                        </Button>
                    </div>
                    <h2>Supplies</h2>
                    <SuppliesList supplies={chosenDog.supplies} setActiveSupplies={setActiveSupplies} />
                </div>
                <div className="col-8">
                    <Form>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="suppliesDetail" sm={3}>Supplies</Label>
                            <Col sm={9}>
                                <Input type="text" name="suppliesDetail" id="suppliesDetail" value={ chosenDog.supplies[activeSupplies].detail} />
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
        </div>
    )
}

export default SuppliesFormComponent;