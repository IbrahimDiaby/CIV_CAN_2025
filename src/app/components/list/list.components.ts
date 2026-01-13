import { Component, inject, input } from "@angular/core";
import { PlayerInterface } from "../../utils/types";
import { PlayersService } from "../../services/players/players";

@Component({
  selector: "player-list",
  standalone: true,
  templateUrl: "./list.components.html",
  styleUrls: ["./../../app.css"],
})

export class PlayersList {
  playersService = inject(PlayersService);
  players : Array<PlayerInterface> = [];

  ngOnInit() {
    this.players = this.playersService.getPlayers();
  }
}
