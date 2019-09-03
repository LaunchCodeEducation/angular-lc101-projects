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
    color: 'green',
    height: 0,
    message: 'Mission aborted.',
  };

  status = this.initStatus;

  // handleTakeOff() {
  //   let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  //   if (result) {
  //     this.status = this.shuttleTakeOff;
  //   }
  // }

  // handleLand(rocketImage) {
  //   window.alert('The shuttle is landing. Landing gear engaged.');
  //   this.status = this.shuttleLand;
  //   rocketImage.style.bottom = '0px';
  // }

  // handleMissionAbort(rocketImage) {
  //   let result = window.confirm('Are you sure you want to end the mission?');
  //   if (result) {
  //     this.status = this.shuttleMissionAbort;
  //     rocketImage.style.bottom = '0px';
  //   }
  // }

  // handleRightClick(rocketImage) {
  //   let movement = parseInt(rocketImage.style.left) + 10 + 'px';
  //   rocketImage.style.left = movement;
  // }

  // handleLeftClick(rocketImage) {
  //   let movement = parseInt(rocketImage.style.left) - 10 + 'px';
  //   rocketImage.style.left = movement;
  // }

  // handleDownClick(rocketImage) {
  //   let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
  //   rocketImage.style.bottom = movement;
  //   this.status.height = this.status.height - 10000;
  // }

  // handleUpClick(rocketImage) {
  //   let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
  //   rocketImage.style.bottom = movement;
  //   this.status.height = this.status.height + 10000;
  // }
}
