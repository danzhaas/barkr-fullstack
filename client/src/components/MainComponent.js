import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConfigProvider } from "./configContext";
import LandingComponent from './LandingComponent';
import DogHomeComponent from './DogHomeComponent';
import TalkComponent from './TalkComponent';
import AdventureComponent from './AdventureComponent';
import CareComponent from './CareComponent';
import FormUserComponent from './FormUserComponent';
import FormDogComponent from './FormDogComponent';
import UserSettingsComponent from './UserSettingsComponent';


function Main () {
    
    return (
        <ConfigProvider >
            <Switch>
                {/* <Route path='/landing' render={() => <LandingComponent />} />
                <Route exact path='/dog-home' render={() => <DogHomeComponent/>} />
                <Route exact path='/talk' render={() => <TalkComponent />} />
                <Route exact path='/adventure' render={() => <AdventureComponent />} />
                <Route exact path='/care' render={() => <CareComponent />} />
                <Redirect to='/landing' /> */}
                <Route exact path='/meet/:dogId/talk' render={() => <TalkComponent />} />
                <Route exact path='/meet/:dogId/adventure' render={() => <AdventureComponent />} />
                <Route exact path='/meet/:dogId/care' render={() => <CareComponent />} />
                <Route exact path='/meet/:dogId' render={() => <DogHomeComponent/>} />                
                <Route exact path='/user/:userId/settings' render={() => <UserSettingsComponent />} />                
                <Route exact path='/user/:userId/:dogId' render={() => <FormDogComponent />} />
                <Route exact path='/user/:userId' render={() => <FormUserComponent />} />
                <Route path='/' render={() => <LandingComponent />} />
                <Redirect to='/' />
            </Switch>
        </ConfigProvider>
    )
}

export default Main;