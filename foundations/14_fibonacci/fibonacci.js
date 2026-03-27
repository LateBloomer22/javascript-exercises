const fibonacci = function(counter) {
    let previous = 0;
    let current = 1;
    let temp;
    if (counter == 0) {
        return 0
    } else if (counter == 1) {
        return 1
    } else if (counter < 0) {
        return "OOPS"
    } else {
        for (let i = 2; i <= counter; i++){
            temp = previous + current;
            previous = current;
            current = temp;
        }
        return temp;
    }
};

// Do not edit below this line
module.exports = fibonacci;
