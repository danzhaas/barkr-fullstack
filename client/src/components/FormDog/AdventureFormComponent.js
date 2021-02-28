import React, { useState } from 'react';
import { Row, Form, FormGroup, Label, Input, Col, CustomInput } from 'reactstrap'

export default function AdventureFormComponent() {
    
    const [displayUrlInput, toggledisplay] = useState(false);

    return (
        <div className="bg-white border-0">
            <h1>My Local Map</h1>
            <Row className="bg-white border-0">
                <Col>
                
                    <p>You can share your map of your favorite local spots to take your dog on adventures.  <a href="https://www.google.com/maps/d/u/0/">You can make your own map with Google My Maps</a>.</p>
                    <Form>
                        <FormGroup>
                            <Label for="toggleAdventure">Share your map of local spots?</Label>
                                <CustomInput type="switch" id="toggleAdventure" name="toggleAdventure" 
                                label="Share my map" 
                                checked={displayUrlInput}
                                onChange={() => toggledisplay(!displayUrlInput)}
                            />
                        </FormGroup>
                        {displayUrlInput ? 
                        <FormGroup>
                            <Label for="mapUrl" sm={3} >Enter Google My Maps Url</Label>
                            <Col sm={9}>
                                <Input
                                    type="url"
                                    name="mapUrl"
                                    id="mapUrl"
                                    placeholder="ex: https://www.google.com/maps/d/u/0/embed?mid=1J75h137lZpMDdLeovFbWOkHCl_YZDRlg"
                                />
                            </Col>
                        </FormGroup>
                        :
                        ""
                        } 
                    </Form>

                </Col>
            </Row>
        </div>
    )
}
