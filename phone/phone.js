var PhoneNumber=function(givenNo){
	this.numberGiven=givenNo;
	
	this.number=function(){
		
		var temp= this.numberGiven.replace(/[^0-9 /w]/g,'');
		return temp;
	}
	
}



module.exports = PhoneNumber;