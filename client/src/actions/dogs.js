import axios from 'axios';
import url from '../backend'

export async function getDog(dogId) {
    try {
        const res = await axios.get( `/api/dogs/${dogId}` );
        const dog = res.data;
        return dog;
    } catch (err) {
        const errors = err.response.data.errors;    // errors from the data in the response declared errors

        if(errors) {    // if there are errors 
            errors.forEach(error => alert(error.msg))    // for eac
        }
    }
} 


export async function loadDogs(func1) {
    try {
        const res = await axios.get( `${url}/api/dogs/` );
        const dogsArray = res.data.dogs;
        func1(dogsArray);
        // console.log(dogsArray);
    } catch (err) {
        const errors = err.response;    // errors from the data in the response declared errors
        if(errors) {    // if there are errors 
            errors.forEach(error => alert(error.msg))    // for eac
        }
    }
}

export async function getDogs() {
    try {
        const res = await axios.get( '/api/dogs' );
        return res.data;
    } catch (err) {
        const errors = err.response.data.errors;    // errors from the data in the response declared errors

        if(errors) {    // if there are errors 
            errors.forEach(error => alert(error.msg))    // for eac
        }
    }
} 