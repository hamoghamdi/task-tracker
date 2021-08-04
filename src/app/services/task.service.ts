import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
// import {TASKS} from '../mock-tasks'
import {Task} from '../Task'
import { Observable } from 'rxjs' //, of

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor( private myhttp:HttpClient) { }

  getTasks(): Observable<Task[]>{

    // const tasks = of(TASKS); 
    // return tasks; // no need for this when i will be using http client (comes with angular), http client retunts an observable anyway 
    return this.myhttp.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.myhttp.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.myhttp.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.myhttp.post<Task>(this.apiUrl, task, httpOptions);
  }
}
