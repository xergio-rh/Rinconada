// Archivo: ./scripts/info.js

// -------------------------------------------------------------
// URL BASE DE LA API
// -------------------------------------------------------------


// NUEVA URL BASE SIN /api/v1
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
    // 1. Obtener el ID y el TIPO (movie o series) de la URL
    const params = new URLSearchParams(window.location.search);
    const mediaId = params.get('id'); 
    const mediaType = params.get('type'); // Clave para la API

    const mainContainer = document.querySelector('.mainDiv');
    
    if (!mediaId || !mediaType) {
        mainContainer.innerHTML = '<h1 style="color: white; text-align: center;">Error: ID o Tipo de contenido no especificado en la URL.</h1>';
        return;
    }
    
    // 2. Determinar el endpoint correcto
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
        // 3. Llamada a la API para obtener el detalle específico
        const respuesta = await fetch(`${BASE_URL}/api/v1/${endpoint}/${mediaId}`);
        
        if (!respuesta.ok) {
            // Manejar 404 (No encontrado) u otro error HTTP
            if (respuesta.status === 404) {
                 mainContainer.innerHTML = '<h1 style="color: white; text-align: center;">Error: Contenido no encontrado.</h1>';
            }
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const media = await respuesta.json();

        // 4. Obtener los elementos del DOM
        const imgElement = document.querySelector('.pelicula_img');
        const titleElement = document.querySelector('.title');
        const anoElement = document.querySelector('.ano');
        const categoriaElement = document.querySelector('.categoria');
        const descripcionElement = document.querySelector('.descripcion');
        
        // 5. Formatear la categoría (puede ser un string o un array)
        let categoriaTexto;
        if (Array.isArray(media.categoria)) {
            categoriaTexto = media.categoria.join(', ');
        } else {
            categoriaTexto = media.categoria;
        }

        // 6. Inyectar los datos en el HTML
        imgElement.src = media.imagen || 'placeholder.jpg'; // Usa una imagen por defecto si no viene una
        imgElement.alt = media.titulo || 'Contenido';
        
        titleElement.textContent = media.titulo || 'Título no disponible';
        
        // Verifica si la API devuelve 'año' (u 'anio') y 'estado'
        const estadoTexto = media.estado ? ` | Estado: ${media.estado}` : '';
        anoElement.textContent = `Año: ${media.año || media.anio || 'N/A'}${estadoTexto}`;
        
        categoriaElement.textContent = `Categoría: ${categoriaTexto || 'N/A'}`;
        
        descripcionElement.innerHTML = `<span class="titulo">Descripción:</span> ${media.descripcion || 'Descripción no disponible'}`;

    } catch (error) {
        console.error('Error al obtener la información de la API:', error);
        mainContainer.innerHTML = `<h1 style="color: red; text-align: center;">Error: No se pudo conectar a la API o el recurso no existe.</h1>`;
    }
}

// Ejecutar la función cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', obtenerYMostrarInfo);