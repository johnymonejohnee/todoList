import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from 'src/app/shared-module/image-viewer/image-viewer.component';


@Component({
  selector: 'app-view-todo-list',
  templateUrl: './view-todo-list.component.html',
  styleUrls: ['./view-todo-list.component.scss']
})
export class ViewTodoListComponent {
  
  @Input() tasks: { text: string; image: string | ArrayBuffer | null }[] = [];
  @Output() taskDeleted = new EventEmitter<{ text: string; image: string | ArrayBuffer | null }>();
  @Output() allTasksCleared = new EventEmitter<void>();

  constructor(private dialog: MatDialog){

    
  }

  deleteTask(task: { text: string; image: string | ArrayBuffer | null }) {
    this.taskDeleted.emit(task);
  }

  clearAllTasks() {
    this.allTasksCleared.emit();
  }

  onImageClick(task: { text: string; image: string | ArrayBuffer | null }){
   this.dialog.open(ImageViewerComponent,{
    data:{
      image:task.image
    }
   })
  }

  
}
