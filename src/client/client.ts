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

    public async getStop(id: number) {
        try {
            const response = await this.client.get('/stop-monitoring.json', {
                params: {
                    key: this.token,
                    MonitoringRef: id
                }
            });

            return response.data.Siri.ServiceDelivery.StopMonitoringDelivery[0];
        } catch (e) {
            console.log(`[MTA API - ERR] Could not get stop!`);
            return [];
        };
    };
};

export default MTAClient;