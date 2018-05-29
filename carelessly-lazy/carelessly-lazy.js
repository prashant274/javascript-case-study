var lazyGuy = function(){
	this.hey=function(message){
		if(!message.replace(/\s/g,'').length){
			return "Fine. Be that way!";
		}
		var lastChar=message.charAt(message.length-1);
		var answer='';
		if(lastChar==='?'){
			answer="Sure.";
		}else if(lastChar=='!'||this.isContainsUpperCaseAfterZeroIndex(message)){
			answer="Whoa, chill out!";
		}else if(lastChar=='?'&& this.isContainsUpperCaseAfterZeroIndex(message)){
			answer="Calm down, I know what I'm doing!";
		}else{
			answer="Whatever.";
		}
		return answer;
	}
	this.isContainsUpperCaseAfterZeroIndex =function(passedMessage){
		return /[A-Z]/.test(passedMessage.slice(1));
	}
}

module.exports=lazyGuy;
