function alerTest(){
  alert("test");
}


function testSetTimeout(){
	var time = 0;
	for (var i = 0; i <= 3; i++) {
		console.log(i+" begin");
	        time = new Date().getTime();
		setTimeout(function(){
			console.log(new Date().getTime()-time);
			console.log("hi");
		},600);
		console.log(i+" end");
    }
}
