let num=123;
var rev=0;

while(num != 0){
	var b=num%10;
    rev=rev*10+b;
	num=parseInt(num/10);
}

document.write("answer :" +rev);