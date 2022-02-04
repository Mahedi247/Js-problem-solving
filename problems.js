//  feet to Inch conversion

function feetToInch(feet) {
    let inches = feet * 12;
    if (feet <= 0) {
        return 'Please enter a correct Value'
    }


    return inches;

}

// const result = feetToInch(12);
// console.log(result)

//  centimeter to meter conversion

function centiMeterToMeter(centiMeter) {
    let meter = centiMeter / 100;
    if (centiMeter <= 0) {
        return 'Please enter a positive value'
    }

    return meter;

}
// const result2 = centiMeterToMeter(300);
// console.log(result2);

//  pageRequirements book1-5, book2-5,bok3-3
function pageRequirement(book1, book2, book3) {
    let page;
    let page2;
    let page3;
    page = book1 * 100;
    page2 = book2 * 200;
    page3 = book3 * 300;
    let totalPages = page + page2 + page3;
    return totalPages;
}

const result = pageRequirement(5, 5, 3);
console.log(result)


//  longest name find from an array.

let friendsName = ['Tanvir Hasan bappy', 'saidul Islam', 'Touhidul Islam', 'maku kandi lal monohor dandi lal']

function longesFriendsName(friendsName) {
    let length = 0;
    let longestName = 0;
    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > length) {
            length = friendsName[i].length;
            longestName = length;
        }
    }
    return longestName;
}

const longestNameEver = longesFriendsName(friendsName);
console.log(longestNameEver)
