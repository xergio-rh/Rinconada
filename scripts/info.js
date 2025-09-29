// Archivo: ./scripts/info.js (Versión Definitiva)

// -------------------------------------------------------------
// URL BASE DE LA API
// -------------------------------------------------------------
const BASE_URL = 'https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com';


// -------------------------------------------------------------
// FUNCIÓN PARA VOLVER A LA PÁGINA ANTERIOR
// -------------------------------------------------------------
function volverPaginaAnterior() {
    history.back();
}


// -------------------------------------------------------------
// FUNCIÓN PRINCIPAL: Obtener y mostrar la información desde la API
// -------------------------------------------------------------
async function obtenerYMostrarInfo() {
    const params = new URLSearchParams(window.location.search);
    // mediaId es el ObjectId (String), mediaType es 'movie' o 'series'
    const mediaId = params.get('id'); 
    const mediaType = params.get('type');
    
    const mainContainer = document.querySelector('.mainDiv');
    
    if (!mediaId || !mediaType) {
        mainContainer.innerHTML = '<h1 style="color: white; text-align: center;">Error: ID o Tipo de contenido no especificado.</h1>';
        return;
    }
    
    // 1. Determinar el endpoint
    let endpoint;
    
    if (mediaType === 'movie') {
        endpoint = 'movies';
    } else if (mediaType === 'series') {
        endpoint = 'series';
    } else {
        mainContainer.innerHTML = '<h1 style="color: white; text-align: center;">Error: Tipo de contenido inválido.</h1>';
        return;
    }
    
    try {
        // 2. CONSTRUCCIÓN DE URL: Asegurando que no haya caracteres extra
        const urlFinal = `${BASE_URL}/api/v1/${endpoint}/${mediaId}`;
        
        console.log("Intentando llamar a:", urlFinal);
        
        const respuesta = await fetch(urlFinal);
        
        if (!respuesta.ok) {
            if (respuesta.status === 404) {
                mainContainer.innerHTML = '<h1 style="color: red; text-align: center;">Error: Contenido no encontrado (404). El recurso no existe en la API.</h1>';
            }
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const media = await respuesta.json();
        
        // 3. INYECCIÓN DE DATA (Elementos del DOM)
        const imgElement = document.querySelector('.pelicula_img');
        const titleElement = document.querySelector('.title');
        const anoElement = document.querySelector('.ano');
        const categoriaElement = document.querySelector('.categoria');
        const descripcionElement = document.querySelector('.descripcion');
        
        // Corrección de TypeError (let en lugar de const)
        let categoriaTexto; 
        
        if (Array.isArray(media.categoria)) {
            categoriaTexto = media.categoria.join(', ');
        } else {
            categoriaTexto = media.categoria;
        }

        imgElement.src = media.imagen || 'placeholder.jpg'; 
        imgElement.alt = media.titulo || 'Contenido';
        titleElement.textContent = media.titulo || 'Título no disponible';
        
        const estadoTexto = media.estado ? ` | Estado: ${media.estado}` : '';
        anoElement.textContent = `Año: ${media.año || media.anio || 'N/A'}${estadoTexto}`;
        
        categoriaElement.textContent = `Categoría: ${categoriaTexto || 'N/A'}`;
        descripcionElement.innerHTML = `<span class="titulo">Descripción:</span> ${media.descripcion || 'Descripción no disponible'}`;

    } catch (error) {
        console.error('Error al obtener la información de la API:', error);
        mainContainer.innerHTML = `<h1 style="color: red; text-align: center;">Volver Error: No se pudo conectar a la API o el recurso no existe.</h1>`;
    }
}

// Ejecutar la función cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', obtenerYMostrarInfo);