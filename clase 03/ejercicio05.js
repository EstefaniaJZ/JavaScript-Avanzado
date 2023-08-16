function operation01(){
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			console.log("Operación 1 cumplida")
			resolve(1)
		}, 2000)
	})
}

function operation02(){
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			console.log("Operación 2 cumplida")
			resolve(resultado + 2)
		}, 2500)
	})
}

function operation03(){
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			console.log("Operación 3 cumplida")
			resolve(resultado * 3)
		}, 3000)
	})
}

operation01().then(resultado1 => {
	return operation02(resultado1)
})
.then(resultado2 =>{
	return operation03(resultado2)
})
.then(resultadoFinal =>{
	console.log("Resultado Final es: ", resultadoFinal)
})
.catch(error =>{
	console.error("Error: ", error)
})