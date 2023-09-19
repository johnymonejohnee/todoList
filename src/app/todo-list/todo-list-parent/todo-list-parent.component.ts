import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-parent',
  templateUrl: './todo-list-parent.component.html',
  styleUrls: ['./todo-list-parent.component.scss']
})
export class TodoListParentComponent {

  tasks: { text: string; image: string | ArrayBuffer | null }[] = [];

  addTask(taskData: { text: string; image: string | ArrayBuffer | null }) {
    this.tasks.push(taskData);
  }

  deleteTask(taskData: { text: string; image: string | ArrayBuffer | null }) {
    const index = this.tasks.indexOf(taskData);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  clearAllTasks() {
    this.tasks = [];
  }
 

}
