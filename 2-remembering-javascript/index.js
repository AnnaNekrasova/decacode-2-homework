let numbers = process.argv.slice(2);
let num = numbers.map(Number);
console.log(num);

function sum(arr){
	var s=0;
	for(var i = 0; i<arr.length; i++) {
		s=s+arr[i];
	}
return s;
}
console.log('Сумма: '+ sum(num));
console.log('Среднее арифметическое: '+ sum(num)/5);