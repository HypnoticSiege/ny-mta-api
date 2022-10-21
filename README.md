# MTA API
 A simple Node JS Wrapper to interact with the NYC MTA transit system's API using TypeScript. Get information about busses such as distance from a stop, passengers, ID, and more!

 ## Initializing the client
 To obtain a MTA API Key/Token please click [here!](https://register.developer.obanyc.com/)
 ```ts
import MTAClient from "ny-mta-api";
const client = new MTAClient("YOUR_MTA_TOKEN");
 ```
 Or with JavaScript
 ```js
const MTAClient = require('ny-mta-api').default;
const Client = new MTAClient("YOUR_TOKEN");
 ```

 ### getStop()
 ```ts
async function getStop(id:Number) {
   console.log(await client.getStop(id))
};

getStop(202650);
 ```

### More methods/functions to come soon™️ (Trains & More!)


 # Disclaimer
We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with the MTA, or any of its subsidiaries or its affiliates. The official MTA website can be found at https://new.mta.info/.