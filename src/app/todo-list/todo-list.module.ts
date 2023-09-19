import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListParentComponent } from './todo-list-parent/todo-list-parent.component';
import { ViewTodoListComponent } from './view-todo-list/view-todo-list.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    TodoListParentComponent,
    ViewTodoListComponent,
    AddTodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    MatDialogModule,
    SharedModuleModule
  ]
})
export class TodoListModule { }
