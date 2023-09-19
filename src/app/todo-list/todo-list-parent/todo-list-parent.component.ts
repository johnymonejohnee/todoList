import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-parent',
  templateUrl: './todo-list-parent.component.html',
  styleUrls: ['./todo-list-parent.component.scss']
})
export class TodoListParentComponent {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
    console.log("tasks array is",this.tasks)
  }

  deleteTask(task: string) {

    const index = this.tasks.indexOf(task);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
  clearAllTasks(){

    this.tasks=[];

  }

}
