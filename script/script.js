var firstNum=0, operation='-', secondNum=0, rez=0, op;

function Reset() {
	document.calculator.results.value=0;
}

function squareRoot(){
	document.calculator.results.value=sqrt(document.calculator.results.value);
}

function deleteLast() {
	var niz=document.calculator.results.value;
	niz=niz.split('');
	if (niz.length>0) {
		niz.splice(niz.length-1, 1);
	}
	var number='';
	if (niz.length>0) {
		for (var i=0; i<niz.length; i++) {
			number+=niz[i];
		}
	}else {
		number=0;
	}
	document.calculator.results.value=number;
}


function myFunction(element) {
	var sadrzaj=document.calculator.results.value;
	sadrzaj=parseInt(sadrzaj);
	if (sadrzaj===0 && element!='.') {
		calculator.results.value=element;
	}else {
		calculator.results.value+=element;
	}
}


function add() {	
	firstNum=parseFloat(document.getElementById("display-zero").value);
	rez=firstNum;
	op='+';
	document.calculator.results.value="";
}

function substract() {	
	firstNum=parseFloat(document.getElementById("display-zero").value);
	rez=firstNum;
	op='-';
	document.calculator.results.value="";
}

function divide() {	
	firstNum=parseFloat(document.getElementById("display-zero").value);
	rez=firstNum;
	op='/';
	document.calculator.results.value="";
}

function multiply() {	
	firstNum=parseFloat(document.getElementById("display-zero").value);
	rez=firstNum;
	op='*';
	document.calculator.results.value="";
}


function calculate(firstNum, operation, secondNum) {
	var result;
	secondNum=parseFloat(document.getElementById("display-zero").value);
	operation=op;
	switch (operation) {
		case '-':
			result=rez - parseFloat(secondNum);
			break;
		case '+':
			result=rez + parseFloat(secondNum);
			break;
		case '/':
			result=rez / parseFloat(secondNum);
			break;
		case '*':
			result=rez * parseFloat(secondNum);
			break;
		default:
			result=0;
	}
	document.calculator.results.value=parseFloat(result).toFixed(2);
}
