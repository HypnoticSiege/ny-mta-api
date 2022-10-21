const MTAClient = require('ny-mta-api').default;
const Client = new MTAClient(process.env.KEY);

test('checkstop', () => {
    const stopData = JSON.stringify(Client.getStop(202650));
    expect(stopData).toEqual(expect.not.stringContaining("[MTA API - ERR]"));
});