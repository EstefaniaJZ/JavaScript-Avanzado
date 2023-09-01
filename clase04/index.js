/*Proceso para crear una pizza
1.- Reunir los ingredientes*/

function reunirIngredientes(){
	return new Promise(resolve =>{
		setTimeout(() =>{
			resolve('Ingredientes reunidos')
		}, 2000)
	})
}

//2.- Armar la masa

function prepararMasa() {
	return new Promise(resolve =>{
		setTimeout(() =>{
			resolve('Masa cocida')
		}, 1500)
	})
	
}

function agregarToppings() {
	return new Promise(resolve => {
		setTimeout(() =>{
			resolve('Toppings agregados')
		}, 5000)
	})
}

function hornearPizza(){
	return new Promise(resolve =>{
		setTimeout(() =>{
			resolve('Pizza horneada')
		}, 2500)
	})
}

//Callbacks

reunirIngredientes().then(ingredientes =>{
	console.log(ingredientes)
	return prepararMasa()
}
).then(masa =>{
	console.log(masa)
	return agregarToppings()
}
).then(hornear =>{
	console.log(hornear)
	return hornearPizza()
}
).then( pizzaPreparada =>{
	console.log(pizzaPreparada)
})