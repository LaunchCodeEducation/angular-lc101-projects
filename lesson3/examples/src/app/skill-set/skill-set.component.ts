import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
<<<<<<< HEAD
   alternateColor: string = 'black';
   bulletType: string = 'A';
=======
   bulletType: string = 'A';
   alternateColor: string = 'black';
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93
   changeColor: boolean = true;

   constructor() { }

   ngOnInit() { }

}
