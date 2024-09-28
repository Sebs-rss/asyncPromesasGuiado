// Una función asíncrona que contenga la URL en una variable
// y... bloque de try/catch para conectarse a la URL con el método fetch

const getAlbums = async () =>{
    const url =  "https://jsonplaceholder.typicode.com/photos/"

    try{ // Try catch atrapa los errores y evita que el programa se detenga
        const response = await fetch(url); // Trae toda la información del JSON
        const data = await response.json();
        console.log("Lista de álbumes", data);

        // Mostrar los primeros 20 títulos de álbumes según la id indicados por la URL, usando métodos para iterar arreglos
        data.slice(0, 20).forEach(element => {
            console.log(`id: ${element.id}, title: ${element.title}`);
        })

    }catch (error){
        console.error("Error al obtener el listato de álbumes" , error)
    }
};

// Ahora se crea otra función que retorne la promesa, debe tardar 3 segundos en resolverla y retornar el mensaje "Información enviada".
// La promesa debe ser recibida dentro de una función asincrona, ésta debe usar await para que reciba el valor y lo muestre por consola

const sendInformation = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Informacion Enviada');
        }, 3000)
    })
}

const showInformation = async () => {
    const information = await sendInformation();
    console.log(information);
}

// Ahora se crea una función que llame a ambas funciones, la primera debe llamar a la función getAlbums, la segunda debe llamar a la función showInformation

const runProgram = async () => {
    await getAlbums();
    await showInformation();
}

runProgram();
