//TODO Make package actually work with js without the require().default;

import axios from 'axios';

class MTAClient {
    client: any;
    token: string;
  constructor(token:string, {
    baseURL = 'http://bustime.mta.info/api/siri'
  } = {}) {
      this.client = axios.create({
          baseURL,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token
          }
      });
      this.token = token;
    };

    /**
     * 
     * @param id MTA StopID 
     * @param index Index of what bus data to get back
     * @returns {object} Single Bus object containing inforation on it!
     */
    public async getStop(id: number, index?: number) {
        try {
            const response = await this.client.get('/stop-monitoring.json', {
                params: {
                    key: this.token,
                    MonitoringRef: id
                }
            });

            return response.data.Siri.ServiceDelivery.StopMonitoringDelivery[index || 0];
        } catch (e) {
            console.log(`[MTA API - ERR] Could not get stop!`);
            return [{
                err: true,
                msg: "[MTA API - ERR] Could not get stop!"
            }];
        };
    };

    /**
     * 
     * @param id MTA StopID
     * @returns {Array} of all Busses on track for that stop.
     */
    public async getStopData(id: number) {
        try {
            const response = await this.client.get('/stop-monitoring.json', {
                params: {
                    key: this.token,
                    MonitoringRef: id
                }
            });

            return response.data.Siri.ServiceDelivery.StopMonitoringDelivery;
        } catch (e) {
            console.log(`[MTA API - ERR] Could not get stop!`);
            return [{
                err: true,
                msg: "[MTA API - ERR] Could not get stop!"
            }];
        };
    };
};

export default MTAClient;