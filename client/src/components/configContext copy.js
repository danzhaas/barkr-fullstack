import React, { Component, createContext } from "react";
import { DOGS } from '../shared/dogs';
import { USERS } from '../shared/users';

const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
    state = {
        dogId: 0,
        userId:0
    };

    chooseDog(id) {
        this.setState({ dogId: id });
    };

    chooseUser(id) {
        this.setState({ userId: id });
    };

    dogs=DOGS;
    users=USERS;

    render() {
        
        this.chooseDog = this.chooseDog.bind(this);
        this.chooseUser = this.chooseUser.bind(this);

        return (
            <Provider
                value={{
                    dogs:this.dogs,
                    dogId: this.state.dogId,
                    chooseDog: this.chooseDog,
                    chosenDog: this.dogs[this.state.dogId],
                    users:this.users,
                    userId: this.state.userId,
                    chooseUser: this.chooseUser,
                    chosenUser: this.users[this.state.userId]
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { Consumer, ConfigProvider }