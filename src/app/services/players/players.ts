import { Injectable } from '@angular/core';
import { CoachInterface, CompetitionInterface, MetaInterface, PlayerInterface, TeamInterface } from '../../utils/types';
import playersData from "../../../../public/assets/data/civ.json";

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  protected players: Array<PlayerInterface> = [];
  protected coach : CoachInterface = {
    id: 0,
    name: "",
    role: "",
    nationality: "",
    age: null,
    image: "",
    contract: {
      startDate: null,
      endDate: null
    },
    stats: {
      matches: null,
      wins: null,
      draws: null,
      losses: null
    }
  };
  protected team : TeamInterface = {
    name: "",
    code: "",
    flag: "",
    continent: "",
    foundedYear: 1960,
    fifaRanking: null
  };
  protected competition : CompetitionInterface = {
    name: "",
    hostCountry: "",
    year: 2025
  };
  protected meta : MetaInterface = {
    lastUpdated: "",
    dataSource: "",
    version: ""
  };
  protected reserves : Array<PlayerInterface> = [];

  getAll = () => {
    this.players = [...playersData[0]["players"], ...playersData[0]["reserves"]];
    return this.players;
  }

  getPlayers = () => {
    this.players = [...playersData[0]["players"]];
    return this.players;
  }

  getReserves = () => {
    this.reserves = [...playersData[0]["reserves"]];
    return this.reserves;
  }

  getCoach = () => {
    this.coach = playersData[0]["coach"];
    return this.coach;
  }

  getTeam = () => {
    this.team = playersData[0]["team"];
    return this.team;
  }

  getCompetition = () => {
    this.competition = playersData[0]["competition"];
    return this.competition;
  }

  getMeta = () => {
    this.meta = playersData[0]["meta"];
    return this.meta;
  }
}
