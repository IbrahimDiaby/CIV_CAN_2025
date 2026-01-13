interface PlayerInterface {
  id: Number;
  name: String;
  position: String;
  club: String;
  image: String;
  nationality: String;
  birthDate: String | null;
  age: Number | null;
  heightCm: Number | null;
  weightKg: Number | null;
  preferredFoot: String | null;
  jerseyNumber: Number | null;
  isCaptain: Boolean | null;
  social: {
    instagram: String | null;
    twitter: String | null;
  };
  stats: {
    caps: Number | null;
    goals: Number | null;
    assists: Number | null;
    yellowCards: Number | null;
    redCards: Number | null;
    minutesPlayed: Number | null;
  };
  injuryStatus: {
    isInjured: Boolean | null;
    description: String | null;
    expectedReturn: String | null;
  };
}

interface CoachInterface {
  id: Number;
  name: String;
  role: String;
  nationality: String;
  age: Number | null;
  image: String;
  contract: {
    startDate: Date | null;
    endDate: Date | null;
  };
  stats: {
    matches: Number | null;
    wins: Number | null;
    draws: Number | null;
    losses: Number | null;
  };
}

interface TeamInterface {
  name: String;
  code: String;
  flag: String;
  continent: String;
  foundedYear: Number;
  fifaRanking: Number | null;
}

interface CompetitionInterface {
  name: String;
  hostCountry: String;
  year: Number;
}

interface MetaInterface {
  lastUpdated: String;
  dataSource: String;
  version: String;
}

export { PlayerInterface, CoachInterface, TeamInterface, CompetitionInterface, MetaInterface };
