import request from './req'

/**
 * 
 * @param id MTA Stop ID
 * @returns Stop information
 */
async function getStop(id: number) {
    const response = await request.get(`/stop-monitoring.json`, {
        params: {
            key: '5ca2e6cc-7522-4bce-9589-0bfa2dded14a',
            MonitoringRef: id
        }
    });
    return response.data.Siri.ServiceDelivery.StopMonitoringDelivery[0];
};

export { getStop };