import { Component, signal } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: "./home.components.html",
  styleUrls: ["./../../app.css"],
})
export class Home {
  message = signal<string>("Bienvenue sur l'app CAN 2025")
}
