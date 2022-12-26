import axios from 'axios';

/**
 * A class that wraps the NYC MTA API
 */
export class MtaApiWrapper {
  // The API key for the NYC MTA API
  private apiKey: string;

  /**
   * Constructs a new MtaApiWrapper
   * @param apiKey The API key for the NYC MTA API
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Gets a list of subway lines for the NYC MTA
   * @returns A list of subway lines
   */
  async getSubwayLines(): Promise<SubwayLine[]> {
    const response = await axios.get(
      `https://api.mta.info/api/lines`,
      {
        params: {
          api_key: this.apiKey,
        },
      }
    );
    return response.data.lines;
  }

  /**
   * Gets the real-time location of a specific bus
   * @param busNumber The number of the bus to track
   * @returns The real-time location of the bus
   */
  async getBusLocation(busNumber: string): Promise<BusLocation> {
    const response = await axios.get(
      `http://bustime.mta.info/api/siri/vehicle-monitoring.json`,
      {
        params: {
          key: this.apiKey,
          VehicleMonitoringDetailLevel: 'calls',
          LineRef: busNumber,
        },
      }
    );
    return response.data.VehicleMonitoringDelivery[0].VehicleActivity[0].MonitoredVehicleJourney.VehicleLocation;
  }

  /**
   * Gets information about a specific bus stop
   * @param stopId The ID of the bus stop to retrieve
   * @returns Information about the bus stop
   */
  async getStop(stopId: string): Promise<Stop> {
    const response = await axios.get(
      `http://bustime.mta.info/api/siri/stop-monitoring.json`,
      {
        params: {
          key: this.apiKey,
          MonitoringRef: stopId,
        },
      }
      );
      
    return response.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit;
  }
}

/**
 * A subway line in the NYC MTA
 */
interface SubwayLine {
  name: string;
  status: string;
  route: string;
}

/**
 * The real-time location of a bus in the NYC MTA
 */
interface BusLocation {
  latitude: number;
  longitude: number;
}

/**
 * A bus stop in the NYC MTA
 */
interface Stop {
  name: string;
}