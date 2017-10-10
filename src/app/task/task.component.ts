import { element } from 'protractor';
import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task;
  tasks: Array<Task> = [];

  constructor(private taskService: TaskServiceService) {

   }

  ngOnInit() {

    this.taskService.getTask()
    .then((response) => {

      response.forEach(element => {
         this.tasks.push(element);
      });

    })
    .catch((err) => {

        console.error(err)
    })
  }

}
