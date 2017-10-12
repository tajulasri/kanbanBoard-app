import { element } from "protractor";
import { Task } from "./../models/task";
import { Component, OnInit } from "@angular/core";
import { TaskServiceService } from "../service/task-service.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  task: Task;
  tasks: Array<Task> = [];

  constructor(private taskService: TaskServiceService) {}

  getTasks() {
    this.taskService.getTask().subscribe(
      result => {
        this.tasks = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getTasks();
  }
}
