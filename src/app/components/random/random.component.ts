import { Component, OnInit } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent {
  constructor(private service: RandomService) {}
  randomNumber: number;
  max: number = 100;
  min: number = 1;

  generateRandomNumbers() {
    this.randomNumber = this.service.generateRandomNumber(this.min, this.max);
  }
}
