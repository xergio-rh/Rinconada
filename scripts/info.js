// Archivo: ./scripts/info.js (Versión Final y Corregida con POST)

// -------------------------------------------------------------
// URL BASE DE LA API
// Confirmado: Requiere /v1 para la carga de data y voto.
// -------------------------------------------------------------
const BASE_URL = 'https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com/api/v1';


// -------------------------------------------------------------
// FUNCIÓN PARA VOLVER A LA PÁGINA ANTERIOR
// -------------------------------------------------------------
function volverPaginaAnterior() {
    history.back();
}


// -------------------------------------------------------------
// FUNCIÓN PARA ACTUALIZAR EL VOTO (LIKES/DISLIKES) 💥 CON MÉTODO POST
// -------------------------------------------------------------
async function actualizarRanking(mediaId, mediaType, action) {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        alert('Debes iniciar sesión para votar.');
        return; 
    }
    
    const endpoint = mediaType === 'movie' ? 'movies' : 'series';
    
    // URL FINAL: https://.../api/v1/movies/:id/like (Confirmado que requiere /v1)
    const urlVoto = `${BASE_URL}/${endpoint}/${mediaId}/${action}`; 
    
    const likeButton = document.getElementById('like-btn');
    const dislikeButton = document.getElementById('dislike-btn');
    
    if (!likeButton || !dislikeButton) {
        console.error("No se encontraron los botones de Like/Dislike en el DOM.");
        return; 
    }

    likeButton.style.pointerEvents = 'none';
    dislikeButton.style.pointerEvents = 'none';
    
    if (action === 'like') likeButton.style.opacity = '0.7';
    if (action === 'dislike') dislikeButton.style.opacity = '0.7';

    try {
        console.log(`Enviando voto a la URL: ${urlVoto}. Método: POST`);
        
        const respuesta = await fetch(urlVoto, {
            // 🚨 CORRECCIÓN CRÍTICA: Debe ser POST.
            method: 'POST', 
            // 🚨 Solo enviamos la autorización, ya que el backend no usa body ni Content-Type
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });

        if (!respuesta.ok) {
            let errorMessage = `Error ${respuesta.status}. No se pudo registrar el voto.`;
            try {
                const errorData = await respuesta.json();
                errorMessage = errorData.error || errorData.message || errorData.msg || errorMessage; 
            } catch (e) { /* No hay JSON de error */ }
            throw new Error(errorMessage);
        }
        
        console.log(`Voto registrado para ${mediaType} ${mediaId}. Acción: ${action}`);
        alert(`¡Gracias por tu voto! Se registró tu ${action}.`);
        
    } catch (error) {
        console.error('Error al registrar el voto:', error);
        alert('Ocurrió un error al registrar tu voto: ' + error.message);

    } finally {
        // Restaurar estado de los botones
        if (likeButton) likeButton.style.pointerEvents = 'auto';
        if (dislikeButton) dislikeButton.style.pointerEvents = 'auto';
        if (action === 'like' && likeButton) likeButton.style.opacity = '1.0';
        if (action === 'dislike' && dislikeButton) dislikeButton.style.opacity = '1.0';
    }
}


// -------------------------------------------------------------
// FUNCIÓN PRINCIPAL: Obtener y mostrar la información desde la API
// -------------------------------------------------------------
async function obtenerYMostrarInfo() {
    const params = new URLSearchParams(window.location.search);
    const mediaId = params.get('id'); 
    const mediaType = params.get('type');
    
    const mainContainer = document.querySelector('.mainDiv');
    
    if (!mediaId || !mediaType) {
        mainContainer.innerHTML = '<h1 style="color: white; text-align: center;">Error: ID o Tipo de contenido no especificado.</h1>';
        return;
    }
    
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
        // Carga de Info: GET /api/v1/movies/:id (Confirmado que usa /v1 y GET)
        const urlFinal = `${BASE_URL}/${endpoint}/${mediaId}`;
        console.log("Intentando cargar info de:", urlFinal);
        
        const respuesta = await fetch(urlFinal);
        
        if (!respuesta.ok) {
            if (respuesta.status === 404) {
                mainContainer.innerHTML = '<h1 style="color: red; text-align: center;">Error: Contenido no encontrado (404).</h1>';
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
        
        
        // 4. LÓGICA DE EVENTOS DE LIKES/DISLIKES
        const likeButton = document.getElementById('like-btn');
        const dislikeButton = document.getElementById('dislike-btn');
        
        if (likeButton && dislikeButton) {
            
            // Los listeners llaman a la función actualizarRanking
            likeButton.addEventListener('click', () => {
                actualizarRanking(mediaId, mediaType, 'like'); 
            });
            
            dislikeButton.addEventListener('click', () => {
                actualizarRanking(mediaId, mediaType, 'dislike'); 
            });
        }

    } catch (error) {
        console.error('Error al obtener la información de la API:', error);
        mainContainer.innerHTML = `<h1 style="color: red; text-align: center;">Error: No se pudo conectar a la API o el recurso no existe.</h1>`;
    }
}

// Ejecutar la función cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', obtenerYMostrarInfo);