// Archivo: ./scripts/series.js (VERSIÓN FINAL Y CORREGIDA)

// NUEVA URL BASE SIN /api/v1
const BASE_URL = 'https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com';

// Variable global para almacenar las series cargadas desde la API una sola vez.
let todasLasSeries = []; 

// ***************************************************************
// FUNCIÓN AUXILIAR: Quitar tildes para evitar errores de coincidencia
// ***************************************************************
function quitarTildes(texto) {
    // Normaliza la cadena y remueve los diacríticos (tildes)
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// ***************************************************************
// FUNCIÓN NUEVA: Cargar la data desde la API y mostrarla
// ***************************************************************
async function cargarYMostrarSeries() {
    const container = document.getElementById('series-container');
    if (!container) return; 

    try {
        const respuesta = await fetch(`${BASE_URL}/api/v1/series/`);
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const series = await respuesta.json();
        
        // 🛑 LÍNEA DE DIAGNÓSTICO CLAVE:
        // Imprime las categorías del primer objeto de la API
        if (series.length > 0 && series[0].categoria) {
            console.warn("DIAGNÓSTICO API: Las categorías del primer elemento son:", series[0].categoria);
        }
        // 🛑 FIN DE DIAGNÓSTICO
        
        todasLasSeries = series; 
        
        imprimirSeries(todasLasSeries); 

    } catch (error) {
        console.error('Error al cargar las series desde la API:', error);
        container.innerHTML = '<p style="color: red; text-align: center; margin-top: 30px; width: 100vw;">Error: No se pudieron cargar las series. Verifica la conexión y el endpoint.</p>';
    }
}


// ***************************************************************
// FUNCIÓN 1: Renderizar las series en el HTML
// ***************************************************************
function imprimirSeries(series) {
    const container = document.getElementById('series-container'); 
    
    if (!container) return; 

    container.innerHTML = ''; 

    if (!series || series.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center; margin-top: 30px; width: 100vw;">No se encontraron series que coincidan con tu búsqueda o categoría.</p>';
        return;
    }

    series.forEach(serie => {
        const linkElement = document.createElement('a');
        
        // 🔑 Enlace a detalle
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
// FUNCIÓN 2: Lógica de Filtrado por Categoría (CORREGIDA)
// ***************************************************************
function filtrarPorCategoria(categoria) {
    // Desactivar la búsqueda al usar el filtro
    const searchInputWrapper = document.getElementById('search-input-wrapper');
    if (searchInputWrapper) {
        const searchInput = searchInputWrapper.querySelector('.search-input');
        if (searchInput) searchInput.value = '';
    }
    
    if (!categoria || categoria === "Todas") {
        imprimirSeries(todasLasSeries);
        return;
    }

    // 🔑 CLAVE: Normalizamos el nombre de la categoría (usuario)
    const categoriaLimpia = quitarTildes(categoria).toLowerCase();

    // Nota: Los logs de prueba se han quitado para el código final.
    // console.log("BUSCANDO CATEGORÍA:", categoriaLimpia); 

    const seriesFiltradas = todasLasSeries.filter(serie => {
        if (!serie.categoria) return false; 
        
        // Caso 1: La categoría es un ARRAY (lo más común en series)
        if (Array.isArray(serie.categoria)) {
            return serie.categoria.some(cat => {
                const catAPI_Limpia = quitarTildes(cat).toLowerCase();
                return catAPI_Limpia === categoriaLimpia;
            });
        } 
        
        // Caso 2: La categoría es un STRING simple (Manejo de data inconsistente)
        const catAPI_Limpia = quitarTildes(serie.categoria).toLowerCase();
        return catAPI_Limpia === categoriaLimpia;
    });

    imprimirSeries(seriesFiltradas);
}


// ***************************************************************
// FUNCIÓN 3: Lógica de Búsqueda de Texto
// ***************************************************************
function buscarSeries(termino) {
    if (!termino || termino.trim() === '') {
        imprimirSeries(todasLasSeries);
        return;
    }
    
    const terminoLowerCase = termino.toLowerCase();

    const resultados = todasLasSeries.filter(serie => {
        // Asumiendo que 'titulo' y 'descripcion' son strings
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
                const categoriaSeleccionada = e.currentTarget.getAttribute('data-category');
                
                filtrarPorCategoria(categoriaSeleccionada);

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
                searchInput.focus(); 
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