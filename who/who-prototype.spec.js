
var Who = require('./Who-prototype');

describe('Name argument',function(){
var who=new Who();

it('should return "one for me one for you"',function(){
	const expected="one for me one for you";
	expect(who.name()).toEqual(expected);
});


it('should return "one for Alice and one for you"',function(){
	const expected="one for Alice and one for you";
	expect(who.name('Alice')).toEqual(expected);
});

});