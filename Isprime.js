
const readline  = require('readline');
var cl = readline.createInterface( process.stdin, process.stdout );
function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}
function permute(number, lPosintion, rPosition)
{
   if (lPosintion == rPosition){
        if(primeNumber(Number(number.join("")))){
            console.log( Number(number.join("")) + " is prime");
        }else{
            console.log( Number(number.join("")) + " is NOT prime");
        } 
      
   }
   else
   {
       for (let i = lPosintion; i <= rPosition; i++)
       {
          swap(number,lPosintion,rPosition);
          permute(number, lPosintion+1, rPosition);
          swap(number,lPosintion,i); //backtrack
       }
   }
}
var question = function(q) {
    return new Promise( (res, rej) => {
        cl.question( q, answer => {
            res(answer);
        })
    });
};
let boool = true;
var answer;
(async function main() {
    while (boool)  {
        answer = await question('enter you number');
        if(isNaN(answer)){
        	 console.log(answer + " is not a number");
        }else{
            boool=false;   
        }
    }
})().then(
    function(){
        permute(answer.split(""),0,answer.length - 1);
    }
  );
function primeNumber(number){
	if(number==2){
		return true;
	}else if(number>1){
		for (var i = Math.ceil(number/2); i > 1; i--) {
			if(number%i!=0){
				return true;
			}else{
				return false;
			}
		}
	}else{
		return false;
	}
};

