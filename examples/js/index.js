const {
    MtaApiWrapper
} = require('../../lib/index')
const mtaApi = new MtaApiWrapper('5ca2e6cc-7522-4bce-9589-0bfa2dded14a');

async function main() {
    const busStop = await mtaApi.getStop('202650');
    console.log('There are ' + busStop.length + ' buses approaching this stop.');

    const busLocation = await mtaApi.getBusLocation('MTA NYCT_S44');
    console.log('The bus is at ' + busLocation.latitude + ', ' + busLocation.longitude);
}

main()