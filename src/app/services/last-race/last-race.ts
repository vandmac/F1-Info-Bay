export interface LastRace {
  MRData: MRData;
}

export interface MRData {
  xmlns:     string;
  series:    string;
  url:       string;
  limit:     string;
  offset:    string;
  total:     string;
  RaceTable: RaceTable;
}

export interface RaceTable {
  season: string;
  round:  string;
  Races:  Race[];
}

export interface Race {
  season:   string;
  round:    string;
  url:      string;
  raceName: string;
  Circuit:  Circuit;
  date:     Date;
  time:     string;
  Results:  Result[];
}

export interface Circuit {
  circuitId:   string;
  url:         string;
  circuitName: string;
  Location:    Location;
}

export interface Location {
  lat:      string;
  long:     string;
  locality: string;
  country:  string;
}

export interface Result {
  number:       string;
  position:     string;
  positionText: string;
  points:       string;
  Driver:       Driver;
  Constructor:  Constructor;
  grid:         string;
  laps:         string;
  status:       Status;
  Time?:        ResultTime;
  FastestLap:   FastestLap;
}

export interface Constructor {
  constructorId: string;
  url:           string;
  name:          string;
  nationality:   string;
}

export interface Driver {
  driverId:        string;
  permanentNumber: string;
  code:            string;
  url:             string;
  givenName:       string;
  familyName:      string;
  dateOfBirth:     Date;
  nationality:     string;
}

export interface FastestLap {
  rank:         string;
  lap:          string;
  Time:         FastestLapTime;
  AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
  units: Units;
  speed: string;
}

export enum Units {
  Kph = "kph",
}

export interface FastestLapTime {
  time: string;
}

export interface ResultTime {
  millis: string;
  time:   string;
}

export enum Status {
  Finished = "Finished",
  PowerUnit = "Power Unit",
  The1Lap = "+1 Lap",
  The2Laps = "+2 Laps",
}



// export interface LastRace {
//   MRData: {
//     xmlns: string;
//     series: string;
//     url: string;
//     limit: number;
//     offset: number;
//     total: number;
//     RaceTable: {
//       season: number;
//       round: number;
//       Races: [
//         {
//           season: number;
//           round: number;
//           url: string;
//           raceName: string;
//           Circuit: {
//             circuitId: string;
//             url: string;
//             circuitName: string;
//             Location: {
//               lat: number;
//               long: number;
//               locality: string;
//               country: string;
//             };
//           };
//           date: string;
//           time: string;
//           Results: [
//             {
//               number: number;
//               position: number;
//               positionText: string;
//               points: number;
//               Driver: {
//                 driverId: string;
//                 permanentNumber: number;
//                 code: string;
//                 url: string;
//                 givenName: string;
//                 familyName: string;
//                 dateOfBirth: string;
//                 nationality: string;
//               };
//               Constructor: {
//                 constructorId: string;
//                 url: string;
//                 name: string;
//                 nationality: string;
//               };
//               grid: number;
//               laps: number;
//               status: string;
//               Time: {
//                 millis: number;
//                 time: string;
//               };
//               FastestLap: {
//                 rank: number;
//                 lap: number;
//                 Time: {
//                   time: string;
//                 };
//                 AverageSpeed: {
//                   units: string;
//                   speed: number;
//                 };
//               };
//             }
//           ];
//         }
//       ];
//     };
//   };
// }

// export interface LastRaceService {
//   position: number;
//   givenName: string;
//   familyName: string;
//   constructor: string;
//   grid: number;
//   }