//simular solicitud a un servidor para obtener datos del usuario, de manera asincrona

const userData = (userId) =>{
	return new Promise((resolve, reject) => {

		setTimeout(() =>{
			const usersData ={
				1:{name: 'Fanny', age: 19},
				2:{name:'Hazel', age: 26},
				3:{name:'Ale', age: 26}
			}
			const userData = usersData[userId]

			if(userData){
				resolve(userData)//si la promesa se cumple
			}else{
				reject(new Error('Usuario no encontrado'))
			}
		}, 2000)
	})
}

userData(2)
.then((user) => {console.log("Datos del usuario", user)})
.catch((error) => {console.log('Error al obtener datos: ', error)})