

var path = window.location.href; // path = URL complète de la page
var loc = path.substring(path.lastIndexOf('/')+1) // loc = nom de la page.html

charger();

if (loc==="stockExchange.html"){
	localStorage.stockVisit=1;
	if ((isNaN(prixBois)) || (prixBois<=0.1) || (prixBois>=1)){
		prixBois=0.5;
		localStorage.prixBois=0.5;
	}
	if ((isNaN(prixPierre)) || (prixPierre<=0.1) || (prixPierre>=1.9)){
		prixPierre=1;
		localStorage.prixPierre=1;
	}
}
if (loc==="index.html"){
var n=1;
}

if ((loc==="index.html") && (localStorage.trader!=1)){ // On s'assure que les boutons d'upgrade sont bien visibles après être passé du mode trader au mode normal.
	document.getElementById("boutonBoisUpgrade").style.visibility="visible";
	document.getElementById("boutonPierreUpgrade").style.visibility="visible";
	document.getElementById("boutonOrUpgrade").style.visibility="visible";
	}

if ((isNaN(boisNombre)) || (boisNombre===undefined) || (boisNombre==="undefined") || (isNaN(pierreNombre)) || (isNaN(orNombre))){
var boisNombre=0;
var orNombre=0;
var pierreNombre=0;
var maisonBoisNombre=1;
var maisonPierreNombre=0;
var chateauNombre=0;
var hommeNombre=1;
var femmeNombre=1;
var bébéNombre=0;


var boisPlus=1.3;
var orPlus=0.2;
var pierrePlus=0.90;

var boisUpgradeCost=100;
var orUpgradeCost=100;
var pierreUpgradeCost=100;

var maisonBoisCoutBois=150;
var maisonBoisCoutPierre=0;
var maisonBoisCapacite=4;
var maisonPierreCoutBois=25;
var maisonPierreCoutPierre=75;
var maisonPierreCapacite=6;
var chateauCoutBois=100;
var chateauCoutPierre=1000;
var chateauCoutOr=500;
var chateauCapacite=50;

var boisStockNombre=1000;
var pierreStockNombre=750;
var orStockNombre=250;

var boisStockUpgradeBoisCost=100;
var boisStockUpgradePierreCost=50;
var boisStockUpgradeOrCost=0;
var pierreStockUpgradeBoisCost=100;
var pierreStockUpgradePierreCost=50;
var pierreStockUpgradeOrCost=0;
var orStockUpgradeBoisCost=100;
var orStockUpgradePierreCost=50;
var orStockUpgradeOrCost=0;

var prixBois = 0.5;
var prixPierre = 1;
localStorage.e = 0;
localStorage.ebois = 0;
localStorage.lang="en";
localStorage.clicNombre=0;
sauvegarder();
}

charger();

if (pierrePlus==0){
	pierrePlus=0.9;
}
if (pierrePlus==0){
	pierrePlus=0.2;
}

if (loc!="achievements.html"){
setInterval(plus,1000);


if (bébéNombre>0){
	bébéGrandit(bébéNombre);
	console.log("Les bébés doivent grandir!")
}
var populationMax=maisonBoisNombre*maisonBoisCapacite+maisonPierreNombre*maisonPierreCapacite+chateauNombre*chateauCapacite;
// Initialisation
if ((localStorage.lang)==("fr")){
	document.getElementById("bois").innerHTML="Bois : "+millier(boisNombre);
	document.getElementById("boisStock").innerHTML="Stock max : "+millier(boisStockNombre);
	document.getElementById("pierre").innerHTML="Pierre : "+millier(pierreNombre);
	document.getElementById("pierreStock").innerHTML="Stock max : "+millier(pierreStockNombre);
	document.getElementById("or").innerHTML="Or : "+millier(orNombre);
	document.getElementById("orStock").innerHTML="Stock max : "+millier(orStockNombre);
	if (loc==="index.html"){
	if (localStorage.boutonTrader==1){
	document.getElementById("boutonTrader").style.visibility="visible";
	}
	if (localStorage.trader!=1){
	document.getElementById("boisProduction").innerHTML="Production : "+millier(Math.floor(boisPlus+0.02*hommeNombre))+"bois/seconde";
	document.getElementById("pierreProduction").innerHTML="Production : "+millier(Math.floor(pierrePlus+0.02*hommeNombre))+"pierre/seconde";
	document.getElementById("orProduction").innerHTML="Production : "+millier(Math.floor(orPlus+0.02*hommeNombre))+"or/seconde";
	document.getElementById("boutonBoisUpgrade").innerHTML="Améliorer la production de bois </br> Coût : "+millier(boisUpgradeCost)+" bois";
	document.getElementById("boutonPierreUpgrade").innerHTML="Améliorer la production de pierre </br> Coût : "+millier(pierreUpgradeCost)+" pierre";
	document.getElementById("boutonOrUpgrade").innerHTML="Améliorer la production d'or </br> Coût : "+millier(orUpgradeCost)+" or";
	}
	if (localStorage.trader==1){
	document.getElementById("boutonBoisUpgrade").style.visibility="hidden";
	if ((localStorage.lang)==("en")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Trader mode activated</div>";
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Mode trader activé</div>";
	}
	}
	document.getElementById("boutonBoisStockUpgrade").innerHTML="Agrandir l'entrepôt de bois</br> Coût : "+millier(boisStockUpgradeBoisCost)+" bois, "+millier(boisStockUpgradePierreCost)+" pierre et "+millier(boisStockUpgradeOrCost)+ " or";
	document.getElementById("boutonPierreStockUpgrade").innerHTML="Agrandir l'entrepôt de pierre</br> Coût : "+millier(pierreStockUpgradeBoisCost)+" bois, "+millier(pierreStockUpgradePierreCost)+" pierre et "+millier(pierreStockUpgradeOrCost)+ " or";
	document.getElementById("boutonOrStockUpgrade").innerHTML="Agrandir l'entrepôt d'or</br> Coût : "+millier(orStockUpgradeBoisCost)+" bois, "+millier(orStockUpgradePierreCost)+" pierre et "+millier(orStockUpgradeOrCost)+ " or";
	maison();
	document.getElementById("stockExchange").innerHTML="Bourse";
	}
	hidden();
	if (loc==="stockExchange.html"){
	document.getElementById("acheterPierre").innerHTML="Acheter pierre</br>Prix : "+prixPierre;
	document.getElementById("vendrePierre").innerHTML="Vendre pierre</br>Prix : "+prixPierre;
	document.getElementById("vendreBois").innerHTML="Vendre bois</br>Prix : "+prixBois;
	document.getElementById("acheterBois").innerHTML="Acheter bois</br>Prix : "+prixBois;
	}
	clearBadge();
//	document.getElementById("boutonSauvegarder").innerHTML="Sauvegarder";
//	document.getElementById("boutonCharger").innerHTML="Charger";
	document.getElementById("boutonReset").innerHTML="Recommencer à zéro";
	document.getElementById("boutonTrader").innerHTML="Mode trader";
//	document.getElementById("boutonSupprimer").innerHTML="Supprimer la sauvegarde";
}
if ((localStorage.lang)==("en")){

	document.getElementById("bois").innerHTML="Wood : "+millier(boisNombre);
	document.getElementById("boisStock").innerHTML="Max stock : "+millier(boisStockNombre);
	document.getElementById("pierre").innerHTML="Stone : "+millier(pierreNombre);
	document.getElementById("pierreStock").innerHTML="Max stock : "+millier(pierreStockNombre);
	document.getElementById("or").innerHTML="Gold : "+millier(orNombre);
	document.getElementById("orStock").innerHTML="Max stock : "+millier(orStockNombre);
	if (loc==="index.html"){
	if (localStorage.boutonTrader==1){
	document.getElementById("boutonTrader").style.visibility="visible";
	}
	if (localStorage.trader!=1){
	document.getElementById("boutonBoisUpgrade").innerHTML="Increase wood production </br> Cost : "+millier(boisUpgradeCost)+" wood";
	document.getElementById("boisProduction").innerHTML="Production : "+millier(Math.floor(boisPlus+0.02*hommeNombre))+"wood/second";
	document.getElementById("boutonPierreUpgrade").innerHTML="Increase stone production </br> Cost : "+millier(pierreUpgradeCost)+" stone";
	document.getElementById("pierreProduction").innerHTML="Production : "+millier(Math.floor(pierrePlus+0.02*hommeNombre))+"stone/second";
	document.getElementById("boutonOrUpgrade").innerHTML="Increase gold production </br> Cost : "+millier(orUpgradeCost)+" gold";
	document.getElementById("orProduction").innerHTML="Production : "+millier(Math.floor(orPlus+0.02*hommeNombre))+"gold/second";
	}
	if (localStorage.trader==1){
	document.getElementById("boutonBoisUpgrade").style.visibility="hidden";
	if ((localStorage.lang)==("en")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Trader mode activated</div>";
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Mode trader activé</div>";
	}
	}
	document.getElementById("boutonOrStockUpgrade").innerHTML="Increase the gold warehouse capacity</br> Cost : "+millier(orStockUpgradeBoisCost)+" wood, "+millier(orStockUpgradePierreCost)+" stone and "+millier(orStockUpgradeOrCost)+ " gold";
	document.getElementById("boutonPierreStockUpgrade").innerHTML="Increase the stone warehouse capacity</br> Cost : "+millier(pierreStockUpgradeBoisCost)+" wood, "+millier(pierreStockUpgradePierreCost)+" stone and "+millier(pierreStockUpgradeOrCost)+ " gold";
	document.getElementById("boutonBoisStockUpgrade").innerHTML="Increase the wood warehouse capacity</br> Cost : "+millier(boisStockUpgradeBoisCost)+" wood, "+millier(boisStockUpgradePierreCost)+" stone and "+millier(boisStockUpgradeOrCost)+ " gold";
	maison();
	document.getElementById("stockExchange").innerHTML="Stock exchange";
	}
	hidden();
	if (loc==="stockExchange.html"){
	document.getElementById("acheterPierre").innerHTML="Buy stone</br>Price : "+prixPierre;
	document.getElementById("vendrePierre").innerHTML="Sell stone</br>Price : "+prixPierre;
	document.getElementById("vendreBois").innerHTML="Sell wood</br>Price : "+prixBois;
	document.getElementById("acheterBois").innerHTML="Buy wood</br>Price : "+prixBois;
	}
	clearBadge();
//	document.getElementById("boutonSauvegarder").innerHTML="Save game";
//	document.getElementById("boutonCharger").innerHTML="Load game";
	document.getElementById("boutonReset").innerHTML="Restart from scratch";
	document.getElementById("boutonTrader").innerHTML="Trader mode";
//	document.getElementById("boutonSupprimer").innerHTML="Erase the saved game";
}





document.addEventListener("keydown", function(e) { // n = nombre de maisons/châteaux achetés en cliquant sur le bouton d'achat
if (e.keyCode==16){ // si Shift est enfoncé
n=10;
}
if (e.keyCode==17){ // si Ctrl est enfoncé
n=100;
}
	if (loc==="index.html"){
	if (n==1){
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire un château</br> Coût : "+millier(chateauCoutBois)+" bois, "+millier(chateauCoutPierre)+" pierre et "+millier(chateauCoutOr)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire une maison en pierre</br> Coût : "+millier(maisonPierreCoutBois)+" bois et "+millier(maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire une maison en bois</br> Coût : "+millier(maisonBoisCoutBois)+" bois et "+millier(maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build a castle</br> Cost : "+millier(chateauCoutBois)+" wood, "+millier(chateauCoutPierre)+" stone and "+millier(chateauCoutOr)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build a stone house</br> Cost : "+millier(maisonPierreCoutBois)+" wood and "+millier(maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build a wooden house</br> Cost : "+millier(maisonBoisCoutBois)+" wood and "+millier(maisonBoisCoutPierre)+" stone";
		}
	}
	if (n==10){
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire dix châteaux</br> Coût : "+millier(chateauCoutBois*10)+" bois, "+millier(chateauCoutPierre*10)+" pierre et "+millier(chateauCoutOr*10)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire dix maisons en pierre</br> Coût : "+millier(10*maisonPierreCoutBois)+" bois et "+millier(10*maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire dix maisons en bois</br> Coût : "+millier(10*maisonBoisCoutBois)+" bois et "+millier(10*maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build ten castles</br> Cost : "+millier(chateauCoutBois*10)+" wood, "+millier(chateauCoutPierre*10)+" stone and "+millier(chateauCoutOr*10)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build ten stone houses</br> Cost : "+millier(10*maisonPierreCoutBois)+" wood and "+millier(10*maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build ten wooden houses</br> Cost : "+millier(10*maisonBoisCoutBois)+" wood and "+millier(10*maisonBoisCoutPierre)+" stone";
		}
	}
	if (n==100){
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire cent châteaux</br> Coût : "+millier(chateauCoutBois*100)+" bois, "+millier(chateauCoutPierre*100)+" pierre et "+millier(chateauCoutOr*100)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire cent maisons en pierre</br> Coût : "+millier(100*maisonPierreCoutBois)+" bois et "+millier(100*maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire cent maisons en bois</br> Coût : "+millier(100*maisonBoisCoutBois)+" bois et "+millier(100*maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build a hundred castles</br> Cost : "+millier(chateauCoutBois*100)+" wood, "+millier(chateauCoutPierre*100)+" stone and "+millier(chateauCoutOr*100)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build a hundred stone houses</br> Cost : "+millier(100*maisonPierreCoutBois)+" wood and "+millier(100*maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build a hundred wooden houses</br> Cost : "+millier(100*maisonBoisCoutBois)+" wood and "+millier(100*maisonBoisCoutPierre)+" stone";
		}
	}
	}
});
		if ((localStorage.lang)==("fr")){
	document.getElementById("maisonBois").innerHTML="Maisons en bois : "+millier(maisonBoisNombre)+"</br>Peut accueillir "+millier(maisonBoisCapacite)+" personnes";
	document.getElementById("maisonPierre").innerHTML="Maisons en pierre : "+millier(maisonPierreNombre)+"</br>Peut accueillir "+millier(maisonPierreCapacite)+" personnes";
	document.getElementById("chateau").innerHTML="Châteaux : "+millier(chateauNombre)+"</br>Peut accueillir "+millier(chateauCapacite)+" personnes";
	document.getElementById("homme").innerHTML="Hommes : "+millier(hommeNombre);
	document.getElementById("femme").innerHTML="Femmes : "+millier(femmeNombre);
	document.getElementById("bébé").innerHTML="Bébés : "+millier(Math.floor(bébéNombre));
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("maisonBois").innerHTML="Wooden houses : "+millier(maisonBoisNombre)+"</br>Can hold up to "+millier(maisonBoisCapacite)+" people";
	document.getElementById("maisonPierre").innerHTML="Stone houses : "+millier(maisonPierreNombre)+"</br>Can hold up to "+millier(maisonPierreCapacite)+" people";
	document.getElementById("chateau").innerHTML="Castles : "+millier(chateauNombre)+"</br>Can hold up to "+millier(chateauCapacite)+" people";
	document.getElementById("homme").innerHTML="Men : "+millier(hommeNombre);
	document.getElementById("femme").innerHTML="Women : "+millier(femmeNombre);
	document.getElementById("bébé").innerHTML="Babies : "+millier(Math.floor(bébéNombre));
		}
	populationMax=maisonBoisNombre*maisonBoisCapacite+maisonPierreNombre*maisonPierreCapacite+chateauNombre*chateauCapacite;
	

document.addEventListener("keyup", function(e) { // en lâchant les touches, retour à un achat unitaire
n=1;
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire un château</br> Coût : "+millier(chateauCoutBois)+" bois, "+millier(chateauCoutPierre)+" pierre et "+millier(chateauCoutOr)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire une maison en pierre</br> Coût : "+millier(maisonPierreCoutBois)+" bois et "+millier(maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire une maison en bois</br> Coût : "+millier(maisonBoisCoutBois)+" bois et "+millier(maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build a castle</br> Cost : "+millier(chateauCoutBois)+" wood, "+millier(chateauCoutPierre)+" stone and "+millier(chateauCoutOr)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build a stone house</br> Cost : "+millier(maisonPierreCoutBois)+" wood and "+millier(maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build a wooden house</br> Cost : "+millier(maisonBoisCoutBois)+" wood and "+millier(maisonBoisCoutPierre)+" stone";
		}
});

}

//Boucle : toutes les secondes

function plus(){
	plusBois();
	plusOr();
	plusPierre();
	plusBébé();
	maison();
	hidden();	
	evolutionPrixBois(); 
	evolutionPrixPierre(); 
	sauvegarder();
	badge();
	kong();
}

function plusBois(){
	if (boisNombre<boisStockNombre){
		if (localStorage.trader!=1){
		boisNombre=Math.floor(boisNombre+boisPlus+0.02*hommeNombre);
		}
	}
	else{
		boisNombre=boisStockNombre;
	}
		if ((localStorage.lang)==("fr")){
	document.getElementById("bois").innerHTML="Bois : "+millier(boisNombre);
	document.getElementById("boisStock").innerHTML="Stock max : "+millier(boisStockNombre);
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("bois").innerHTML="Wood : "+millier(boisNombre);
	document.getElementById("boisStock").innerHTML="Max stock : "+millier(boisStockNombre);
		}
	if (loc==="index.html"){
		if ((localStorage.lang)==("fr")){
		if (localStorage.trader!=1){
	document.getElementById("boutonBoisUpgrade").innerHTML="Améliorer la production de bois </br> Coût : "+millier(boisUpgradeCost)+" bois";
	document.getElementById("boisProduction").innerHTML="Production : "+millier(Math.floor(boisPlus+0.02*hommeNombre))+"bois/seconde";
		}
	document.getElementById("boutonBoisStockUpgrade").innerHTML="Agrandir l'entrepôt de bois</br> Coût : "+millier(boisStockUpgradeBoisCost)+" bois, "+millier(boisStockUpgradePierreCost)+" pierre et "+millier(boisStockUpgradeOrCost)+ " or";
		}

	if (localStorage.trader==1){
	if ((localStorage.lang)==("en")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Trader mode activated</div>";
	document.getElementById("boutonBoisUpgrade").style.visibility="hidden";
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Mode trader activé</div>";
	document.getElementById("boutonBoisUpgrade").style.visibility="hidden";
	}
	}

		if ((localStorage.lang)==("en")){
		if (localStorage.trader!=1){
	document.getElementById("boutonBoisUpgrade").innerHTML="Increase wood production </br> Cost : "+millier(boisUpgradeCost)+" wood";
	document.getElementById("boisProduction").innerHTML="Production : "+millier(Math.floor(boisPlus+0.02*hommeNombre))+"wood/second";
		}
	document.getElementById("boutonBoisStockUpgrade").innerHTML="Increase the wood warehouse capacity</br> Cost : "+millier(boisStockUpgradeBoisCost)+" wood, "+millier(boisStockUpgradePierreCost)+" stone and "+millier(boisStockUpgradeOrCost)+ " gold";
		}
	}
}

function plusUnBois(){
	if (boisNombre<boisStockNombre){
		boisNombre++;
		localStorage.clicNombre++;
	}
	if (isNaN(localStorage.clicNombre)){
		localStorage.clicNombre=1;
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("bois").innerHTML="Bois : "+millier(boisNombre);
	}
	if ((localStorage.lang)==("en")){
	document.getElementById("bois").innerHTML="Wood : "+millier(boisNombre);
	}
}
function plusUnPierre(){
	if (pierreNombre<pierreStockNombre){
		pierreNombre++;
		localStorage.clicNombre++;
	}
	if (isNaN(localStorage.clicNombre)){
		localStorage.clicNombre=1;
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("pierre").innerHTML="Pierre : "+millier(pierreNombre);
	}
	if ((localStorage.lang)==("en")){
	document.getElementById("pierre").innerHTML="Stone : "+millier(pierreNombre);
	}
}
function plusUnOr(){
	if (orNombre<orStockNombre){
		orNombre++;
		localStorage.clicNombre++;
	}
	if (isNaN(localStorage.clicNombre)){
		localStorage.clicNombre=1;
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("or").innerHTML="Or : "+millier(orNombre);
	}
	if ((localStorage.lang)==("en")){
	document.getElementById("or").innerHTML="Gold : "+millier(orNombre);
	}
}

function plusPierre(){

	if (pierreNombre<pierreStockNombre){
		if (localStorage.trader!=1){
		pierreNombre=Math.floor(pierreNombre+pierrePlus+0.02*hommeNombre);
		}
	}
	else{
		pierreNombre=pierreStockNombre;
	}
		if ((localStorage.lang)==("fr")){
	document.getElementById("pierre").innerHTML="Pierre : "+millier(pierreNombre);
	document.getElementById("pierreStock").innerHTML="Stock max : "+millier(pierreStockNombre);
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("pierre").innerHTML="Stone : "+millier(pierreNombre);
	document.getElementById("pierreStock").innerHTML="Max stock : "+millier(pierreStockNombre);
		}
	if (loc==="index.html"){
		if ((localStorage.lang)==("fr")){
		if (localStorage.trader!=1){
	document.getElementById("boutonPierreUpgrade").innerHTML="Améliorer la production de pierre </br> Coût : "+millier(pierreUpgradeCost)+" pierre";
	document.getElementById("pierreProduction").innerHTML="Production : "+millier(Math.floor(pierrePlus+0.02*hommeNombre))+"pierre/seconde";
		}
	document.getElementById("boutonPierreStockUpgrade").innerHTML="Agrandir l'entrepôt de pierre</br> Coût : "+millier(pierreStockUpgradeBoisCost)+" bois, "+millier(pierreStockUpgradePierreCost)+" pierre et "+millier(pierreStockUpgradeOrCost)+ " or";
		}
		if ((localStorage.lang)==("en")){
		if (localStorage.trader!=1){
	document.getElementById("boutonPierreUpgrade").innerHTML="Increase stone production </br> Cost : "+millier(pierreUpgradeCost)+" stone";
	document.getElementById("pierreProduction").innerHTML="Production : "+millier(Math.floor(pierrePlus+0.02*hommeNombre))+"stone/second";
		}
	document.getElementById("boutonPierreStockUpgrade").innerHTML="Increase the stone warehouse capacity</br> Cost : "+millier(pierreStockUpgradeBoisCost)+" wood, "+millier(pierreStockUpgradePierreCost)+" stone and "+millier(pierreStockUpgradeOrCost)+ " gold";
		}
	}
}
function plusOr(){
//	orNombre=parseInt(localStorage.orNombre);
	if (orNombre<orStockNombre){
		if (localStorage.trader!=1){
		orNombre=Math.floor(orNombre+orPlus+0.02*hommeNombre);
		}
	}
	else{
		orNombre=orStockNombre;
	}
		if ((localStorage.lang)==("fr")){
	document.getElementById("or").innerHTML="Or : "+millier(orNombre);
	document.getElementById("orStock").innerHTML="Stock max : "+millier(orStockNombre);
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("or").innerHTML="Gold : "+millier(orNombre);
	document.getElementById("orStock").innerHTML="Max stock : "+millier(orStockNombre);
		}
	if (loc==="index.html"){
		if ((localStorage.lang)==("fr")){
		if (localStorage.trader!=1){
	document.getElementById("boutonOrUpgrade").innerHTML="Améliorer la production d'or </br> Coût : "+millier(orUpgradeCost)+" or";
	document.getElementById("orProduction").innerHTML="Production : "+millier(Math.floor(orPlus+0.02*hommeNombre))+"or/seconde";
		}
	document.getElementById("boutonOrStockUpgrade").innerHTML="Agrandir l'entrepôt d'or</br> Coût : "+millier(orStockUpgradeBoisCost)+" bois, "+millier(orStockUpgradePierreCost)+" pierre et "+millier(orStockUpgradeOrCost)+ " or";
		}
		if ((localStorage.lang)==("en")){
		if (localStorage.trader!=1){
	document.getElementById("boutonOrUpgrade").innerHTML="Increase gold production </br> Cost : "+millier(orUpgradeCost)+" gold";
	document.getElementById("orProduction").innerHTML="Production : "+millier(Math.floor(orPlus+0.02*hommeNombre))+"gold/second";
		}
	document.getElementById("boutonOrStockUpgrade").innerHTML="Increase the gold warehouse capacity</br> Cost : "+millier(orStockUpgradeBoisCost)+" wood, "+millier(orStockUpgradePierreCost)+" stone and "+millier(orStockUpgradeOrCost)+ " gold";
		}
//	localStorage.orNombre=orNombre;
	}
}

function plusBébé() // Naissance d'un bébé, pourcentage p de chance d'arriver pour chaque couple à chaque période
{
	p=0.01;
 	var bébéIncrease=0
 	for (var i=1;i<=Math.min(femmeNombre,hommeNombre);i++){
 		if (bébéIncrease+hommeNombre+femmeNombre+bébéNombre<populationMax){
 			bébéIncrease=bébéIncrease+Math.floor(Math.random()*(1+p))
 		}
 	}
	bébéNombre=bébéNombre+bébéIncrease;
	bébéGrandit(bébéIncrease);
	if (bébéNombre<0){
		bébéNombre=0;
	}
}
function bébéGrandit(n) // On perd n bébés, on gagne n adultes
{
	setTimeout(function(){
	bébéNombre=bébéNombre-n;
	adultePlus(n);
	},10000);

}


function boisUpgrade(){
	if(boisNombre-boisUpgradeCost>=0){
		boisNombre=boisNombre-boisUpgradeCost;
		boisPlus=boisPlus*1.5+1;
		boisUpgradeCost=Math.floor(boisUpgradeCost*1.6);
		if (boisUpgradeCost>=1000){
			boisUpgradeCost=Math.floor(boisUpgradeCost/100)*100;
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de bois pour acheter cette amélioration!")
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough wood to buy this upgrade!")
		}
	}
}
function boisStockUpgrade(){
	if(boisNombre>=boisStockUpgradeBoisCost && pierreNombre>=boisStockUpgradePierreCost && orNombre>=boisStockUpgradeOrCost){
		boisNombre=boisNombre-boisStockUpgradeBoisCost;
		pierreNombre=pierreNombre-boisStockUpgradePierreCost;
		orNombre=orNombre-boisStockUpgradeOrCost;
		boisStockNombre=Math.floor(boisStockNombre*1.5);
		boisStockUpgradeBoisCost=Math.floor(boisStockUpgradeBoisCost*1.6);
		if (boisStockUpgradeBoisCost>=1000){
			boisStockUpgradeBoisCost=Math.floor(boisStockUpgradeBoisCost/100)*100;
		}
		boisStockUpgradePierreCost=Math.floor(boisStockUpgradePierreCost*1.6);
		if (boisStockUpgradePierreCost>=1000){
			boisStockUpgradePierreCost=Math.floor(boisStockUpgradePierreCost/100)*100;
		}
		boisStockUpgradeOrCost=Math.floor(boisStockUpgradeOrCost*1.6);
		if (boisStockUpgradeOrCost>=1000){
			boisStockUpgradeOrCost=Math.floor(boisStockUpgradeOrCost/100)*100;
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Il vous manque des ressources pour agrandir cet entrepôt!")
		}
		if ((localStorage.lang)==("en")){
		alert("You lack resources to upgrade this warehouse!")
		}
	}
}
function pierreUpgrade(){
	if(pierreNombre-pierreUpgradeCost>=0){
		pierreNombre=pierreNombre-pierreUpgradeCost;
		pierrePlus=pierrePlus*1.5+1;
		pierreUpgradeCost=Math.floor(pierreUpgradeCost*1.6);
		if (pierreUpgradeCost>=1000){
			pierreUpgradeCost=Math.floor(pierreUpgradeCost/100)*100;
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de pierre pour acheter cette amélioration!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough stone to buy this upgrade!")
		}
	}
}
function pierreStockUpgrade(){
	if(boisNombre>=pierreStockUpgradeBoisCost && pierreNombre>=pierreStockUpgradePierreCost && orNombre>=pierreStockUpgradeOrCost){
		boisNombre=boisNombre-pierreStockUpgradeBoisCost;
		pierreNombre=pierreNombre-pierreStockUpgradePierreCost;
		orNombre=orNombre-pierreStockUpgradeOrCost;
		pierreStockNombre=Math.floor(pierreStockNombre*1.5);
		pierreStockUpgradeBoisCost=Math.floor(pierreStockUpgradeBoisCost*1.6);
		if (pierreStockUpgradeBoisCost>=1000){
			pierreStockUpgradeBoisCost=Math.floor(pierreStockUpgradeBoisCost/100)*100;
		}
		pierreStockUpgradePierreCost=Math.floor(pierreStockUpgradePierreCost*1.6);
		if (pierreStockUpgradePierreCost>=1000){
			pierreStockUpgradePierreCost=Math.floor(pierreStockUpgradePierreCost/100)*100;
		}
		pierreStockUpgradeOrCost=Math.floor(pierreStockUpgradeOrCost*1.6);
		if (pierreStockUpgradeOrCost>=1000){
			pierreStockUpgradeOrCost=Math.floor(pierreStockUpgradeOrCost/100)*100;
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Il vous manque des ressources pour agrandir cet entrepôt!")
		}
		if ((localStorage.lang)==("en")){
		alert("You lack resources to upgrade this warehouse!")
		}
	}
}
function orUpgrade(){
	if(orNombre-orUpgradeCost>=0){
		orNombre=orNombre-orUpgradeCost;
		orPlus=orPlus*1.5+1;
		orUpgradeCost=Math.floor(orUpgradeCost*1.6);
		if (orUpgradeCost>=1000){
			orUpgradeCost=Math.floor(orUpgradeCost/100)*100;
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez d'or pour acheter cette amélioration!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough gold to buy this upgrade!")
		}
	}
}
function orStockUpgrade(){
	if(boisNombre>=orStockUpgradeBoisCost && pierreNombre>=orStockUpgradePierreCost && orNombre>=orStockUpgradeOrCost){
		boisNombre=boisNombre-orStockUpgradeBoisCost;
		pierreNombre=pierreNombre-orStockUpgradePierreCost;
		orNombre=orNombre-orStockUpgradeOrCost;
		orStockNombre=Math.floor(orStockNombre*1.5);
		orStockUpgradeBoisCost=Math.floor(orStockUpgradeBoisCost*1.6);
		if (orStockUpgradeBoisCost>=1000){
			orStockUpgradeBoisCost=Math.floor(orStockUpgradeBoisCost/100)*100;
		}
		orStockUpgradePierreCost=Math.floor(orStockUpgradePierreCost*1.6);
		if (orStockUpgradePierreCost>=1000){
			orStockUpgradePierreCost=Math.floor(orStockUpgradePierreCost/100)*100;
		}
		orStockUpgradeOrCost=Math.floor(orStockUpgradeOrCost*1.6);
		if (orStockUpgradeOrCost>=1000){
			orStockUpgradeOrCost=Math.floor(orStockUpgradeOrCost/100)*100;
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Il vous manque des ressources pour agrandir cet entrepôt!")
		}
		if ((localStorage.lang)==("en")){
		alert("You lack resources to upgrade this warehouse!")
		}
	}
}



function maisonBoisBuy(){

	if((boisNombre>=(n*maisonBoisCoutBois)) && (pierreNombre>=(n*maisonBoisCoutPierre))){
		boisNombre=boisNombre-n*maisonBoisCoutBois;
		pierreNombre=pierreNombre-n*maisonBoisCoutPierre;
		maisonBoisNombre=maisonBoisNombre+n;
	}
	else if (boisNombre<(n*maisonBoisCoutBois)){
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de bois pour acheter cette/ces maison(s)!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough wood to buy this/these house(s)");
		}
	}
	else if (pierreNombre<(n*maisonBoisCoutPierre)){
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de pierre pour acheter cette/ces maison(s)!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough stone to buy this/these house(s)");
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Erreur!");
		}
		if ((localStorage.lang)==("en")){
		alert("Error!");
		}
	}
}
function maisonPierreBuy(){
	if((boisNombre>=(n*maisonPierreCoutBois)) && (pierreNombre>=(n*maisonPierreCoutPierre))){
		boisNombre=boisNombre-n*maisonPierreCoutBois;
		pierreNombre=pierreNombre-n*maisonPierreCoutPierre;
		maisonPierreNombre=maisonPierreNombre+n;
	}
	else if (boisNombre<(n*maisonPierreCoutBois)){
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de bois pour acheter cette/ces maison(s)!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough wood to buy this/these house(s)");
	}
	else if (pierreNombre<n*maisonPierreCoutPierre){
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de pierre pour acheter cette/ces maison(s)!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough stone to buy this/these house(s)");
		}
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Erreur!");
		}
		if ((localStorage.lang)==("en")){
		alert("Error!");
		}
	}
}
}
function chateauBuy(){
	if((boisNombre>=(n*chateauCoutBois)) && (pierreNombre>=(n*chateauCoutPierre)) && (orNombre>=(n*chateauCoutOr))){
		boisNombre=boisNombre-n*chateauCoutBois;
		pierreNombre=pierreNombre-n*chateauCoutPierre;
		orNombre=orNombre-n*chateauCoutOr;
		chateauNombre=chateauNombre+n;
	}
	else if (boisNombre<(n*chateauCoutBois)){
		if ((localStorage.lang)==("fr")){
		alert("Vous n'avez pas assez de bois pour acheter cette/ces château(x)!");
		}
		if ((localStorage.lang)==("en")){
		alert("You don't have enough wood to buy this/these castle(s)");
		}
	}
	else if (pierreNombre<(n*chateauCoutPierre)){
		alert("Vous n'avez pas assez de pierre pour acheter ce(s) château(x)!");
	}
	else if (orNombre<(n*chateauCoutOr)){
		alert("You don't have enough stone to buy this/these castle(s)");
	}
	else{
		if ((localStorage.lang)==("fr")){
		alert("Erreur!");
		}
		if ((localStorage.lang)==("en")){
		alert("Error!");
		}
	}
}

function maison(){
	if (loc==="index.html"){
	if (n==1){
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire un château</br> Coût : "+millier(chateauCoutBois)+" bois, "+millier(chateauCoutPierre)+" pierre et "+millier(chateauCoutOr)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire une maison en pierre</br> Coût : "+millier(maisonPierreCoutBois)+" bois et "+millier(maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire une maison en bois</br> Coût : "+millier(maisonBoisCoutBois)+" bois et "+millier(maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build a castle</br> Cost : "+millier(chateauCoutBois)+" wood, "+millier(chateauCoutPierre)+" stone and "+millier(chateauCoutOr)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build a stone house</br> Cost : "+millier(maisonPierreCoutBois)+" wood and "+millier(maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build a wooden house</br> Cost : "+millier(maisonBoisCoutBois)+" wood and "+millier(maisonBoisCoutPierre)+" stone";
		}
	}
	if (n==10){
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire dix châteaux</br> Coût : "+millier(chateauCoutBois*10)+" bois, "+millier(chateauCoutPierre*10)+" pierre et "+millier(chateauCoutOr*10)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire dix maisons en pierre</br> Coût : "+millier(10*maisonPierreCoutBois)+" bois et "+millier(10*maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire dix maisons en bois</br> Coût : "+millier(10*maisonBoisCoutBois)+" bois et "+millier(10*maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build ten castles</br> Cost : "+millier(chateauCoutBois*10)+" wood, "+millier(chateauCoutPierre*10)+" stone and "+millier(chateauCoutOr*10)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build ten stone houses</br> Cost : "+millier(10*maisonPierreCoutBois)+" wood and "+millier(10*maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build ten wooden houses</br> Cost : "+millier(10*maisonBoisCoutBois)+" wood and "+millier(10*maisonBoisCoutPierre)+" stone";
		}
	}
	if (n==100){
		if ((localStorage.lang)==("fr")){
	document.getElementById("boutonChateauBuy").innerHTML="Construire cent châteaux</br> Coût : "+millier(chateauCoutBois*100)+" bois, "+millier(chateauCoutPierre*100)+" pierre et "+millier(chateauCoutOr*100)+" or";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire cent maisons en pierre</br> Coût : "+millier(100*maisonPierreCoutBois)+" bois et "+millier(100*maisonPierreCoutPierre)+" pierre";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire cent maisons en bois</br> Coût : "+millier(100*maisonBoisCoutBois)+" bois et "+millier(100*maisonBoisCoutPierre)+" pierre";
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("boutonChateauBuy").innerHTML="Build a hundred castles</br> Cost : "+millier(chateauCoutBois*100)+" wood, "+millier(chateauCoutPierre*100)+" stone and "+millier(chateauCoutOr*100)+" gold";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Build a hundred stone houses</br> Cost : "+millier(100*maisonPierreCoutBois)+" wood and "+millier(100*maisonPierreCoutPierre)+" stone";
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Build a hundred wooden houses</br> Cost : "+millier(100*maisonBoisCoutBois)+" wood and "+millier(100*maisonBoisCoutPierre)+" stone";
		}
	}
		if ((localStorage.lang)==("fr")){
	document.getElementById("maisonBois").innerHTML="Maisons en bois : "+millier(maisonBoisNombre)+"</br>Peut accueillir "+millier(maisonBoisCapacite)+" personnes";
	document.getElementById("maisonPierre").innerHTML="Maisons en pierre : "+millier(maisonPierreNombre)+"</br>Peut accueillir "+millier(maisonPierreCapacite)+" personnes";
	document.getElementById("chateau").innerHTML="Châteaux : "+millier(chateauNombre)+"</br>Peut accueillir "+millier(chateauCapacite)+" personnes";
	document.getElementById("homme").innerHTML="Hommes : "+millier(hommeNombre);
	document.getElementById("femme").innerHTML="Femmes : "+millier(femmeNombre);
	document.getElementById("bébé").innerHTML="Bébés : "+millier(Math.floor(bébéNombre));
		}
		if ((localStorage.lang)==("en")){
	document.getElementById("maisonBois").innerHTML="Wooden houses : "+millier(maisonBoisNombre)+"</br>Can hold up to "+millier(maisonBoisCapacite)+" people";
	document.getElementById("maisonPierre").innerHTML="Stone houses : "+millier(maisonPierreNombre)+"</br>Can hold up to "+millier(maisonPierreCapacite)+" people";
	document.getElementById("chateau").innerHTML="Castles : "+millier(chateauNombre)+"</br>Can hold up to "+millier(chateauCapacite)+" people";
	document.getElementById("homme").innerHTML="Men : "+millier(hommeNombre);
	document.getElementById("femme").innerHTML="Women : "+millier(femmeNombre);
	document.getElementById("bébé").innerHTML="Babies : "+millier(Math.floor(bébéNombre));
		}
	populationMax=maisonBoisNombre*maisonBoisCapacite+maisonPierreNombre*maisonPierreCapacite+chateauNombre*chateauCapacite;
	}
}
function adultePlus(populationIncrease){ // Ajout de populationIncrease adultes, aléatoirement distribués entre hommes et femmes
	var hommePlus=Math.floor((Math.random() * (populationIncrease+1)));
	hommeNombre=hommeNombre+hommePlus;
	femmeNombre=femmeNombre+populationIncrease-hommePlus;
}

function hidden(){ // Découverte progressive des ressources et bâtiments

	if (pierreNombre>=1 || (localStorage.trader==1)){
		document.getElementById("pierreImage").style.visibility="visible";
		document.getElementById("pierre").style.visibility="visible";
		document.getElementById("pierreStock").style.visibility="visible";
		if (loc==="stockExchange.html"){
		document.getElementById("pierreConteneur").style.visibility="visible";
		}
		if (loc==="index.html"){
			if (localStorage.trader!=1){
			document.getElementById("boutonPierreUpgrade").style.visibility="visible";
			}
			document.getElementById("boutonPierreStockUpgrade").style.visibility="visible";
		}
	}
	else{
		document.getElementById("pierreImage").style.visibility="hidden";
		document.getElementById("pierre").style.visibility="hidden";
		document.getElementById("pierreStock").style.visibility="hidden";
		if (loc==="index.html"){
		document.getElementById("boutonPierreUpgrade").style.visibility="hidden";
		document.getElementById("boutonPierreStockUpgrade").style.visibility="hidden";
		}
	}
	if (maisonPierreNombre>=1){
		if (loc==="index.html"){
		document.getElementById("maisonPierreImage").style.visibility="visible";
		document.getElementById("maisonPierre").style.visibility="visible";
		document.getElementById("boutonMaisonPierreBuy").style.visibility="visible";
		}
	}
	else{
		if (loc==="index.html"){
		document.getElementById("maisonPierreImage").style.visibility="hidden";
		document.getElementById("maisonPierre").style.visibility="hidden";
		document.getElementById("boutonMaisonPierreBuy").style.visibility="hidden";
		}
	}
	if (orNombre>=1 || (localStorage.trader==1)){
		document.getElementById("orImage").style.visibility="visible";
		document.getElementById("or").style.visibility="visible";
		document.getElementById("orStock").style.visibility="visible";
		if (loc==="index.html"){
		if (localStorage.trader!=1){
		document.getElementById("boutonOrUpgrade").style.visibility="visible";
		}
		document.getElementById("boutonOrStockUpgrade").style.visibility="visible";
		}
	}
	else{
		document.getElementById("orImage").style.visibility="hidden";
		document.getElementById("or").style.visibility="hidden";
		document.getElementById("orStock").style.visibility="hidden";
		if (loc==="index.html"){
		document.getElementById("boutonOrUpgrade").style.visibility="hidden";
		document.getElementById("boutonOrStockUpgrade").style.visibility="hidden";
		}
	}
	if (loc==="index.html"){
	if (chateauNombre>=1){
		document.getElementById("chateauImage").style.visibility="visible";
		document.getElementById("chateau").style.visibility="visible";
		document.getElementById("boutonChateauBuy").style.visibility="visible";
		
	}
	if (chateauNombre==0){
		
		document.getElementById("chateauImage").style.visibility="hidden";
		document.getElementById("chateau").style.visibility="hidden";
		document.getElementById("boutonChateauBuy").style.visibility="hidden";
		
	}
	if(boisNombre>=chateauCoutBois && pierreNombre>=chateauCoutPierre && orNombre>=chateauCoutOr){
		document.getElementById("boutonChateauBuy").style.visibility="visible";
	}
	else{
		document.getElementById("boutonChateauBuy").style.visibility="hidden";
	}
	if(boisNombre>=maisonPierreCoutBois && pierreNombre>=maisonPierreCoutPierre){
		document.getElementById("boutonMaisonPierreBuy").style.visibility="visible";
	}
	else{
		document.getElementById("boutonMaisonPierreBuy").style.visibility="hidden";
	}
}
}

function sauvegarder(){ // Sauvegarde des variables
//if(localStorage.length>0) {
//	if ((localStorage.lang)==("fr")){
//	var a =prompt("Il existe déjà une sauvegarde sur ce navigateur. Souhaitez-vous l'écraser? Si oui, écrivez 'oui'");
//	}
//	if ((localStorage.lang)==("en")){
//	var a =prompt("There is already a save on this browser. Would you like to replace it? If yes, write 'yes'");
//	}
//	if ((a.toLowerCase()==="oui")||(a.toLowerCase()==="yes")){
localStorage.boisNombre=boisNombre
localStorage.orNombre=orNombre;
localStorage.pierreNombre=pierreNombre;
localStorage.maisonBoisNombre=maisonBoisNombre;
localStorage.maisonPierreNombre=maisonPierreNombre;
localStorage.chateauNombre=chateauNombre;
localStorage.hommeNombre=hommeNombre;
localStorage.femmeNombre=femmeNombre;
localStorage.bébéNombre=bébéNombre;


localStorage.boisPlus=boisPlus;
localStorage.orPlus=orPlus;
localStorage.pierrePlus=pierrePlus;

localStorage.boisUpgradeCost=boisUpgradeCost;
localStorage.orUpgradeCost=orUpgradeCost;
localStorage.pierreUpgradeCost=pierreUpgradeCost;

localStorage.maisonBoisCoutBois=maisonBoisCoutBois;
localStorage.maisonBoisCoutPierre=maisonBoisCoutPierre;
localStorage.maisonBoisCapacite=maisonBoisCapacite;
localStorage.maisonPierreCoutBois=maisonPierreCoutBois;
localStorage.maisonPierreCoutPierre=maisonPierreCoutPierre;
localStorage.maisonPierreCapacite=maisonPierreCapacite;
localStorage.chateauCoutBois=chateauCoutBois;
localStorage.chateauCoutPierre=chateauCoutPierre;
localStorage.chateauCoutOr=chateauCoutOr;
localStorage.chateauCapacite=chateauCapacite;


localStorage.boisStockNombre=boisStockNombre;
localStorage.pierreStockNombre=pierreStockNombre;
localStorage.orStockNombre=orStockNombre;

localStorage.boisStockUpgradeBoisCost=boisStockUpgradeBoisCost;
localStorage.boisStockUpgradePierreCost=boisStockUpgradePierreCost;
localStorage.boisStockUpgradeOrCost=boisStockUpgradeOrCost;
localStorage.pierreStockUpgradeBoisCost=pierreStockUpgradeBoisCost;
localStorage.pierreStockUpgradePierreCost=pierreStockUpgradePierreCost;
localStorage.pierreStockUpgradeOrCost=pierreStockUpgradeOrCost;
localStorage.orStockUpgradeBoisCost=orStockUpgradeBoisCost;
localStorage.orStockUpgradePierreCost=orStockUpgradePierreCost;
localStorage.orStockUpgradeOrCost=orStockUpgradeOrCost;

localStorage.prixBois=prixBois;
localStorage.prixPierre=prixPierre;

//}
//}

}

function charger(){ // Chargement des variables
//	if(localStorage.length>1) {
//		if ((localStorage.lang)==("fr")){
//		var a =prompt("Voulez-vous vraiment abandonner la partie actuelle et charger la sauvegarde? Si oui, écrivez 'oui'");
//		}
//		if ((localStorage.lang)==("en")){
//		var a =prompt("Are you sure you want to leave the current game and load your save? If yes, write 'yes'");
//		}
//		if ((a.toLowerCase()==="oui")||(a.toLowerCase()==="yes")){
boisNombre=parseInt(localStorage.boisNombre);
orNombre=parseInt(localStorage.orNombre);
pierreNombre=parseInt(localStorage.pierreNombre);
maisonBoisNombre=parseInt(localStorage.maisonBoisNombre);
maisonPierreNombre=parseInt(localStorage.maisonPierreNombre);
chateauNombre=parseInt(localStorage.chateauNombre);
hommeNombre=parseInt(localStorage.hommeNombre);
femmeNombre=parseInt(localStorage.femmeNombre);
bébéNombre=parseInt(localStorage.bébéNombre);


boisPlus=parseInt(localStorage.boisPlus*10)/10;
orPlus=parseInt(localStorage.orPlus*10)/10;
pierrePlus=parseInt(localStorage.pierrePlus*10)/10;

boisUpgradeCost=parseInt(localStorage.boisUpgradeCost);
orUpgradeCost=parseInt(localStorage.orUpgradeCost);
pierreUpgradeCost=parseInt(localStorage.pierreUpgradeCost);

maisonBoisCoutBois=parseInt(localStorage.maisonBoisCoutBois);
maisonBoisCoutPierre=parseInt(localStorage.maisonBoisCoutPierre);
maisonBoisCapacite=parseInt(localStorage.maisonBoisCapacite);
maisonPierreCoutBois=parseInt(localStorage.maisonPierreCoutBois);
maisonPierreCoutPierre=parseInt(localStorage.maisonPierreCoutPierre);
maisonPierreCapacite=parseInt(localStorage.maisonPierreCapacite);
chateauCoutBois=parseInt(localStorage.chateauCoutBois);
chateauCoutPierre=parseInt(localStorage.chateauCoutPierre);
chateauCoutOr=parseInt(localStorage.chateauCoutOr);
chateauCapacite=parseInt(localStorage.chateauCapacite);


boisStockNombre=parseInt(localStorage.boisStockNombre);
pierreStockNombre=parseInt(localStorage.pierreStockNombre);
orStockNombre=parseInt(localStorage.orStockNombre);

boisStockUpgradeBoisCost=parseInt(localStorage.boisStockUpgradeBoisCost);
boisStockUpgradePierreCost=parseInt(localStorage.boisStockUpgradePierreCost);
boisStockUpgradeOrCost=parseInt(localStorage.boisStockUpgradeOrCost);
pierreStockUpgradeBoisCost=parseInt(localStorage.pierreStockUpgradeBoisCost);
pierreStockUpgradePierreCost=parseInt(localStorage.pierreStockUpgradePierreCost);
pierreStockUpgradeOrCost=parseInt(localStorage.pierreStockUpgradeOrCost);
orStockUpgradeBoisCost=parseInt(localStorage.orStockUpgradeBoisCost);
orStockUpgradePierreCost=parseInt(localStorage.orStockUpgradePierreCost);
orStockUpgradeOrCost=parseInt(localStorage.orStockUpgradeOrCost);

prixBois=parseInt(localStorage.prixBois*100)/100;
prixPierre=parseInt(localStorage.prixPierre*100)/100;

//}
}
//else{
//	if ((localStorage.lang)==("fr")){
//	alert("Aucune partie n'a été sauvegardée!")
//	}
//	if ((localStorage.lang)==("en")){
//	alert("There is no saved game!")
//	}
//}
function supprimer(){ // Effacement des variables en mémoire
	if ((localStorage.lang)==("fr")){
	var a =prompt("Voulez-vous vraiment supprimer la sauvegarde? Si oui, écrivez 'oui'");
	}
	if ((localStorage.lang)==("en")){
	var a =prompt("Are you sure you want to erase you save? If yes, write 'yes'");
	}
	if ((a.toLowerCase()==="oui")||(a.toLowerCase()==="yes")){
		localStorage.clear();
	}
}


// window.location.replace('stockExchange.html');

function evolutionPrixPierre(){ 
if (localStorage.e==0){
	localStorage.s = 1*Math.random()-0.5-(prixPierre-1); // s = sens ( 1 = augmentation, -1=baisse)
	if (localStorage.s<0){
		localStorage.s=-1;
	}
	else{
		localStorage.s=1;
	}
	localStorage.e = Math.floor((Math.random()*11)+5); // e = durée de l'augmentation/la baisse
}

if (localStorage.e!=0){
	localStorage.e=localStorage.e-1;
		prixPierre=Math.round((prixPierre+localStorage.s*0.0100001)*100)/100;

//	console.log("s = "+localStorage.s);
//	console.log("e = "+localStorage.e);
//	console.log("prixPierre = "+prixPierre);
}
if (loc==="stockExchange.html"){
	if ((localStorage.lang)==("fr")){
	document.getElementById("acheterPierre").innerHTML="Acheter pierre</br>Prix : "+prixPierre;
	document.getElementById("vendrePierre").innerHTML="Vendre pierre</br>Prix : "+prixPierre;
	}
	if ((localStorage.lang)==("en")){
	document.getElementById("acheterPierre").innerHTML="Buy stone</br>Price : "+prixPierre;
	document.getElementById("vendrePierre").innerHTML="Sell stone</br>Price : "+prixPierre;
	}
}
}


function evolutionPrixBois(){ 
if (localStorage.ebois==0){
	localStorage.sbois = 0.5*Math.random()-0.25-(prixBois-0.5); // s = sens ( 1 = augmentation, -1=baisse)
	if (localStorage.sbois<0){
		localStorage.sbois=-1;
	}
	else{
		localStorage.sbois=1;
	}
	localStorage.ebois = Math.floor((Math.random()*8)+4); // e = durée de l'augmentation/la baisse
}

if (localStorage.ebois!=0){
	localStorage.ebois=localStorage.ebois-1;
	prixBois=Math.round((prixBois+localStorage.sbois*0.0100001)*100)/100;
//	console.log("s = "+localStorage.sbois);
//	console.log("e = "+localStorage.ebois);
//	console.log("prixBois = "+prixBois);
}
if (loc==="stockExchange.html"){
	if ((localStorage.lang)==("fr")){
	document.getElementById("vendreBois").innerHTML="Vendre bois</br>Prix : "+prixBois;
	document.getElementById("acheterBois").innerHTML="Acheter bois</br>Prix : "+prixBois;
	}
	if ((localStorage.lang)==("en")){
	document.getElementById("vendreBois").innerHTML="Sell wood</br>Price : "+prixBois;
	document.getElementById("acheterBois").innerHTML="Buy wood</br>Price : "+prixBois;
	}
}
}

function acheterBois(){
	achat=(orNombre-(orNombre%prixBois))/prixBois;
	if ((achat+boisNombre)>boisStockNombre){
		achat=boisStockNombre-boisNombre;
	}
	console.log("achat = "+achat+" bois");
	boisNombre=boisNombre+achat;
	orNombre=Math.floor(orNombre-achat*prixBois);
}

function vendreBois(){
	gain=prixBois*boisNombre;
	if ((gain+orNombre)>orStockNombre){
		gain=orStockNombre-orNombre;
	}
	orNombre=Math.floor(orNombre+gain);
	boisNombre=boisNombre-gain/prixBois;
//	console.log("vente = "+gain/prixBois+" bois");
}

function acheterPierre(){
	achat=(orNombre-(orNombre%prixPierre))/prixPierre;
	if ((achat+pierreNombre)>pierreStockNombre){
		achat=pierreStockNombre-pierreNombre;
	}
	console.log("achat = "+achat+" pierre");
	pierreNombre=pierreNombre+achat;
	orNombre=Math.floor(orNombre-achat*prixPierre);
}

function vendrePierre(){
	gain=prixPierre*pierreNombre;
	if ((gain+orNombre)>orStockNombre){
		gain=orStockNombre-orNombre;
	}
	orNombre=Math.floor(orNombre+gain);
	pierreNombre=pierreNombre-gain/prixPierre;
//	console.log("vente = "+gain/prixPierre+" pierre");
}

function millier(x){
	if (x>=1000){
		var y = Math.floor(x/1000);
		var z = Math.floor((x%1000)/100);
		return (y+","+z+"K");
	}
//	if (x>=100000){
//		var y = Math.floor(x/1000);
//		return (y+"K");
//	}
	if (x<1000){
		return(x);
	}
}

function badge(){
	if ((boisNombre>=5000) && (localStorage.badgeBoisNombre5000!=1)){
		localStorage.badgeBoisNombre5000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Bûcheron!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Woodcutter!</div>";
		}
	}
	if (pierreNombre>=5000 && (localStorage.badgePierreNombre5000!=1)){
		localStorage.badgePierreNombre5000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Mineur!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Miner!</div>";
		}
	}
	if (orNombre>=5000 && (localStorage.badgeOrNombre5000!=1)){
		localStorage.badgeOrNombre5000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Chercheur d'or!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Gold digger!</div>";
		}
	}
	if ((hommeNombre+femmeNombre+bébéNombre)>=1000 && (localStorage.badgePopulation1000!=1)){
		localStorage.badgePopulation1000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Village!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Village!</div>";
		}
	}
	if ((hommeNombre+femmeNombre+bébéNombre)>=10000 && (localStorage.badgePopulation10000!=1)){
		localStorage.badgePopulation10000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Ville!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Town!</div>";
		}
	}
	if ((hommeNombre+femmeNombre+bébéNombre)>=100000 && (localStorage.badgePopulation100000!=1)){
		localStorage.badgePopulation100000=1;
		console.log("badge!");
		localStorage.boutonTrader=1; // Récompense : on débloque le mode trader
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Métropole!</div>";
		alert("Félicitations! Vous avez débloqué le mode 'trader'!");
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Metropolis!</div>";
		alert("Congratulations! You unlocked the trader mode!");
		}
		if (localStorage.boutonTrader==1){
		document.getElementById("boutonTrader").style.visibility="visible";
		}
	}
	if ((localStorage.trader==1) && ((hommeNombre+femmeNombre+bébéNombre)>=1000) && (localStorage.badgeTraderPopulation1000!=1)){
		localStorage.badgeTraderPopulation1000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Village de trader!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement :Trader village!</div>";
		}
	}
	if ((localStorage.trader==1) && ((hommeNombre+femmeNombre+bébéNombre)>=10000) && (localStorage.badgeTraderPopulation10000!=1)) {
		localStorage.badgeTraderPopulation10000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Ville de trader!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Trader town!</div>";
		}
	}
	if((localStorage.trader==1) && ((hommeNombre+femmeNombre+bébéNombre)>=100000) && (localStorage.badgeTraderPopulation100000!=1)) {
		localStorage.badgeTraderPopulation100000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Métropole de trader!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Trader metropolis!</div>";
		}
	}
	if ((localStorage.clicNombre>=1) && (localStorage.badgeClicNombre1!=1)){
		localStorage.badgeClicNombre1=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Et si je cliquais là?</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : What if I click there?</div>";
		}
	}
	if ((localStorage.clicNombre>=100) && (localStorage.badgeClicNombre100!=1)){
		localStorage.badgeClicNombre100=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Impatient!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Impatient!</div>";
		}
	}
		if ((localStorage.clicNombre>=1000) && (localStorage.badgeClicNombre1000!=1)){
		localStorage.badgeClicNombre1000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : J'en veux encore!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : I want moaaar!</div>";
		}
	}
		if ((localStorage.clicNombre>=10000) && (localStorage.badgeClicNombre10000!=1)){
		localStorage.badgeClicNombre10000=1;
		console.log("badge!");
		document.getElementById("badgeConteneur").innerHTML="<img class='badgeImage' src='badge.png'></img>";
		if ((localStorage.lang)==("fr")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Badge : Clic clic clic!</div>";
		}
		if ((localStorage.lang)==("en")){
		document.getElementById("badgeConteneur").innerHTML=document.getElementById("badgeConteneur").innerHTML+"<div class='badgeTexte'>Achievement : Click click click!</div>";
		}
	}

}

function clearBadge(){
	document.getElementById("badgeConteneur").innerHTML=""
}

function tradermode(){
	var a="non";
	localStorage.traderReset=1;
	if ((localStorage.lang)==("fr")){
	var a =prompt("Voulez-vous vraiment recommencer à zéro en mode trader? Si oui, écrivez 'oui'. Vous ne perdrez pas vos badges.");
	}
	if ((localStorage.lang)==("en")){
	var a =prompt("Are you sure you want to restart in trader mode? If yes, write 'yes'. This won't reset your achievements.");
	}
	if ((localStorage.lang)==("undefined")){
	var a="oui";
	}
if ((a.toLowerCase()==="oui")||(a.toLowerCase()==="yes")){
	reset();
	localStorage.trader=1;
	if ((localStorage.lang)==("en")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Trader mode activated</div>";
	}
	if ((localStorage.lang)==("fr")){
	document.getElementById("boisProduction").innerHTML="<div class='trader'>Mode trader activé</div>";
	}
	document.getElementById("pierreProduction").innerHTML=""
	document.getElementById("orProduction").innerHTML=""
	document.getElementById("boutonPierreUpgrade").style.visibility="hidden";
	document.getElementById("boutonBoisUpgrade").style.visibility="hidden";
	document.getElementById("boutonOrUpgrade").style.visibility="hidden";
	boisNombre=100;
	pierreNombre=100;
	orNombre=50;
}
localStorage.traderReset=0;
}

function badgeReset(){ // reset des badges, pour le développement
	localStorage.badgeTraderPopulation100000=0;
	localStorage.badgeTraderPopulation10000=0;
	localStorage.badgeTraderPopulation1000=0;
	localStorage.badgePopulation100000=0;
	localStorage.badgePopulation10000=0;
	localStorage.badgePopulation1000=0;
	localStorage.badgeOrNombre5000=0;
	localStorage.badgePierreNombre5000=0;
	localStorage.badgeBoisNombre5000=0;
	localStorage.boutonTrader=0;
	localStorage.badgeClicNombre1=0;
	localStorage.badgeClicNombre100=0;
	localStorage.badgeClicNombre1000=0;
	localStorage.badgeClicNombre10000=0;
	return("Badges remis à zéro!")
}


				if (loc=="achievements.html"){
					// Première étape : les images
					if (localStorage.badgePopulation1000==1){
						document.getElementById("imageBadgeVillage").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgePopulation1000!=1){
						document.getElementById("imageBadgeVillage").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgePopulation10000==1){
						document.getElementById("imageBadgeVille").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgePopulation10000!=1){
						document.getElementById("imageBadgeVille").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgePopulation100000==1){
						document.getElementById("imageBadgeMetropole").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgePopulation100000!=1){
						document.getElementById("imageBadgeMetropole").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeTraderPopulation1000==1){
						document.getElementById("imageBadgeVillageTrader").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeTraderPopulation1000!=1){
						document.getElementById("imageBadgeVillageTrader").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeTraderPopulation10000==1){
						document.getElementById("imageBadgeVilleTrader").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeTraderPopulation10000!=1){
						document.getElementById("imageBadgeVilleTrader").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeTraderPopulation100000==1){
						document.getElementById("imageBadgeMetropoleTrader").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeTraderPopulation100000!=1){
						document.getElementById("imageBadgeMetropoleTrader").innerHTML="<img src='badgePetitNb.png'></img>"
					}

					if (localStorage.badgeOrNombre5000==1){
						document.getElementById("imageBadgeOrNombre5000").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeOrNombre5000!=1){
						document.getElementById("imageBadgeOrNombre5000").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgePierreNombre5000==1){
						document.getElementById("imageBadgePierreNombre5000").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgePierreNombre5000!=1){
						document.getElementById("imageBadgePierreNombre5000").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeBoisNombre5000==1){
						document.getElementById("imageBadgeBoisNombre5000").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeBoisNombre5000!=1){
						document.getElementById("imageBadgeBoisNombre5000").innerHTML="<img src='badgePetitNb.png'></img>"
					}

					if (localStorage.badgeClicNombre1==1){
						document.getElementById("imageBadgeClicNombre1").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeClicNombre1!=1){
						document.getElementById("imageBadgeClicNombre1").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeClicNombre100==1){
						document.getElementById("imageBadgeClicNombre100").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeClicNombre100!=1){
						document.getElementById("imageBadgeClicNombre100").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeClicNombre1000==1){
						document.getElementById("imageBadgeClicNombre1000").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeClicNombre1000!=1){
						document.getElementById("imageBadgeClicNombre1000").innerHTML="<img src='badgePetitNb.png'></img>"
					}
					if (localStorage.badgeClicNombre10000==1){
						document.getElementById("imageBadgeClicNombre10000").innerHTML="<img src='badgePetit.png'></img>"
					}
					if (localStorage.badgeClicNombre10000!=1){
						document.getElementById("imageBadgeClicNombre10000").innerHTML="<img src='badgePetitNb.png'></img>"
					}

					// Deuxième étape : On affiche les badges cachés le cas échéant
					if (localStorage.boutonTrader==1){
						var elements = document.querySelectorAll('.hidden');
						for(var i=0; i<elements.length; i++){
    					elements[i].style.visibility="visible"
						}
					}

					// Troisième étape : le texte (FR/EN)
					if (localStorage.lang=="en"){
						langueEN();
						document.getElementById("alertePause").innerHTML="- Game on pause -";
					}
					if (localStorage.lang=="fr"){
						langueFR();
						document.getElementById("alertePause").innerHTML="- Jeu en pause -";
					}


				}

function langueEN(){
	localStorage.lang="en";
	if ((loc==="index.html") || (loc==="stockExchange.html")){
	clearBadge();
//	document.getElementById("boutonSauvegarder").innerHTML="Save game";
//	document.getElementById("boutonCharger").innerHTML="Load game";
	document.getElementById("boutonReset").innerHTML="Restart from scratch";
	document.getElementById("boutonTrader").innerHTML="Trader mode";
//	document.getElementById("boutonSupprimer").innerHTML="Erase the saved game";
	}
	if (loc==="index.html"){
	document.getElementById("stockExchange").innerHTML="Stock exchange";
	}
					if (loc==="achievements.html"){
						document.getElementById("texteBadgeVillage").innerHTML="Village";
						document.getElementById("texteBadgeVille").innerHTML="Town";
						document.getElementById("texteBadgeMetropole").innerHTML="Metropolis";
						document.getElementById("texteBadgeVillageTrader").innerHTML="Trader village";
						document.getElementById("texteBadgeVilleTrader").innerHTML="Trader town";
						document.getElementById("texteBadgeMetropoleTrader").innerHTML="Trader metropolis";
						document.getElementById("texteBadgeOrNombre5000").innerHTML="Gold digger";
						document.getElementById("texteBadgePierreNombre5000").innerHTML="Miner";
						document.getElementById("texteBadgeBoisNombre5000").innerHTML="Woodcutter";
						document.getElementById("texteBadgeClicNombre1").innerHTML="What if I click there?";
						document.getElementById("texteBadgeClicNombre100").innerHTML="Impatient";
						document.getElementById("texteBadgeClicNombre1000").innerHTML="I want moaaar";
						document.getElementById("texteBadgeClicNombre10000").innerHTML="Click click click";
						document.getElementById("boutonReset").innerHTML="Restart from scratch";
					}
}
function langueFR(){
	localStorage.lang="fr";
	if ((loc==="index.html") || (loc==="stockExchange.html")){
	clearBadge();
//	document.getElementById("boutonSauvegarder").innerHTML="Sauvegarder";
//	document.getElementById("boutonCharger").innerHTML="Charger";
	document.getElementById("boutonReset").innerHTML="Recommencer à zéro";
	document.getElementById("boutonTrader").innerHTML="Mode trader";
//	document.getElementById("boutonSupprimer").innerHTML="Supprimer la sauvegarde";
	}
	if (loc==="index.html"){
	document.getElementById("stockExchange").innerHTML="Bourse";
	}
					if (loc==="achievements.html"){
						document.getElementById("texteBadgeVillage").innerHTML="Village";
						document.getElementById("texteBadgeVille").innerHTML="Ville";
						document.getElementById("texteBadgeMetropole").innerHTML="Métropole";
						document.getElementById("texteBadgeVillageTrader").innerHTML="Village de trader";
						document.getElementById("texteBadgeVilleTrader").innerHTML="Ville de trader";
						document.getElementById("texteBadgeMetropoleTrader").innerHTML="Métropole de trader";
						document.getElementById("texteBadgeOrNombre5000").innerHTML="Chercheur d'or";
						document.getElementById("texteBadgePierreNombre5000").innerHTML="Tailleur de pierre";
						document.getElementById("texteBadgeBoisNombre5000").innerHTML="Bûcheron";
						document.getElementById("texteBadgeClicNombre1").innerHTML="Et si je cliquais là?";
						document.getElementById("texteBadgeClicNombre100").innerHTML="Impatient";
						document.getElementById("texteBadgeClicNombre1000").innerHTML="J'en veux encore";
						document.getElementById("texteBadgeClicNombre10000").innerHTML="Clic clic clic";
						document.getElementById("boutonReset").innerHTML="Recommencer à zéro";
					}
}

function kong(){
	var stats = hommeNombre+femmeNombre+bébéNombre;
	if(stats!= NaN){
	parent.kongregate.stats.submit("Population",stats);
	console.log("Envoi des stats");
}
}
if (localStorage.trader==1){
	setInterval(sauvegarder,200);
}

function reset(){ // Remise à zéro des variables actuelles
var a="non";
	if (((localStorage.lang)==("fr")) && (localStorage.traderReset!=1)){
	var a =prompt("Voulez-vous vraiment recommencer à zéro? Si oui, écrivez 'oui'. Vous ne perdrez pas vos badges.");
	}
	if ((localStorage.lang=="en") && (localStorage.traderReset!=1)){
	var a =prompt("Are you sure you want to reset the game? If yes, write 'yes'. This won't reset your achievements.");
	}
	if (((localStorage.lang)==("undefined")) || (localStorage.traderReset==1)){
	var a="non";
	alert("Error! Please click on one of the language flags and try again.")
	}
if ((a.toLowerCase()==="oui")||(a.toLowerCase()==="yes")){
 boisNombre=0;
 orNombre=0;
 pierreNombre=0;
 maisonBoisNombre=1;
 maisonPierreNombre=0;
 chateauNombre=0;
 hommeNombre=1;
 femmeNombre=1;
 bébéNombre=0;


 boisPlus=1.3;
 orPlus=0.2;
 pierrePlus=0.9;

 boisUpgradeCost=100;
 orUpgradeCost=100;
 pierreUpgradeCost=100;

 maisonBoisCoutBois=150;
 maisonBoisCoutPierre=0;
 maisonBoisCapacite=4;
 maisonPierreCoutBois=25;
 maisonPierreCoutPierre=75;
 maisonPierreCapacite=6;
 chateauCoutBois=100;
 chateauCoutPierre=1000;
 chateauCoutOr=500;
 chateauCapacite=50;

 populationMax=maisonBoisNombre*maisonBoisCapacite+maisonPierreNombre*maisonPierreCapacite+chateauNombre*chateauCapacite;

 boisStockNombre=1000;
 pierreStockNombre=750;
 orStockNombre=250;

 boisStockUpgradeBoisCost=100;
 boisStockUpgradePierreCost=50;
 boisStockUpgradeOrCost=0;
 pierreStockUpgradeBoisCost=100;
 pierreStockUpgradePierreCost=50;
 pierreStockUpgradeOrCost=0;
 orStockUpgradeBoisCost=100;
 orStockUpgradePierreCost=50;
 orStockUpgradeOrCost=0;

 prixBois = 0.5; // à ajouter à la sauvegarde
 prixPierre = 1; // à ajouter à la sauvegarde
 localStorage.e = 0;
 localStorage.stockVisit=0;
 localStorage.ebois = 0;
 localStorage.lang="en";
 localStorage.trader=0;
 localStorage.stockVisit=0;
if ((loc==="index.html") && (localStorage.trader!=1)){
	document.getElementById("boutonBoisUpgrade").style.visibility="visible";
	document.getElementById("boutonPierreUpgrade").style.visibility="visible";
	document.getElementById("boutonOrUpgrade").style.visibility="visible";
	}
 sauvegarder();
 }
 if (a.toLowerCase()==="cheat"){
 	boisNombre=boisNombre+1000;
 	hommeNombre=hommeNombre+1;
 }
  if (a.toLowerCase()==="cheat100000"){
 	boisNombre=boisNombre+1000;
 	hommeNombre=hommeNombre+100000;
 }
}