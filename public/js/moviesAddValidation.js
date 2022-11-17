window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let form = document.querySelector(".form");
    form.title.focus();

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
        if(awards.value == ""){
            errores.push("premios no puede estar vacio");
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
        }else{

        }
        
    })
}