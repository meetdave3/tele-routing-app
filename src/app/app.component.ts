import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlgoService } from './shared/algo.service';
import { AppService } from './app.service';

import { CountryCodeData } from './shared/countryCodeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  finalizedOperator: any;
  showError: boolean;
  countryCode: CountryCodeData[] = [];

  constructor(private appService: AppService, private algoService: AlgoService){}

  ngOnInit(){
    this.appService.getCountryCodeData()
      .subscribe(data => {
        this.countryCode = data
      });
  }

  parseInput(userCountryCode, userInput){
    if(userCountryCode && userInput){
      this.showError = false;
      var operatorData = this.algoService.getData(userCountryCode);
      this.finalizedOperator = this.algoService.runAlgo(userCountryCode, userInput, operatorData)
      console.log(this.finalizedOperator);
    }else{
      this.showError = true;
      this.finalizedOperator = false;
    }
  }
}