import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string= "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean= false;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private myUiService: UiService) {
    this.subscription = this.myUiService.onToggle().subscribe( val => (this.showAddTask = val))
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("please add a task")
      return;
    }

    const newTask  ={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text="";
    this.day="";
    this.reminder=false;
  }
}
