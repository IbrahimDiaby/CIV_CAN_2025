import { NgOptimizedImage } from "@angular/common";
import { Component, input } from "@angular/core";
import { PlayerInterface } from "../../utils/types";

@Component({
  selector: "player-card",
  templateUrl: "./card.components.html",
  styleUrls: ["./../../app.css"],
  imports: [NgOptimizedImage],
})

export class PlayerCard {
  readonly player_info = input<object>({})
  private defaultImage : String = "placeholder.png";
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
    // this.players.forEach((item, index) => {
    //   this.players[index].image = item["image"] === "#" ? this.defaultImage : item["image"];
    // })
    return this.players;
  };

  //
  ngOnInit() {
    this.getPlayers();
  }
}
