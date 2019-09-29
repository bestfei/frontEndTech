function alerTest(){
  alert("test");
}

var name = "全局的name属性";
var obj1 = {
            name: "this is an object",
            thisTest: thisTest
};

function thisTest() {
  console.log(this);
  console.log("this:"+this);
  console.log("this.name:"+this.name);
}


function argumentsTest() {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(arguments.callee);
  console.log(typeof arguments.callee);
}
