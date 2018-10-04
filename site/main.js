var money = 0;


function hackClick(number){
money = money + number;
document.getElementById("money").innerHTML = prettify(money);

};

var beginner = 0;
var beginnerLvl = 0;

function buyBeginner(){
var beginnerCost = Math.floor(10 * Math.pow(1.1, beginner));
if(money >= beginnerCost){

beginner = beginner + 0.1;
beginnerLvl = beginnerLvl + 1;
money = money - beginnerCost;
document.getElementById('beginner').innerHTML = beginner;
document.getElementById('beginnerLvl').innerHTML = beginnerLvl;
document.getElementById('money').innerHTML = prettify(money);
};
var nextCost = Math.floor(10 * Math.pow(1.2,beginner));
document.getElementById('beginnerCost').innerHTML = nextCost;

};

window.setInterval(function(){
hackClick(beginner);

}, 100);

var prestige = 0;



function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
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



