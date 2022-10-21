import MTAClient from "../lib/client/client";
const client = new MTAClient("YOUR_TOKEN");

async function getStop(id:number) {
    console.log(await client.getStop(id))
};

getStop(202650);