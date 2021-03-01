import React, { useState, createContext } from "react";
import { DOGS } from '../shared/dogs';
import { USERS } from '../shared/users';

const { Provider, Consumer } = createContext();

function ConfigProvider (props) {
    
    const [chosenDog, updateDog] = useState({});
    const [chosenUser, updateUser] = useState({});

    // const [dogId, chooseDog] = useState(0);
    // const [userId, chooseUser] = useState(0);

    // dogs=DOGS;
    // users=USERS;

        
    return (
        <Provider
            value={{
                // dogs:dogs,
                // dogId: dogId,
                // chooseDog: chooseDog,
                chosenDog: chosenDog,
                updateDog: updateDog,

                // users:users,
                // userId: userId,
                // chooseUser: chooseUser,
                chosenUser: chosenUser,
                updateUser: updateUser
            }}
        >
            {props.children}
        </Provider>
    );
}

export { Consumer, ConfigProvider }