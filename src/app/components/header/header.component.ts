import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask:boolean = false;
  subscription: Subscription;


  constructor(private myUiService: UiService, private myRouter: Router) {
    this.subscription = this.myUiService.onToggle().subscribe( value => (this.showAddTask = value));

   }

  ngOnInit(): void {
  }
  toggleAddTask(): void {
    console.log("header component")
    this.myUiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.myRouter.url === route;
  }
}
