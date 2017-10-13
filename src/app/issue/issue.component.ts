import { Issue } from "../models/Issue";
import { IssueServiceService } from "../service/issue-service.service";
import { Route } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-issue",
  templateUrl: "./issue.component.html",
  styleUrls: ["./issue.component.css"]
})
export class IssueComponent implements OnInit {
  issues: Array<Issue> = [];
  serviceError: any = {
    error: false,
    message: ""
  };

  issueFormGroup: FormGroup;
  modalToggleState: any = false;

  constructor(private issueService: IssueServiceService) {
    this.getIssues();
    this.createForm();
  }

  createForm() {
    this.issueFormGroup = new FormGroup({
      project: new FormControl(""),
      issue: new FormControl(""),
      description: new FormControl("")
    });
  }

  getIssues() {
    this.issueService
      .getIssues(200)
      .then(data => {
        data.forEach(item => {
          this.issues.push(item);
        });
      })
      .catch(err => {
        this.serviceError.error = true;
        this.serviceError.message = err;
      });
  }

  filterLabel(label: number) {
    this.issues.filter(item => {
      return (item.status_id = label);
    });
  }

  toggleModal() {
    if (this.modalToggleState) {
      this.modalToggleState = false;
    } else {
      this.modalToggleState = true;
    }
  }

  ngOnInit() {}
}
