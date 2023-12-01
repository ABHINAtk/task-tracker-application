import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: any[] = [];

  getTasks(): any[] {
    return this.tasks;
  }

  addTask(task: any): void {
    this.tasks.push(task);
  }

  updateTask(index: number, task: any): void {
    this.tasks[index] = task;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}

