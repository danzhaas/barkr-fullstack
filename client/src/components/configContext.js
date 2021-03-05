import React, { useState, createContext } from "react";
import {
    getDog
} from '../actions/dogs';
// import {
//     getUser,
// } from '../actions/users';

const { Provider, Consumer } = createContext();

function ConfigProvider (props) {
    
    const [chosenDog, updateDog] = useState({});
    const [chosenUser, updateUser] = useState({});

    

    // Archived in case I need these again, I don't think so though...
    // const [dogId, chooseDog] = useState(0);
    // const [userId, chooseUser] = useState(0);
    // dogs=DOGS;
    // users=USERS;

        
    return (
        <Provider
            value={{
                chosenDog: chosenDog,
                updateDog: updateDog,
                chosenUser: chosenUser,
                updateUser: updateUser



                // Archived in case I need these again, I don't think so though...
                // dogs:dogs,
                // dogId: dogId,
                // chooseDog: chooseDog,
                // users:users,
                // userId: userId,
                // chooseUser: chooseUser,
            }}
        >
            {props.children}
        </Provider>
    );
}

export { Consumer, ConfigProvider }