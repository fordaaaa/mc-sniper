const axios = require('axios');

const target_user = 'desired_username'; // replace with username **
const check_delay = 1000; // change checking delay

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
    // implement logic here !!!!!
    console.log(`Scoping user: ${username}`);
    // figure out how to authenticate into a user and send a request for a username
}

async function beginsniping() {
    console.log(`Sniping user: ${target_user}`);
    while (true) {
        const isAvailable = await checkUsernameAvailability(target_user);
        if (isAvailable) {
            console.log(`User  ${target_user} is possible . . .`);
            await snipinguser(target_user);
            break; 
        } else {
            console.log(`User  ${target_user} isnt available. Sniping again in ${check_delay / 1000} seconds...`);
        }
        await new Promise(resolve => setTimeout(resolve, check_delay));
    }
}

beginsniping();

