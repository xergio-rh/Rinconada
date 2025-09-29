// Archivo: ./scripts/series.js

// NUEVA URL BASE SIN /api/v1
const BASE_URL = 'https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com';

// Variable global para almacenar las series cargadas desde la API una sola vez.
let todasLasSeries = []; 

// ***************************************************************
// FUNCIÓN NUEVA: Cargar la data desde la API y mostrarla
// ***************************************************************
async function cargarYMostrarSeries() {
    const container = document.getElementById('series-container');
    if (!container) return; // Salir si el contenedor no existe

    try {
        // Llama al endpoint de listar series
        const respuesta = await fetch(`${BASE_URL}/api/v1/series/`);
        
        // Verifica si la respuesta es OK (código 200)
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        // Convierte la respuesta a JSON
        const series = await respuesta.json();
        
        // Almacena las series en la variable global para filtrado/búsqueda
        todasLasSeries = series; 
        
        // Renderiza la data
        imprimirSeries(todasLasSeries); 

    } catch (error) {
        console.error('Error al cargar las series desde la API:', error);
        // Muestra el mensaje de error en el contenedor
        container.innerHTML = '<p style="color: red; text-align: center; margin-top: 30px; width: 100vw;">Error: No se pudieron cargar las series. Verifica la conexión y el endpoint.</p>';
    }
}


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
        
        // 🔑 CORRECCIÓN CLAVE: Agregamos el parámetro 'type=series' para info.js
        linkElement.href = `./info.html?id=${serie._id}&type=series`; 

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
    const searchInputWrapper = document.getElementById('search-input-wrapper');
    if (searchInputWrapper) {
        const searchInput = searchInputWrapper.querySelector('.search-input');
        if (searchInput) searchInput.value = '';
    }
    
    // 🔑 CORRECCIÓN: Usa la data global cargada (todasLasSeries)
    if (!categoria || categoria === "Todas") {
        imprimirSeries(todasLasSeries);
        return;
    }

    const seriesFiltradas = todasLasSeries.filter(serie => {
        // CORRECCIÓN: Manejo de la categoría (asume que puede ser array o string)
        if (Array.isArray(serie.categoria)) {
            return serie.categoria.some(cat => cat.toLowerCase() === categoria.toLowerCase());
        }
        return serie.categoria && serie.categoria.toLowerCase() === categoria.toLowerCase();
    });

    imprimirSeries(seriesFiltradas);
}

// ***************************************************************
// FUNCIÓN 3: Lógica de Búsqueda de Texto
// ***************************************************************
function buscarSeries(termino) {
    // 🔑 CORRECCIÓN: Usa la data global cargada (todasLasSeries)
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
    
    // 🔑 CLAVE: Inicializa la carga de la API al cargar el DOM.
    cargarYMostrarSeries(); 
    
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
            buscarSeries(e.target.value);
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