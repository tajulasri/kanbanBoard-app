import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-listview",
  templateUrl: "./listview.component.html",
  styleUrls: ["./listview.component.css"]
})
export class ListviewComponent implements OnInit {
  @Input() slot: any;

  constructor() {}

  ngOnInit() {}
}
