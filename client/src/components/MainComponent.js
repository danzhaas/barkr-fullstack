import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConfigProvider, Consumer } from "./configContext";
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
            <Consumer>
                {context => {
                    return(
                        <Switch>
                            {/* <Route path='/landing' render={() => <LandingComponent />} />
                            <Route exact path='/dog-home' render={() => <DogHomeComponent/>} />
                            <Route exact path='/talk' render={() => <TalkComponent />} />
                            <Route exact path='/adventure' render={() => <AdventureComponent />} />
                            <Route exact path='/care' render={() => <CareComponent />} />
                            <Redirect to='/landing' /> */}
                            <Route exact path={`/meet/${context.dogId}/talk`} render={() => <TalkComponent />} />
                            <Route exact path={`/meet/${context.dogId}/adventure`} render={() => <AdventureComponent />} />
                            <Route exact path={`/meet/${context.dogId}/care`} render={() => <CareComponent />} />
                            <Route exact path={`/meet/${context.dogId}`} render={() => <DogHomeComponent/>} />                
                            <Route exact path={`/user/${context.userId}/settings`} render={() => <UserSettingsComponent />} />                
                            <Route exact path={`/user/${context.userId}/:dogId`} render={() => <FormDogComponent />} />
                            <Route exact path={`/user/${context.userId}`} render={() => <FormUserComponent />} />
                            <Route path='/' render={() => <LandingComponent />} />
                            <Redirect to='/' />
                        </Switch>
                    )
                }}
            </Consumer>
        </ConfigProvider>
    )
}

export default Main;