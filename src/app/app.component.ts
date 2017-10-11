import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  countryCtrl: FormControl;
  filteredCountry: Observable<any[]>;

  userInput: number;
  selectedOperators: any;
  selectedCountry: any;
  makeArray: any;
  finalOperators: any;

  countryCode: any = [
    { value: '91', viewValue: '+91 (India)' },
    { value: '1', viewValue: '+1 (USA)' },
    { value: '49', viewValue: '+49 (Germany)' }
  ];

  operatorData = [
    {
      operatorId: '1', 
      countryCode: '91',
      operatorPrice: '0.10'
    },
    {
      operatorId: '1', 
      countryCode: '91',
      operatorPrice: '0.10'
    },
    {
      operatorId: '2', 
      countryCode: '911',
      operatorPrice: '0.10'
    },
    {
      operatorId: '2', 
      countryCode: '92',
      operatorPrice: '0.10'
    },
    {
      operatorId: '2', 
      countryCode: '92',
      operatorPrice: '0.10'
    },
    {
      operatorId: '3', 
      countryCode: '911',
      operatorPrice: '0.08'
    },
    {
      operatorId: '4', 
      countryCode: '912',
      operatorPrice: '0.08'
    }
    
  ];


  ngOnInit(){
  }

  parseInput(userInput, userCountryCode){
    this.selectedOperators = this.operatorData.filter(x => x.countryCode == userCountryCode)
    console.log("These operators will cater to the area: ");
    console.log(this.selectedOperators);
    var newNumber = '';

    for(var i = 0; i <= 4; i++){

      //Fetch the 1st digit of the phoneNumber to extract the area code
      var thisDigit =+ (''+userInput)[i];
      newNumber = newNumber+thisDigit;
      //Append to the country code
      var extendedCountryCode = userCountryCode+newNumber;
      console.log("This: "+extendedCountryCode);
      this.selectedOperators = this.operatorData.filter(x => x.countryCode == extendedCountryCode)
      // console.log("These operators will cater to the area: "+i);
      // console.log(this.selectedOperators);

      if(this.selectedOperators == ""){
        console.log("It is blank now, Breaking");
        break;
      }else{
        var length = this.selectedOperators.length;
        if(length > 1){
          console.log("Have to get the cheaper operator from the available");
        }else{    
          console.log("Final Done This --> ");
          console.log(this.selectedOperators);
        }
      }
    }
  }
}
