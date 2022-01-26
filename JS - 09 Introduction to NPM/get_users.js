const axios = require('axios');

async function makeGetRequest() {
  axios.get(' http://localhost:3000/users',{responseType:'json'}).then(response => {
    const colorsJson = JSON.stringify(response.data)
    console.log(colorsJson)
  })
  // let res = await ;

  /*let data = res.data;
  console.log(data);*/
}

makeGetRequest();
