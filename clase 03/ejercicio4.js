//escribe una función que tomará un número como argumento, y devuelva una promesa, la cual esta promesa deberá realizar un cálculo de manera asincrona como el resultado de elevar un número al cuadrado, después de un retraso de 5 segundos, y devolver el resultado o un mensaje de error si el nmúmero es negativo//


function argumento(number) {
	return new Promise((resolve, reject) => {
	  if (number < 0) {
		reject("Error: Número negativo");
	  } else {
		setTimeout(() => {
		  const result = number * number;
		  resolve(result);
		}, 5000); 
	  }
	});
  }
  
  const inputNumber = 3;
  argumento(inputNumber)
	.then(result => {
	  console.log("Resultado: ", result);
	})
	.catch(error => {
	  console.error("Error: ", error);
	});
  
  Gracias:3
  
  
  
  