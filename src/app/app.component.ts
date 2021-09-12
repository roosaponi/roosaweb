import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roosa Poni';
  greeting: string;
  ngOnInit() {
    this.greeting = 'we are the music makers and we are the dreamers of dreams';
  }
}
