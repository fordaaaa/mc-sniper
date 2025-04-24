const { axios } = require('./dependencies'); // subject to change due to broken dependencies.js file

async function authenticateUser (email, password) {
    try {
        const response = await axios.post('https://authserver.mojang.com/authenticate', {
            agent: {
                name: 'Minecraft',
                version: 1
            },
            username: email,
            password: password,
            requestUser: true
        });

        if (response.data && response.data.accessToken) {
            return response.data.accessToken;
        } else {
            console.error('Failed to authenticate: ', response.data);
            return null;
        }
    } catch (error) {
        console.error('Error authenticating: ', error.message);
        return null;
    }
}

module.exports = {authenticateUser};
