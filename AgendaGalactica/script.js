const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const listaPersonajes = document.getElementById('lista-personajes')
var characters = {}

async function searchPersonajes(name) {
	const url = "https://swapi.dev/api/people/?search=" + name
	const res = await fetch(url)
	const body = await res.json()

	
	// Validation if the name doesnt match with any character
	if(body.count > 0){
		const results = body.results
		console.log(results[0].height)

		// Check if the name match with more than one result
		if(results.length > 1){
			alert("Your name has more than one character")
			

		} else {
			const personaje = results[0]
			console.log(personaje)

			// Comprueba si un personaje ya esta en nuestra lista de personajes
			if(personaje.name in characters){
				alert("Ese elemento ya existe")
			} else { // Si no esta, entonces lo añade

				characters[personaje.name] = 1
				
				const personajeCard = document.createElement('div')
				personajeCard.classList.add('personaje-card')
				personajeCard.innerHTML= `
				<h2>${personaje.name}</h2>
				<p>height:${personaje.height.toString()}</p>
				<p>mass: ${personaje.mass}</p>
				<p>hair-color:${personaje.hair_color}</p>
				<p>gender:${personaje.gender}</p>
				`
				listaPersonajes.appendChild(personajeCard)
			}
		}

	} else {
		alert("NO CHARACTER FOUND.\n Try again pls :)))")
	}


}

searchButton.addEventListener('click',function() {
	const personajesText = searchInput.value.trim()

	if(personajesText.length > 2){
		searchPersonajes(personajesText)
	}else{
		listaPersonajes.innerHTML = `<p>Get a valid character </p>`
		
	}
})