import { IssueServiceService } from './service/issue-service.service';
import { DashboardRoute } from './dashboard/dashboard.routes';
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
import { ProfileComponent } from './profile/profile.component';
import { SimplecardComponent } from './shared/components/simplecard/simplecard.component';
import { ListviewComponent } from './shared/components/listview/listview.component';
import { IssuecardComponent } from './shared/components/issuecard/issuecard.component';
import { issueRoute } from './issue/issue.routes';
import { loginRoute } from './login/login.routes';


const routes: Route[] = [
  loginRoute,
  DashboardRoute,
  issueRoute,
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
  {
    path: 'issues',
    component: IssueComponent
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
    NavbarComponent,
    ProfileComponent,
    SimplecardComponent,
    ListviewComponent,
    IssuecardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [TaskServiceService,IssueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
