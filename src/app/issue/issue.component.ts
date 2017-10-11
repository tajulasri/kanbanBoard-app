import { Issue } from "../models/Issue";
import { IssueServiceService } from "../service/issue-service.service";
import { Route } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-issue",
  templateUrl: "./issue.component.html",
  styleUrls: ["./issue.component.css"]
})
export class IssueComponent implements OnInit {
  issues: Array<Issue> = [];
  serviceError: any = {
    error: false,
    message: '',
  }

  constructor(private issueService: IssueServiceService) {
    this.issueService
      .getIssues(200)
      .then((data) => {
        data.forEach(item => {
          this.issues.push(item);
        });
      })
      .catch(err => {
          this.serviceError.error = true;
          this.serviceError.message = err;
      });
  }

  ngOnInit() {}
}
