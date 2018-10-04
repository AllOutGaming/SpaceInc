var money = 0;


function hackClick(number){
money = money + number;
document.getElementById("money").innerHTML = prettify(money);

};

var beginner = 0;
var beginner2 = 0;
var beginnerLvl = 0;

function buyBeginner(){
var beginnerCost = Math.floor(10 * (Math.pow(1.4,beginner)));
if(money >= beginnerCost){

beginner = beginner + 1;
//beginnerLvl = beginnerLvl +0.1;
money = money - beginnerCost;
document.getElementById("beginner").innerHTML = beginner;
//document.getElementById("beginnerLvl").innerHTML = beginnerLvl;
document.getElementById("money").innerHTML = prettify(money);
};
var nextCost = Math.floor(10 * (Math.pow(1.4, beginner)));
document.getElementById("beginnerCost").innerHTML = nextCost;

};

function buyBeginner2(){
var beginnerCost2 = Math.floor(10 * (Math.pow(1.4,beginner2)));
if(money >= beginnerCost2){

beginner2 = beginner2 + 1;
//beginnerLvl = beginnerLvl +0.1;
money = money - beginnerCost2;
document.getElementById("beginner2").innerHTML = beginner2;
//document.getElementById("beginnerLvl").innerHTML = beginnerLvl;
document.getElementById("money").innerHTML = prettify(money);
};
var nextCost2 = Math.floor(10 * (Math.pow(1.4, beginner2)));
document.getElementById("beginnerCost2").innerHTML = nextCost2;

};

window.setInterval(function(){
hackClick(beginner);
hackClick(beginner2);
}, 50);

var prestige = 0;



function prettify(input){
    var output = Math.round(input * 1)/1;
	return output;
}
	
function save(){
	var save = {
		
		money: money,
		beginner: beginner,
		beginnerCost: beginnerCost,
		nextCost: nextCost,
		prestige: prestige
		
	};
	localStorage.setItem("save",JSON.stringify(save));
	
};

function load(){
	
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.beginner !== "undefined") beginner = savegame.beginner;
	if (typeof savegame.beginnerCost !== "undefined") beginnerCost = savegame.beginnerCost;
	if (typeof savegame.nextCost !== "undefined") nextCost = savegame.nextCost;
	if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
	


	
};


function deleteAndReset(){
	money = 0;
	beginner = 0;
	localStorage.removeItem("save")
	money = 0;
	beginner = 0;
};



