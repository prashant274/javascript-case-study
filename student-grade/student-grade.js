
var School =function(){
	this.database={};
	
	this.add=function(studentName,grade){
		if(this.database[grade]){
			this.database[grade].push(studentName);
		}else{
			this.database[grade]=[studentName];
		}
	}
	
	this.grade=function(grade){
		var studentsArray=this.database[grade];
		if(studentsArray){
			return studentsArray;
		}
		return [];
	}
	
	this.roster=function(){
		this.sortDatabase(this.database);
		return this.database;
	}
	
	this.sortDatabase=function(database){
		var objectKeys=Object.keys(database);
		if(objectKeys.length>0){
			objectKeys.forEach(function(key){
				database[key].sort();
			});
		}
	}
}

module.exports = School;