import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Issue } from '../../../models/Issue';

@Component({
  selector: 'app-issuecard',
  templateUrl: './issuecard.component.html',
  styleUrls: ['./issuecard.component.css']
})
export class IssuecardComponent implements OnInit {

  @Input() issue: Issue;

  constructor() { }

  ngOnInit() {

  }
}
