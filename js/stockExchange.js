var boisNombre=0;
var orNombre=0;
var pierreNombre=0;
var maisonBoisNombre=1;
var maisonPierreNombre=0;
var chateauNombre=0;
var hommeNombre=1;
var femmeNombre=1;
var bébéNombre=0;


var boisPlus=1.4;
var orPlus=0.5;
var pierrePlus=0.8;

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

var populationMax=maisonBoisNombre*maisonBoisCapacite+maisonPierreNombre*maisonPierreCapacite+chateauNombre*chateauCapacite;

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

function plus(){
	plusBois();
	plusOr();
	plusPierre();
	plusBébé();
	maison();
	hidden();
}

function plusBois(){
	document.getElementById("bois").innerHTML="Bois : "+boisNombre;
	if (boisNombre<boisStockNombre){
		boisNombre=Math.floor(boisNombre+boisPlus+0.02*hommeNombre);
	}
	else{
		boisNombre=boisStockNombre;
	}
	document.getElementById("boutonBoisUpgrade").innerHTML="Améliorer la production de bois </br> Coût : "+boisUpgradeCost+" bois";
	document.getElementById("boisProduction").innerHTML="Production : "+Math.floor(boisPlus+0.02*hommeNombre)+"bois/seconde";
	document.getElementById("boisStock").innerHTML="Stock max : "+boisStockNombre;
	document.getElementById("boutonBoisStockUpgrade").innerHTML="Agrandir l'entrepôt de bois</br> Coût : "+boisStockUpgradeBoisCost+" bois, "+boisStockUpgradePierreCost+" pierre et "+boisStockUpgradeOrCost+ " or";
}

function plusPierre(){
	document.getElementById("pierre").innerHTML="Pierre : "+pierreNombre;
	if (pierreNombre<pierreStockNombre){
		pierreNombre=Math.floor(pierreNombre+pierrePlus+0.02*hommeNombre);
	}
	else{
		pierreNombre=pierreStockNombre;
	}
	document.getElementById("boutonPierreUpgrade").innerHTML="Améliorer la production de pierre </br> Coût : "+pierreUpgradeCost+" pierre";
	document.getElementById("pierreProduction").innerHTML="Production : "+Math.floor(pierrePlus+0.02*hommeNombre)+"pierre/seconde";
	document.getElementById("pierreStock").innerHTML="Stock max : "+pierreStockNombre;
	document.getElementById("boutonPierreStockUpgrade").innerHTML="Agrandir l'entrepôt de pierre</br> Coût : "+pierreStockUpgradeBoisCost+" bois, "+pierreStockUpgradePierreCost+" pierre et "+pierreStockUpgradeOrCost+ " or";
}
function plusOr(){
	document.getElementById("or").innerHTML="Or : "+orNombre;
	if (orNombre<orStockNombre){
		orNombre=Math.floor(orNombre+orPlus+0.02*hommeNombre);
	}
	else{
		orNombre=orStockNombre;
	}
	document.getElementById("boutonOrUpgrade").innerHTML="Améliorer la production d'or </br> Coût : "+orUpgradeCost+" or";
	document.getElementById("orProduction").innerHTML="Production : "+Math.floor(orPlus+0.02*hommeNombre)+"or/seconde";
	document.getElementById("orStock").innerHTML="Stock max : "+orStockNombre;
	document.getElementById("boutonOrStockUpgrade").innerHTML="Agrandir l'entrepôt d'or</br> Coût : "+orStockUpgradeBoisCost+" bois, "+orStockUpgradePierreCost+" pierre et "+orStockUpgradeOrCost+ " or";
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
	for (var i = 1; i <= bébéIncrease; i++) {
		setTimeout(bébéGrandit,10000);
	};

	if (bébéNombre<0){
		bébéNombre=0;
	}
}
function bébéGrandit() // On perd un bébé, on gagne un adulte
{
	bébéNombre=bébéNombre-1;
	adultePlus(1);

}
function maison(){
	document.getElementById("boutonMaisonBoisBuy").innerHTML="Construire une maison en bois</br> Coût : "+maisonBoisCoutBois+" bois et "+maisonBoisCoutPierre+" pierre";
	document.getElementById("maisonBois").innerHTML="Maisons en bois : "+maisonBoisNombre+"</br>Peut accueillir "+maisonBoisCapacite+" personnes";
	document.getElementById("boutonMaisonPierreBuy").innerHTML="Construire une maison en pierre</br> Coût : "+maisonPierreCoutBois+" bois et "+maisonPierreCoutPierre+" pierre";
	document.getElementById("maisonPierre").innerHTML="Maisons en pierre : "+maisonPierreNombre+"</br>Peut accueillir "+maisonPierreCapacite+" personnes";
	document.getElementById("boutonChateauBuy").innerHTML="Construire un chateau</br> Coût : "+chateauCoutBois+" bois, "+chateauCoutPierre+" pierre et "+chateauCoutOr+" or";
	document.getElementById("chateau").innerHTML="Châteaux : "+chateauNombre+"</br>Peut accueillir "+chateauCapacite+" personnes";
	document.getElementById("homme").innerHTML="Hommes : "+hommeNombre;
	document.getElementById("femme").innerHTML="Femmes : "+femmeNombre;
	document.getElementById("bébé").innerHTML="Bébés : "+Math.floor(bébéNombre);
	populationMax=maisonBoisNombre*maisonBoisCapacite+maisonPierreNombre*maisonPierreCapacite+chateauNombre*chateauCapacite;
}

function boisUpgrade(){
	if(boisNombre-boisUpgradeCost>=0){
		boisNombre=boisNombre-boisUpgradeCost;
		boisPlus=boisPlus*1.5;
		boisUpgradeCost=Math.floor(boisUpgradeCost*1.5);
	}
	else{
		alert("Vous n'avez pas assez de bois pour acheter cette amélioration!")
	}
}
function boisStockUpgrade(){
	if(boisNombre>=boisStockUpgradeBoisCost && pierreNombre>=boisStockUpgradePierreCost && orNombre>=boisStockUpgradeOrCost){
		boisNombre=boisNombre-boisStockUpgradeBoisCost;
		pierreNombre=pierreNombre-boisStockUpgradePierreCost;
		orNombre=orNombre-boisStockUpgradeOrCost;
		boisStockNombre=Math.floor(boisStockNombre*1.5);
		boisStockUpgradeBoisCost=Math.floor(boisStockUpgradeBoisCost*1.5);
		boisStockUpgradePierreCost=Math.floor(boisStockUpgradePierreCost*1.5);
		boisStockUpgradeOrCost=Math.floor(boisStockUpgradeOrCost*1.5);
	}
	else{
		alert("Il vous manque des ressources pour agrandir cet entrepôt!")
	}
}
function pierreUpgrade(){
	if(pierreNombre-pierreUpgradeCost>=0){
		pierreNombre=pierreNombre-pierreUpgradeCost;
		pierrePlus=pierrePlus*1.5;
		pierreUpgradeCost=Math.floor(pierreUpgradeCost*1.5);
	}
	else{
		alert("Vous n'avez pas assez de pierre pour acheter cette amélioration!");
	}
}
function pierreStockUpgrade(){
	if(boisNombre>=pierreStockUpgradeBoisCost && pierreNombre>=pierreStockUpgradePierreCost && orNombre>=pierreStockUpgradeOrCost){
		boisNombre=boisNombre-pierreStockUpgradeBoisCost;
		pierreNombre=pierreNombre-pierreStockUpgradePierreCost;
		orNombre=orNombre-pierreStockUpgradeOrCost;
		pierreStockNombre=Math.floor(pierreStockNombre*1.5);
		pierreStockUpgradeBoisCost=Math.floor(pierreStockUpgradeBoisCost*1.5);
		pierreStockUpgradePierreCost=Math.floor(pierreStockUpgradePierreCost*1.5);
		pierreStockUpgradeOrCost=Math.floor(pierreStockUpgradeOrCost*1.5);
	}
	else{
		alert("Il vous manque des ressources pour agrandir cet entrepôt!")
	}
}
function orUpgrade(){
	if(orNombre-orUpgradeCost>=0){
		orNombre=orNombre-orUpgradeCost;
		orPlus=orPlus*1.5;
		orUpgradeCost=Math.floor(orUpgradeCost*1.5);
	}
	else{
		alert("Vous n'avez pas assez d'or pour acheter cette amélioration!");
	}
}
function orStockUpgrade(){
	if(boisNombre>=orStockUpgradeBoisCost && pierreNombre>=orStockUpgradePierreCost && orNombre>=orStockUpgradeOrCost){
		boisNombre=boisNombre-orStockUpgradeBoisCost;
		pierreNombre=pierreNombre-orStockUpgradePierreCost;
		orNombre=orNombre-orStockUpgradeOrCost;
		orStockNombre=Math.floor(orStockNombre*1.5);
		orStockUpgradeBoisCost=Math.floor(orStockUpgradeBoisCost*1.5);
		orStockUpgradePierreCost=Math.floor(orStockUpgradePierreCost*1.5);
		orStockUpgradeOrCost=Math.floor(orStockUpgradeOrCost*1.5);
	}
	else{
		alert("Il vous manque des ressources pour agrandir cet entrepôt!")
	}
}

function maisonBoisBuy(){
	if(boisNombre>=maisonBoisCoutBois && pierreNombre>=maisonBoisCoutPierre){
		boisNombre=boisNombre-maisonBoisCoutBois;
		pierreNombre=pierreNombre-maisonBoisCoutPierre;
		maisonBoisNombre++;
	}
	else if (boisNombre<maisonBoisCoutBois){
		alert("Vous n'avez pas assez de bois pour acheter cette maison!");
	}
	else if (pierreNombre<maisonBoisCoutPierre){
		alert("Vous n'avez pas assez de pierre pour acheter cette maison!");
	}
}
function maisonPierreBuy(){
	if(boisNombre>=maisonPierreCoutBois && pierreNombre>=maisonPierreCoutPierre){
		boisNombre=boisNombre-maisonPierreCoutBois;
		pierreNombre=pierreNombre-maisonPierreCoutPierre;
		maisonPierreNombre++;
	}
	else if (boisNombre<maisonPierreCoutBois){
		alert("Vous n'avez pas assez de bois pour acheter cette maison!");
	}
	else if (pierreNombre<maisonPierreCoutPierre){
		alert("Vous n'avez pas assez de pierre pour acheter cette maison!");
	}
}
function chateauBuy(){
	if(boisNombre>=chateauCoutBois && pierreNombre>=chateauCoutPierre){
		boisNombre=boisNombre-chateauCoutBois;
		pierreNombre=pierreNombre-chateauCoutPierre;
		chateauNombre++;
	}
	else if (boisNombre<chateauCoutBois){
		alert("Vous n'avez pas assez de bois pour acheter ce chateau");
	}
	else if (pierreNombre<chateauCoutPierre){
		alert("Vous n'avez pas assez de pierre pour acheter ce chateau!");
	}
	else if (orNombre<orCoutPierre){
		alert("Vous n'avez pas assez d'or pour acheter ce chateau!");
	}
}
setInterval(plus,1000);

function adultePlus(populationIncrease){ // Ajout de populationIncrease adultes, aléatoirement distribués entre hommes et femmes
	var hommePlus=Math.floor((Math.random() * (populationIncrease+1)));
	hommeNombre=hommeNombre+hommePlus;
	femmeNombre=femmeNombre+populationIncrease-hommePlus;
}

function hidden(){ // Découverte progressive des ressources et bâtiments
	if (pierreNombre>=1){
		document.getElementById("pierreImage").style.visibility="visible";
		document.getElementById("pierre").style.visibility="visible";
		document.getElementById("pierreStock").style.visibility="visible";
		document.getElementById("boutonPierreUpgrade").style.visibility="visible";
		document.getElementById("boutonPierreStockUpgrade").style.visibility="visible";
	}
	else{
		document.getElementById("pierreImage").style.visibility="hidden";
		document.getElementById("pierre").style.visibility="hidden";
		document.getElementById("pierreStock").style.visibility="hidden";
		document.getElementById("boutonPierreUpgrade").style.visibility="hidden";
		document.getElementById("boutonPierreStockUpgrade").style.visibility="hidden";
	}
	if (maisonPierreNombre>=1){
		document.getElementById("maisonPierreImage").style.visibility="visible";
		document.getElementById("maisonPierre").style.visibility="visible";
		document.getElementById("boutonMaisonPierreBuy").style.visibility="visible";
	}
	else{
		document.getElementById("maisonPierreImage").style.visibility="hidden";
		document.getElementById("maisonPierre").style.visibility="hidden";
		document.getElementById("boutonMaisonPierreBuy").style.visibility="hidden";
	}
	if (orNombre>=1){
		document.getElementById("orImage").style.visibility="visible";
		document.getElementById("or").style.visibility="visible";
		document.getElementById("orStock").style.visibility="visible";
		document.getElementById("boutonOrUpgrade").style.visibility="visible";
		document.getElementById("boutonOrStockUpgrade").style.visibility="visible";
	}
	else{
		document.getElementById("orImage").style.visibility="hidden";
		document.getElementById("or").style.visibility="hidden";
		document.getElementById("orStock").style.visibility="hidden";
		document.getElementById("boutonOrUpgrade").style.visibility="hidden";
		document.getElementById("boutonOrStockUpgrade").style.visibility="hidden";
	}
	if (chateauNombre>=1){
		document.getElementById("chateauImage").style.visibility="visible";
		document.getElementById("chateau").style.visibility="visible";
		document.getElementById("boutonChateauBuy").style.visibility="visible";
	}
	else{
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

function sauvegarder(){ // Sauvegarde des variables
if(localStorage.length>0) {
	var a =prompt("Il existe déjà une sauvegarde sur ce navigateur. Souhaitez-vous l'écraser? Si oui, écrivez 'oui'");
	if ((a==="oui")|| (a==="Oui") || (a==="OUI")){
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
}
}
if(localStorage.length===0){
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
}
}

function charger(){ // Chargement des variables
	if(localStorage.length>0) {
		var a =prompt("Voulez-vous vraiment abandonner la partie actuelle et charger la sauvegarde? Si oui, écrivez 'oui'");
		if ((a==="oui")|| (a==="Oui") || (a==="OUI")){
boisNombre=parseInt(localStorage.boisNombre);
orNombre=parseInt(localStorage.orNombre);
pierreNombre=parseInt(localStorage.pierreNombre);
maisonBoisNombre=parseInt(localStorage.maisonBoisNombre);
maisonPierreNombre=parseInt(localStorage.maisonPierreNombre);
chateauNombre=parseInt(localStorage.chateauNombre);
hommeNombre=parseInt(localStorage.hommeNombre);
femmeNombre=parseInt(localStorage.femmeNombre);
bébénombre=parseInt(localStorage.bébéNombre);


boisPlus=parseInt(localStorage.boisPlus);
orPlus=parseInt(localStorage.orPlus);
pierrePlus=parseInt(localStorage.pierrePlus);

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
}
}
else{
	alert("Aucune partie n'a été sauvegardée!")
}
}
function supprimer(){ // Effacement des variables en mémoire
	var a =prompt("Voulez-vous vraiment supprimer la sauvegarde? Si oui, écrivez 'oui'");
	if ((a==="oui")|| (a==="Oui") || (a==="OUI")){
		localStorage.clear();
	}
}
function reset(){ // Remise à zéro des variables actuelles
var a =prompt("Voulez-vous vraiment recommencer à zéro? Si oui, écrivez 'oui'");
if ((a==="oui")|| (a==="Oui") || (a==="OUI")){
 boisNombre=0;
 orNombre=0;
 pierreNombre=0;
 maisonBoisNombre=1;
 maisonPierreNombre=0;
 chateauNombre=0;
 hommeNombre=1;
 femmeNombre=1;
 bébéNombre=0;


 boisPlus=1.4;
 orPlus=0.5;
 pierrePlus=0.8;

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
 }
}

var path = window.location.href;
var loc = path.substring(path.lastIndexOf('/')+1)
alert(loc)

// window.location.replace('stockExchange.html');