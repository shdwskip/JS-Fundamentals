function solve(arr){
	
	function findPrice(arr, productName){
		let productsNumber = Number(arr[0]);

		for (let i = 1; i <= productsNumber; i++){
			
			let currentProductName = arr[i].match(/[a-z]+\s/g).join('').slice(0, -1);
		
			//taking the product's price
			if(productName === currentProductName)
				return Number(arr[i].match(/\d+.*/g));
		}
	}

	function productEntry(startIndex, arr){
		
		for (let i = startIndex; i < arr.length; i++){
			
			//arr[i] is a string containing the current list of products
			//We split the string by ',' and save the elements into another array called currentArray
			currentArray = arr[i].split(',');
		
			//Price for the current list of products
			let listPrice = 0;
			
			for (let z = 0; z < currentArray.length; z++){
				
				//removing whitespaces
				currentArray[z] = currentArray[z].trim();
			
				if(currentArray[z].match(/\d/g)){
                    console.log(currentArray[z]);
					let multiplier = (Number(currentArray[z].match(/\d./g).toString()));
					let productName = currentArray[z].match(/\D/g).join('').trim();
					listPrice += (multiplier * findPrice(arr, productName));
				}
				else{
                    console.log(currentArray[z]);
					let productName = currentArray[z].match(/\D/g).join('').trim();
					listPrice += findPrice(arr, productName);
				}
			}
			
			console.log(listPrice.toFixed(2));
		}	
	}

	let indexStart = (Number(arr[0]) + 2);
	productEntry(indexStart, arr);
}

let test1 = [
    "5",
    "milk 1.2",
    "orange juice 2.9",
    "icecream 2",
    "cake 5.1",
    "beer 1.2",
    "5",
    "2 beer, 3 orange juice",
    "5 orange juice, 3 orange juice, orange juice, orange juice",
    "milk, cake",
    "icecream, 2 cake",
    "icecream, icecream, 3 icecream"
];
let test2 = [
    "10",
    "sveps 3",
    "bira1 1",
    "bira2 1",
    "bira3 1",
    "bira4 1",
    "bira5 1",
    "bira6 1",
    "bira7 1",
    "bira8 1",
    "bira9 1",
    "3",
    "sveps, 1.5 sveps",
    "sveps, 1.5 sveps",
    "bira1, 1.5 sveps",
];
//solve(test1);
console.log('========');
solve(test2);