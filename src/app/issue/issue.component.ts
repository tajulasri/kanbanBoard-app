import { Route } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-issue",
  templateUrl: "./issue.component.html",
  styleUrls: ["./issue.component.css"]
})
export class IssueComponent implements OnInit {
  static routes: Route = {
    path: 'issues',
    component: IssueComponent
  };

  constructor() {}

  ngOnInit() {}
}
