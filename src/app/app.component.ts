import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddShippingMethodComponent } from "./add-shipping-method/add-shipping-method.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AddShippingMethodComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
