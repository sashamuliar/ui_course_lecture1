var number = '#';
var num = 0
while (number.length <=7 ) {

  console.log(number);
  num++;
  number = (number+'#');
}

//fizzbuzz

for(var num = 1; num<=100; num++){
 	if (num % 3 == 0 && num % 5 == 0){
 		console.log("FizzBuzz")
 	}
	else if (num % 3 == 0){
		console.log("Fizz");
	}
	else if (num % 5 == 0){
		console.log("Buzz");
	}
	else{
		console.log(num);
	}
}

//chachmate
var size = 8;
var sharp="#";
var space=" ";
var summ="";
var summ2="";
var inc=1;
var sem=1;
var mol=1;
sum=(space+sharp);
sum2=(sharp+space);

	for(inc;inc<=size;inc++){
		if (inc % 2 !== 0){
			for(sem;sem<=size;sem++){
				summ=(summ+sum);
			}
			console.log(summ);
		}
		else if (inc % 2 == 0){
			for(mol;mol<=size;mol++){
				summ2=(summ2+sum2);
			}
 			console.log(summ2);
 		}


 }