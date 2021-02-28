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
    
    const [ activeSupplies, setActiveSupplies ] = useState('0');
    const [ updatedSuppliesList, updateSupplies ] = useState([...chosenDog.supplies]);
    const [ formData, setFormData ] = useState({
        "id":0,
        "detail":"64 Slices of American Cheese"
    });

    useEffect(() => {

        var {
            id,
            detail
        } = updatedSuppliesList[activeSupplies];

        setFormData({
            id:id,
            detail:detail
        });
    }, [ activeSupplies, updateSupplies ]
    );

    var {
        id,
        detail
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function addNewSupply () {
        setFormData({
            id:updatedSuppliesList.length,
            detail:""
        });
        chosenDog.supplies.push(formData);
    }

    function updateSupply () {
        const newSupplies = {...formData};
        const supplyUpdate = [...updatedSuppliesList, newSupplies];
        updateSupplies(
            [...supplyUpdate]
        )
    }


    return (
        <div className="bg-white border-0">
            <h1>Supplies</h1>
            <Row className="bg-white border-0">
                <div className="col-4">
                    <div className="w-100">
                        <Button className="bg-white w-100" onClick={ () => addNewSupply() } >
                            <h2 className="my-auto ml-2 text-primary">Add New Supplies</h2>
                        </Button>
                    </div>
                    <h2>Supplies</h2>
                    <SuppliesList supplies={updatedSuppliesList} setActiveSupplies={setActiveSupplies} />
                </div>
                <div className="col-8">
                    <Form>
                        <p>Supply Item # {formData.id}</p>
                        <FormGroup className="bg-white border-0" row>
                            <Label for="detail" sm={3}>Supplies</Label>
                            <Col sm={9}>
                                <Input type="text" name="detail" id="detail" 
                                    value={ detail } 
                                    onChange={(e) => onChange(e)} 
                                />
                            </Col>
                        </FormGroup>

                        <br /><br />
                        <div className="flex-row justify-content-between w-100">
                            <Button className="bg-success" onClick={ () => updateSupply() } >Add/Update Supplies Detail</Button>{' '}
                            <Button className="bg-danger">Delete Supplies Detail</Button>
                        </div>
                    </Form>
                </div>
            </Row>
        </div>
    )
}

export default SuppliesFormComponent;