// --- src/scripts/register.js ---

const API_URL = "https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com/api/v1";

document.addEventListener('DOMContentLoaded', () => {
    // ID del formulario de registro
    const registerForm = document.getElementById('formulariologin'); 
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

async function handleRegister(event) {
    event.preventDefault(); 

    // Obtener valores
    const name = document.getElementById('nombre').value; 
    const email = document.getElementById('correo').value; 
    const password = document.getElementById('contraseña').value; 

    if (!name || !email || !password) {
        console.log('Error: Por favor, completa todos los campos.');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Éxito: Muestra mensaje en consola y REDIRIGE al login
            console.log('Usuario registrado exitosamente.');
            window.location.href = 'index.html'; 
        } else {
            // Error de la API 
            const errorMessage = data.message || data.msg || 'Error desconocido al registrar usuario.';
            console.error('Fallo en el Registro:', errorMessage);
        }
    } catch (error) {
        console.error('Error de conexión con la API:', error);
    }
}