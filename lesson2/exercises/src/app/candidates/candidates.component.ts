import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
<<<<<<< HEAD
   missionName = "LaunchCode Moonshot"

=======
   missionName = "LaunchCode Moonshot";
   editMissionName = false;
   
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93
   candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  // Code the addToCrew function here:


  // BONUS: Code the changeMissionName function here:

=======
  addToCrew(person: object) {
    if (!this.crew.includes(person)){
      this.crew.push(person);
    }
  }

  changeMissionName(name: string){
     this.missionName = name;
     return false;
  }
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93

}
