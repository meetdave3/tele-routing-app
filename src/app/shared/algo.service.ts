import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { OperatorData } from './interface/operatorData';

@Injectable()
export class AlgoService {

    selectedOperators: any;
    finalizedOperator: any;
    apiOperatorData: OperatorData[] = [];

    constructor(private http: Http) { }

    getOperatorTariffs() {
        const apiUrl = './assets/data/api/operatorData.json';
        return this.http.get(apiUrl)
        .map( data => {
            const res = data.json();
            this.apiOperatorData = res;
            return this.apiOperatorData;
        });
    }

    getData(userCountryCode) {
        const returnData = this.filterOperatorsByCC(userCountryCode);
        return returnData;
    }

    getCheapestOption(selectedOperators) {
        const byPrice = selectedOperators.slice(0);
        byPrice.sort(function(a, b) {
            return a.operatorPrice - b.operatorPrice;
        });
        const cheapestOption = byPrice[0];
        return cheapestOption;
    }

    filterOperatorsByCC(userCountryCode) {
        const filteredData = this.apiOperatorData.filter(x => x.countryCode == userCountryCode);
        return filteredData;
    }

    filterOperators(inputCountryCode, inputOperatorData) {
        const filteredData = inputOperatorData.filter(x => x.extendedCountryCode == inputCountryCode);
        return filteredData;
    }

    runAlgo(userCountryCode, userInput, operatorData) {

        if(operatorData){
            const countryOperators = this.filterOperators(userCountryCode, operatorData);
            const cheapestCountryOperator = this.getCheapestOption(countryOperators);
            this.finalizedOperator = cheapestCountryOperator;
        }else{
            return false;
        }

        let newNumber = '';

        for(var i = 0; i <= 10; i++) {
            var thisDigit =+ (''+userInput)[i];
            newNumber = newNumber+thisDigit
            var extendedCountryCode = userCountryCode+newNumber
            this.selectedOperators = this.filterOperators(extendedCountryCode, operatorData);
            if(this.selectedOperators == "") {
                // Idle
            } else {
                if(this.selectedOperators.length > 1) {
                    this.finalizedOperator = this.getCheapestOption(this.selectedOperators);
                } else {
                    this.finalizedOperator = this.selectedOperators[0];
                }
            }
        }

        return this.finalizedOperator;

    }

}