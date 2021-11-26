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

export async function newRegister (token){
    let response = await axios ({
        method: 'POST',
        url: 'https://trackout.herokuapp.com/api/reservation/make',
        headers :{
            'Authorization': 'Bearer '+ token
        },
        data: {
            userId: "61941268c43bd445c8d30ea0",
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(function () {
        return 'Error';
    });

    return response;
}

export async function getBussinessSnippets (){
    await axios ({
        method: 'GET',
        url: 'https://trackout.herokuapp.com/api/business/snippets/get?query&page=0&pageSize=2'
    })
    .then(response => response)
    .then(data => {
        return data;
    })
    .catch(function () {
        return 'Error';
    });
}
