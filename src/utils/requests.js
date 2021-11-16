import axios from 'axios';

export function checkAccount (email,password) {
    axios({
        method: 'POST',
        url: 'https://trackout.herokuapp.com/api/user/login',
        data: {
          email : email,
          password : password
        }
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function newAccount (email,password) {
    axios({
        method: 'POST',
        url: 'https://trackout.herokuapp.com/api/user/create',
        data: {
          email : email,
          password : password
        }
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });

}