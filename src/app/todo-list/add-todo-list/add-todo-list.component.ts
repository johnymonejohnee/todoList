import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent {
  newTask = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
