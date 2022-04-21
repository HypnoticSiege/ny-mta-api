const mta = require('../lib');

console.log("Testing getStop");

mta.getStop(202650).then(function (data) {
    const stop = data.MonitoredStopVisit[0].MonitoredVehicleJourney;

    const name = stop.LineRef || "NULL";
    const distance = stop.MonitoredCall.Extensions.Distances.PresentableDistance || "NULL";
    const StopName = stop.MonitoredCall.StopPointName || "NULL";
    let passengers;
    if (stop.MonitoredCall.Extensions.Capacities === undefined) {
        passengers = "N/A";
    } else {
        passengers = stop.MonitoredCall.Extensions.Capacities.EstimatedPassengerCount
    };

    console.log(`The nearest bus from ${StopName} is a ${name}, ${distance} and has about ${passengers} passengers on board.`);
}).catch(function (err) {
    console.log('MTA API error: ' + err);
});