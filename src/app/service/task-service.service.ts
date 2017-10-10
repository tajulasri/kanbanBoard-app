import { Injectable } from '@angular/core';

@Injectable()
export class TaskServiceService {

  constructor() { }

  getTask(): Promise<any> {

    return new Promise((resolved,rejected) => {
        //check for http status
    });

  }
}
