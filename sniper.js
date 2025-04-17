const axios = require('axios');

const usernameToSnag = 'desired_username'; // replace with username **
const checkInterval = 1000; // change checking delay

async function checkUsernameAvailability(username) {
    try {
        const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${username}`);
        return response.status === 204; // 204 no content = avalible username
    } catch (error) {
        if (error.response && error.response.status === 204) {
            return true; 
        }
        return false; 
    }
}
