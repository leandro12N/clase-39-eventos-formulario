window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let title = document.querySelector("#title");
    let rating = document.querySelector("#rating");
    let awards = document.querySelector("#awards");
    let release_date = document.querySelector("#release_date");
    let length = document.querySelector("#length");
    let genre_id = document.querySelector("#genre_id");


//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let form = document.querySelector(".form");
    form.title.focus();

    title.addEventListener('blur', (e) => {
        let titleError = document.querySelector('.titleError');
        
        if(title.value == ""){
            titleError.innerHTML = "titulo no puede estar vacio";
            titleError.classList.add("is-invalid");
            titleError.classList.remove("is-valid");
        }else{
            titleError.classList.add("is-valid");
            titleError.classList.remove("is-invalid");
            titleError.innerHTML = "";
        }
    });

    rating.addEventListener('blur', (e) => {
        let ratingError = document.querySelector('.ratingError');
        
        if(rating.value == ""){
            ratingError.innerHTML = "Rating no puede estar vacio";
            ratingError.classList.add("is-invalid");
            ratingError.classList.remove("is-valid");
        }else{
            ratingError.classList.add("is-valid");
            ratingError.classList.remove("is-invalid");
            ratingError.innerHTML = "";
        }
    });

    awards.addEventListener('blur', (e) => {
        let awardsError = document.querySelector('.awardsError');
        
        if(awards.value == ""){
            awardsError.innerHTML = "Rating no puede estar vacio";
            awardsError.classList.add("is-invalid");
            awardsError.classList.remove("is-valid");
        }else{
            awardsError.classList.add("is-valid");
            awardsError.classList.remove("is-invalid");
            awardsError.innerHTML = "";
        }
    });

    release_date.addEventListener('blur', (e) => {
        let ReleaseError = document.querySelector('.ReleaseError');
        
        if(release_date.value == ""){
            ReleaseError.innerHTML = "La fecha no puede estar vacio";
            ReleaseError.classList.add("is-invalid");
            ReleaseError.classList.remove("is-valid");
        }else{
            ReleaseError.classList.add("is-valid");
            ReleaseError.classList.remove("is-invalid");
            ReleaseError.innerHTML = "";
        }
    });

    length.addEventListener('blur', (e) => {
        let lengthError = document.querySelector('.lengthError');
        
        if(release_date.value == ""){
            lengthError.innerHTML = "La duracion no puede estar vacio";
            lengthError.classList.add("is-invalid");
            lengthError.classList.remove("is-valid");
        }else{
            lengthError.classList.add("is-valid");
            lengthError.classList.remove("is-invalid");
            lengthError.innerHTML = "";
        }
    });

    genre_id.addEventListener('blur', (e) => {
        let genreError = document.querySelector('.genreError');
        
        if(release_date.value == ""){
            genreError.innerHTML = "La duracion no puede estar vacio";
            genreError.classList.add("is-invalid");
            genreError.classList.remove("is-valid");
        }else{
            genreError.classList.add("is-valid");
            genreError.classList.remove("is-invalid");
            genreError.innerHTML = "";
        }
    });

    form.addEventListener("submit", (evento) => {
        let errores = [];

        let title = document.querySelector("#title");
        let rating = document.querySelector("#rating");
        let awards = document.querySelector("#awards");
        let release_date = document.querySelector("#release_date");
        let length = document.querySelector("#length");
        let genre_id = document.querySelector("#genre_id");
        
        if(title.value == ""){
            errores.push("titulo no puede estar vacio");
            title.classList.add("is-invalid");
            title.classList.remove("is-valid");
        }else{
            title.classList.add("is-valid");
            title.classList.remove("is-invalid");
        }
        if(rating.value == ""){
            errores.push("calificacion no puede estar vacio");
            rating.classList.add("is-invalid");
            rating.classList.remove("is-valid");
        }else{
            rating.classList.add("is-valid");
            rating.classList.remove("is-invalid")
        }
        if(rating.value >10 || rating.value < 0){
            errores.push("Los valores de la calificacion debe de estar entre 0 y 10");
            rating.classList.add("is-invalid");
            rating.classList.remove("is-valid");
        }else{
            rating.classList.add("is-valid");
            rating.classList.remove("is-invalid")
        }
        if(awards.value == ""){
            errores.push("premios no puede estar vacio");
            awards.classList.add("is-invalid");
            awards.classList.remove("is-valid");
        }else{
            awards.classList.add("is-valid");
            awards.classList.remove("is-invalid")
        }
        if(awards.value >10 || awards.value < 0){
            errores.push("Los valores de los premios deben de estar entre 0 y 10");
            awards.classList.add("is-invalid");
            awards.classList.remove("is-valid");
        }else{
            awards.classList.add("is-valid");
            awards.classList.remove("is-invalid")
        }
        if(release_date.value == ""){
            errores.push("release date no puede estar vacio");
            release_date.classList.add("is-invalid");
            release_date.classList.remove("is-valid");
        }else{
            release_date.classList.add("is-valid");
            release_date.classList.remove("is-invalid")
        }
        if(length.value == ""){
            errores.push("duracion no puede estar vacio");
            length.classList.add("is-invalid");
            length.classList.remove("is-valid");
        }else{
            length.classList.add("is-valid");
            length.classList.remove("is-invalid")
        }
        if(length.value < 60 || length.value > 360){
            errores.push("La duracion debe de estar entre 60min y 360min");
            length.classList.add("is-invalid");
            length.classList.remove("is-valid");
        }else{
            length.classList.add("is-valid");
            length.classList.remove("is-invalid")
        }
        if(genre_id.value == ""){
            errores.push("genero no puede estar vacio");
            genre_id.classList.add("is-invalid");
            genre_id.classList.remove("is-valid");
        }else{
            genre_id.classList.add("is-valid");
            genre_id.classList.remove("is-invalid")
        }
        if(errores.length > 0){
            evento.preventDefault();
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
            ulError.classList.add('alert-warning');
        }else{
            alert("La Pelicula se cargo satisfactoriamente");
        }
        
    })
}