function car(){
    function horn(){
        var sound = "beep!"
        return sound;
    }
    return "The car goes " + horn();
}

console.log(car());

function math(num1, num2){
    function add(){
        var total = num1 + num2;
        return total;
    }
    return add();
}
var result = math(1,2);

console.log(result);