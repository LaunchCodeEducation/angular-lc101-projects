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
    takeOffEnabled: true,
    landEnabled: false,
    missionAbortEnabled: false
  };

  shuttleTakeOff = {
    color: 'blue',
    height: 10000,
    message: 'Shuttle in flight.',
    takeOffEnabled: false,
    landEnabled: true,
    missionAbortEnabled: true
  };

  shuttleLand = {
    color: 'green',
    height: 0,
    message: 'Shuttle landed.',
    takeOffEnabled: true,
    landEnabled: false,
    missionAbortEnabled: false
  };

  shuttleMissionAbort = {
    color: 'green',
    height: 0,
    message: 'Mission aborted.',
    takeOffEnabled: true,
    landEnabled: false,
    missionAbortEnabled: false
  };

  status = this.initStatus;

  handleRightClick(rocketImage) {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
  }

  handleLeftClick(rocketImage) {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
  }

  handleDownClick(rocketImage) {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.status.height = this.status.height - 10000;
  }

  handleUpClick(rocketImage) {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.status.height = this.status.height + 10000;
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.status = this.shuttleTakeOff;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.status = this.shuttleLand;
    rocketImage.style.bottom = '0px';
  }

  handleMissionAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to end the mission?');
    if (result) {
      this.status = this.shuttleMissionAbort;
      rocketImage.style.bottom = '0px';
    }
  }
}
