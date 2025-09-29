// Variable que contiene TODAS las películas (data estática)
const todasLasPeliculas = [
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530e8"
      },
      "id": 6,
      "titulo": "Your Name",
      "año": 2016,
      "descripcion": "Dos adolescentes intercambian misteriosamente sus cuerpos y desarrollan un lazo profundo.",
      "imagen": "https://i.pinimg.com/736x/32/e4/81/32e48136ffc85b8d0ff5eb79c09c389d.jpg",
      "estado": "Disponible",
      "categoria": "Anime",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530e9"
      },
      "id": 7,
      "titulo": "Akira",
      "año": 1988,
      "descripcion": "Un joven obtiene poderes psíquicos devastadores en un Tokio post-apocalíptico.",
      "imagen": "https://images-cdn.ubuy.co.in/633feba61f18003ec96de030-aodyow-akira-movie-poster-us-version.jpg",
      "estado": "Disponible",
      "categoria": "Anime",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530ea"
      },
      "id": 8,
      "titulo": "Blade Runner 2049",
      "año": 2017,
      "descripcion": "Un joven blade runner descubre un secreto que podría cambiar el destino de la humanidad.",
      "imagen": "https://m.media-amazon.com/images/I/71NPmBOdq7L.jpg",
      "estado": "Disponible",
      "categoria": "Ciencia Ficción",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530eb"
      },
      "id": 9,
      "titulo": "Avengers: Endgame",
      "año": 2019,
      "descripcion": "Los Vengadores se unen una última vez para derrotar a Thanos y restaurar el universo.",
      "imagen": "https://m.media-amazon.com/images/I/7103d-g1quL.jpg",
      "estado": "Disponible",
      "categoria": "Superhéroes",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530ec"
      },
      "id": 10,
      "titulo": "Doctor Strange",
      "año": 2016,
      "descripcion": "Un neurocirujano aprende artes místicas para defender al mundo de amenazas oscuras.",
      "imagen": "https://m.media-amazon.com/images/I/81b6gyv977L._UF894,1000_QL80_.jpg",
      "estado": "Disponible",
      "categoria": "Superhéroes",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530ed"
      },
      "id": 11,
      "titulo": "El Señor de los Anillos: La Comunidad del Anillo",
      "año": 2001,
      "descripcion": "Un hobbit inicia una peligrosa misión para destruir un anillo que podría condenar al mundo.",
      "imagen": "https://m.media-amazon.com/images/I/6143TqGItiL.jpg",
      "estado": "Disponible",
      "categoria": "Fantasía",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530ee"
      },
      "id": 12,
      "titulo": "Harry Potter y la piedra filosofal",
      "año": 2001,
      "descripcion": "Un niño descubre que es mago y comienza su educación en Hogwarts.",
      "imagen": "https://m.media-amazon.com/images/M/MV5BYTkyYjVkNDItODc1Ny00NzA1LTkwY2YtZDUwNTlhMDk3MTZiXkEyXkFqcGc@._V1_.jpg",
      "estado": "Disponible",
      "categoria": "Fantasía",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530ef"
      },
      "id": 13,
      "titulo": "Titanic",
      "año": 1997,
      "descripcion": "Una historia de amor entre dos jóvenes de diferentes clases sociales en el Titanic.",
      "imagen": "https://m.media-amazon.com/images/I/91pZ7Rcp4iL.jpg",
      "estado": "Disponible",
      "categoria": "Romance",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530f0"
      },
      "id": 14,
      "titulo": "The Notebook",
      "año": 2004,
      "descripcion": "Un hombre relata la historia de amor entre dos jóvenes a una mujer en un asilo.",
      "imagen": "https://image.tmdb.org/t/p/original/wbvboxr6xmdSbMEBKzXVWgAwJ1Q.jpg",
      "estado": "Disponible",
      "categoria": "Romance",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530f1"
      },
      "id": 15,
      "titulo": "El Conjuro",
      "año": 2013,
      "descripcion": "Dos investigadores paranormales ayudan a una familia aterrorizada por una presencia oscura.",
      "imagen": "https://i.pinimg.com/474x/fd/7f/50/fd7f500ac311be3fee106ffc1b331856.jpg",
      "estado": "Disponible",
      "categoria": "Terror",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4758ab7ae7e8af530f2"
      },
      "id": 16,
      "titulo": "Hereditary",
      "año": 2018,
      "descripcion": "Una familia descubre oscuros secretos después de la muerte de su abuela.",
      "imagen": "https://i.ebayimg.com/images/g/LzcAAOSw~JhkQJH-/s-l1200.jpg",
      "estado": "Disponible",
      "categoria": "Terror",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530f4"
      },
      "id": 17,
      "titulo": "Naruto Shippuden: The Last",
      "año": 2014,
      "descripcion": "Naruto debe enfrentar una amenaza que pone en peligro a la Tierra mientras su relación con Hinata florece.",
      "imagen": "https://m.media-amazon.com/images/I/61nKUV0tAvL.jpg",
      "estado": "Disponible",
      "categoria": "Anime",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530f5"
      },
      "id": 18,
      "titulo": "Ghost in the Shell",
      "año": 1995,
      "descripcion": "Una ciborg policía investiga un hacker que amenaza con alterar el orden social.",
      "imagen": "https://m.media-amazon.com/images/I/5149Qxh3RmL._UF894,1000_QL80_.jpg",
      "estado": "Disponible",
      "categoria": "Anime",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530f6"
      },
      "id": 19,
      "titulo": "Interstellar",
      "año": 2014,
      "descripcion": "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      "imagen": "https://mythicwall.com/cdn/shop/files/Interstellar_2BMovie_2B_2Bposter_2BPrint_2BWall_2BArt_2BPoster_2B1-W0pfS_1024x1024.jpg?v=1712634286",
      "estado": "Disponible",
      "categoria": "Ciencia Ficción",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530f7"
      },
      "id": 20,
      "titulo": "The Matrix",
      "año": 1999,
      "descripcion": "Un programador descubre que el mundo en el que vive es una simulación creada por máquinas.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgvaGc_SqkvWUBtM3AyS19nk1eWFRP_gexg&s",
      "estado": "Disponible",
      "categoria": "Ciencia Ficción",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530f8"
      },
      "id": 21,
      "titulo": "Spider-Man: No Way Home",
      "año": 2021,
      "descripcion": "Peter Parker enfrenta a villanos de universos alternativos con la ayuda del Doctor Strange.",
      "imagen": "https://m.media-amazon.com/images/M/MV5BYTA1NTYyZDMtMjliYy00YTlhLTgzNDAtODc3ZTE5OWZkMjY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "estado": "Disponible",
      "categoria": "Superhéroes",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530f9"
      },
      "id": 22,
      "titulo": "The Dark Knight",
      "año": 2008,
      "descripcion": "Batman se enfrenta al Joker en una batalla por el alma de Ciudad Gótica.",
      "imagen": "https://i.pinimg.com/736x/f1/c5/00/f1c50045ee35be5901dd4890d8e7da55.jpg",
      "estado": "Disponible",
      "categoria": "Superhéroes",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530fa"
      },
      "id": 23,
      "titulo": "El Hobbit: Un viaje inesperado",
      "año": 2012,
      "descripcion": "Bilbo Bolsón se une a un grupo de enanos en una peligrosa aventura hacia la Montaña Solitaria.",
      "imagen": "https://m.media-amazon.com/images/M/MV5BNjhjZjk4OWEtMTkwZi00OGQyLWE4MGQtMWFmM2Q2MDEyMjM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "estado": "Disponible",
      "categoria": "Fantasía",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530fb"
      },
      "id": 24,
      "titulo": "Las crónicas de Narnia: El león, la bruja y el armario",
      "año": 2005,
      "descripcion": "Cuatro hermanos descubren un mundo mágico dentro de un armario.",
      "imagen": "https://m.media-amazon.com/images/I/61kBqsyejtL._UF894,1000_QL80_.jpg",
      "estado": "Disponible",
      "categoria": "Fantasía",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530fc"
      },
      "id": 25,
      "titulo": "La La Land",
      "año": 2016,
      "descripcion": "Un músico de jazz y una aspirante a actriz luchan por su amor y sus sueños en Los Ángeles.",
      "imagen": "https://filmartgallery.com/cdn/shop/files/La-La-Land-Vintage-Movie-Poster-Original_5916c20c_240x.jpg?v=1742958357",
      "estado": "Disponible",
      "categoria": "Romance",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530fd"
      },
      "id": 26,
      "titulo": "Orgullo y prejuicio",
      "año": 2005,
      "descripcion": "La relación entre Elizabeth Bennet y el Sr. Darcy se complica por el orgullo y los malentendidos.",
      "imagen": "https://m.media-amazon.com/images/I/51seGrDhE3L._UF894,1000_QL80_.jpg",
      "estado": "Disponible",
      "categoria": "Romance",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530fe"
      },
      "id": 27,
      "titulo": "It",
      "año": 2017,
      "descripcion": "Un grupo de niños enfrenta a un mal ancestral que toma la forma de un payaso llamado Pennywise.",
      "imagen": "https://m.media-amazon.com/images/I/71B7V64aU0L._UF894,1000_QL80_.jpg",
      "estado": "Disponible",
      "categoria": "Terror",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": {
        "$oid": "68d5c4b58ab7ae7e8af530ff"
      },
      "id": 28,
      "titulo": "El exorcista",
      "año": 1973,
      "descripcion": "Una niña es poseída por una entidad demoníaca y dos sacerdotes intentan salvarla.",
      "imagen": "https://m.media-amazon.com/images/M/MV5BZDcyZjIzZmYtZGQ5OS00ODc2LTkzN2EtNjlmMjI2NWMxYzljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "estado": "Disponible",
      "categoria": "Terror",
      "likes": 0,
      "dislikes": 0
    }
];

// ***************************************************************
// FUNCIÓN 1: Renderizar las películas en el HTML
// ***************************************************************
function imprimirPeliculas(peliculas) {
    // Asegúrate de que este ID coincida con tu HTML
    const container = document.getElementById('peliculas-container'); 
    
    if (!container) return; 

    container.innerHTML = ''; // Limpiar el contenedor

    if (!peliculas || peliculas.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center; margin-top: 30px; width: 100vw;">No se encontraron películas que coincidan con tu búsqueda.</p>';
        return;
    }

    peliculas.forEach(pelicula => {
        const linkElement = document.createElement('a');
        linkElement.href = `./info.html?id=${pelicula.id}`; 

        const imageElement = document.createElement('img');
        imageElement.src = pelicula.imagen; 
        imageElement.alt = pelicula.titulo;  
        imageElement.title = `${pelicula.titulo} (${pelicula.año})`; 

        linkElement.appendChild(imageElement);
        container.appendChild(linkElement);
    });
}

// ***************************************************************
// FUNCIÓN 2: Lógica de Filtrado por Categoría
// ***************************************************************
function filtrarPorCategoria(categoria) {
    // Si se activa el filtro de categoría, se desactiva la búsqueda
    const searchInput = document.getElementById('search-input-wrapper').querySelector('.search-input');
    searchInput.value = '';

    if (!categoria || categoria === "Todas") {
        imprimirPeliculas(todasLasPeliculas);
        return;
    }

    const peliculasFiltradas = todasLasPeliculas.filter(pelicula => 
        pelicula.categoria && pelicula.categoria.toLowerCase() === categoria.toLowerCase()
    );

    imprimirPeliculas(peliculasFiltradas);
}

// ***************************************************************
// FUNCIÓN 3: Lógica de Búsqueda de Texto (NUEVA)
// ***************************************************************
function buscarPeliculas(termino) {
    // Si el campo de búsqueda está vacío, muestra todas las películas
    if (!termino || termino.trim() === '') {
        imprimirPeliculas(todasLasPeliculas);
        return;
    }
    
    const terminoLowerCase = termino.toLowerCase();

    const resultados = todasLasPeliculas.filter(pelicula => {
        // Busca coincidencias en el título o la descripción
        const tituloCoincide = pelicula.titulo.toLowerCase().includes(terminoLowerCase);
        const descripcionCoincide = pelicula.descripcion.toLowerCase().includes(terminoLowerCase);

        return tituloCoincide || descripcionCoincide;
    });

    imprimirPeliculas(resultados);
}


// ***************************************************************
// Ejecución y Funcionalidad del DOM
// ***************************************************************

document.addEventListener('DOMContentLoaded', () => {
    
    // Muestra todas las películas al cargar la página
    imprimirPeliculas(todasLasPeliculas); 
    
    // Selectores del DOM
    const searchLink = document.getElementById('search-link');
    const searchInputWrapper = document.getElementById('search-input-wrapper');
    const searchInput = searchInputWrapper.querySelector('.search-input'); // 🔑 CLAVE: El input de búsqueda
    const categoriasLink = document.getElementById('categorias-link');
    const categoriasMenu = document.getElementById('categorias-menu');
    const profileLink = document.getElementById('profile-link');
    const profileMenu = document.getElementById('profile-menu');
    const searchBarContainer = document.querySelector('.search-bar-container');


    // -------------------------------------------------------------
    // Lógica de Búsqueda (Implementación)
    // -------------------------------------------------------------
    searchInput.addEventListener('input', (e) => {
        // Llama a la función de búsqueda cada vez que se teclea algo
        buscarPeliculas(e.target.value);
    });
    
    // -------------------------------------------------------------
    // Lógica de Filtrado de Categorías
    // -------------------------------------------------------------
    
    const enlacesCategoria = categoriasMenu.querySelectorAll('a');

    enlacesCategoria.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const categoriaSeleccionada = e.target.getAttribute('data-category');
            
            // Llama a la función de filtrado
            filtrarPorCategoria(categoriaSeleccionada);

            // Cerrar el menú desplegable
            categoriasMenu.classList.remove('dropdown-show');
        });
    });

    // -------------------------------------------------------------
    // Lógica de Menús y Búsqueda (Toggle visual)
    // -------------------------------------------------------------
    
    // Toggle de la barra de búsqueda
    searchLink.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = searchInputWrapper.classList.toggle('active');
        searchBarContainer.classList.toggle('active', isActive);
        
        if (isActive) {
            searchInput.focus(); // Enfoca el input al abrir
        }
    });

    // Toggle de categorías
    categoriasLink.addEventListener('click', (e) => {
        e.preventDefault();
        profileMenu.classList.remove('dropdown-show-profile'); 
        categoriasMenu.classList.toggle('dropdown-show');
    });

    // Toggle de perfil
    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        categoriasMenu.classList.remove('dropdown-show');
        profileMenu.classList.toggle('dropdown-show-profile');
    });

    // Ocultar al hacer clic fuera
    document.addEventListener('click', (e) => {
        // Cerrar menús de categorías y perfil
        if (!categoriasLink.contains(e.target) && !categoriasMenu.contains(e.target)) {
            categoriasMenu.classList.remove('dropdown-show');
        }
        if (!profileLink.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('dropdown-show-profile');
        }

        // Cerrar la barra de búsqueda si se hace clic fuera
        const searchContainer = document.querySelector('.search-bar-container');
        if (searchContainer && !searchContainer.contains(e.target) && !searchLink.contains(e.target)) {
            if (searchInputWrapper.classList.contains('active')) {
                searchInputWrapper.classList.remove('active');
                searchBarContainer.classList.remove('active');
            }
        }
    });
});