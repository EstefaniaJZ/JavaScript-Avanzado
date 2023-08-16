const promesa = new promise((resolve, reject) =>{
	setTimeout(() =>{
		const exito = true
		if(exito){
			resolve("Operación ha sido completada de manera exitosa")
		}else{
			reject("Error 404 Not Found")
		}
	}, 2000)
})

promesa.then(resultado => {console.log(resultado)}).catch(error => {console.log(error)})