import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  static routes: Route = {
    path: 'dashboard',
    component: DashboardComponent
  };

  constructor() { }

  ngOnInit() {
  }

}
