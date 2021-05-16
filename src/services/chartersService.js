const axios = require('axios');

const SERVER_URL = "https://9ygu2ddcy0.execute-api.us-east-2.amazonaws.com/crowleyworks-api-deploy-to-dev/charters";
let accessToken = null;

export const setAccessToken = ( newToken ) => {
    accessToken = newToken;
};

export const getAllCharters = async () => {
    const result = await axios.get(
        SERVER_URL, {
            headers: {
                Authorization: 'Bearer: ' + accessToken
            }
        }
    );
    return result;
};

module.exports = {
    getAllCharters,
    setAccessToken
}