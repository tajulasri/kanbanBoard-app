import { TaskServiceService } from './service/task-service.service';
import { resolve } from 'path';
import {RouterModule,Route} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { IssueComponent } from './issue/issue.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Route[] = [

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'issues',
    component: IssueComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'tasks',
    component: TaskComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    IssueComponent,
    ProjectComponent,
    TaskComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{enableTracing: true})
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
