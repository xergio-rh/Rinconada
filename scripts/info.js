// Archivo: ./scripts/info.js (Versión Final y Corregida)

// URL BASE DE LA API
const BASE_URL = 'https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com/api/v1';


// -------------------------------------------------------------
// FUNCIÓN PARA VOLVER A LA PÁGINA ANTERIOR
// -------------------------------------------------------------
function volverPaginaAnterior() {
    history.back();
}


// -------------------------------------------------------------
// FUNCIÓN PARA ACTUALIZAR EL VOTO (LIKES/DISLIKES)
// -------------------------------------------------------------
async function actualizarRanking(mediaId, mediaType, action) {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        alert('Debes iniciar sesión para votar.');
        return; 
    }
    
    const endpoint = mediaType === 'movie' ? 'movies' : 'series';
    const urlVoto = `${BASE_URL}/${endpoint}/${mediaId}/${action}`; 
    
    // Desactivar botones temporalmente para evitar doble click
    const likeButton = document.getElementById('like-btn');
    const dislikeButton = document.getElementById('dislike-btn');
    
    if (likeButton) likeButton.style.pointerEvents = 'none';
    if (dislikeButton) dislikeButton.style.pointerEvents = 'none';

    try {
        const respuesta = await fetch(urlVoto, {
            method: 'POST', 
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });

        if (!respuesta.ok) {
            let errorMessage = 'No se pudo registrar el voto.';
            try {
                const errorData = await respuesta.json();
                errorMessage = errorData.error || errorData.message || errorMessage; 
            } catch (e) { /* Fallback */ }
            throw new Error(errorMessage);
        }
        
        // Recargar la información para mostrar el nuevo conteo de likes/dislikes
        obtenerYMostrarInfo(); 
        
    } catch (error) {
        console.error('Error al registrar el voto:', error);
        alert('Ocurrió un error al registrar tu voto: ' + error.message);

    } finally {
        // Restaurar estado de los botones
        if (likeButton) likeButton.style.pointerEvents = 'auto';
        if (dislikeButton) dislikeButton.style.pointerEvents = 'auto';
    }
}


// -------------------------------------------------------------
// FUNCIÓN PARA ENVIAR LA RESEÑA AL BACKEND (Corregida)
// -------------------------------------------------------------
async function enviarResena(mediaId, mediaType, mensaje) {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        alert('Debes iniciar sesión para publicar una reseña.');
        return;
    }

    const endpoint = mediaType === 'movie' ? 'movies' : 'series';
    const url = `${BASE_URL}/${endpoint}/${mediaId}/comentarios`; 
    
    // Solo enviamos el mensaje. El ID de usuario lo obtiene el backend del token.
    const body = JSON.stringify({ mensaje });

    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: body
        });

        const data = await respuesta.json();

        if (!respuesta.ok) {
            alert(`Error al enviar reseña: ${data.error || data.message || 'Error desconocido'}`);
            return;
        }

        alert("¡Reseña enviada con éxito!");
        
        // Limpiar el campo de entrada y recargar la página para mostrar la reseña
        document.querySelector('.review-input').value = '';
        obtenerYMostrarInfo(); 
        
    } catch (error) {
        console.error('Error de red al enviar reseña:', error);
        alert('Error de conexión al enviar la reseña.');
    }
}



// -------------------------------------------------------------
// FUNCIÓN PRINCIPAL: Obtener y mostrar la información, inicializa eventos.
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
    
    let endpoint = (mediaType === 'movie') ? 'movies' : (mediaType === 'series') ? 'series' : null;

    if (!endpoint) {
        mainContainer.innerHTML = '<h1 style="color: white; text-align: center;">Error: Tipo de contenido inválido.</h1>';
        return;
    }
    
    try {
        const urlFinal = `${BASE_URL}/${endpoint}/${mediaId}`;
        const respuesta = await fetch(urlFinal);
        
        if (!respuesta.ok) {
            if (respuesta.status === 404) {
                mainContainer.innerHTML = '<h1 style="color: red; text-align: center;">Error: Contenido no encontrado (404).</h1>';
            }
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const media = await respuesta.json();
        
        // --- INYECCIÓN DE DATA ---
        
        const imgElement = document.querySelector('.pelicula_img');
        const titleElement = document.querySelector('.title');
        const anoElement = document.querySelector('.ano');
        const categoriaElement = document.querySelector('.categoria');
        const descripcionElement = document.querySelector('.descripcion');
        const calificacionElement = document.querySelector('.calificacion');
        
        let categoriaTexto = Array.isArray(media.categoria) ? media.categoria.join(', ') : media.categoria;
        let likesDisplay = media.likes !== undefined ? media.likes : 0;
        let dislikesDisplay = media.dislikes !== undefined ? media.dislikes : 0;
        
        imgElement.src = media.imagen || 'placeholder.jpg'; 
        imgElement.alt = media.titulo || 'Contenido';
        titleElement.textContent = media.titulo || 'Título no disponible';
        
        const estadoTexto = media.estado ? ` | Estado: ${media.estado}` : '';
        anoElement.textContent = `Año: ${media.año || media.anio || 'N/A'}${estadoTexto}`;
        categoriaElement.textContent = `Categoría: ${categoriaTexto || 'N/A'}`;
        descripcionElement.innerHTML = `<span class="titulo">Descripción:</span> ${media.descripcion || 'Descripción no disponible'}`;
        
        calificacionElement.textContent = `Calificación: 👍 ${likesDisplay} | 👎 ${dislikesDisplay}`;
        
        
        const reviewsList = document.getElementById('reviews-list');
        reviewsList.innerHTML = ''; 
        
        if (media.comentarios && media.comentarios.length > 0) {
            media.comentarios.forEach(comentario => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review-item';
                
                const usuarioDisplay = comentario.usuarioId || comentario.usuario || 'Anónimo';
                const fechaDisplay = new Date(comentario.fecha).toLocaleDateString();

                reviewDiv.innerHTML = `
                    <p><strong>Usuario:</strong> ${usuarioDisplay} | <small>${fechaDisplay}</small></p>
                    <p>${comentario.mensaje}</p>
                    <hr>
                `;
                reviewsList.appendChild(reviewDiv);
            });
        } else {
             reviewsList.innerHTML = '<p style="color: gray;">Sé el primero en dejar una reseña.</p>';
        }
        
        
        const likeButton = document.getElementById('like-btn');
        const dislikeButton = document.getElementById('dislike-btn');
        
        if (likeButton) likeButton.onclick = () => actualizarRanking(mediaId, mediaType, 'like');
        if (dislikeButton) dislikeButton.onclick = () => actualizarRanking(mediaId, mediaType, 'dislike');


        const submitButton = document.querySelector('.btn-submit');
        const reviewInput = document.querySelector('.review-input');
        
        if (submitButton && reviewInput) {
            submitButton.onclick = (event) => {
                event.preventDefault(); 
                
                const mensaje = reviewInput.value.trim();

                if (mensaje.length === 0) {
                    alert('Por favor, escribe tu reseña antes de enviar.');
                    return;
                }
                
                enviarResena(mediaId, mediaType, mensaje); 
            };
        }

    } catch (error) {
        console.error('Error al obtener la información de la API:', error);
        mainContainer.innerHTML = `<h1 style="color: red; text-align: center;">Error: No se pudo conectar a la API o el recurso no existe.</h1>`;
    }
}


// Ejecutar la función cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', obtenerYMostrarInfo);