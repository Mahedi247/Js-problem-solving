//  feet to Inch conversion

function feetToInch(feet) {
    let inches = feet * 12;
    if (feet <= 0) {
        return 'Please enter a correct Value'
    }


    return inches;

}

const result = feetToInch(12);
console.log(result)