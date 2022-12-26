import MtaApiWrapper from '../../lib/index';

const mtaApi = new MtaApiWrapper('5ca2e6cc-7522-4bce-9589-0bfa2dded14a');

async function main() {
    const busStop = await mtaApi.getStop('202650');
    console.log(busStop);
}

main()