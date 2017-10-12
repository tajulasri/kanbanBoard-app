import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-issuecreate-modal",
  templateUrl: "./issuecreatemodal.component.html",
  styleUrls: ["./issuecreatemodal.component.css"]
})
export class IssuecreatemodalComponent implements OnInit {
  @Input() toggleState: boolean;

  @Output() closeState = new EventEmitter();

  constructor() {}

  closeModal() {
    this.toggleState = false;
    this.closeState.emit(false);
  }

  ngOnInit() {}
}
