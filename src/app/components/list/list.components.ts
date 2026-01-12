import { Component, OnInit } from "@angular/core";
import { PlayerInterface } from "../../utils/types";

@Component({
  selector: "player-card",
  templateUrl: "./list.components.html",
  styleUrls: ["./../../app.css"],
})

export class PlayersList implements OnInit {
  protected players: Array<PlayerInterface> = [];
  protected readonly fetchPlayers = async () => {
    try {
      const res = await fetch('assets/data/en/civ.json');
      const data = await res.json();
      this.players = [...data[0]['players'], ...data[0]['reserves']];
      return this.players;
    } catch (error) {
      console.error(error);
    }
    return [];
  };

  getPlayers = () => {
    this.fetchPlayers();
    return this.players;
  };

  //
  ngOnInit() {
    this.fetchPlayers();
  }
}
