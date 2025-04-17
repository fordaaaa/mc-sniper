const axios = require('axios');

const targetuser = 'desired_username'; // replace with username **
const checkdelay = 1000; // change checking delay

async function checkUsernameAvailability(username) {
    try {
        const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${username}`);
        return response.status === 204; // 204 no content = available username
    } catch (error) {
        if (error.response && error.response.status === 204) {
            return true; 
        }
        return false; 
    }
}

async function snipinguser(username) {
    // implement logic
    console.log(`Scoping user: ${username}`);
    // auth + send request for username
}

