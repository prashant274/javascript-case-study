var CokeSong = function(){
	this.verse=function(number){
		var verse='%totalCans cans of coke in the box, %totalCans cans of coke.\nTake one down and pass it around, %remainingCans cans of coke in the box.\n'
		if(number==0){
			verse='No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
		}
		else if(number==1){
			verse='%totalCans can of coke in the box, %totalCans can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
		}else if (number==2){
			verse='%totalCans cans of coke in the box, %totalCans cans of coke.\nTake one down and pass it around, %remainingCans can of coke in the box.\n'
		}
		var tempVerse=verse.replace('%totalCans',number);
		var finalVerse=tempVerse.replace('%totalCans',number);
		return finalVerse.replace('%remainingCans',--number);
	}
	
	this.sing=function(start,end){
		var tempVerse="";
		console.log(start,end);
		if(end==undefined){
			end=0;
			}
		for(i=start;i>=end;i--){
			if(i==end){
				tempVerse=tempVerse.concat(this.verse(i));
			}else{
				tempVerse=tempVerse.concat(this.verse(i)+"\n");
			}
		
		}
		return tempVerse;
	}
	
}
module.exports=CokeSong;