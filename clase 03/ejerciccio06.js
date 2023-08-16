const calcularOperation = (numero) => {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
			if(typeof numero !== 'number'){
				reject(new Error('El valor no es un numero'))
			}else{
				const resultado = numero * 5 
				resolve(resultado)
			}
		},2000)
	})
}

calcularOperation(10).then((resultado) =>{ console.log(resultado)})
.catch((error) =>{ console.error("Error")})