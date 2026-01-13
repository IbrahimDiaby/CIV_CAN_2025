import { PlayersService } from './../../services/players/players';
import { NgOptimizedImage } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { PlayerInterface } from '../../utils/types';

@Component({
  selector: "player-card",
  standalone: true,
  templateUrl: "./card.components.html",
  styleUrls: ["./../../app.css"],
  imports: [NgOptimizedImage],
})

export class PlayerCard implements OnInit {
  playersService = inject(PlayersService);
  players : Array<PlayerInterface> = [];

  ngOnInit() {
    this.players = this.playersService.getAll();
  }
}
