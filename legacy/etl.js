var ETL = function(){
	this.newObject={};
	this.transform=function(old){
		var oldKeys=Object.keys(old);
		if(oldKeys){
			this.iterateAndExchange(oldKeys,old);
		}
	return this.newObject;
	}
	
	this.iterateAndExchange=function(oldkeys,old){
		oldkeys.forEach(function(key){
			var oldKeyValues=old[key];
				oldKeyValues.forEach(function(value){
					if(!this.newObject[value]){
						this.newObject[value.toLowerCase()]=parseInt(key);
					}
				},this);
			},this);
	}
}

module.exports=ETL;