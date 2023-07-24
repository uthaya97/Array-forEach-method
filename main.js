var a=[1,2,3,4,5,6,7,8,9];
document.write("a=[1,2,3,4,5,6,7,8,9]"+"<br>"+"Even number"+"<br>");

a.forEach(function(e){
	if(e%2==0){
		document.write(e+"<br>");
	}
})