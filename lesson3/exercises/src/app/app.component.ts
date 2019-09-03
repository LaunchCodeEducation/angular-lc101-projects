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
    color: 'green',
    height: 0,
    message: 'Mission aborted.',
  };

  status = this.initStatus;

  handleRightClick(img) {
    let movement = parseInt(img.style.left) + 10 + 'px';
    img.style.left = movement;
  }

  handleLeftClick(img) {
    let movement = parseInt(img.style.left) - 10 + 'px';
    img.style.left = movement;
  }

  handleDownClick(img) {
    let movement = parseInt(img.style.bottom) - 10 + 'px';
    img.style.bottom = movement;
    this.status.height = this.status.height - 10000;
  }

  handleUpClick(img) {
    let movement = parseInt(img.style.bottom) + 10 + 'px';
    img.style.bottom = movement;
    this.status.height = this.status.height + 10000;
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.status = this.shuttleTakeOff;
    }
  }

  handleLand(img) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.status = this.shuttleLand;
    img.style.bottom = '0px';
  }

  handleMissionAbort(img) {
    let result = window.confirm('Are you sure you want to end the mission?');
    if (result) {
      this.status = this.shuttleMissionAbort;
      img.style.bottom = '0px';
    }
  }
}
