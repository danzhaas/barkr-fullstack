import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import Autosuggest from 'react-autosuggest';
import dogBreeds from 'dog-breeds';

export default function HomeFormComponent({ context: { chosenDog, chooseDog, dogId } }) {

    const [ formData, setFormData ] = useState({
        id:"",
        aName:"",
        bio:"",
        sex:"M",
        breeds:"",
        yearBorn:"",
        from:"",
        dateRegistered:"",
        thumbnailPic:"",
        profilePic:""
    });

    useEffect(() => {
        if (!chosenDog) chooseDog(dogId);

        const {
            id,
            aName,
            bio,
            sex,
            breeds,
            yearBorn,
            from,
            dateRegistered, 
        } = chosenDog;

        setFormData({
            id:id,
            aName:aName,
            bio:bio,
            sex:sex,
            breeds:breeds,
            yearBorn:yearBorn,
            from:from,
            dateRegistered:dateRegistered,
            thumbnailPic:"",
            profilePic:""
        })
    }, [])

    var {
        id,
        aName,
        bio,
        sex,
        breeds,
        yearBorn,
        from,
        dateRegistered,
        thumbnailPic,
        profilePic
    } = formData;

    
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const breedsList = dogBreeds.all;

    return (
        <div className="bg-white border-0">
            <h1>Dog Info</h1>
            <p>Dog ID: {id}</p>
            <p>Date Registered: {dateRegistered}</p>
            <Form>
                
                <FormGroup className="bg-white border-0" row>
                    <Label for="aName" sm={3}>Name</Label>
                    <Col sm={9}>
                        <Input type="text" name="aName" id="aName" value={aName} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="bio" sm={3}>Bio</Label>
                    <Col sm={9}>
                        <Input type="textarea" name="bio" id="bio" value={bio} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="sex" sm={3}>Sex</Label>
                    <Col sm={9}>
                        <Input type="select" name="sex" id="sex" value={sex} onChange={(e) => onChange(e)} >
                            <option>M</option>
                            <option>F</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Col>
                        <Label className="text-left" for="selectBreeds" >Select All Breeds</Label>
                        <p><i class="fas fa-paw"></i> Start typing to jump ahead</p>
                        <p><i class="fas fa-paw"></i> Ctrl+Click to select multiple</p>
                    </Col>
                    <Col sm={9}>
                        <Input type="select" name="selectBreeds" id="selectBreeds" multiple
                            value={breeds} 
                            onChange={(e) => onChange(e)}
                        >
                            {breedsList.map(breed => <option>{breed.name}</option>)}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="yearBorn" sm={3}>Year Born</Label>
                    <Col sm={9}>
                        <Input type="text" name="yearBorn" id="yearBorn" value={yearBorn} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="from" sm={3}>Where Born or Adopted</Label>
                    <Col sm={9}>
                        <Input type="text" name="from" id="from" value={from} onChange={(e) => onChange(e)} />
                    </Col>
                </FormGroup>
                <h1>Pictures</h1>
                <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                    <Label className="col-3" for="">Upload Thumbnail Picture</Label>
                    <Input className="col-9" type="file" name="thumbnailPic" id="thumbnailPic" value={thumbnailPic} onChange={(e) => onChange(e)} />
                    <FormText className="col-12" color="black">
                        Suggested size 200x200 pixels.  
                    </FormText>
                </FormGroup>
                <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                    <Label className="col-3" for="">Upload Profile Picture</Label>
                    <Input className="col-9" type="file" name="profilePic" id="profilePic" value={profilePic} onChange={(e) => onChange(e)} />
                    <FormText className="col-12" color="black">
                        Suggested size 800x800 pixels.  
                    </FormText>
                </FormGroup>
            </Form>
        </div>
    )
}
