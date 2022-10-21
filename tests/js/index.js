const MTAClient = require('../../lib/client/client').default;
const Client = new MTAClient("YOUR_TOKEN");

async function getStop(id) {
    console.log(await Client.getStop(id))
};

getStop(202650);