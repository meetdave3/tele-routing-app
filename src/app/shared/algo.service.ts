export class AlgoService{

    selectedOperators: any;
    finalizedOperator: any;
    rawOperatorData: any = [
        {
          operatorId: '1', 
          primaryCountryCode: '91',
          countryCode: '91',
          operatorPrice: '0.10'
        },
        {
          operatorId: '1',
          primaryCountryCode: '91',
          countryCode: '91',
          operatorPrice: '0.10'
        },
        {
          operatorId: '2', 
          primaryCountryCode: '91',
          countryCode: '911',
          operatorPrice: '0.10'
        },
        {
          operatorId: '7', 
          primaryCountryCode: '1',
          countryCode: '1',
          operatorPrice: '0.05'
        },
        {
          operatorId: '2', 
          primaryCountryCode: '1',
          countryCode: '1',
          operatorPrice: '0.10'
        },
        {
          operatorId: '3', 
          primaryCountryCode: '91',
          countryCode: '911',
          operatorPrice: '0.08'
        },
        {
          operatorId: '4', 
          primaryCountryCode: '91',
          countryCode: '919',
          operatorPrice: '0.08'
        },
        {
            operatorId: '4', 
            primaryCountryCode: '49',
            countryCode: '49',
            operatorPrice: '0.02'
          } 
    ];

    getData(){
        return this.rawOperatorData
    }

    getCheapestOption(selectedOperators){
        var byPrice = selectedOperators.slice(0)
        byPrice.sort(function(a,b) {
            return a.operatorPrice - b.operatorPrice
        });
        var cheapestOption = byPrice[0];
        return cheapestOption
    }

    filterOperatorsBy(inputCountryCode){
        var filteredData = this.rawOperatorData.filter(x => x.countryCode == inputCountryCode);
        return filteredData
    }

    runAlgo(userCountryCode, userInput, operatorData){

        this.selectedOperators = this.filterOperatorsBy(userCountryCode);
        this.finalizedOperator = this.getCheapestOption(this.selectedOperators);

        var newNumber = '';

        for(var i = 0; i <= 10; i++){
            var thisDigit =+ (''+userInput)[i];
            newNumber = newNumber+thisDigit
            var extendedCountryCode = userCountryCode+newNumber
            this.selectedOperators = this.filterOperatorsBy(extendedCountryCode);

            if(this.selectedOperators == ""){
                break
            }
            else{
                if(this.selectedOperators.length > 1){
                    this.finalizedOperator = this.getCheapestOption(this.selectedOperators);
                }else{
                    this.finalizedOperator = this.selectedOperators
                }
            }
        }

        return this.finalizedOperator

    }

}