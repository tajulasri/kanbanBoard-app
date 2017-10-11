import { Injectable } from "@angular/core";

@Injectable()
export class IssueServiceService {
  constructor() {}

  //@TODO just return promise for a moment before refactor using observable instead.
  getIssues(status: number): Promise<any> {
    return new Promise((resolved, rejected) => {
      if (status === 200) {
        return resolved({ issue: {} });
      } else {
        return rejected(new Error("no issues found."));
      }
    });
  }
}
