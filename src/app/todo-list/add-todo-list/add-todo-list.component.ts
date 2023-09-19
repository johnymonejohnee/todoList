import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent {
  newTask = '';
  selectedImage: string | ArrayBuffer | null = null;

  @Output() taskAdded = new EventEmitter<{ text: string; image: string | ArrayBuffer | null }>();
  

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit({ text: this.newTask, image: this.selectedImage });
      this.newTask = '';
      this.selectedImage='';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
