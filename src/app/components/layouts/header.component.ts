import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "header-component",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrls: ["./../../app.css"],
  imports: [RouterModule],
})
export class Header {
  active = signal<number>(0);
prev: any;
}
