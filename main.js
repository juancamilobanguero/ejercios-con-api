const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&`)

        console.log(respuesta);

        // Si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json()

            let peliculas = ''
            datos.results.forEach(pelicula => {
                peliculas += 
                    `<div class="pelicula">
                    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></img>
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>`
                
            });

            document.getElementById('contenedor').innerHTML = peliculas
        } 

    } catch(error){
        console.log(error)
    }

 }

cargarPeliculas()