const API_URL = 'https://riconada-s1-bastosthomas-ruedasergio.onrender.com/';

export async function obtenerDatos (){
    try {
        const  response = await fetch(API_URL);
        
        if(!response.ok){
            throw new Error('Error en la solicitud')
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los datos de la api',error);
        return null;
    
    }
}