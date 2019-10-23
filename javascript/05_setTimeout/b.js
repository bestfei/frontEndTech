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




var isOpen = true;
//创建一个Promise对象名为 buyCloth
//resolve 和 reject 参数是函数
//当承诺实现了的时候，就会调用resolve函数，然后对应的promise的状态就变成fulfilled；
//当承诺没有实现的时候，就会调用reject函数，其状态变成了rejected
var buyCloth = new Promise(function(resolve,reject){
    if(isOpen){
        var cloth = {
            color:'red',
            price:'$120'
        };
        resolve(cloth);
    }else{
        var err = new Error("the shop is closed");
        reject(err);
    }
});


var testPromise = function(){
    buyCloth.then(function(fulfilled){
        console.log(fulfilled);
    }).catch(function(rejected){
        console.log(rejected.message);
    });
}
