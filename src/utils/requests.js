import axios from 'axios';

export async function checkAccount (email,password) {

    let response = await axios({
        method: 'POST',
        url: 'https://trackout.herokuapp.com/api/user/login',
        data: {
          email : email,
          password : password
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(function () {
        return 'Error';
    });

    return response;
}

export async function newAccount (email,password) {

    let response = await axios({
        method: 'POST',
        url: 'https://trackout.herokuapp.com/api/user/create',
        data: {
            email : email,
            password : password
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(function () {
        return 'Error';
    });

    return response;
}
