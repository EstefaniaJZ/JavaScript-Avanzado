const Promise = new Promise(resolve, reject) => {
	resolve(cosaQueDevuelvoSiSeEjecutaBien)
	reject(cosaQueDevuelvoSiSeEjecutaMal)
}

Promise 
.then (resultado) => { 

}.catch (error) => { 
	console.log(error)
}