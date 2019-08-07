import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", chores: ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries']},
      {title: "Today's Chores", chores: ['Schedule Doc Visit', 'Go to class!']},
      {title: "Tomorrow's Chores", chores: ['Sweep', 'Organize closet', 'Prep work for next class']}
   ];

   constructor() { }

   ngOnInit() {
   }

}
