import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { AppConfig } from "./../shared/config/app.config";
import { Injectable } from "@angular/core";
import { Task } from '../models/task';


@Injectable()
export class TaskServiceService {
  constructor(private config: AppConfig, private http: Http) {}

  getTask(): Observable<any> {
    return this.http
      .get(this.config.ApiUrl.v1.post)
      .map((response: Response) => {
        return <Task[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
