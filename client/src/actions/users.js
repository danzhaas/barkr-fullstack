
    // async function submitUserSettings( userId, formData ) {
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }

    //     try {
    //         const res = await axios.put(`/api/users/${userId}`, formData, config);
    //     } catch (err) {
    //         const errors = err.response.data.errors;    // errors from the data in the response declared errors
    
    //         if(errors) {    // if there are errors 
    //             errors.forEach(error => alert(error.msg))    // for eac
    //         }
    //     }
    // }

    // document.querySelector('#userForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     submitUserSettings();
    // })