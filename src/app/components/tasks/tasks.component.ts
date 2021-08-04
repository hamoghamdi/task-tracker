import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {TaskService} from '../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=> this.tasks=tasks); // subscribe to an observable, that in a way acts like a promise, where there is return values to handle 
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe( ()=> (this.tasks = this.tasks.filter(t => t.id !== task.id))
    );
  }
  toggleReminder(task: Task){

    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask (task: Task){
    this.taskService.addTask(task).subscribe( task => (this.tasks.push(task)) );
  }
}
