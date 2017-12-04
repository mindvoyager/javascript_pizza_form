function getReceipt() {
	let text1 = "";
	let runningTotal = 0;
	let size = getSize(runningTotal,text1);
	runningTotal = size[0];
	text1 = size[1];
	let meats = getMeats(runningTotal,text1);
	runningTotal = meats[0];
	text1 = meats[1];
	let cheese = getCheese(runningTotal,text1);
	runningTotal = cheese[0];
	text1 = cheese[1];
	let crust = getCrust(runningTotal,text1);
	runningTotal = crust[0];
	text1 = crust[1];
	let sauce = getSauce(runningTotal,text1);
	runningTotal = sauce[0];
	text1 = sauce[1];
	let veggies = getVeggies(runningTotal,text1);
	runningTotal = veggies[0];
	text1 = veggies[1];
	
	console.log(text1);
	console.log(`total: $${runningTotal}.00`);
	let text2 = `<table>${text1}<tr><td><strong>Total Price:</strong></td><td><strong>$${runningTotal}.00</strong></td></tr></table>`;
	document.getElementById("showReceipt").innerHTML = text2;
}

function getSize(runningTotal,text1) {
	let sizeTotal = 0;
	let sizeArray = document.getElementsByName("size");
	for (i = 0; i < sizeArray.length; i++){
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			if (selectedSize === "Personal") {
				sizeTotal = 6;
			}
			else if (selectedSize === "Medium") {
				sizeTotal = 10;	
			}
			else if (selectedSize === "Large") {
				sizeTotal = 14;
			}
			else if (selectedSize === "Extra Large") {
				sizeTotal = 16;
			}
		}
	}
	text1 += `<tr><td>${selectedSize} Pizza</td><td>$${sizeTotal}.00</td></tr>`
	
	runningTotal += sizeTotal;
	
	console.log(selectedSize+`: $${sizeTotal}.00`);
	console.log(`size text1: ${text1}`);
	return [runningTotal,text1];
}

function getMeats(runningTotal,text1) {
	let meatsTotal = 0;
	let meatsArray = document.getElementsByName("meats");
	let meatsCheckedArray = [];
	let selectedMeats = "<td>";
	
	for (let i=0; i<meatsArray.length; i++) {
		if (meatsArray[i].checked) {
			meatsCheckedArray.push(meatsArray[i]);
		}
	}
	
	meatsCheckedArray.length <= 1 ?
		meatsTotal = 0 :
		meatsTotal = meatsCheckedArray.length - 1;
	
	for (let i=0; i<meatsCheckedArray.length; i++) {
		i<meatsCheckedArray.length-1 ?
			selectedMeats = selectedMeats + meatsCheckedArray[i].value + ", ":
			selectedMeats = selectedMeats + meatsCheckedArray[i].value; + "</td>"
			
	} 
	console.log(selectedMeats+`: $${meatsTotal}.00`);
	
	runningTotal += meatsTotal;
	text1 += `<tr>${selectedMeats}<td>$${meatsTotal}.00</td></tr>`;
	console.log(`meats text1: ${text1}`);
	
	return [runningTotal, text1];
}

function getCheese(runningTotal,text1) {
	let cheeseTotal = 0;
	let cheeseArray = document.getElementsByName("cheese");
	for (i = 0; i < cheeseArray.length; i++){
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			if (selectedCheese === "Extra Cheese") {
				cheeseTotal = 3;
			}
			else {
				cheeseTotal = 0;
			}
		}
	}
	text1 += `<tr><td>${selectedCheese}</td><td>$${cheeseTotal}.00</td></tr>`
	
	runningTotal += cheeseTotal;
	
	console.log(selectedCheese+`: $${cheeseTotal}.00`);
	console.log(`cheese text1: ${text1}`);
	return [runningTotal,text1];
}

function getCrust(runningTotal,text1) {
	let crustTotal = 0;
	let crustArray = document.getElementsByName("crust");
	for (i = 0; i < crustArray.length; i++){
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			if (selectedCrust === "Cheese Stuffed Crust") {
				crustTotal = 3;
			}
			else {
				crustTotal = 0;
			}
		}
	}
	text1 += `<tr><td>${selectedCrust}</td><td>$${crustTotal}.00</td></tr>`
	
	runningTotal += crustTotal;
	
	console.log(selectedCrust+`: $${crustTotal}.00`);
	console.log(`crust text1: ${text1}`);
	return [runningTotal,text1];
}

function getSauce(runningTotal,text1) {
	let sauceTotal = 0;
	let sauceArray = document.getElementsByName("sauce");
	for (i = 0; i < sauceArray.length; i++){
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
		}
	}
	text1 += `<tr><td>${selectedSauce}</td><td>$${sauceTotal}.00</td></tr>`
	
	runningTotal += sauceTotal;
	
	console.log(selectedSauce+`: $${sauceTotal}.00`);
	console.log(`sauce text1: ${text1}`);
	return [runningTotal,text1];
}

function getVeggies(runningTotal,text1) {
	let veggiesTotal = 0;
	let veggiesArray = document.getElementsByName("veggies");
	let veggiesCheckedArray = [];
	let selectedveggies = "<td>";
	
	for (let i=0; i<veggiesArray.length; i++) {
		if (veggiesArray[i].checked) {
			veggiesCheckedArray.push(veggiesArray[i]);
		}
	}
	
	veggiesCheckedArray.length <= 1 ?
		veggiesTotal = 0 :
		veggiesTotal = veggiesCheckedArray.length - 1;
	
	for (let i=0; i<veggiesCheckedArray.length; i++) {
		i<veggiesCheckedArray.length-1 ?
			selectedveggies = selectedveggies + veggiesCheckedArray[i].value + ", ":
			selectedveggies = selectedveggies + veggiesCheckedArray[i].value; + "</td>"
			
	} 
	console.log(selectedveggies+`: $${veggiesTotal}.00`);
	
	runningTotal += veggiesTotal;
	text1 += `<tr>${selectedveggies}<td>$${veggiesTotal}.00</td></tr>`;
	console.log(`veggies text1: ${text1}`);
	
	return [runningTotal, text1];
}