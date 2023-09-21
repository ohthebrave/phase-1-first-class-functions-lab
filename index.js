// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


function returnFirstTwoDrivers(drivers) {
    const twoDrivers = drivers.slice(0, 2);
    return twoDrivers;
}

function returnLastTwoDrivers() {
    const lastTwoDrivers = drivers.slice(2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

function createFareMultiplier() {
    return function fare(interger) {
        return interger * interger;
    }
}

// const fareMultiplier = createFareMultiplier()();
function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}


