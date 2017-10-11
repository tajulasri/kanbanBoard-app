import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplecard',
  templateUrl: './simplecard.component.html',
  styleUrls: ['./simplecard.component.css']
})
export class SimplecardComponent implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
