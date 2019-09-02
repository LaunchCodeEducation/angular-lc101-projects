import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  statusMessages = ['Space shuttle ready for takeoff!', 'Shuttle in flight'];
  colors = ['green', 'blue'];
  
  flightStatus = this.statusMessages[0];
  isLanded = true;
  spaceShuttleHeight = 0;
  shuttleBackground = this.colors[0];

  toggleMissionStatus() {
    confirm('message??');
    this.isLanded = !this.isLanded;
    this.shuttleBackground = this.shuttleBackground === this.colors[0] ? this.colors[1] : this.colors[0];
    this.flightStatus = this.flightStatus === this.statusMessages[0] ? this.statusMessages[1] : this.statusMessages[0];
  }
}
