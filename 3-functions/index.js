const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve('../3-functions/index.json');

var datajson = fs.readFileSync(pathToJSON,'utf8');

var mydata = JSON.parse(datajson);

console.log('Количество пользователей: '+ mydata.length);

let result = mydata.reduce((acc, x) =>
    acc + x.age, 0);

  console.log('Средний возраст пользователей:' + Math.floor(result/mydata.length)); 
      
// // your code...
// // console.log(count);
// // console.log(averageAge);
// fs.writeFileSync('users.csv', 'data', 'utf8');

// var contents = fs.readFileSync(pathToJSON, 'utf8');
// console.log(contents);
// // var content;
// // fs.readFile(pathToJSON, function read(err, data) {
//     if (err) {
//         return err;
//     }
//     content = data;
// // });
// console.log(content);


// console.log(jsonFile);
// let a = JSON.stringify(text).match(/"name":0/g).count;
// console.log(text.match(/"name":/g).length);

// console.log(a);