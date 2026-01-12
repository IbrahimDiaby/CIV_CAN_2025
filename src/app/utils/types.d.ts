interface PlayerInterface {
  id: Number;
  name: String;
  position: String;
  club: String;
  image: String;
  nationality: String;
  birthDate: String;
  age: Number;
  heightCm: Number;
  weightKg: Number;
  preferredFoot: String;
  jerseyNumber: Number;
  isCaptain: false;
  social: {
    instagram: String;
    twitter: String;
  };
  stats: {
    caps: Number;
    goals: Number;
    assists: Number;
    yellowCards: Number;
    redCards: Number;
    minutesPlayed: Number;
  };
  injuryStatus: {
    isInjured: Boolean;
    description: String;
    expectedReturn: String;
  };
}

export { PlayerInterface };
