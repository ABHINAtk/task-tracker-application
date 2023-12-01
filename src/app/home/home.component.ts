import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: any[] = [];
  newTask: any = {};
  editingIndex: number = -1;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.editingIndex === -1) {
      this.taskService.addTask({ ...this.newTask });
    } else {
      this.taskService.updateTask(this.editingIndex, { ...this.newTask });
      this.editingIndex = -1;
    }

    this.clearForm();
  }

  editTask(index: number): void {
    this.newTask = { ...this.tasks[index] };
    this.editingIndex = index;
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }

  clearForm(): void {
    this.newTask = {};
    this.editingIndex = -1;
  }
}
