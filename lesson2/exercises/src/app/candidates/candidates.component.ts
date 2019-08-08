import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg'}, image: {name: 'Blake', src: 'assets/images/Blake.png'}},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg'}, image: {name: 'Sally', src: 'assets/images/Sally.png'}},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg'}, image: {name: 'Paul', src: 'assets/images/Timmy.png'}}
  ];

  constructor() { }

  ngOnInit() {
  }

}
