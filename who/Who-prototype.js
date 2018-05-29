var Who=function(){
	
}

Who.prototype.name=function(given){
		if(given){
			return "one for "+given+" and one for you";
		}
		else{
     		return "one for me one for you"
		}
}

module.exports=Who;