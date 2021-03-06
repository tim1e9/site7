import axios from 'axios';

const SERVER_URL = "https://9ygu2ddcy0.execute-api.us-east-2.amazonaws.com/crowleyworks-api-deploy-to-dev/charters";
//const SERVER_URL = "http://localhost:5000/charters";
let accessToken = null;

const setAccessToken = ( newToken ) => {
    accessToken = newToken;
};

const getAllCharters = async () => {
    const result = await axios.get(
        SERVER_URL, {
            headers: {
                Authorization: 'Bearer: ' + accessToken,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }
    );
    return result;
};

const charterService = { getAllCharters, setAccessToken };

export default charterService;