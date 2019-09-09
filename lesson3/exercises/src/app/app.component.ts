import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  initStatus = {
    color: 'green',
    height: 0,
    message: 'Space shuttle ready for takeoff!',
  };

  shuttleTakeOff = {
    color: 'blue',
    height: 10000,
    message: 'Shuttle in flight.',
  };

  shuttleLand = {
    color: 'green',
    height: 0,
    message: 'Shuttle landed.',
  };

  shuttleMissionAbort = {
    color: 'red',
    height: 0,
    message: 'Mission aborted.',
  };

  status = this.initStatus;
}
