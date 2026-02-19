const sumAll = function(a,b) {
    if ((Number.isInteger(a) && Number.isInteger(b)) && (a >= 0 && b >= 0)){
        let lowerBound = a;
        let upperBound = b;
        let sum = 0;
        if (a > b) {
            lowerBound = b;
            upperBound = a; }
        // } else {
        //     lowerBound = a;
        //     upperBound = b;
        // }

        for (let i = lowerBound; i <= upperBound; i++){
            sum += i;
        }
        return sum; 
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
