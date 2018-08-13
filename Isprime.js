
const readline  = require('readline');
var cl = readline.createInterface( process.stdin, process.stdout );
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
            return answer;
        }
    }
})();
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
console.log(answer);
