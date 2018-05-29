var HelloWorld=require('./hello-world-prototype.js');

describe('Hello World Prototype', function(){
	var helloWorld=new HelloWorld;
	
it('should return Hello World',function(){
	const expected='Hello World';
	expect(helloWorld.hello()).toEqual(expected);
});


});