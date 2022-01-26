const axios = require('axios');

async function makeDeleteRequest(userNum) {
    axios
    .delete(`http://localhost:3000/users/${userNum}`)
    .then(resp => console.log(resp.status))
    // let res = await ;

    /*console.log(res.status);*/
}

makeDeleteRequest();
