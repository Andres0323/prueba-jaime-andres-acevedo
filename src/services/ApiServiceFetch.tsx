const axios = require('axios');

/**
 * @name get
 * @desc Metodo para realizar cosulta a api mediante url enviada
 * @param path
 */
const get = async (path: any) => {
    let resp: any = [];
    await axios.get(path)
        .then(function (response: any) {
            resp = response;
        })
        .catch(function (error: any) {
            // handle error
            console.log(error);
        });
    return resp;
};

const ApiServiceFecth = {
    get,
};

export default ApiServiceFecth;
