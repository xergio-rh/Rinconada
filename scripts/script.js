// Archivo: ./scripts/script.js

// NUEVA URL BASE SIN /api/v1
const BASE_URL = 'https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com';

// Variable global para almacenar las películas cargadas desde la API una sola vez.
let todasLasPeliculas = []; 

// ***************************************************************
// FUNCIÓN NUEVA: Cargar la data desde la API y mostrarla
// ***************************************************************
async function cargarYMostrarPeliculas() {
    const container = document.getElementById('peliculas-container');
    if (!container) return; // Salir si el contenedor no existe

    try {
        // Llama al endpoint de listar películas
        const respuesta = await fetch(`${BASE_URL}/api/v1/movies/`);
        
        // Verifica si la respuesta es OK (código 200)
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        // Convierte la respuesta a JSON
        const peliculas = await respuesta.json();
        
        // Almacena las películas en la variable global para filtrado/búsqueda
        todasLasPeliculas = peliculas; 
        
        // Renderiza la data
        imprimirPeliculas(todasLasPeliculas); 

    } catch (error) {
        console.error('Error al cargar las películas desde la API:', error);
        // Muestra el mensaje de error en el contenedor
        container.innerHTML = '<p style="color: red; text-align: center; margin-top: 30px; width: 100vw;">Error: No se pudieron cargar las películas. Verifica la conexión y el endpoint.</p>';
    }
}


// ***************************************************************
// FUNCIÓN 1: Renderizar las películas en el HTML
// ***************************************************************
function imprimirPeliculas(peliculas) {
    const container = document.getElementById('peliculas-container'); 
    
    if (!container) return; 

    container.innerHTML = ''; // Limpiar el contenedor

    if (!peliculas || peliculas.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center; margin-top: 30px; width: 100vw;">No se encontraron películas que coincidan con tu búsqueda o filtro.</p>';
        return;
    }

    peliculas.forEach(pelicula => {
        const linkElement = document.createElement('a');
        
        // 🔑 CORRECCIÓN CLAVE: Agregamos el parámetro 'type=movie' para info.js
        linkElement.href = `./info.html?id=${pelicula.id}&type=movie`; 

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
    const searchInputWrapper = document.getElementById('search-input-wrapper');
    if (searchInputWrapper) {
        const searchInput = searchInputWrapper.querySelector('.search-input');
        if (searchInput) searchInput.value = '';
    }

    // 🔑 CORRECCIÓN: Usa la data global cargada (todasLasPeliculas)
    if (!categoria || categoria === "Todas") {
        imprimirPeliculas(todasLasPeliculas);
        return;
    }

    // CORRECCIÓN: Filtrado para categorías (asume que la categoría puede ser un array o string simple)
    const peliculasFiltradas = todasLasPeliculas.filter(pelicula => {
        if (Array.isArray(pelicula.categoria)) {
            return pelicula.categoria.some(cat => cat.toLowerCase() === categoria.toLowerCase());
        }
        // Asume que si no es array, es un string simple para compatibilidad
        return pelicula.categoria && pelicula.categoria.toLowerCase() === categoria.toLowerCase();
    });

    imprimirPeliculas(peliculasFiltradas);
}

// ***************************************************************
// FUNCIÓN 3: Lógica de Búsqueda de Texto
// ***************************************************************
function buscarPeliculas(termino) {
    // 🔑 CORRECCIÓN: Usa la data global cargada (todasLasPeliculas)
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
    
    // 🔑 CORRECCIÓN: Inicializa la carga de la API al cargar el DOM.
    cargarYMostrarPeliculas(); 
    
    // Selectores del DOM
    const searchLink = document.getElementById('search-link');
    const searchInputWrapper = document.getElementById('search-input-wrapper');
    const searchInput = searchInputWrapper ? searchInputWrapper.querySelector('.search-input') : null;
    const categoriasLink = document.getElementById('categorias-link');
    const categoriasMenu = document.getElementById('categorias-menu');
    const profileLink = document.getElementById('profile-link');
    const profileMenu = document.getElementById('profile-menu');
    const searchBarContainer = document.querySelector('.search-bar-container');


    // -------------------------------------------------------------
    // Lógica de Búsqueda (Implementación)
    // -------------------------------------------------------------
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            // Llama a la función de búsqueda cada vez que se teclea algo
            buscarPeliculas(e.target.value);
        });
    }
    
    // -------------------------------------------------------------
    // Lógica de Filtrado de Categorías
    // -------------------------------------------------------------
    if (categoriasMenu) {
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
    }

    // -------------------------------------------------------------
    // Lógica de Menús y Búsqueda (Toggle visual)
    // -------------------------------------------------------------
    
    // Toggle de la barra de búsqueda
    if (searchLink && searchInputWrapper && searchBarContainer && searchInput) {
        searchLink.addEventListener('click', (e) => {
            e.preventDefault();
            const isActive = searchInputWrapper.classList.toggle('active');
            searchBarContainer.classList.toggle('active', isActive);
            
            if (isActive) {
                searchInput.focus(); // Enfoca el input al abrir
            }
        });
    }

    // Toggle de categorías
    if (categoriasLink && categoriasMenu && profileMenu) {
        categoriasLink.addEventListener('click', (e) => {
            e.preventDefault();
            profileMenu.classList.remove('dropdown-show-profile'); 
            categoriasMenu.classList.toggle('dropdown-show');
        });
    }

    // Toggle de perfil
    if (profileLink && profileMenu && categoriasMenu) {
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            categoriasMenu.classList.remove('dropdown-show');
            profileMenu.classList.toggle('dropdown-show-profile');
        });
    }

    // Ocultar al hacer clic fuera
    document.addEventListener('click', (e) => {
        // Cerrar menús de categorías y perfil
        if (categoriasLink && categoriasMenu && !categoriasLink.contains(e.target) && !categoriasMenu.contains(e.target)) {
            categoriasMenu.classList.remove('dropdown-show');
        }
        if (profileLink && profileMenu && !profileLink.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('dropdown-show-profile');
        }

        // Cerrar la barra de búsqueda si se hace clic fuera
        const searchContainer = document.querySelector('.search-bar-container');
        if (searchContainer && searchLink && searchInputWrapper && !searchContainer.contains(e.target) && !searchLink.contains(e.target)) {
            if (searchInputWrapper.classList.contains('active')) {
                searchInputWrapper.classList.remove('active');
                searchContainer.classList.remove('active');
            }
        }
    });
});