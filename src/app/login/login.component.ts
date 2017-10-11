import { Route } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  navbarShow: boolean;
  constructor() {
    this.navbarShow = true;
  }

  ngOnInit() {}
}
