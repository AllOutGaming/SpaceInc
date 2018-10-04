var money = 0;

var moneyTwoDec = money.toFixed(2);

function hackClick(number){
money = money + number;
document.getElementById("money").innerHTML = money;

};

var beginner = 0;

function buyBeginner(){
var beginnerCost = Math.floor(10 * Math.pow(1.1, beginner));
if(money >= beginnerCost){

beginner = beginner + 1;
money = money - beginnerCost;
document.getElementById('beginner').innerHTML = beginner;
document.getElementById('money').innerHTML = money;
};
var nextCost = Math.floor(10 * Math.pow(1.2,beginner));
document.getElementById('beginnerCost').innerHTML = nextCost;

};

window.setInterval(function(){
hackClick(beginner);

}, 1000);