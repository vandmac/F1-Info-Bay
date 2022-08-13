export interface LastRace {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    RaceTable: {
      season: number;
      round: number;
      Races: [
        {
          season: number;
          round: number;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: number;
              long: number;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          Results: [
            {
              number: number;
              position: number;
              positionText: string;
              points: number;
              Driver: {
                driverId: string;
                permanentNumber: number;
                code: string;
                url: string;
                givenName: string;
                familyName: string;
                dateOfBirth: string;
                nationality: string;
              };
              Constructor: {
                constructorId: string;
                url: string;
                name: string;
                nationality: string;
              };
              grid: number;
              laps: number;
              status: string;
              Time: {
                millis: number;
                time: string;
              };
              FastestLap: {
                rank: number;
                lap: number;
                Time: {
                  time: string;
                };
                AverageSpeed: {
                  units: string;
                  speed: number;
                };
              };
            }
          ];
        }
      ];
    };
  };
}
