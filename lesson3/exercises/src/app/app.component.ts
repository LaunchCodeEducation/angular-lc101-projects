import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  flightStatus = "Space shuttle ready for takeoff!";
  isLanded = true;
  spaceShuttleHeight = 0;

  toggleMissionStatus() {
    this.isLanded = !this.isLanded;
  }
}
