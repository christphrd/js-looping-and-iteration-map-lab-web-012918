// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
};

function nameToAttributes(drivers) {
  //driver => {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
  return drivers.map(function (driver){
    const firstNameDriver = driver.split(" ")[0];
    const lastNameDriver = driver.split(" ")[1];
    return {firstName: firstNameDriver, lastName: lastNameDriver};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver){
    return `${driver["name"]} is from ${driver["hometown"]}`
  })
}
