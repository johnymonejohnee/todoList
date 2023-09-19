import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-todo-list',
  templateUrl: './view-todo-list.component.html',
  styleUrls: ['./view-todo-list.component.scss']
})
export class ViewTodoListComponent {
  
  @Input() tasks: string[] = [];
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() allTasksCleared = new EventEmitter<void>();

  deleteTask(task: string) {

    this.taskDeleted.emit(task);
  }

  clearAllTasks() {
    this.allTasksCleared.emit();
  }
}
