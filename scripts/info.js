// Archivo: ./scripts/info.js (Versión con Ranking)

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
// FUNCIÓN PARA ACTUALIZAR EL RANKING (LIKES/DISLIKES) 💥 NUEVO
// -------------------------------------------------------------
async function actualizarRanking(mediaId, mediaType, action) {
    const endpoint = mediaType === 'movie' ? 'movies' : 'series';
    // 💡 ASUMIMOS ESTE ENDPOINT para enviar la acción
    const urlRanking = `${BASE_URL}/api/v1/${endpoint}/ranking/${mediaId}`;
    
    // Deshabilitar botones para evitar clics múltiples
    const likeButton = document.getElementById('like-btn');
    const dislikeButton = document.getElementById('dislike-btn');
    if (likeButton) likeButton.style.pointerEvents = 'none';
    if (dislikeButton) dislikeButton.style.pointerEvents = 'none';
    
    // Opcional: Feedback visual de que se está enviando
    if (action === 'like') likeButton.style.opacity = '0.7';
    if (action === 'dislike') dislikeButton.style.opacity = '0.7';

    try {
        const respuesta = await fetch(urlRanking, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            // Enviamos la acción 'like' o 'dislike' en el cuerpo
            body: JSON.stringify({ action: action }) 
        });

        if (!respuesta.ok) {
            throw new Error(`Error al actualizar ranking: ${respuesta.status}`);
        }
        
        console.log(`Voto registrado para ${mediaType} ${mediaId}. Acción: ${action}`);
        alert(`¡Gracias por tu voto! Se registró tu ${action}.`);
        
    } catch (error) {
        console.error('Error al actualizar el ranking:', error);
        alert('Ocurrió un error al registrar tu voto. Inténtalo más tarde.');

    } finally {
        // Al finalizar, puedes decidir si quieres que el botón del voto
        // quede resaltado o si se deshabilita permanentemente (simulando un voto único).
        // Si quieres que el botón de like se vea más claro después de votar:
        if (action === 'like' && likeButton) likeButton.style.opacity = '1.0';
    }
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
        // 2. CONSTRUCCIÓN DE URL
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
        
        // 4. LÓGICA DE EVENTOS DE LIKES/DISLIKES 💥 NUEVO
        const likeButton = document.getElementById('like-btn');
        const dislikeButton = document.getElementById('dislike-btn');
        
        if (likeButton && dislikeButton) {
            
            likeButton.addEventListener('click', () => {
                actualizarRanking(mediaId, mediaType, 'like');
            });
            
            dislikeButton.addEventListener('click', () => {
                actualizarRanking(mediaId, mediaType, 'dislike');
            });
        }

    } catch (error) {
        console.error('Error al obtener la información de la API:', error);
        mainContainer.innerHTML = `<h1 style="color: red; text-align: center;">Volver Error: No se pudo conectar a la API o el recurso no existe.</h1>`;
    }
}

// Ejecutar la función cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', obtenerYMostrarInfo);