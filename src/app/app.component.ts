import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlgoService } from './shared/algo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  finalizedOperator: any;
  showError: boolean;

  countryCode: any = [
    { value: '91', viewValue: '+91 (India)' },
    { value: '1', viewValue: '+1 (USA)' },
    { value: '49', viewValue: '+49 (Germany)' }
  ];

  constructor(private algoService: AlgoService){}

  parseInput(userCountryCode, userInput){
    if(userCountryCode && userInput){
      this.showError = false;
      var operatorData = this.algoService.getData(userCountryCode);
      console.log(operatorData);
      this.finalizedOperator = this.algoService.runAlgo(userCountryCode, userInput, operatorData);
      console.log(this.finalizedOperator);
    }else{
      this.showError = true;
      this.finalizedOperator = false;
    }
  }
}