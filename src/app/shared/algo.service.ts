export class AlgoService{

    selectedOperators: any;
    finalizedOperator: any;
    rawOperatorData: any = [
        {
            operatorId: '1', 
            countryCode: '91',
            extendedCountryCode: '91',
            operatorPrice: '0.10'
        },
        {
            operatorId: '1',
            countryCode: '91',
            extendedCountryCode: '91',
            operatorPrice: '0.10'
        },
        {
            operatorId: '2', 
            countryCode: '91',
            extendedCountryCode: '911',
            operatorPrice: '0.10'
        },
        {
            operatorId: '7', 
            countryCode: '1',
            extendedCountryCode: '1',
            operatorPrice: '0.05'
        },
        {
            operatorId: '2', 
            countryCode: '1',
            extendedCountryCode: '1',
            operatorPrice: '0.10'
        },
        {
            operatorId: '3', 
            countryCode: '91',
            extendedCountryCode: '911',
            operatorPrice: '0.08'
        },
        {
            operatorId: '4', 
            countryCode: '91',
            extendedCountryCode: '919',
            operatorPrice: '0.08'
        },
        {
            operatorId: '4', 
            countryCode: '49',
            extendedCountryCode: '49',
            operatorPrice: '0.02'
          },
          {
            operatorId: '1',
            countryCode: '91',
            extendedCountryCode: '91',
            operatorPrice: '0.01'
        },
    ];

    getData(userCountryCode){
        var returnData = this.filterOperatorsByCC(userCountryCode);
        return returnData
    }

    getCheapestOption(selectedOperators){
        var byPrice = selectedOperators.slice(0)
        byPrice.sort(function(a,b) {
            return a.operatorPrice - b.operatorPrice
        });
        var cheapestOption = byPrice[0];
        return cheapestOption
    }

    filterOperatorsByCC(userCountryCode){
        var filteredData = this.rawOperatorData.filter(x => x.countryCode == userCountryCode);
        return filteredData
    }

    filterOperators(inputCountryCode, inputOperatorData){
        var filteredData = inputOperatorData.filter(x => x.extendedCountryCode == inputCountryCode);
        return filteredData
    }

    runAlgo(userCountryCode, userInput, operatorData){

        if(operatorData){
            var operator = this.getCheapestOption(operatorData);
            this.finalizedOperator = operator;
            console.log(this.finalizedOperator);
        }else{
            return false
        }

        var newNumber = '';

        for(var i = 0; i <= 10; i++){
            var thisDigit =+ (''+userInput)[i];
            newNumber = newNumber+thisDigit
            var extendedCountryCode = userCountryCode+newNumber
            this.selectedOperators = this.filterOperators(extendedCountryCode, operatorData);

            if(this.selectedOperators == ""){
                break
            }
            else{
                if(this.selectedOperators.length > 1){
                    this.finalizedOperator = this.getCheapestOption(this.selectedOperators);
                }else{
                    this.finalizedOperator = this.selectedOperators[0];
                }
            }
        }

        return this.finalizedOperator

    }

}