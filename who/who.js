var Who=function(){
this.name=function(nameGiven)
{
if(nameGiven){
    return 'One for '+nameGiven+', one for me.'
}
else{
    return 'One for you, one for me.';
}
}
}

module.exports=Who;