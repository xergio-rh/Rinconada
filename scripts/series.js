// Variable que contiene TODAS las series (data estática)
const todasLasSeries = [
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53125"
      },
      "id": 1,
      "titulo": "Breaking Bad",
      "año": 2008,
      "descripcion": "Un profesor de química con cáncer terminal comienza a fabricar metanfetaminas para asegurar el futuro de su familia.",
      "imagen": "https://www.ubuy.com.co/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFSTlNNTkpsc0wuX0FDX1NMMTUwMF8uanBn.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Crimen"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53126"
      },
      "id": 2,
      "titulo": "Game of Thrones",
      "año": 2011,
      "descripcion": "Nobles familias luchan por el control del Trono de Hierro en una tierra llena de intrigas, guerras y dragones.",
      "imagen": "https://w0.peakpx.com/wallpaper/971/997/HD-wallpaper-game-of-thrones-game-of-thrones-poster.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Fantasía",
        "Acción"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53127"
      },
      "id": 3,
      "titulo": "Stranger Things",
      "año": 2016,
      "descripcion": "Un grupo de niños descubre un mundo paralelo mientras buscan a su amigo desaparecido.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQehcvamB_urnDlO6SLAtIt5CNPLwSbxVAjQ&s",
      "estado": "En emisión",
      "categoria": [
        "Ciencia Ficción",
        "Suspenso",
        "Drama"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53128"
      },
      "id": 4,
      "titulo": "The Crown",
      "año": 2016,
      "descripcion": "La vida de la Reina Isabel II desde sus primeros años en el trono hasta los momentos más recientes.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0tlN2K0fR9u-iwpSg_V5zZ8ZFfJRyb9N6w&s",
      "estado": "En emisión",
      "categoria": [
        "Drama",
        "Histórica"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53129"
      },
      "id": 5,
      "titulo": "The Witcher",
      "año": 2019,
      "descripcion": "Geralt de Rivia, un cazador de monstruos, lucha por encontrar su lugar en un mundo donde los humanos suelen ser más crueles que las bestias.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkpyPljN4lyJYQkftZu4XFt9-SD0zeaEoRg&s",
      "estado": "En emisión",
      "categoria": [
        "Fantasía",
        "Acción",
        "Aventura"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5312a"
      },
      "id": 6,
      "titulo": "The Boys",
      "año": 2019,
      "descripcion": "Un grupo de vigilantes se enfrenta a superhéroes corruptos que abusan de sus poderes en una sociedad dominada por corporaciones.",
      "imagen": "https://images-cdn.ubuy.co.id/67e973136ebe2eb2a20ffb5e-the-boys-movie-poster-tv-series-quality.jpg",
      "estado": "En emisión",
      "categoria": [
        "Acción",
        "Drama",
        "Ciencia Ficción"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5312b"
      },
      "id": 7,
      "titulo": "Dark",
      "año": 2017,
      "descripcion": "Un misterio de viajes en el tiempo se desarrolla en un pequeño pueblo alemán cuando dos niños desaparecen.",
      "imagen": "https://image.tmdb.org/t/p/original/4SbCVL3zx1HbSsT0aQWBHaN0RWa.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Ciencia Ficción",
        "Suspenso"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5312c"
      },
      "id": 8,
      "titulo": "Arcane",
      "año": 2021,
      "descripcion": "Basada en el universo de League of Legends, narra la historia de Jinx y Vi, dos hermanas atrapadas en conflictos políticos y tecnológicos.",
      "imagen": "https://preview.redd.it/s1-spoilers-arcane-s2-official-poster-v0-9n298hi3a94d1.jpeg?width=640&crop=smart&auto=webp&s=d0a5a096f1396fa69dc514c96b6f14d7fd8d67c2",
      "estado": "En emisión",
      "categoria": [
        "Animación",
        "Acción",
        "Fantasía"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5312d"
      },
      "id": 9,
      "titulo": "Mindhunter",
      "año": 2017,
      "descripcion": "Dos agentes del FBI desarrollan técnicas modernas de perfilación criminal entrevistando a asesinos en serie.",
      "imagen": "https://m.media-amazon.com/images/I/41h+U3-onXL._UF894,1000_QL80_.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Crimen",
        "Drama",
        "Suspenso"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5312e"
      },
      "id": 10,
      "titulo": "Better Call Saul",
      "año": 2015,
      "descripcion": "La historia del abogado Jimmy McGill y su transformación en el inescrupuloso Saul Goodman, antes de Breaking Bad.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqTIZ2QKIm9yPQ18-tJ-LrWqy8xw_Y8VaiQ&s",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Crimen"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5312f"
      },
      "id": 11,
      "titulo": "Peaky Blinders",
      "año": 2013,
      "descripcion": "Una familia de gánsteres en Birmingham lucha por expandir su imperio durante el período de entreguerras.",
      "imagen": "https://www.tallengestore.com/cdn/shop/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_7fef60c1-eddd-41e8-89fd-ac6edeba5038.jpg?v=1619864662",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Crimen",
        "Histórica"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53130"
      },
      "id": 12,
      "titulo": "Cyberpunk: Edgerunners",
      "año": 2022,
      "descripcion": "En un futuro distópico, un joven huérfano se convierte en un mercenario para sobrevivir en Night City.",
      "imagen": "https://i.pinimg.com/474x/0f/8e/83/0f8e832e2d83bde084c3011a859c4893.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Animación",
        "Acción",
        "Ciencia Ficción"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53131"
      },
      "id": 13,
      "titulo": "Narcos",
      "año": 2015,
      "descripcion": "La historia del auge y caída de Pablo Escobar y los cárteles de Medellín y Cali en Colombia.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAWA9bVjZpDPNXeI0dRUrgiIPmukHTOTXVg&s",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Crimen",
        "Histórica"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53132"
      },
      "id": 14,
      "titulo": "House of the Dragon",
      "año": 2022,
      "descripcion": "Precuela de Game of Thrones que narra la historia de la Casa Targaryen 200 años antes.",
      "imagen": "https://media.posterstore.com/site_images/68631bca603ad773cc39b74a_1981259834_WB0036-8.jpg?auto=compress%2Cformat&fit=max&w=3840",
      "estado": "En emisión",
      "categoria": [
        "Fantasía",
        "Drama",
        "Acción"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53133"
      },
      "id": 15,
      "titulo": "Westworld",
      "año": 2016,
      "descripcion": "En un parque temático futurista, los androides comienzan a tomar conciencia de su propia existencia.",
      "imagen": "https://m.media-amazon.com/images/M/MV5BMjM2MTA5NjIwNV5BMl5BanBnXkFtZTgwNjI2OTMxNTM@._V1_FMjpg_UX1000_.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Ciencia Ficción",
        "Drama",
        "Suspenso"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53134"
      },
      "id": 16,
      "titulo": "The Mandalorian",
      "año": 2019,
      "descripcion": "Un cazarrecompensas solitario navega por los confines de la galaxia acompañado de Grogu.",
      "imagen": "https://i.pinimg.com/736x/27/4f/9b/274f9b38e71e9571dbcf1c2d3d6314cf.jpg",
      "estado": "En emisión",
      "categoria": [
        "Ciencia Ficción",
        "Acción",
        "Aventura"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53135"
      },
      "id": 17,
      "titulo": "Loki",
      "año": 2021,
      "descripcion": "Tras robar el Teseracto, Loki se enfrenta a la TVA y descubre secretos del multiverso.",
      "imagen": "https://i.redd.it/ree0q964c50c1.jpg",
      "estado": "En emisión",
      "categoria": [
        "Ciencia Ficción",
        "Acción",
        "Fantasía"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53136"
      },
      "id": 18,
      "titulo": "The Last of Us",
      "año": 2023,
      "descripcion": "En un mundo post-apocalíptico devastado por un hongo, Joel y Ellie emprenden un viaje peligroso.",
      "imagen": "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/8Z8AAOSwT3pj5Ge1/$_57.JPG?set_id=880000500F",
      "estado": "En emisión",
      "categoria": [
        "Drama",
        "Ciencia Ficción",
        "Acción"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53137"
      },
      "id": 19,
      "titulo": "Prison Break",
      "año": 2005,
      "descripcion": "Michael Scofield elabora un plan para liberar a su hermano de la cárcel con un tatuaje codificado.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTj3FShcxDvcojEAKtrtJXlzJUtigBDB9LA&sg",
      "estado": "Finalizada",
      "categoria": [
        "Acción",
        "Suspenso",
        "Drama"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53138"
      },
      "id": 20,
      "titulo": "The Office",
      "año": 2005,
      "descripcion": "Una comedia que sigue la vida cotidiana de los empleados de la oficina de Dunder Mifflin.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqJSh3ZR0dfWA7vC2hPNHZul7cNfAwpH_Cw&s",
      "estado": "Finalizada",
      "categoria": [
        "Comedia"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af53139"
      },
      "id": 21,
      "titulo": "Friends",
      "año": 1994,
      "descripcion": "Seis amigos en Nueva York atraviesan juntos los altibajos de la vida, el amor y el trabajo.",
      "imagen": "https://image.tmdb.org/t/p/original/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Comedia",
        "Drama",
        "Romance"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5313a"
      },
      "id": 22,
      "titulo": "How I Met Your Mother",
      "año": 2005,
      "descripcion": "Ted Mosby le cuenta a sus hijos cómo conoció a su madre, a través de anécdotas con sus amigos.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXWlsFAK6296_G01WnkTSN1OUx1WHEXc9SQ&s",
      "estado": "Finalizada",
      "categoria": [
        "Comedia",
        "Romance"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5313b"
      },
      "id": 23,
      "titulo": "Sherlock",
      "año": 2010,
      "descripcion": "El detective Sherlock Holmes y el Dr. Watson resuelven crímenes en el Londres moderno.",
      "imagen": "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Crimen",
        "Drama",
        "Suspenso"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5313c"
      },
      "id": 24,
      "titulo": "Lost",
      "año": 2004,
      "descripcion": "Los supervivientes de un accidente aéreo luchan por vivir en una misteriosa isla llena de secretos.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmQkAKu7Ua3-1Uo9t9fIlKj4a__F_N_fx3A&s",
      "estado": "Finalizada",
      "categoria": [
        "Drama",
        "Ciencia Ficción",
        "Suspenso"
      ]
    },
    {
      "_id": {
        "$oid": "68d5c7338ab7ae7e8af5313d"
      },
      "id": 25,
      "titulo": "Vikings",
      "año": 2013,
      "descripcion": "La vida y conquistas de Ragnar Lothbrok y sus descendientes en la era vikinga.",
      "imagen": "https://m.media-amazon.com/images/I/71nFuDgh9fL.jpg",
      "estado": "Finalizada",
      "categoria": [
        "Acción",
        "Histórica",
        "Drama"
      ]
    }
];

// ***************************************************************
// FUNCIÓN 1: Renderizar las series en el HTML
// ***************************************************************
function imprimirSeries(series) {
    const container = document.getElementById('series-container'); 
    
    if (!container) return; 

    // Limpiar el contenedor antes de renderizar
    container.innerHTML = ''; 

    if (!series || series.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center; margin-top: 30px; width: 100vw;">No se encontraron series que coincidan con tu búsqueda o categoría.</p>';
        return;
    }

    series.forEach(serie => {
        const linkElement = document.createElement('a');
        linkElement.href = `./info.html?id=${serie.id}`; 

        const imageElement = document.createElement('img');
        imageElement.src = serie.imagen; 
        imageElement.alt = serie.titulo;  
        imageElement.title = `${serie.titulo} (${serie.año})`; 

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
    
    // Muestra todas las series si no se selecciona una categoría específica
    if (!categoria || categoria === "Todas") {
        imprimirSeries(todasLasSeries);
        return;
    }

    const seriesFiltradas = todasLasSeries.filter(serie => {
        return serie.categoria.some(cat => 
            cat.toLowerCase() === categoria.toLowerCase()
        );
    });

    imprimirSeries(seriesFiltradas);
}

// ***************************************************************
// FUNCIÓN 3: Lógica de Búsqueda de Texto (NUEVA)
// ***************************************************************
function buscarSeries(termino) {
    // Si el campo de búsqueda está vacío, muestra todas las series
    if (!termino || termino.trim() === '') {
        imprimirSeries(todasLasSeries);
        return;
    }
    
    const terminoLowerCase = termino.toLowerCase();

    // Filtra las series por título o descripción
    const resultados = todasLasSeries.filter(serie => {
        const tituloCoincide = serie.titulo.toLowerCase().includes(terminoLowerCase);
        const descripcionCoincide = serie.descripcion.toLowerCase().includes(terminoLowerCase);

        return tituloCoincide || descripcionCoincide;
    });

    imprimirSeries(resultados);
}


// ***************************************************************
// Ejecución y Funcionalidad del DOM
// ***************************************************************

document.addEventListener('DOMContentLoaded', () => {
    
    // Muestra todas las series al cargar la página
    imprimirSeries(todasLasSeries); 
    
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
        buscarSeries(e.target.value);
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