const User = require('./user.class');
const Admin = require('./admin.class');
 const userTest = new User('Evgeniy', 'Petrov');
const adminTest = new Admin('Anna', 'Petrova');
 userTest.login();
adminTest.login();
 console.log(userTest);
console.log(adminTest); 