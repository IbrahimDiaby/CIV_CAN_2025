import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerCard } from './components/card/card.components';
import { PlayersList } from './components/list/list.components';
import { Home } from './components/home/home.components';
import { Header } from './components/layouts/header.component';
import { Footer } from './components/layouts/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, PlayerCard, PlayersList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal("CAN 2025 - Cote D'Ivoire");
}
