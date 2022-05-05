var car = {
    make: "Honda",
    model: "Civic",
    year: 1995,
    mileage: 201345,
    color: "blue",
    Work: 33,
    aroundTheWorld: 24000,
    errands: 30,

driveToWork: function () {
    console.log(car.mileage + car.Work)
},
driveAroundTheWorld: function () {
    console.log(car.mileage + car.aroundTheWorld)
},         
runErrands: function () {
    console.log(car.mileage + car.errands)
}    
};
car.driveToWork();
car.aroundTheWorld();
car.runErrands();


