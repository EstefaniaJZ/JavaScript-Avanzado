const Promise = new Promise((resolve, reject) =>{
	const number = (Math,random() * 10)

	setTimeout(
		() => number > 5 ? resolve(number) : reject(new Error('Menor a 5')), 2000

		)
})

Promise
.then(number => console.log(number))
.catch(error => console.error(error))
.finally(() => {console.log('Tarea Finalizada')})